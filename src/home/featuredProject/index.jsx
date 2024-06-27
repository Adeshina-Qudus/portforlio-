import style from "./index.module.css"
import expenseTrackerImg from "../../assert/featuredProject/Untitled-removebg-preview (1).png"
import contactManagement from "../../assert/featuredProject/secretary-contact-management-svgrepo-com.svg"
import bookEase from "../../assert/featuredProject/pngtree-party-and-celebration-icon-set-png-image_5870321-removebg-preview.png"
import FilledButton from "../../component/reuseable/filledbutton";
import {Link} from "react-router-dom";
const FeaturedProject = () =>{
    return(
        <div className={style.mainCont}>
            <div className={style.featureProjectTop}>
                <h1 color={"7562E0"}>Featured projects:</h1>
                <p color={"white"}>I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world<br/> projects</p>
            </div>
            <div className={style.aboutFeaturedProject}>
                <div className={style.projectView}>
                    <div className={style.projectViewBorder}>
                        <img src={expenseTrackerImg} className={style.img} alt={""}/>
                    </div>
                    <p color={"7562E0"} style={{marginRight : "50%"}}>Expense Tracker</p>
                    <p>Expense tracker helps you track your expenses</p>
                    <div className={style.repoButton}>
                        <Link to={"https://github.com/Adeshina-Qudus/PreventSapaExpensesTracker"} >
                            <FilledButton color={"#7562E0"} textColor={"white"} text="Github Repo"/>
                        </Link>
                    </div>
                </div>
                <div className={style.projectView}>
                    <div className={style.projectViewBorder}>
                        <img src={contactManagement} className={style.img} alt={""}/>
                    </div>
                    <p color={"7562E0"} style={{marginRight : "37%"}}>Contact Management</p>
                    <p>Expense tracker helps you track your expenses</p>
                      <div className={style.repoButton}>
                          <Link to={"https://github.com/Adeshina-Qudus/contactManagmentApp"} >
                            <FilledButton color={"#7562E0"} textColor={"white"} text="Github Repo"/>
                          </Link>
                      </div>
                </div>
                <div className={style.projectView}>
                    <div className={style.projectViewBorder}>
                        <img src={bookEase} className={style.img} alt={""}/>
                    </div>
                    <p color={"7562E0"} style={{marginRight : "60%"}}>Book Ease</p>
                    <p>Expense tracker helps you track your expenses</p>
                       <div className={style.repoButton}>
                        <Link to={"https://github.com/Adeshina-Qudus/BookEase"} >
                            <FilledButton color={"#7562E0"} textColor={"white"} text="Github Repo"/>
                        </Link>
                       </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProject