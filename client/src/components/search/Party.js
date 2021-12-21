import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateToStringPoint, refinePrice } from "../../utils/dateFunction";
import { showJoinPartyModal } from "../../redux/reducers/modalSlice";
import { BiWon } from "react-icons/bi";

function Party(props) {
  const dispatch = useDispatch();
  const ottState = useSelector((state) => state.ott);
  const party = props.party;

  const priceOfParty = refinePrice(
    ottState[party.ott_id - 1].price,
    party.members_num
  );

  return (
    <>
      <div
        className="partyexp"
        onClick={() => {
          props.setSelectedParty(party);
          dispatch(showJoinPartyModal(true));
        }}
      >
        <div className="partyexpup">
          <div className="peus">
            <span className="peusp">{party.period}개월</span>
            {party.members_num}인 파티 지금 시작
          </div>
          <div className="ottfee">
            <div className="won">
              <BiWon style={{ color: "#c6c6c6" }} />
            </div>
            월 {priceOfParty}원
          </div>
        </div>

        <div className="partyexpdown">
          {dateToStringPoint(party.start_date)} ~{" "}
          {dateToStringPoint(party.end_date)} 까지
        </div>
      </div>
    </>
  );
}

export default Party;
