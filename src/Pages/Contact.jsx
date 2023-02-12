import style from "./PagesStyle.module.css";
import { Helmet } from "react-helmet-async";

export const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Kontak Kami</title>
            </Helmet>
            <div className={style.page}>
                <section>
                    <h1>Kontak kami</h1>
                    <p>
                        Anda dapat mengontak kami melalui nomor telepon yang ada
                        pada daftar berikut :
                    </p>
                    <ul>
                        <li>Telepon : 021-57470077</li>
                        <li>WhatsApp : +62-888-0999-0999</li>
                        <li>Instagram : @motor.club.888</li>
                        <li>Twitter : @motor.club.888</li>
                        <li>Email : motor_club888@gmail.com</li>
                    </ul>
                </section>
            </div>
        </>
    );
};
