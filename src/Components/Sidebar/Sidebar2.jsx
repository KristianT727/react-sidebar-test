import React from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();
    return (
        <div className="Sidebar">
            <div className="logo-container">
                <div className="logo-wrapper">
                    <img src={"company-logo.svg"} style={{ width: "80%" }} />
                </div>
            </div>
            <div className="SidebarList">
                <ul>
                    {SidebarData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className="item"
                                id={
                                    window.location.pathname == val.link
                                        ? "active"
                                        : ""
                                }
                                onClick={() => {
                                    navigate(val.link);
                                }}
                            >
                                <div id="icon">{val.icon}</div>
                                <div id="title">{val.title}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
