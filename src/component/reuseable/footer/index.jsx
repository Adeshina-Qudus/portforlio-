import {Link} from "react-router-dom";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import style from "./index.module.css"
import FilledButton from "../filledbutton";

const Footer = () =>{

    return(
        <div className={style.mainCont}>
            <div className={style.content}>
                <div>
                    <h1 color={"#7562E0"}>Connect with me:</h1>
                    <p>Satisfied with me? Please contact me</p>
                    <div className={style.socials}>
                        <Link to={"https://www.linkedin.com/in/adeshina-qudus-7224a128b/"} color={"black"}>
                            <FaLinkedin  color="#0077B5" /> </Link>
                        <Link to={"https://github.com/Adeshina-Qudus"} color={"black"}>
                            <FaGithub  color="#000" /> </Link>
                        <Link to={"https://www.instagram.com/iam_holy__child/"} color={"black"}>
                            <FaInstagram color="#E4405F"/> </Link>
                    </div>
                </div>
                <div>
                    <h1 color={"white"}>Contact me, let’s make magic together</h1>
                    <form className={style.inputField}>
                        <input type={"text"} placeholder={"Name :"} className={style.inputBox}/>
                        <input type={"text"} placeholder={"Email :"} className={style.inputBox}/>
                        <input type={"text"} placeholder={"Message :"} className={style.inputBox} style={{height :
                                "10vh"}}/>
                        <FilledButton text={"Send"} textColor={"white"} color={"#7562E0"}/>
                    </form>
                </div>
            </div>

            <div className={style.lastPartFooter}>
                <p>@2024 Qudus Adeshina</p>
                <div className={style.socials}>
                    <Link to={"https://www.linkedin.com/in/adeshina-qudus-7224a128b/"} color={"black"}>
                        <FaLinkedin color="#0077B5"/> </Link>
                    <Link to={"https://github.com/Adeshina-Qudus"} color={"black"}>
                        <FaGithub color="#000"/> </Link>
                    <Link to={"https://www.instagram.com/iam_holy__child/"} color={"black"}>
                        <FaInstagram color="#E4405F"/> </Link>
                </div>
            </div>

        </div>
    )

}
export default Footer