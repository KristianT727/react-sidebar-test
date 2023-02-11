import style from "./ProductComponent.module.css";

export const ProductCard = ({ name, imgUrl, desc, link }) => {
    return (
        <div className={style.productItemWrapper}>
            <div className={style.productItem}>
                <div className={style.imageContainer}>
                    <img src={imgUrl} alt="" id={style.image} />
                </div>
                <div className={style.infoContainer}>
                    <div className={style.nameContainer}>{name}</div>
                    <div className={style.descContainer}>{desc}</div>
                </div>
            </div>
        </div>
    );
};
