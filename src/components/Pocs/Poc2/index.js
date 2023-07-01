import Spline from "@splinetool/react-spline";
import React, { Suspense } from "react";
import "./style.css";

function Poc2() {
  return (
    <div>
      <div className="background">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene="https://prod.spline.design/IN9PUsuOpxoZgPWh/scene.splinecode" />
        </Suspense>
        <span className="title">Titre 1</span>
      </div>
    </div>
  );
}

export default Poc2;
