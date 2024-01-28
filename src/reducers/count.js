const initialState = 0;
export const count = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      // Cập nhật lại state
      return state + 1;
    case "DECREASE":
      // Cập nhật lại state
      return state - 1;
    default:
      return state;
  }
};
