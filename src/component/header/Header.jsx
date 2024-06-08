import React from "react";
import CTA from "./CTA";
import me from "../../assets/reem.jpg";
import "./header.css";
import HeaderSocial from "./HeaderSocial";
const Header = () => {
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
            <h5 className="text-light">full stack developer</h5>
          </div>
          <div>
            <img src={me} />
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
