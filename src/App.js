import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Poc1 from "./components/Pocs/Poc1";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/poc1">Poc1</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/poc1" element={<Poc1 />} />
          <Route path="/" element={<Poc1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
