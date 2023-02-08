import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar2";
import { Route, Routes } from "react-router-dom";

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
            <div id="row2">
                <div className="sidebar-wrapper">
                    <Sidebar />
                </div>
                <div className="content">
                    <Routes>{getRoutes(routes)}</Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
