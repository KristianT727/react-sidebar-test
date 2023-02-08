import Homepage from "./Pages/Homepage";
import Articles from "./Pages/Articles";
import Clients from "./Pages/Clients";
import Gallery from "./Pages/Gallery";
import Events from "./Pages/Events";

export const routes = [
    {
        title: "Home",
        link: "/",
        component: <Homepage />,
    },
    {
        title: "Home",
        link: "/home",
        component: <Homepage />,
    },
    {
        title: "Articles",
        link: "/articles",
        component: <Articles />,
    },
    {
        title: "Events",
        link: "/events",
        component: <Events />,
    },
    {
        title: "Gallery",
        link: "/gallery",
        component: <Gallery />,
    },
    {
        title: "Our Clients",
        link: "/clients",
        component: <Clients />,
    },
    // {
    //     title: "Login",
    //     link: "/login",
    // },
    {
        title: "Not Found",
        link: "*",
        component: <Homepage />,
    },
];

// export default routes;
