/**
 * @class Home
 * @description purpose of this page is to render landing page of the application
 * @author Nawod Madhuwantha
 */

import { Button } from "@mui/material";
import COVER from "../assets/cover.png";
import { useNavigate } from "react-router-dom";
import { NavList } from "../lib/constants/navigations";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="bg-slate-100">
                <div className="container relative h-screen">
                    <div className="pt-[47vh] sm:pt-[10rem] text-center sm:text-left z-10 relative">
                        <h1 className="text-blue-500 uppercase text-[22vw]  sm:text-[8rem] font-bold drop-shadow-[5px_5px_2px_white] text-stroke-white">
                            E-store
                        </h1>
                        <h2 className="text-xl font-semibold mb-8 drop-shadow-[2px_2px_1px_white]">
                            Your trusted mobile shop
                        </h2>
                        <Button
                            variant="contained"
                            onClick={() => navigate(NavList.PRODUCTS.id)}
                        >
                            Shop now
                        </Button>
                    </div>
                    <img
                        src={COVER}
                        alt="e-store-cover-image"
                        className="absolute object-scale-down h-[70%] top-8 right-0 z-0"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
