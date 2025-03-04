import { Link } from "react-router-dom";
import { Item, Alert } from "./store";

const Requirement = () => {
  const { items, remove, payload } = Item.use();
  return (
    <div>
      <h1>요구사항 명세 내용 출력</h1>

      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <Link to={item.id} onClick={() => setPayl}>
              {index + 1}. {item.status}
              <button onClick={() => remove(item.id)}>삭제</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Requirement;
