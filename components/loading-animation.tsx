import React, { useEffect, useRef, useState } from "react";
import { init } from "./loading.js";

export default function LoadingAnimation(props: { animationId: number[] }) {
  useEffect(() => {
    init(props.animationId);
    return () => {};
  }, []);

  return (
    <div>
      <canvas id="animation-container" width="200" height="200"></canvas>
    </div>
  );
}
