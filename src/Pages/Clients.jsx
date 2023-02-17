import style from "./PagesStyle.module.css";
import { Helmet } from "react-helmet-async";
import { ClientComponent } from "../Components/ClientComponent";

const clientListing = [
    {
        name: "James Olson",
        desc: `"They are a bunch of lovely fellow. Liking bikes, great to hang out with."`,
        imgUrl: "/ClientImages/img1.png",
        parentLink: "",
        link: "",
    },
    {
        name: "Joko Widodo",
        desc: `"Saya suka motor, ini klub motor. Saya suka klub motor ini karena ada motornya."`,
        imgUrl: "/ClientImages/img2.png",
        parentLink: "",
        link: "",
    },
    {
        name: "Bindah Wasudara",
        desc: `"Bakpao ayamnya gosong."`,
        imgUrl: "/ClientImages/img3.png",
        parentLink: "",
        link: "",
    },
];

export const Clients = () => {
    return (
        <>
            <Helmet>
                <title>Klien Kami</title>
            </Helmet>
            <div className={style.page}>
                <section>
                    <h1>Klien Kami</h1>
                    <p>Berikut adalah daftar-daftar klien kami</p>
                </section>
                <section>
                    <ClientComponent clientListing={clientListing} />
                </section>
            </div>
        </>
    );
};
