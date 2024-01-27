const initialValue = [];

export const random = (state = initialValue, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "RANDOM":
      // Cập nhật lại state
      // Lưu ý: Không nên cập nhật trực tiếp vào state của component, mà chúng ta nên tạo ra
      // một bản sao của state đó
      const newState = [...state];

      // Push dữ liệu vào trong mảng
      newState.push(action.payload);

      // Trả về giá trị của state
      return newState;

    default:
      return state;
  }
};
