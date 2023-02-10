import "./App.css";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { CompanyHeader } from "./Components/Others";
import { Helmet } from "react-helmet-async";

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
                <title>AAA</title>
            </Helmet>
            <div id="row2">
                <div className="sidebar-wrapper">
                    <Sidebar />
                </div>
                <div className="content">
                    <CompanyHeader />
                    <Routes>{getRoutes(routes)}</Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
