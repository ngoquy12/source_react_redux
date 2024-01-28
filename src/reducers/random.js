const initialValue = [];
export const random = (state = initialValue, action) => {
  switch (action.type) {
    case "RANDOM":
      // Tạo một bản sao của state
      const newState = [...state];
      // Push dữ liệu vào trong mảng
      newState.push(action.payload);
      // Trả về giá trị của state
      return newState;
    default:
      return state;
  }
};
