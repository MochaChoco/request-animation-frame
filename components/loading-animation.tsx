import React, { useEffect, useRef, useState } from "react";
import { init, destroy } from "./loading.js";

export default function LoadingAnimation(props: { animationId: number[] }) {
  useEffect(() => {
    init(props.animationId);

    return () => {
      destroy();
    };
  }, []);

  return (
    <div>
      <canvas id="animation-container" width="200" height="200"></canvas>
    </div>
  );
}
