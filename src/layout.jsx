import { useState, useEffect } from "react";
//react-router
import { Routes, Route } from "react-router-dom";
//component
import Sidebar from "./components/Sidebar";
import Home from "./components/home";
import Welcome from "./components/welcome";
import Favorites from "./components/favorites";

const Layout = () => {
    const [isWelcome, setIsWelcome] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsWelcome(false);
        }, 2000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []); // Run only once when the component mounts

    return (
        <div>
            {isWelcome ? (
                <Welcome />
            ) : (
                <div>
                    <Sidebar /> {/* This component will show on all pages */}
                    <div className="p-8">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/favourites" element={<Favorites />} />
                        </Routes>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Layout;
