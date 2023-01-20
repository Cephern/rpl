import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Purchased() {
  const { purchased } = useContext(AppContext).user;

  return (
    <div className="Purchased grid-center">
      <h2>Купленное</h2>
      <span className="counter">{purchased.length}/8</span>
      <ul>
        {purchased.map((item) => (
          <li key={Math.random()}>
            <img src="" alt="Item Icon" />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
