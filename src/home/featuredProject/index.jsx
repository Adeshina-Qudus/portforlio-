import style from "./index.module.css"
import FilledButton from "../../component/reuseable/filledbutton";
import {Link} from "react-router-dom";
import IconButton from "../../component/reuseable/filledbutton";
const FeaturedProject = () =>{
    return(
        <div className={style.mainCont}>
            <div className={style.featureProjectTop}>
                <h1 className={style.headerText}>Featured projects:</h1>
                <p className={style.text}>Here are some of the fun and recent projects I’ve worked on</p>
            </div>
            <div className={style.aboutFeaturedProject}>
                <div className={style.projectView}>
                    <p className={style.headerText}
                       style={{marginRight: "50%"}}>Expense Tracker</p>
                    <p className={style.text}>The Expense Tracker project is designed to help users manage their
                        finances efficiently. It allows individuals to log their income and expenses, categorize
                        transactions, and set budgets to monitor their spending habits.</p>
                    <div className={style.button}>
                        <div>
                            <IconButton
                                color="white"
                                textColor="black"
                                text="Preview"
                                icon={<i className="fas fa-eye" style={{color: "black"}}></i>}
                                height="5vh"
                                width="150px"
                                onClick={() => alert("Not live yet")}
                            />
                        </div>

                        <div>
                            <IconButton
                                color="white"
                                textColor="black"
                                text="Github Repo"
                                icon={<i className="fab fa-github" style={{color: "black"}}></i>}
                                height="5vh"
                                width="150px"
                                link="https://github.com/Adeshina-Qudus/PreventSapaExpensesTracker"
                            />
                        </div>


                    </div>
                </div>
                <div className={style.projectView}>
                    <p className={style.headerText} style={{marginRight: "37%"}}>Contact Management</p>
                    <p className={style.text}>Contact Management System (CMS) project is designed to streamline the
                        process of managing personal or business contacts. It offers a centralized platform to store
                        and organize contact information.</p>
                    <div className={style.button}>
                        <div className={style.previewButton}>
                            <FilledButton color={"white"} textColor={"black"} text="Preview" height={"5vh"}
                                          width={"150px"}/>
                        </div>
                        <div className={style.repoButton}>
                            <Link to={"https://github.com/Adeshina-Qudus/contactManagmentApp"}>
                                <FilledButton color={"white"} textColor={"black"} text="Github Repo" height={"5vh"}
                                              width={"20px"}/>
                            </Link>
                                </div>
                        </div>
                    </div>
                <div className={style.projectView}>
                    <p className={style.headerText} style={{marginRight: "60%"}}>Book Ease</p>
                    <p className={style.text}>BookEase is a dynamic event booking system designed to streamline the
                        process of scheduling and managing events. It caters to a wide range of event types,
                        including conferences, workshops, seminars, parties.</p>
                    <div className={style.button}>
                        <div className={style.previewButton}>
                            <FilledButton color={"white"} textColor={"black"} text="Preview" height={"5vh"}
                                          width={"150px"} />
                        </div>
                        <div className={style.repoButton}>
                            <Link to={"https://github.com/Adeshina-Qudus/BookEase"}>
                                <FilledButton color={"#7562E0"} textColor={"white"} text="Github Repo" height={"5vh"}
                                              width={"20px"} />
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            )
            }


            export default FeaturedProject