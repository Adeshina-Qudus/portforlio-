import style from "./index.module.css"
const FilledButton = ({color,textColor,text})=>{
    return(
        <div>
            <button style={{backgroundColor:color, color :textColor}} className={style.fillButton}>
                {text}
            </button>
        </div>
    )
}
export default FilledButton