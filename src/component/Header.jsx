import React, { useState } from "react";
import logo from "../images/logo1.png"
const Header=()=>{
    window.addEventListener("scroll",function(){
        const header=document.querySelector(".header");
        header.classList.toggle("active",window.scrollY>0)
    });
    const [show, setShow]=useState(false);
    return(
        <div className="header d__flex align__items__center pxy__20">
            <div className="logo">
                <img src={logo} alt="LOGO" />
            </div>
            <div className="navigation">
                <ul className="navabr d__flex">
                    <a href="#Home" ><li  className="nav__items mx__15">Home </li></a>
                    <a href="#About" ><li className="nav__items mx__15">About </li></a>
                    <a href="#Skill" ><li className="nav__items mx__15">Skill </li></a>
                    <a href="#Project" ><li className="nav__items mx__15">Project </li></a>
                    <a href="#Contact" ><li className="nav__items mx__15">Contact </li></a>
                </ul>
            </div>
            <div className="toggle__menu">
            <svg onClick={()=>setShow(!show)}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-justify white pointer"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
            </div>
            {show?(
            <div className="sidebar">
                <ul className="sidebarc">
                    <li className="sidebar"><a href="#Home">Home</a></li>
                    <li className="sidebar"><a href="#About">About</a></li>
                    <li className="sidebar"><a href="#Skill">Skill</a></li>
                    <li className="sidebar"><a href="#Project">Project</a></li>
                    <li className="sidebar"><a href="#Contact">Contact</a></li>
                </ul>
            </div>):null}
        </div>
    )
}
export default Header;