import DailyQuests from "../comps/DailyQuests";
import Stats from "../comps/Stats";
import Purchased from "../comps/Purchased";
import RandomQuests from "../comps/RandomQuests";
import Tasks from "../comps/Tasks";
import User from "../comps/User";

function Home() {
  return (
    <div className="Home">
      <User />
      <Stats />
      <Tasks />
      <RandomQuests />
      <Purchased />
      <DailyQuests />
    </div>
  );
}

export default Home;
