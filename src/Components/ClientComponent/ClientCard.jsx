import style from "./ClientComponent.module.css";
import { useNavigate } from "react-router-dom";

export const ClientCard = ({ name, imgUrl, desc, link }) => {
    const navigate = useNavigate();
    return (
        <div
            className={style.clientItemWrapper}
            onClick={() => {
                navigate(link);
            }}
        >
            <div className={style.clientItem}>
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
