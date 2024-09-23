import React from "react";
import styles from "./style";
import "animate.css";
import Image from "next/image";
import "../app/index.css";
import { LeftMain, RightMain, LeftIcons } from "@/app/const";

const Main = () => {
  return (
    <div
      id="Home"
      className={`h-[calc(100vh-100px)] ${styles.pagePaddingX} 
    flex flex-col justify-center items-center w-full max-mdp:h-fit py-[250px] relative mavi`}
    >
      <div className="blue__gradient w-[50%] h-[50%] rounded-[50%] absolute top-10 right-0"></div>
      <div className="absolute top-[200px] left-0 pink__gradient w-[20%] h-[20%] rounded-[50%]"></div>
      <div
        id="container"
        className="relative mt-[-150px] w-fit flex flex-row justify-between gap-[150px] max-mdp:gap-[50px] max-mdp:justify-center items-initial flex-wrap"
      >
        <LeftMain />
        <RightMain />
        <LeftIcons />
      </div>
    </div>
  );
};

export default Main;
