import React from "react";
import '../allcss/Project.css';
import project1 from "../images/todolist.jpg";
import project2 from "../images/quiz.jpeg";
import project3 from "../images/webhosting.jpeg";
import project4 from "../images/hosting.jpeg";
import project5 from "../images/projects-02.jpg";
import project6 from "../images/shopping.jpg";
const Project=()=>{
    return(
       <div className="project component__space" id="Project">
        <div className="heading">
            <h1 className="heading">MY Project Section </h1>
            
           
        </div>
        <div className="container">
            <div className="row">
                <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project_img_box">
                                <img src={project1} alt="pr1image" className="project__img" />
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">TODAY-PLANS</h5>
                                <p className="project__text">Make a Note.Then Complete it on today.</p>
                                <a href="https://today-plans.netlify.app"> <button className="project__btn">View Details</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col__3">
                    <div className="project__box pointer">
                        <div className="project__box__img pointer relative">
                            <div className="project_img_box">
                                <img src={project2} alt="pr1image" className="project__img" />
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">QUIZ</h5>
                                <p className="project__text">You are never a loser until you quit trying.</p>
                               <a href="https://peaceful-kitsune-a80353.netlify.app/"><button className="project__btn">View Details</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col__3">
                    <div className="project__box pointer">
                        <div className="project__box__img pointer relative">
                            <div className="project_img_box">
                                <img src={project3} alt="pr1image" className="project__img" />
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">WEB-HOSTING</h5>
                                <p className="project__text">webhosting server is the lifeline of every website.</p>
                               <a href={"https://webhost-ui.netlify.app/"}><button className="project__btn">View Details</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col__3">
                    <div className="project__box pointer">
                        <div className="project__box__img pointer relative">
                            <div className="project_img_box">
                                <img src={project4} alt="pr1image" className="project__img" />
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Developement</h5>
                                <p className="project__text">Greeting ticket to the big show</p>
                                <a href={"https://webhost-ui.netlify.app/"}><button className="project__btn">View Details</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col__3">
                    <div className="project__box pointer">
                        <div className="project__box__img pointer relative">
                            <div className="project_img_box">
                                <img src={project5} alt="pr1image" className="project__img" />
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Developement</h5>
                                <p className="project__text">Greeting ticket to the big show</p>
                               <a href={"https://magical-unicorn-21d6d6.netlify.app/"}><button className="project__btn">View Details</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col__3">
                    <div className="project__box pointer">
                        <div className="project__box__img pointer relative">
                            <div className="project_img_box">
                                <img src={project6} alt="pr1image" className="project__img" />
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">ONLINE SHOPPING SITE DEMO</h5>
                                <p className="project__text">If you love it. Buy it.</p>
                               <a href={"https://demoshoppingsite.netlify.app/"}><button className="project__btn">View Details</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}
export default Project;