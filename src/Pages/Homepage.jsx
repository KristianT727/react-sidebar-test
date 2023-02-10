import style from "./PagesStyle.module.css";
import { Helmet } from "react-helmet-async";

export const Homepage = () => {
    return (
        <>
            <Helmet>
                <title>Motor Club</title>
            </Helmet>
            <div className={style.page}>
                <section>
                    <h1>
                        Selamat Datang di website resmi club motor MOTOR CLUB
                    </h1>
                </section>
            </div>
        </>
    );
};
