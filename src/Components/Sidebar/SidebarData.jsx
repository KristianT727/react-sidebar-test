import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import CollectionsIcon from "@mui/icons-material/Collections";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const SidebarData = [
    {
        title: "Beranda",
        icon: <HomeIcon />,
        link: "/home",
    },
    {
        title: "Artikel",
        icon: <ArticleIcon />,
        link: "/articles",
    },
    {
        title: "Event",
        icon: <EventIcon />,
        link: "/events",
    },
    {
        title: "Galeri",
        icon: <CollectionsIcon />,
        link: "/gallery",
    },
    {
        title: "Klien Kami",
        icon: <PersonIcon />,
        link: "/clients",
    },
    {
        title: "Login",
        icon: <AccountCircleIcon />,
        link: "/login",
    },
];
