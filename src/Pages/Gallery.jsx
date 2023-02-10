import style from "./PagesStyle.module.css";
import { Helmet } from "react-helmet-async";
import GalleryComponent from "../Components/GalleryComponent";

export const Gallery = () => {
    const galleryImages = [
        {
            img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];

    return (
        <>
            <Helmet>
                <title>Galeri</title>
            </Helmet>
            <div className={style.page}>
                <section>
                    <h1>Galeri</h1>
                    <p>Kumpulan foto-foto dari club MOTOR CLUB</p>
                    <GalleryComponent galleryImages={galleryImages} />
                </section>
            </div>
        </>
    );
};
