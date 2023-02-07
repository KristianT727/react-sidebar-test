import "./App.css";
import Sidebar from "./Components/Sidebar2";
import { Route, Routes } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Articles from "./Pages/Articles";
import Clients from "./Pages/Clients";
import Gallery from "./Pages/Gallery";
import Events from "./Pages/Events";

function App() {
    return (
        <div className="App">
            <div id="row2">
                <Sidebar />
                <div>
                    <Routes>
                        <Route path="/home" element={<Homepage />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/articles" element={<Articles />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/clients" element={<Clients />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
