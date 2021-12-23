import React from "react";
import "../style/Contents.scss";
import Header from "../components/public/Header";
import profile5 from "../image/profile5.svg";

function Contents(props) {
  return (
    <>
      <Header />
      <div className="contentspage">
        <div className="main">
          <img src={profile5} alt="profile5"></img>
          <div>서비스가 준비중입니다</div>
        </div>
      </div>
    </>
  );
}

export default Contents;
