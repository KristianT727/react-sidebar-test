import style from "./PagesStyle.module.css";
import { Helmet } from "react-helmet-async";
import { ProductComponent } from "../Components/ProductComponent";

const productListing = [
    {
        name: "Helm Berkendara",
        desc: "Sebuah helm trendy untuk mengendarai motor",
        imgUrl: "ProductImages/helm.png",
        parentLink: "",
        link: "",
    },
    {
        name: "Sepeda Motor",
        desc: "Sepeda Motor Darley Havidson mulus tanpa kecacatan. Pemilik sebelumnya melakukan perawatan secara berkala teratur.",
        imgUrl: "ProductImages/bike.png",
        parentLink: "",
        link: "",
    },
    {
        name: "Kacamata Berkendara",
        desc: "Iki kocomoto",
        imgUrl: "ProductImages/goggles.png",
        parentLink: "",
        link: "",
    },
    {
        name: "Oli",
        desc: "Oli mesin",
        imgUrl: "ProductImages/oli.png",
        parentLink: "",
        link: "",
    },
    {
        name: "Kotak Perkakas",
        desc: "Kotak perkakas cocok untuk menyimpan peralatan untuk perawatan.",
        imgUrl: "ProductImages/toolbox.png",
        parentLink: "",
        link: "",
    },
    {
        name: "Bakpao isi Ayam",
        desc: "Bakpao isi ayam yang dibuat oleh grup kelompok, dikukus tetapi memiliki kemungkinan gosong",
        imgUrl: "ProductImages/bakpao.png",
        parentLink: "",
        link: "",
    },
];

export const Product = () => {
    return (
        <>
            <Helmet>
                <title>Halaman Produk</title>
            </Helmet>
            <div className={style.page}>
                <section>
                    <h1>Daftar Produk</h1>
                    <p>Daftar produk-produk yang kami tawarkan.</p>
                </section>
                <section>
                    <ProductComponent productListing={productListing} />
                </section>
            </div>
        </>
    );
};
