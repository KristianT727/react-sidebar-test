import * as Pages from "./Pages";

export const routes = [
    {
        title: "Home",
        link: "/",
        component: <Pages.Homepage />,
        bgImg: "/GalleryImages/img1.png",
    },
    {
        title: "Home",
        link: "/home",
        component: <Pages.Homepage />,
        bgImg: "/GalleryImages/img1.png",
    },
    {
        title: "Articles",
        link: "/articles",
        component: <Pages.Articles />,
        bgImg: "/GalleryImages/img1.png",
    },
    {
        title: "Events",
        link: "/events",
        component: <Pages.Events />,
        bgImg: "/GalleryImages/img1.png",
    },
    {
        title: "Gallery",
        link: "/gallery",
        component: <Pages.Gallery />,
        bgImg: "/GalleryImages/img1.png",
    },
    {
        title: "Our Clients",
        link: "/clients",
        component: <Pages.Clients />,
        bgImg: "/GalleryImages/img1.png",
    },
    {
        title: "Contact",
        link: "/contact",
        component: <Pages.Contact />,
        bgImg: "/GalleryImages/img1.png",
    },
    {
        title: "Tentang Kami",
        link: "/about-us",
        component: <Pages.AboutUs />,
        bgImg: "/GalleryImages/img1.png",
    },
    {
        title: "Not Found",
        link: "*",
        component: <Pages.Homepage />,
        bgImg: "/GalleryImages/img1.png",
    },
];

// export default routes;
