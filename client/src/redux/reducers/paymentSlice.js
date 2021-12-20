import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getUsersPaymentInfo,
  updateSettlement,
  updateCard,
  updateAccount,
  updateUsingPodo,
} from "../API/paymentAPI";
import { isNotError } from "./errorSlice";

const initialState = {
  credit_num: null,
  credit_expire_month: null,
  credit_expire_year: null,
  credit_birth: null,
  credit_password: null,
  settlement_date: null,
  account_bank: null,
  account_number: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState: initialState,
  reducers: {
    setSettlementDate: (state, action) => {
      console.log(action.payload);
      state.settlement_date = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersPaymentInfo.fulfilled, (state, action) => {
      if (action.payload === {} || !action.payload) {
        return initialState;
      }
      state = action.payload;
      return state;
    });
    builder.addCase(updateSettlement.rejected, (action) => {
      console.log(action.payload);
    });
    builder.addCase(updateCard.fulfilled, () => {});
    builder.addCase(updateCard.rejected, (action) => {});
    builder.addCase(updateAccount.fulfilled, () => {});
    builder.addCase(updateAccount.rejected, (action) => {});
    builder.addCase(updateUsingPodo.fulfilled, () => {});
    builder.addCase(updateUsingPodo.rejected, (action) => {});
  },
});

export const { setSettlementDate } = paymentSlice.actions;
export default paymentSlice.reducer;
