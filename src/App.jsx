import "./App.css";
import Sidebar from "./Components/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import { CompanyHeader } from "./Components/Others";
import { Helmet } from "react-helmet-async";
import { Footer } from "./Components/Footer";

import { routes } from "./routes";
import { useEffect, useState } from "react";

function App() {
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            return (
                <Route path={prop.link} element={prop.component} key={key} />
            );
        });
    };

    const location = useLocation();
    const [bgImg, setBg] = useState("");

    useEffect(() => {
        if (location.pathname === "/home") {
            setBg("/GalleryImages/img1.png");
        } else {
            setBg("");
        }
    });

    return (
        <div className="App">
            <Helmet>
                <title>Motor Club</title>
            </Helmet>
            <div id="row2">
                <div className="sidebar-wrapper">
                    <Sidebar />
                </div>
                <div
                    className="content-wrapper"
                    style={{ backgroundImage: `url(${bgImg})` }}
                >
                    <div className="content">
                        <CompanyHeader />
                        <Routes>{getRoutes(routes)}</Routes>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
