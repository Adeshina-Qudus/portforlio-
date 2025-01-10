import style from "./index.module.css"

const AboutMe = () =>{
    return(
        <div className={style.mainCont}>
            <div className={style.content}>
               <h1 className={style.service}>Service i offer 🔥</h1>
               <p className={style.offer}>These are some of the services I offer as a software developer.</p>
            </div>
        </div>
    )

}
export default AboutMe