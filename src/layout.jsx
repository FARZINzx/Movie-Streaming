//react-router
import {Routes, Route } from "react-router";
//component
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Favorites from "./components/Favorites";

const Layout = () => {
    return (
        <div>
            <Sidebar /> {/* This component will show on all pages */}
            <div className="p-8">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/favourites" element={<Favourites />} />
                </Routes>
            </div>
        </div>
    );
};

export default Layout;