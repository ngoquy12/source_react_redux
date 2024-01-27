import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_increase } from "../actions/actionTypes";
import { resourceVN } from "../resources/resourceVN";

export default function Count() {
  // Lấy dữ liệu bên trong store
  const count = useSelector((state) => state.count);
  // Khai báo hàm dispatch
  const dispatch = useDispatch();

  // Hàm xử lý tăng
  const handleIncrease = () => {
    dispatch(act_increase());
  };

  // Hàm xử lý giảm
  const handleDecrease = () => {
    dispatch({
      type: "DECREASE",
    });
  };
  return (
    <div>
      <h1>{resourceVN.feature}</h1>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
