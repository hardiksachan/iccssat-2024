import React from "react";
import styles from "@/styles/pages/Submission.module.scss";

function PackageCard() {
  return (
    <div className={styles.packages}>
      <h1>Researcher</h1>
      <h2 className={styles.text1}>&dollar;300</h2>
      <h2 className={styles.text2}>₹ 7000</h2>
      <ul className={styles.list}>
        <li className={styles.first}>IEEE</li>
        <h2 className={styles.text3}>&dollar;350</h2>
        <h2 className={styles.text4}>₹ 8400</h2>
        <li className={styles.first}>Non - IEEE</li>
      </ul>
    </div>
  );
}

export default PackageCard;
