import { ACT_INCREASE } from "../contrains";
const initialState = 0;

// Khởi tạo reducer cho count
export const count = (state = initialState, action) => {
  console.log("Hành động được gửi lên từ UI: ", action);
  console.log("State: ", state);
  switch (action.type) {
    case ACT_INCREASE:
      // Cập nhật lại state
      return state + 1;
    case "DECREASE":
      // Cập nhật lại state
      return state - 1;

    default:
      return state;
  }
};
