import React from "react";
import aboutmg from "../images/about-us-image.jpg";
import "../allcss/About.css";
import mycv from "../images/mycv.pdf";
const About=()=>{
  
    return(
        <div className="about component__space" id="About">
            <div className="container">
                <div className="row">
                    <div className="col__2">
                        <img src={aboutmg} alt="aboutimage" className="about__img"/>
                    </div>
                    <div className="col__2">
                        <h1 className="about_header">About</h1>
                        <div className="about__meta">
                            <p className="about__text p__color">
                                I'm BIKASH KUMAR PANDA. I belong to Bhadrak, Odisha. I completed MCA in september 2023 from FAKIR MOHAN UNIVERSITY 
                                ,Balasore , Odisha. I completed BSC in 2018 from S.G. degree College under Utkal University , Odisha.
                                I completed +2 science in 2015 from Royal Commerce & Science College, Bhadrak, Odisha and also completed 10th in  2013 
                                from Falapur Government U.G. School. </p>
                            <p className="about__text p__color">
                               I have done a Project "Online shopping Web-Site" as my MCA final project.
                               To devlope the fronted part of this project we use HTML, CSS, JAVASCRIPT & for 
                               backend devlope use PHP. For data management use mysql.
                            </p>
                            <p className="about__text p__color">
                                To complete this project we spend 2-3 months. By using Apache server we run this website.
                            </p>
                            <div className="about__button d__flex align__items__center">
                                <a href={mycv} download={"BIKASH KUMAR PANDA"}><button className="about btn pointer">Download cv</button></a>
                                <button className="about btn pointer">Hire me</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default About;