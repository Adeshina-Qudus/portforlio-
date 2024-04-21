import mail from "../assert/home/mail.png"
import phone from "../assert/home/phone.png"
import style from "./index.module.css"
import FilledButton from "../component/reuseable/filledbutton";
const Home = () =>{
    return(
        <div className={style.mainCont}>
            <div>
                <FilledButton color={"green"} text={"Hello i'm"} textColor={"white"}/>
                <h3>Adeshina Qudus</h3>
                <h6>Software Engineer</h6>
                <div>
                    <img src={mail} alt={"mail"}/> <p>qudusa55@gmail.com</p>
                    <img src={phone} alt={"phone"}/> <p>+234 907 944 7913</p>
                </div>
            </div>
        </div>
    )
}
export default Home