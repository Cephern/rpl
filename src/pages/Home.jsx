import DailyQuests from "../comps/DailyQuests";
import GetCoins from "../comps/GetCoins";
import Purchased from "../comps/Purchased";
import RandomQuests from "../comps/RandomQuests";
import Tasks from "../comps/Tasks";
import User from "../comps/User";

function Home() {
  return (
    <div className="container">
      <User />
      <Tasks />
      <RandomQuests />
      <Purchased />
      <GetCoins />
      <DailyQuests />
    </div>
  );
}

export default Home;
