import style from "./PagesStyle.module.css";
import { Helmet } from "react-helmet-async";

export const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <div className={style.page}>
                <section>
                    <h1>Tentang Kami</h1>
                    <p>
                        MOTOR CLUB adalah klub motor yang memfokuskan
                        kekeluargaan dengan setiap membernya. Di dalam klub ini,
                        semua orang dari segala macam umur dan golongan akan
                        disambut dengan keakraban dari seluruh member. Tidak
                        lupa juga untuk menjaga kemanusiaan terhadapa sesama dan
                        orang lain di sekitar.
                    </p>
                    <p>
                        MOTOR CLUB didirikan pada tahun 2005 oleh sekelompok
                        teman-teman yang memiliki minat dalam mengendarai motor.
                        Mereka beranggapan bahwa dengan membuat sebuah klub,
                        mereka akan lebih mudah untuk mencari orang-orang yang
                        berbagi minat yang sama untuk bertemu.
                    </p>
                </section>
                <section
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <img
                        src={`/company-logo.png`}
                        alt=""
                        style={{ width: 200 }}
                    />
                    <p>Logo klub</p>
                </section>
                <section>
                    <p>
                        Logo dari klub ini berupa dua piston yang melambangkan
                        dua piston yang dapat dijumpai pada mayoritas dari motor
                        bermesin kapasitas tinggi, atau "moge".
                    </p>
                </section>
            </div>
        </>
    );
};
