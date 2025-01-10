import style from "./index.module.css"
const Skills = () => {
    return (
        <div className={style.mainCont}>
            <div className={style.container}>
                <p className={style.skill}>Skills 🤹</p>
                <p className={style.learnt}>These are some of the skills I've learnt over the past years.</p>
                <div className={style.skillsTable}>
                    <div className={style.table}>Java</div>
                    <div className={style.table}>Python</div>
                    <div className={style.table}>Go</div>
                </div>
                <div className={style.skillsTable}>
                    <div className={style.table}>JavaScript</div>
                    <div className={style.table}>React</div>
                    <div className={style.table}>React Native</div>
                </div>
                <div className={style.skillsTable}>
                    <div className={style.table}>HTML / CSS</div>
                    <div className={style.table}>Github</div>
                    <div className={style.table}></div>
                </div>
            </div>
        </div>
    )
}

export default Skills