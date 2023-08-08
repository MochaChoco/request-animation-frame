import TestAnimation from "../components/test-animation";
import styles from "../styles/Home.module.css";
import React, { useState, useRef } from "react";

export default function Home() {
  const [isShow, setIsShow] = useState(false);

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
      </div>
      {isShow && <TestAnimation />}
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
