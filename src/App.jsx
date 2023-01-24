import { Routes, Route, BrowserRouter } from "react-router-dom";

// comps

import Logo from "./comps/Logo";
import Nav from "./comps/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Logo />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
