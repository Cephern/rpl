import { Routes, Route, BrowserRouter } from "react-router-dom";

// comps

import Logo from "./comps/Logo";
import User from "./comps/User";
import Nav from "./comps/Nav";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Logo /> */}
        <Nav />
        <User />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
