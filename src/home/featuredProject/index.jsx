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
                <h1 className={style.headerText}>Featured projects:</h1>
                <p className={style.text}>I have worked on many projects over the course of being a Software Developer, here are a few of my live, real-world projects</p>
            </div>
            <div className={style.aboutFeaturedProject}>
                <div className={style.projectView}>
                    <div className={style.projectViewBorder}>
                        <img src={expenseTrackerImg} className={style.img} alt={""}/>
                    </div>
                    <p className={style.headerText}
                       style={{marginRight : "50%"}}>Expense Tracker</p>
                    <p className={style.text}>The Expense Tracker project is designed to help users manage their finances efficiently. It allows individuals to log their income and expenses, categorize transactions, and set budgets to monitor their spending habits.</p>
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
                    <p className={style.headerText} style={{marginRight : "37%"}}>Contact Management</p>
                    <p className={style.text}>Contact Management System (CMS) project is designed to streamline the process of managing personal or business contacts. It offers a centralized platform to store and organize contact information.</p>
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
                    <p className={style.headerText} style={{marginRight : "60%"}}>Book Ease</p>
                    <p className={style.text}>BookEase is a dynamic event booking system designed to streamline the process of scheduling and managing events. It caters to a wide range of event types, including conferences, workshops, seminars, parties.</p>
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