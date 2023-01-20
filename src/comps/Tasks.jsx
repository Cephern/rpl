import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Tasks() {
  const { tasks } = useContext(AppContext).user;

  return (
    <div className="Tasks grid-center">
      <h2>Задачи</h2>
      <ul>
        {tasks.map(({ taskId, taskName }) => (
          <li key={taskId}>
            <p>{taskName}</p>
            <div className="btns">
              <button>Y</button>
              <button>X</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
