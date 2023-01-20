import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function DailyQuests() {
  const { dailyQuests } = useContext(AppContext).user;

  return (
    <div className="DailyQuests grid-center">
      <h2>Дейлики</h2>
      <ul>
        {dailyQuests.map(({ dailyId, dailyName }) => (
          <li key={dailyId}>
            <p>{dailyName}</p>
            <button>Y</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
