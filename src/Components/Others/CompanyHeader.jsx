import { useNavigate } from "react-router-dom";
import style from "./CompanyHeader.module.css";
import { CompanyHeaderNavbarData } from "./CompanyHeaderNavbarData";

export const CompanyHeader = () => {
    const navigate = useNavigate();
    return (
        <div className={style.headerTitle}>
            <div className={style.brandNameContainer}>
                <h1>MOTOR CLUB</h1>
                <p>The official website of MOTOR CLUB motor club.</p>
            </div>
            <hr />
            <div className={style.brandNavbarContainer}>
                <ul>
                    {CompanyHeaderNavbarData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className={
                                    window.location.pathname == val.link
                                        ? style.active
                                        : ""
                                }
                                onClick={() => {
                                    navigate(
                                        import.meta.env.BASE_URL + val.link
                                    );
                                }}
                            >
                                {val.title}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <hr />
        </div>
    );
};
