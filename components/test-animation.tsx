import React, { useEffect, useRef, useState } from "react";
import { init, destroy } from "./animation.js";

export default function TestAnimation() {
  const animationId = useRef<number>(0);
  useEffect(() => {
    init(animationId);

    return () => {
      destroy(animationId);
    };
  }, []);

  return (
    <div>
      <canvas id="animation-container" width="200" height="200"></canvas>
    </div>
  );
}
