import DailyQuests from "../comps/DailyQuests";
import Purchased from "../comps/Purchased";
import RandomQuests from "../comps/RandomQuests";
import Tasks from "../comps/Tasks";

import "../styles/Home.css";

function Home() {
  return (
    <div className="Home grid gridParams">
      <Tasks />
      <RandomQuests />
      <Purchased />
      <DailyQuests />
    </div>
  );
}

export default Home;
