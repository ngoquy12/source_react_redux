import { useSelector } from "react-redux";
export default function Count() {
  // Lấy dữ liệu bên trong store
  const count = useSelector((state) => state.count);
  return (
    <div>
      <h3>Count: {count}</h3>
    </div>
  );
}
