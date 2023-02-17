import style from "./Footer.module.css";
import { useNavigate } from "react-router";
import * as links from "./FooterLinks";

export const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className={style.footerContainer}>
            <div className={style.footerLibrary}>
                <div className={style.col}>
                    <ul>
                        {links.FooterLinks.map((val, key) => {
                            return (
                                <li
                                    key={key}
                                    onClick={() => {
                                        navigate(val.link);
                                    }}
                                >
                                    {val.title}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={style.col}>
                    <ul>
                        {links.FooterLinks2.map((val, key) => {
                            return (
                                <li
                                    key={key}
                                    onClick={() => {
                                        navigate(val.link);
                                    }}
                                >
                                    {val.title}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className={style.footerEnd}>
                <p>Made by Kris, for Education Purposes only</p>
            </div>
        </div>
    );
};
