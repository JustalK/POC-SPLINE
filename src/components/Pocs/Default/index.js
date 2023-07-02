import Spline from "@splinetool/react-spline";
import React, { Suspense } from "react";

function Default({ children, url }) {
  return (
    <div>
      <div className="background">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene={url} />
        </Suspense>
        {children}
      </div>
    </div>
  );
}

export default Default;
