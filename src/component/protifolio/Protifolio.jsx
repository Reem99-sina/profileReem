import React, { Component } from "react";
import "./protifolio.css";
import img1 from "../../assets/thumb-2.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/movies.jpg";
import img7 from "../../assets/admin.png";
import img8 from "../../assets/site.png";
import img5 from "../../assets/2.jpg";
import img6 from "../../assets/portfolio6.jpg";
import img9 from "../../assets/messenger.jpg";
import img10 from "../../assets/babyshop.png";
import img11 from "../../assets/coffeeshop.jpg";
import uber from "../../assets/uberApp.jpg";
import filePdf from "../../files/api.pdf";
import Profile from "../common/profile";
export default class Protifolio extends Component {
  render() {
    return (
      <section id="protifolio">
        <h5 style={{ textTransform: "capitalize" }}>my recent work</h5>

        <div className="protifolio__container">
        <Profile url={img1}>
            <h3>food type from api </h3>
            <div className="protifolio__item-cta">
              <a
                href="https://github.com/Reem99-sina/food.git"
                className="btn"
                target="blank"
              >
                github
              </a>
            </div>
          </Profile>
          <Profile url={img2}>
          <h3>profile Websites example</h3>
              <div className="protifolio__item-cta">
                <a
                  href="https://github.com/Reem99-sina/profiolo.git"
                  className="btn"
                  target="blank"
                >
                  github
                </a>
              </div>
          </Profile>
          <Profile url={img3}>
          
            <h3>example of backend project </h3>
            <div className="protifolio__item-cta">
              <a
                href="https://github.com/Reem99-sina/exam.git"
                className="btn"
                target="blank"
              >
                github
              </a>
              {/* <a href='https://olex99.herokuapp.com/' className='btn' target='blank'>live demo</a> */}
            </div>
            <div className="protifolio__item-cta">
              <a href={filePdf} className="btn" target="blank">
                document pdf
              </a>
            </div>
            </Profile>
          <Profile url={img4}>
            <h3>react project of movices</h3>
            <div className="protifolio__item-cta">
              <a
                href="https://github.com/Reem99-sina/register.git"
                className="btn"
                target="blank"
              >
                github
              </a>
              <a
                href="https://reem99-sina.github.io/register/"
                className="btn"
                target="blank"
              >
                live demo
              </a>
            </div>
          </Profile>
          <Profile url={img5}>
            <h3>amazon react project</h3>
            <div className="protifolio__item-cta">
              <a href="https://github.com" className="btn" target="blank">
                github
              </a>
              <a
                href="https://reem99-sina.github.io/productlist/"
                className="btn"
                target="blank"
              >
                live demo
              </a>
            </div>
            </Profile>
         <Profile url={img7}>
            <h3>dashboard store with next js</h3>
            <div className="protifolio__item-cta">
              <div className="protifolio__item-cta">
                <a
                  href="https://github.com/Reem99-sina/ecommerce-admin"
                  className="btn"
                  target="blank"
                >
                  github
                </a>
                <a
                  href="https://ecommerce-admin-h7tt1yjel-reem99-sina.vercel.app/"
                  className="btn"
                  target="blank"
                >
                  live demo
                </a>
              </div>
            </div>
            </Profile>
         <Profile url={img8}>
            <h3>website store with next js</h3>
            <div className="protifolio__item-cta">
              <div className="protifolio__item-cta">
                <a
                  href="https://github.com/Reem99-sina/ecommerce-store"
                  className="btn"
                  target="blank"
                >
                  github
                </a>
                <a
                  href="https://ecommerce-store-topaz-two.vercel.app/"
                  className="btn"
                  target="blank"
                >
                  live demo
                </a>
              </div>
            </div>
            </Profile>
        <Profile url={img9}>
            <h3>messager project with next js</h3>
            <div className="protifolio__item-cta">
              <a href="https://github.com" className="btn" target="blank">
                github
              </a>
              <a
                href="https://messager-ex4kvi2as-reem99-sina.vercel.app/"
                className="btn"
                target="blank"
              >
                live demo
              </a>
            </div>
          </Profile>
          <Profile url={img10}>
            <h3>baby shop with next js</h3>
            <div className="protifolio__item-cta">
              <a href="https://github.com" className="btn" target="blank">
                github
              </a>
              <a
                href="https://baby-shop-ten.vercel.app/"
                className="btn"
                target="blank"
              >
                live demo
              </a>
            </div>
            </Profile>
         <Profile url={img11}>
            <h3>coffee shop with react native</h3>
            <div className="protifolio__item-cta">
              <a
                href="https://github.com/Reem99-sina/coffeeshop"
                className="btn"
                target="blank"
              >
                github
              </a>
            </div>
            </Profile>
          <Profile url={uber}>
            <h3>Uber with react native and node js</h3>
            <div className="protifolio__item-cta">
              <a
                href="https://github.com/Reem99-sina/uberFront.git"
                className="btn"
                target="blank"
              >
                github
              </a>
            </div>
          </Profile>
        </div>
      </section>
    );
  }
}
