import style from "./PagesStyle.module.css";
import { Helmet } from "react-helmet-async";

export const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <div className={style.page}>
                <section>
                    <h1>Not found</h1>
                    <p>We can't find the page that you are looking for.</p>
                </section>
            </div>
        </>
    );
};
