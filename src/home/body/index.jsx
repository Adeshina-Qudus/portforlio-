import hero from "../../assert/home/Hero.png"
import style from "./index.module.css"
import FilledButton from "../../component/reuseable/filledbutton";
import {FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import {Link} from "react-router-dom";

const Body = () =>{
    return(
        <div className={style.mainCont}>
            <div className={style.details}>
                <div>
                    <FilledButton color={"green"} text={"Hello i'm"} textColor={"white"}/>
                    <h1>Adeshina Qudus</h1>
                    <h4>Software Engineer</h4>
                    <div>
                        <p><FaEnvelope color={"black"}/> qudusa55@gmail.com</p>
                        <p><FaPhoneAlt color={"black"}/> +234 907 944 7913</p>
                        <p><FaMapMarkerAlt color={"black"}/> Lagos State Nigeria </p>
                    </div>
                    </div>
                        <div className={style.heroPics}>
                            <img src={hero} className={style.heroP} alt={"hero"}/>
                        </div>
            </div>
                <div className={style.socials}>
                    <Link to={"https://www.linkedin.com/in/adeshina-qudus-7224a128b/"} color={"black"}>
                        <FaLinkedin  color="#0077B5" /> </Link>
                    <Link to={"https://github.com/Adeshina-Qudus"} color={"black"}>
                        <FaGithub  color="#000" /> </Link>
                    <Link to={"https://www.instagram.com/iam_holy__child/"} color={"black"}>
                        <FaInstagram color="#E4405F"/> </Link>
                </div>
        </div>
    )
}
export default Body