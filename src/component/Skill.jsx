import React from "react";
import "../allcss/Skill.css";
const Skill=()=>{
    return(
        <div className="skill component__space" id="Skill">
            <div className="heading">
                <h1 className="heading">
                    My Skill Set
                </h1>
                <p className="heading p__color">
                These are the skill set I have
                </p>
                <p className="heading p__color">
                which are given below
                </p>
                
            </div>
            <div className="container">
                <div className="row">
                    <div className="col__3">
                        <div className="skill__box pointer">
                            <div className="icon">
                                <h4>HTML</h4>
                            </div>
                            <div className="skill__meta">
                            <p className="skill__text p__color">HTML stands for Hyper Text Markup Language</p>
                            <p className="skill__text p__color">HTML is the standard markup language for creating Web pages</p>   
                            <p className="skill__text p__color">HTML describes the structure of a Web page</p>      
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="skill__box pointer">
                            <div className="icon">
                            <h4>CSS</h4>
                            </div>
                            <div className="skill__meta">
                             <p className="skill__text p__color">CSS stands for Cascading Style Sheets</p>     
                             <p className="skill__text p__color">CSS is the language we use to style an HTML document.</p>
                             <p className="skill__text p__color">CSS describes how HTML elements should be displayed.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="skill__box pointer">
                            <div className="icon">
                            <h4>JAVASCRIPT</h4>
                            </div>
                            <div className="skill__meta">
                            <p className="skill__text p__color">JavaScript is the world's most popular programming language of the web.</p>
                            <p className="skill__text p__color">JavaScript is the programming language of the Web.</p>
                            <p className="skill__text p__color">JavaScript is use to program the behavior of web pages</p>  
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="skill__box pointer">
                            <div className="icon">
                            <h4>PHP</h4>
                            </div>
                            <div className="skill__meta">
                            <p className="skill__text p__color">PHP stands for Hypertext Preprocessor</p>
                            <p className="skill__text p__color">PHP scripts are execute on the server.</p>
                            <p className="skill__text p__color">PHP can generate dynamic page content.</p>  
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="skill__box pointer">
                            <div className="icon">
                            <h4>JAVA</h4>
                            </div>
                            <div className="skill__meta">
                            <p className="skill__text p__color">Java is the world's most popular programming language.</p>
                            <p className="skill__text p__color">Java is the programming language and support oops concept.</p>
                            <p className="skill__text p__color">Java is platform independent                                                                                                                                </p>  
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="skill__box pointer">
                            <div className="icon">
                            <h4>REACT JS</h4>
                            </div>
                            <div className="skill__meta">
                            <p className="skill__text p__color">React is a JavaScript library for building user interfaces.</p>
                            <p className="skill__text p__color">React is used to build single-page applications.</p>
                            <p className="skill__text p__color">React allows us to create reusable UI components.</p>  
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="skill__box pointer">
                            <div className="icon">
                            <h4>MYSQL</h4>
                            </div>
                            <div className="skill__meta">
                            <p className="skill__text p__color">It is open-source database software which is supported by Oracle Company.</p>
                            <p className="skill__text p__color">It is fast, Scalable and easy to use. </p>
                            <p className="skill__text p__color">It uses many SQL queries and combines useful information from multiple tables for the end users.</p>  
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}
export default Skill;