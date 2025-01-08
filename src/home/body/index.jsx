import hero from "../../assert/home/Hero.png"
import style from "./index.module.css"
import {FaLinkedin, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa';
import {Link} from "react-router-dom";
import {FaXTwitter} from "react-icons/fa6";

const Body = () =>{
    return(
        <div className={style.mainCont}>
            <div className={style.details}>
                <h1 color={"white"} className={style.profession}>Software Engineer.</h1>
                <div>
                    <p className={style.text}>You go here! i'm Qudus Adeshina </p>
                </div>
                <div className={style.socials}>
                    <Link to={"https://www.linkedin.com/in/adeshina-qudus-7224a128b/"} className={style.icon}>
                        <FaLinkedin color="#0077B5"/>
                    </Link>
                    <Link to={"https://www.instagram.com/iam_holy__child/"} className={style.icon}>
                        <FaInstagram color="#E4405F"/>
                    </Link>
                    <Link to={""} className={style.icon}>
                        <FaXTwitter color="#0077B5"/>
                    </Link>
                </div>
            </div>
            <div className={style.heroPics}>
                <img src={hero} className={style.heroP} alt={"hero"}/>
            </div>
        </div>
    )
}
export default Body