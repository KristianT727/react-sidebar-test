import style from "./ProductComponent.module.css";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ name, imgUrl, desc, link }) => {
    const navigate = useNavigate();
    return (
        <div
            className={style.productItemWrapper}
            onClick={() => {
                navigate(link);
            }}
        >
            <div className={style.productItem}>
                <div className={style.imageContainer}>
                    <img
                        src={import.meta.env.BASE_URL + imgUrl}
                        alt=""
                        id={style.image}
                    />
                </div>
                <div className={style.infoContainer}>
                    <div className={style.nameContainer}>{name}</div>
                    <div className={style.descContainer}>{desc}</div>
                </div>
            </div>
        </div>
    );
};
