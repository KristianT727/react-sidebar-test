import style from "./ClientComponent.module.css";
import { ClientCard } from "./ClientCard";

export const ClientComponent = ({ clientListing }) => {
    return (
        <div className={style.clientListWrap}>
            {clientListing.map((prop, key) => {
                return (
                    <ClientCard
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
