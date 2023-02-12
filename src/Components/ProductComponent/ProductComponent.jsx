import style from "./ProductComponent.module.css";
import { ProductCard } from "./ProductCard";

export const ProductComponent = ({ productListing }) => {
    return (
        <div className={style.productListWrap}>
            {productListing.map((prop, key) => {
                return (
                    <ProductCard
                        name={prop.name}
                        desc={prop.desc}
                        imgUrl={prop.imgUrl}
                        link={prop.link}
                        key={key}
                    />
                );
            })}
        </div>
    );
};
