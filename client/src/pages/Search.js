import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredParties } from "../redux/reducers/partySlice";
import {
  getAllParties,
  getFilteredParties,
  getFilterParties,
} from "../redux/API/partyAPI";
import { dateToStringDash } from "../utils/dateFunction";
import Header from "../components/public/Header";
import Party from "../components/search/Party";
import Warning from "../components/search/Warning";
import Calendar from "../components/search/Calendar";
import "../style/Search.scss";
import "../style/datepicker.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { IoIosArrowDropdown } from "react-icons/io";
import netflix from "../image/NetflixName.png";
import watcha from "../image/WatchaName.png";
import wavve from "../image/WavveName.svg";
import tving from "../image/TvingName.svg";
import disney from "../image/DisneyName.svg";
import prime from "../image/PrimeName.svg";
import laftel from "../image/LaftelName.svg";
import apple from "../image/AppleName.svg";
import office from "../image/Office365Name.png";
import nintendo from "../image/NintendoName.png";

function Search(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOtt, setSelectedOtt] = useState(netflix);
  const [ottId, setOttId] = useState(1);
  const [period, setPeriod] = useState(0);
  const [numOfMember, setNumOfMember] = useState(0);
  const [startDate, setStartDate] = useState(dateToStringDash(new Date()));
  const dispatch = useDispatch();
  const partiesState = useSelector((state) => state.party.parties);

  useEffect(() => {
    async function asyncFunc() {
      if (startDate !== "") {
        console.log(startDate, ottId);
        await dispatch(getFilteredParties({ id: ottId, date: startDate }));
      } else {
        await dispatch(getAllParties({ id: ottId }));
      }
      if (period || numOfMember) {
        const filteredPaties = getFilterParties(
          partiesState,
          period,
          numOfMember
        );
        dispatch(setFilteredParties(filteredPaties));
      }
    }
    asyncFunc();
  }, [period, selectedOtt, numOfMember, startDate]);
  return (
    <>
      <Header />
      <div className="search">
        <div className="searchbody">
          <div className="searchleft">
            <div className="wrapper">
              <div
                className="selectott"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img src={selectedOtt} alt="ottname" className="ottname"></img>
                <IoIosArrowDropdown size="25px" />
              </div>
            </div>

            {showDropdown ? (
              <div
                className="modalback"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <div
                  className="filterWindow dropdown"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <ul>
                    <li>
                      <img
                        src={netflix}
                        alt="netflix"
                        height="30px"
                        onClick={() => {
                          setOttId(1);
                          setSelectedOtt(netflix);
                        }}
                      />
                    </li>
                    <li>
                      <img
                        src={watcha}
                        alt="watcha"
                        height="45px"
                        onClick={() => {
                          setOttId(2);
                          setSelectedOtt(watcha);
                        }}
                      />
                    </li>
                    <li>
                      <img
                        src={wavve}
                        alt="wavve"
                        onClick={() => {
                          setOttId(3);
                          setSelectedOtt(wavve);
                        }}
                      />
                    </li>
                    <li>
                      <img
                        src={tving}
                        alt="tving"
                        height="25px"
                        onClick={() => {
                          setOttId(4);
                          setSelectedOtt(tving);
                        }}
                      />
                    </li>
                    <li>
                      <img
                        src={disney}
                        alt="disney"
                        onClick={() => {
                          setOttId(5);
                          setSelectedOtt(disney);
                        }}
                      />
                    </li>
                    <li>
                      <img
                        src={prime}
                        alt="prime"
                        onClick={() => {
                          setOttId(6);
                          setSelectedOtt(prime);
                        }}
                      />
                    </li>
                    <li>
                      <img
                        src={laftel}
                        alt="laftel"
                        onClick={() => {
                          setOttId(7);
                          setSelectedOtt(laftel);
                        }}
                      />
                    </li>
                    <li>
                      <img
                        src={apple}
                        alt="apple"
                        onClick={() => {
                          setOttId(8);
                          setSelectedOtt(apple);
                        }}
                      />
                    </li>
                    <li>
                      <img
                        src={office}
                        alt="office"
                        onClick={() => {
                          setOttId(9);
                          setSelectedOtt(office);
                        }}
                      />
                    </li>
                    <li>
                      <img
                        src={nintendo}
                        alt="nintendo"
                        onClick={() => {
                          setOttId(10);
                          setSelectedOtt(nintendo);
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
            <div className="calendar">
              <Calendar setStartDate={setStartDate} />
            </div>
            <div className="searchleftdown">
              <Link to="/guide">
                <div className="guidesee">
                  <div className="guideseeup">
                    <div className="gsul">???????????????</div>
                    <div className="gsur">
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        style={{ color: "#a5a9f8" }}
                        size="1x"
                      />
                    </div>
                  </div>
                  <div className="guideseedown">
                    <div>
                      ?????? ????????? ?????? ????????? ?????????
                      <br />
                      ????????? ?????????.
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/create">
                <div className="createparty">
                  <div className="guideseeup">
                    <div className="gsul">?????? ?????????</div>
                    <div className="gsur">
                      <FontAwesomeIcon
                        icon={faPlusSquare}
                        style={{ color: "#a5a9f8" }}
                        size="1x"
                      />
                    </div>
                  </div>
                  <div className="guideseedown">
                    ?????? ????????? ?????????
                    <br />
                    ????????? ?????? ????????? ?????????.
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="searchright">
            <div className="searchrightheader">
              <div className="srhleft">
                <select
                  className="period"
                  value={period}
                  onChange={(e) => {
                    setPeriod(Number(e.target.value));
                  }}
                >
                  <option value="0">?????? ??????</option>
                  <option value="2">2??????</option>
                  <option value="3">3??????</option>
                  <option value="4">4??????</option>
                  <option value="5">5??????</option>
                  <option value="6">6??????</option>
                  <option value="7">7??????</option>
                  <option value="8">8??????</option>
                  <option value="9">9??????</option>
                  <option value="10">10??????</option>
                  <option value="11">11??????</option>
                  <option value="12">12??????</option>
                </select>
                <select
                  className="people"
                  onChange={(e) => {
                    setNumOfMember(Number(e.target.value));
                  }}
                >
                  <option value="0">?????? ??????</option>
                  <option value="2">2???</option>
                  <option value="3">3???</option>
                  <option value="4">4???</option>
                </select>
              </div>
              <div
                className="srhright"
                onClick={() => {
                  setPeriod(0);
                  setNumOfMember(0);
                }}
              >
                ???????????? ??????
              </div>
            </div>
            <div className="searchparty">
              {partiesState.length === 0 ? (
                <Warning />
              ) : (
                partiesState.map((party, i) => <Party key={i} party={party} />)
              )}
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Search;
