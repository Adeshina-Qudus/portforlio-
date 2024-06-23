import style from "./index.module.css"
import expenseTrackerImg from "../../assert/featuredProject/Untitled-removebg-preview (1).png"
import contactManagement from "../../assert/featuredProject/secretary-contact-management-svgrepo-com.svg"
import bookEase from "../../assert/featuredProject/pngtree-party-and-celebration-icon-set-png-image_5870321-removebg-preview.png"
import FilledButton from "../../component/reuseable/filledbutton";
const FeaturedProject = () =>{
    return(
        <div >
            <div className={style.featureProjectTop}>
                <h1>Featured projects:</h1>
                <p>I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world<br/> projects</p>
            </div>
            <div className={style.aboutFeaturedProject}>
                <div className={style.projectView}>
                    <img src={expenseTrackerImg} className={style.img}/>
                    <p color={"7562E0"}>Expense Tracker</p>
                    <p>Expense tracker helps you track your expenses</p>
                      <div className={style.repoButton}>
                        <FilledButton color={"7562E0"} textColor={"white"} text="Github Repo"/>
                      </div>
                </div>
                <div className={style.projectView}>
                    <img src={contactManagement} className={style.img}/>
                    <p>Contact Management</p>
                    <p>Expense tracker helps you track your expenses</p>
                      <div className={style.repoButton}>
                        <FilledButton color={"green"} textColor={"white"} text="Github Repo"/>
                      </div>
                </div>
                <div className={style.projectView}>
                    <img src={bookEase} className={style.img}/>
                    <p>Book Ease</p>
                    <p>Expense tracker helps you track your expenses</p>
                       <div className={style.repoButton}>
                        <FilledButton color={"green"} textColor={"white"} text="Github Repo"/>
                       </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProject