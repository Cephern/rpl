import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function RandomQuests() {
  const { randomQuests } = useContext(AppContext).user;

  return (
    <div className="RandomQuests grid-center">
      <h2>Рандомки</h2>
      <ul>
        {randomQuests.map(({ randomQuestId, randomQuestName }) => (
          <li key={randomQuestId}>
            <p>{randomQuestName}</p>
            <button>Y</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
