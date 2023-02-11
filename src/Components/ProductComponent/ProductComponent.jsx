import style from "./ProductComponent.module.css";
import { ProductCard } from "./ProductCard";

const productListing = [
    { name: "", desc: "", imgUrl: "", parentLink: "", link: "" },
];

export const ProductComponent = () => {
    return (
        <div className={style.productListWrap}>
            <ProductCard
                name="dasd a a a a aaa aaa aaaa aa a a aaaaaaa"
                desc="this is a helmet Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                imgUrl="ProductImages/helm.png"
            />
            <ProductCard
                name="dasd a a a a aaa aaa aaaa aa a a aaaaaaa"
                desc="this is a helmet"
                imgUrl="ProductImages/helm.png"
            />
            <ProductCard
                name="dasd a a a a aaa aaa aaaa aa a a aaaaaaa"
                desc="this is a helmet"
                imgUrl="ProductImages/helm.png"
            />
            <ProductCard
                name="dasd a a a a aaa aaa aaaa aa a a aaaaaaa"
                desc="this is a helmet"
                imgUrl="ProductImages/helm.png"
            />
            <ProductCard
                name="dasd a a a a aaa aaa aaaa aa a a aaaaaaa"
                desc="this is a helmet"
                imgUrl="ProductImages/helm.png"
            />
        </div>
    );
};
