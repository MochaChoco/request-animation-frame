import LoadingAnimation from "../components/loading-animation";
import styles from "../styles/Home.module.css";
import React, { useState, useRef } from "react";

export default function Home() {
  const [isShow, setIsShow] = useState(false);
  const animationId = useRef<number[]>([]);

  const freeMemory = () => {
    console.log("animationId", animationId.current);
    for (let id in animationId.current) {
      cancelAnimationFrame(Number(id));
    }
  };

  return (
    <div className={styles.main}>
      <div style={style.wrapper}>
        <div
          style={style.hoverIcon}
          onMouseEnter={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}
        >
          hover mouse
        </div>
        <button style={style.memoryFreeBtn} onClick={freeMemory}>
          메모리 해제
        </button>
        ;
      </div>
      {isShow && <LoadingAnimation animationId={animationId.current} />}
    </div>
  );
}

const style = {
  wrapper: {
    position: "absolute",
    top: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hoverIcon: {
    cursor: "hover",
    backgroundColor: "gray",
    width: "100px",
    height: "100px",
    marginRight: "8px",
  },
  memoryFreeBtn: {
    marginLeft: "8px",
  },
};
