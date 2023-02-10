import "./App.css";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { CompanyHeader } from "./Components/Others";
import { Helmet } from "react-helmet-async";
import { Footer } from "./Components/Footer";

import { routes } from "./routes";

function App() {
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            return (
                <Route path={prop.link} element={prop.component} key={key} />
            );
        });
    };

    return (
        <div className="App">
            <Helmet>
                <title>Motor Club</title>
            </Helmet>
            <div id="row2">
                <div className="sidebar-wrapper">
                    <Sidebar />
                </div>
                <div className="content-wrapper">
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
