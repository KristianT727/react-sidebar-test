import React from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import logo from "/company-logo.png";

function Sidebar() {
    const navigate = useNavigate();
    return (
        <div className="Sidebar">
            <div className="logo-container">
                <div className="logo-wrapper">
                    <Image
                        src={logo}
                        style={{
                            width: "80%",
                            objectFit: "contain",
                            position: "relative",
                            right: 2,
                            bottom: 5,
                            alt: "Logo",
                        }}
                    />
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
                                    navigate(
                                        import.meta.env.BASE_URL + val.link
                                    );
                                }}
                            >
                                <div id="icon">{val.icon}</div>
                                <div id="title">{val.title}</div>
                                <span className="toolTip">{val.title}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
