import * as Pages from "./Pages";

export const routes = [
    {
        title: "Home",
        link: "/",
        component: <Pages.Homepage />,
    },
    {
        title: "Home",
        link: "/home",
        component: <Pages.Homepage />,
    },
    {
        title: "Articles",
        link: "/articles",
        component: <Pages.Articles />,
    },
    {
        title: "Events",
        link: "/events",
        component: <Pages.Events />,
    },
    {
        title: "Gallery",
        link: "/gallery",
        component: <Pages.Gallery />,
    },
    {
        title: "Our Clients",
        link: "/clients",
        component: <Pages.Clients />,
    },
    // {
    //     title: "Login",
    //     link: "/login",
    // },
    {
        title: "Not Found",
        link: "*",
        component: <Pages.Homepage />,
    },
];

// export default routes;
