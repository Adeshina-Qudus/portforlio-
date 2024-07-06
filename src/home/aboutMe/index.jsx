import style from "./index.module.css"
import aboutMe from "../../assert/aboutme/ab-img.png.png"
import OutlinedButton from "../../component/reuseable/outlinedButton";
const AboutMe = () =>{
    return(
        <div className={style.mainCont}>
            <div className={style.content}>
                <div className={style.cont}>
                    <img src={aboutMe} alt={""} height={240.95} width={450} className={style.abtImg}/>
                </div>
                <div className={style.about}>
                   <div className={style.aboutStory}>
                        <h1 color={"white"}>About Me</h1>
                       <p color={"white"}> Hello I'm Qudus Adeshina, a Junior Software Engineer <span
                           className={style.break}>
                            proficient in Java, Python, MongoDB, MySQL, and unittest.</span><span
                           className={style.break}>
                            Excels in writing clean, efficient code and enjoys tackling </span> <span
                            className={style.break}>
                            challenges. Eager to contribute to exciting projects </span>
                            and continue learning.<span className={style.break}> also I'm good at </span></p>
                   </div>
                    <div>
                    <div className={style.languageButton}>
                        <OutlinedButton bordercolor={"#7562E0"} textColor={"white"} text={"Java"}  color={"#181824"}/>
                        <OutlinedButton bordercolor={"#7562E0"} textColor={"white"} text={"Python"}  color={"#181824"}/>
                        <OutlinedButton bordercolor={"#7562E0"} textColor={"white"} text={"JavaScript"}  color={"#181824"}/>
                        <OutlinedButton bordercolor={"#7562E0"} textColor={"white"} text={"Golang"}  color={"#181824"}/>
                    </div>
                    <div className={style.languageButton}>
                        <OutlinedButton bordercolor={"#7562E0"} textColor={"white"} text={"HTML / CSS"}  color={"#181824"}/>
                        <OutlinedButton bordercolor={"#7562E0"} textColor={"white"} text={"React"}  color={"#181824"}/>
                        <OutlinedButton bordercolor={"#7562E0"} textColor={"white"} text={"React Native"}  color={"#181824"}/>
                        <OutlinedButton bordercolor={"#7562E0"} textColor={"white"} text={"SQL"}  color={"#181824"}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default AboutMe