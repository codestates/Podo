import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMoney } from "../../redux/API/userAPI";
import {
  showWithdrawModal,
  showAccountModal,
} from "../../redux/reducers/modalSlice";
import { bankList } from "../../utils/dateFunction";
import Swal from "sweetalert2";
import "../../style/Modal.scss";
import { BsXLg } from "react-icons/bs";
import PodoMoney from "../../image/PodoMoney.svg";

function WithdrawModal(props) {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const errorState = useSelector((state) => state.error);
  const paymentState = useSelector((state) => state.payment);
  const [withdraw, setWithdraw] = useState(0);
  const onClickWithdraw = () => {
    if (withdraw > useState.money) {
      Swal.fire(
        "Unsuccess!",
        "잔액보다 큰 금액입니다. 다시 입력해주세요.🥺",
        "error"
      );
    }
    dispatch(updateMoney({ withdraw: withdraw }));
    if (errorState) {
      Swal.fire(
        "Unsuccess!",
        "인출 신청을 실패했습니다. 다시 시도해주세요.🥺",
        "error"
      );
    } else {
      Swal.fire(
        "Success!",
        "인출 신청을 성공했습니다. 3~4 영업일 소요됩니다.",
        "success"
      );
    }
  };

  return (
    <>
      <div className="page">
        <div className="modalback">
          <div className="withdrawalmodalview">
            <div className="exit">
              <div onClick={() => dispatch(showWithdrawModal(false))}>
                <BsXLg />
              </div>
            </div>
            <div className="wdmheader">인출하기</div>
            <div className="podomoney">Podo 머니 잔액</div>
            <div className="wdmmf">
              <div className="wdmmff">
                <img src={PodoMoney} alt="podomoney"></img>
              </div>
              <div className="wdmmfs">현재 잔액 {userState.money}원</div>
            </div>
            <div className="withdrawalaccount">인출 계좌</div>
            <div
              className="wdmms"
              onClick={() => {
                dispatch(showAccountModal(true));
                dispatch(showWithdrawModal(false));
              }}
            >
              {paymentState.account_bank ? (
                `${bankList[paymentState.account_bank]} ${
                  paymentState.account_number
                } (변경)`
              ) : (
                <>
                  <div className="wdmmff">+ 계좌 등록하기</div>
                  <div className="wdmmfs">본인 명의의 계좌를 등록해주세요.</div>
                </>
              )}
            </div>
            <div className="withdrawalguide">인출 신청 안내</div>
            <div className="wdmpay">
              <div className="wdmpayw">
                - 인출 시 등록하신 계좌로 바로 입금됩니다.
              </div>
              <div className="wdmpayw">
                - 본인 명의의 계좌가 아닌 경우 인출이 제한됩니다.
              </div>
            </div>

            <div className="clearbtnwrap">
              <button className="clearbtn" onClick={onClickWithdraw}>
                <div className="clearbtnw">완료</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WithdrawModal;
