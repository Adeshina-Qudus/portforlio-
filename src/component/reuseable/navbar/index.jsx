import style from "./index.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.mainCont}>
            <div className={style.cont}>
                <div className={style.nameContainer}>
                    <p className={style.name}>Qudus Adeshina ⚡</p>
                </div>
                <div className={style.link}>
                    <p className={style.nickname}>Holy_Child</p>
                    <Link to="https://github.com/Adeshina-Qudus" target="_blank">
                        <img
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub Logo"
                            className={style.githubLogo}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
