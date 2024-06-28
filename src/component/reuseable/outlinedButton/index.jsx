import style from "./index.module.css";

const OutlinedButton = ({color,text,textColor,bordercolor})=>{
    return (
        <div>
            <button style={{background: color, color: textColor , borderColor : bordercolor}} className={style.outlinedButton}>{text}
            </button>
        </div>
    )
}
export default OutlinedButton