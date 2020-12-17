import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <p data-testid="result">hi</p>
    </div>
  );
}
