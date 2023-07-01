import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pocs from "./components/Pocs";
import Poc1 from "./components/Pocs/Poc1";

function App() {
  return (
    <Router>
      <div>
        <div className="navigation">
          <nav>
            <ul>
              {Object.keys(Pocs).map((e, index) => (
                <li key={index}>
                  <a href={`/${index + 1}`}>{e}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="content">
          <Routes>
            {Object.keys(Pocs).map((e, index) => {
              const Type = Pocs[e];
              return <Route path={`/${index + 1}`} element={<Type />} />;
            })}
            <Route path="/" element={<Poc1 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
