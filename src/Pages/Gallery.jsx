import style from "./PagesStyle.module.css";
import { Helmet } from "react-helmet-async";
import GalleryComponent from "../Components/GalleryComponent";

export const Gallery = () => {
    const galleryImages = [
        { img: "/GalleryImages/img1.png" },
        { img: "/GalleryImages/img2.png" },
        { img: "/GalleryImages/img3.png" },
        { img: "/GalleryImages/img4.png" },
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
