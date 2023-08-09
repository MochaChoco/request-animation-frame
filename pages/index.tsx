import TestAnimation from "../components/test-animation";
import styles from "../styles/Home.module.css";
import React, { useState, useRef } from "react";

export default function Home() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={styles.main}>
      <div style={style.wrapper}>
        <p style="margin-bottom: 50px">
          <img
            style="margin: 0px"
            src="https://velog.velcdn.com/images/swj9077/post/5de868b4-3fe6-49a1-9ee5-36fa4d3f11d4/image.png"
          />
          <img
            style="margin: 0px"
            src="https://velog.velcdn.com/images/swj9077/post/587ec66f-663c-4011-89f2-c499a9e79369/image.gif"
          />
        </p>
        <p style="margin-bottom: 50px">
          <img
            style="margin: 0px"
            src="https://velog.velcdn.com/images/swj9077/post/366308ae-ec77-4e4d-bd43-80a0a533a937/image.png"
          />
          <img src="https://velog.velcdn.com/images/swj9077/post/1246f41c-a747-478f-a5a7-220c7ab894ae/image.gif" />
        </p>

        <div
          style={style.hoverIcon}
          onMouseEnter={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}
        >
          <p>hover mouse</p>
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "hover",
    backgroundColor: "gray",
    width: "160px",
    height: "160px",
    marginRight: "8px",
    color: "#fff",
    fontSize: "20px",
  },
  memoryFreeBtn: {
    marginLeft: "8px",
  },
};
