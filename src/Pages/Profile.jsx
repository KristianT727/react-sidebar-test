import style from "./PagesStyle.module.css";
import { Helmet } from "react-helmet-async";

export const Profile = () => {
    return (
        <>
            <Helmet>
                <title>Motor Club</title>
            </Helmet>
            <div className={style.page}>
                <section>
                    <h1>Profil Klub</h1>
                    <p>
                        Didirikan pada tahun 2005, klub motor MOTOR CLUB adalah
                        klub motor yang beranggapan bahwa kehidupan berkendara
                        motor adalah salah satu cara untuk hidup dengan gaya.
                    </p>
                </section>
                <section id="visimisi">
                    <h1>Visi dan Misi klub</h1>
                    <p>Visi</p>
                    <ul>
                        <li>
                            Menjalin dan menjaga tali persaudaraan antar sesama
                            club/komunitas motor dan masyarakat pada umumnya.
                        </li>
                        <li>
                            Diharapakan untuk bisa menjadi contoh bagi
                            masyarakat dalam etika berkendara yang baik dan
                            benar sesuai dengan peraturan berlalulintas yang
                            telah berlaku.
                        </li>
                        <li>
                            Menjadi organisasi yang memiliki kesadaran sosial
                            yang tinggi.
                        </li>
                        <li>
                            Menjadikan club/komunitas motor sebagai wadah
                            otomotif yang bermuatan positif.
                        </li>
                        <li>
                            Menjalin dan menjaga tali persaudaraan antara
                            club/komunitas motor khususnya, dan masyarakat luas.
                        </li>
                    </ul>
                    <p>Misi</p>
                    <ul>
                        <li>
                            Menciptakan sebuah komunitas atau organisasi yang
                            positif dan bermanfaat bagi anggota dan masyarakat
                            luas.
                        </li>
                        <li>
                            Menyatukan Pemikiran positif dan mengarahkan agar
                            pemikiran tersebut bisa terwujud.
                        </li>
                        <li>
                            Menjalin persaudaraan untuk semua bikers yang ada di
                            Indonesia.
                        </li>
                        <li>
                            Menjadi Pelopor dan contoh kepada masyarakat cara
                            berkendara yang baik.
                        </li>
                    </ul>
                </section>
            </div>
        </>
    );
};
