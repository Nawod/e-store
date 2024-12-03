import AppRoutes from "./lib/routes/AppRoutes";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "./lib/store/store";
import { useEffect } from "react";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import { NavList } from "./lib/constants/navigations";

function App() {
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.authStates);
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        if (!user.isAuthenticated) {
            navigate(NavList.LOGIN.id);
        }
    }, [user, navigate]);

    return (
        <>
            {currentPath !== NavList.LOGIN.id && <NavBar />}
            <AppRoutes />
            {currentPath !== NavList.LOGIN.id && <Footer />}
        </>
    );
}

export default App;
