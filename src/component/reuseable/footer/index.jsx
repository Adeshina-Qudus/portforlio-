import {Link} from "react-router-dom";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import style from "./index.module.css"
import FilledButton from "../filledbutton";
import {useState} from "react";
import * as emailjs from "emailjs-com";

const Footer = () =>{

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, formData, process.env.USER_ID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.error('FAILED...', err);
            });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return(
        <div className={style.mainCont}>
            <div className={style.content}>
                <div className={style.connect}>
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
                    <form className={style.inputField} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name :"
                            className={style.inputBox}
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email :"
                            className={style.inputBox}
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="message"
                            placeholder="Message :"
                            className={style.inputBox}
                            style={{height: '10vh'}}
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <FilledButton text="Send" textColor="white" color="#7562E0"/>
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