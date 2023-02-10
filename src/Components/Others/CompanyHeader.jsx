import style from "./CompanyHeader.module.css";

export const CompanyHeader = () => {
    return (
        <>
            <div className={style.headerTitle}>
                <div className={style.brandNameContainer}>
                    <h1>MOTOR CLUB</h1>
                    <p style={{ color: "#666" }}>
                        The official website of MOTOR CLUB motor club.
                    </p>
                </div>
                <hr />
                <div className={style.brandNavbarContainer}>
                    <ul>
                        <li>Profile</li>
                        <li>Visi dan Misi</li>
                        <li>Produk Kami</li>
                        <li>Kontak Kami</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <hr />
            </div>
        </>
    );
};
