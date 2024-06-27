import style from "./index.module.css"
import FilledButton from "../filledbutton";
import {Link} from "react-router-dom";
const Navbar = ()=>{
    return(
        <div className={style.mainCont}>
            <div>
                <FilledButton color={"#7562E0"} textColor={"white"} text={"RESUME"}/>
            </div>
            <div className={style.link}>
                <Link to={""} style={{color: "white"}}>Home</Link>
                <Link to={"/about"} style={{color: "white"}}>AboutMe</Link>
                <Link to={"/skills"} style={{color: "white"}}>Skills</Link>
                <Link to={"/project"} style={{color: "white"}}>Projects</Link>
                <Link to={"/Contact"} style={{color: "white"}}>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar