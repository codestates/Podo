import React from "react";
import Header from "../components/public/Header";
import FAQ from "../components/public/FAQ";
import "../style/Guide.scss";
import logo from "../image/Podo_logo.svg";

function Guide(props) {
  return (
    <>
      <Header />
      <div className="guidepage">
        <div className="main">
          <FAQ />
        </div>
        <div className="footer">
          <div className="footerup">
            <div className="logo">
              <div>
                <img src={logo} alt="logo"></img>
              </div>
              <span className="name">Podo</span>
            </div>

            <div className="service">
              <div className="footerhead">서비스 소개</div>
              <div className="line"></div>
              <a href="https://github.com/codestates/podo">
                <div className="list">Repository</div>
              </a>
              <a href="https://github.com/codestates/podo/wiki">
                <div className="list">WIKI</div>
              </a>
            </div>
            <div className="member">
              <div className="footerhead">Team Members</div>
              <div className="line"></div>
              <a href="https://github.com/LauraBoraKim">
                <div className="list">김보라</div>
              </a>
              <a href="https://github.com/phosa9203">
                <div className="list">김태우</div>
              </a>
              <a href="https://github.com/westtrain">
                <div className="list">이원구</div>
              </a>
              <a href="https://github.com/cherishxyun">
                <div className="list">하승윤</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Guide;
