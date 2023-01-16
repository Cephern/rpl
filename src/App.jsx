import DailyQuests from "./comps/DailyQuests";
import GetCoins from "./comps/GetCoins";
import Logo from "./comps/Logo";
import Purchased from "./comps/Purchased";
import RandomQuests from "./comps/RandomQuests";
import Tasks from "./comps/Tasks";
import User from "./comps/User";

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="container">
        <User />
        <Tasks />
        <RandomQuests />
        <Purchased />
        <GetCoins />
        <DailyQuests />
      </div>
    </div>
  );
}

export default App;
