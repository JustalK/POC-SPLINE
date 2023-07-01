import Spline from "@splinetool/react-spline";
import React, { Suspense } from "react";

function Poc2() {
  return (
    <div>
      <div className="background">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene="https://prod.spline.design/SmfsFdai2EBiBM9B/scene.splinecode" />
        </Suspense>
      </div>
    </div>
  );
}

export default Poc2;
