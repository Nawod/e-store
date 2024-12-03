/**
 * @class Login
 * @description Purpose of this page is to render a login form with validation
 * @author Nawod Madhuwantha
 */

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../lib/store/authSlice";
import { useNavigate } from "react-router-dom";
import { NavList } from "../lib/constants/navigations";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Validation schema
    const schema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    // React Hook Form setup
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: { email: string; password: string }) => {
        if (data.email === "admin@mail.com" && data.password === "admin@123") {
            dispatch(
                login({
                    name: "User",
                    email: data.email,
                })
            );
            setTimeout(() => {
                navigate(NavList.HOME.id);
            }, 1000);
        } else {
            setError("email", {
                type: "manual",
                message: "Incorrect email or password",
            });
            setError("password", {
                type: "manual",
                message: "Incorrect email or password",
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="container max-w-md m-auto pt-[20vh] space-y-6"
        >
            <h1 className="text-center font-bold text-blue-500 text-4xl pb-12">
                Welcome to E-Store!
            </h1>
            <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                size="small"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register("email")}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                size="small"
                error={!!errors.password}
                helperText={errors.password?.message}
                {...register("password")}
            />
            <Button
                type="submit"
                className="w-full"
                variant="contained"
            >
                Login
            </Button>
        </form>
    );
};

export default Login;
