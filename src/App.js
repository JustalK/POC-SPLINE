import "./App.css";
import Spline from "@splinetool/react-spline";
import React, { Suspense } from "react";

function App() {
  return (
    <div>
      <div className="projects">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </Suspense>
      </div>
      <div className="projects">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene="https://prod.spline.design/0e-TsmVASNd3Rhym/scene.splinecode" />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
