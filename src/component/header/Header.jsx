import React, { useEffect, useState } from "react";
import CTA from "./CTA";
import me from "../../assets/reem.jpg";
import "./header.css";
import HeaderSocial from "./HeaderSocial";
import Typed from "typed.js";
const Header = () => {
  const [hover,setHover]=useState(false)
  useEffect(()=>{
    let typed6 = new Typed('#career', {
      strings: ["full stack developer"],
      typeSpeed: 40,
      backSpeed: 0,
      loop: true
    });
  },[])
 
  return (
    <header>
      <div className="container header__container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div>
            <h5>Hello i am</h5>
            <h2>Reem ebrahim desouky</h2>
            <h5 className="text-light" id="career"></h5>
          </div>
          <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <img src={me} style={{
              transform:hover?"scale(1.2)":"scale(1)",
              transition:"transform 0.5s"
            }}/>
          </div>
        </div>
        <CTA />
        <HeaderSocial />
        <a href="#contact" className="scroll_down">
          scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
