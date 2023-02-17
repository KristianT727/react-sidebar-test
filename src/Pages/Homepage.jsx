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
                        Selamat Datang di website resmi club motor MOTOR CLUB!
                    </h1>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            paddingBottom: "20px",
                        }}
                    >
                        <img src={`/company-logo.png`} alt="logo" />
                    </div>
                    <p>Mari bersama kita bersatu dalam motoring.</p>
                    <p>
                        Mulailah bereksplorasi dengan menekan tombol-tombol pada
                        tampilan website.
                    </p>
                </section>
            </div>
        </>
    );
};
