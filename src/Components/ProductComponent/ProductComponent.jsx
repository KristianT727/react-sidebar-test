import style from "./ProductComponent.module.css";
import { ProductCard } from "./ProductCard";

const productListing = [
    {
        name: "Helmet",
        desc: "A helmet",
        imgUrl: "ProductImages/helm.png",
        parentLink: "",
        link: "",
    },
];

export const ProductComponent = () => {
    return (
        <div className={style.productListWrap}>
            {productListing.map((prop, key) => {
                return (
                    <ProductCard
                        name={prop.name}
                        desc={prop.desc}
                        imgUrl={prop.imgUrl}
                        key={key}
                    />
                );
            })}
        </div>
    );
};
