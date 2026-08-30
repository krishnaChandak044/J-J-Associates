import React from "react";
import styles from "./WaveDivider.module.css";

interface WaveDividerProps {
  position?: "top" | "bottom";
  flip?: boolean;
  fillColor?: string;
}

export function WaveDivider({
  position = "bottom",
  flip = false,
  fillColor = "var(--color-surface)",
}: WaveDividerProps) {
  const isTop = position === "top";

  return (
    <div
      className={`${styles.waveWrapper} ${isTop ? styles.waveTop : styles.waveBottom} ${
        flip ? styles.waveFlip : ""
      }`}
    >
      <svg
        className={styles.waveSvg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill={fillColor}
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,160C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
