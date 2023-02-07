import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import CollectionsIcon from "@mui/icons-material/Collections";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home",
    },
    {
        title: "Articles",
        icon: <ArticleIcon />,
        link: "/article",
    },
    {
        title: "Events",
        icon: <EventIcon />,
        link: "/events",
    },
    {
        title: "Gallery",
        icon: <CollectionsIcon />,
        link: "/gallery",
    },
    {
        title: "Our Clients",
        icon: <PersonIcon />,
        link: "/clients",
    },
    {
        title: "Login",
        icon: <AccountCircleIcon />,
        link: "/login",
    },
];
