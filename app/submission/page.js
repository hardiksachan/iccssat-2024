"use client";

import styles from "@/styles/pages/Submission.module.scss";
import React, { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";


const PackageCard = ({ ieee, nonIeee, title }) => {
  return (
    <div className={styles.PackageCard}>
      <h3 className={styles.PackageCard_title}>{title}</h3>
      <h4 className={styles.PackageCard_price}>{ieee}</h4>
      <div className={styles.PackageCard_label}>IEEE</div>
      <h4 className={styles.PackageCard_price}>{nonIeee}</h4>
      <div className={styles.PackageCard_label}>Non-IEEE</div>
    </div>
  );
};

const Packages = () => {
  const [indian, setIndian] = useState(true);
  return (
    <div className={styles.Packages}>
      <div
        className={styles.Packages_btn}
      >
        <span>Indians</span>
        <span className={styles.Packages_toggle} onClick={() => {
          setIndian((i) => !i);
        }}>{indian ? <FaToggleOff /> : <FaToggleOn />}</span>
        <span>International</span>
      </div>
      <div className={styles.Packages_list}>
        <PackageCard
          title="Researcher"
          ieee={indian ? "INR 7000" : "USD 200"}
          nonIeee={indian ? "INR 4000" : "USD 300"}
        />
        <PackageCard
          title="Researcher"
          ieee={indian ? "INR 7000" : "USD 200"}
          nonIeee={indian ? "INR 4000" : "USD 300"}
        />
        <PackageCard
          title="Researcher"
          ieee={indian ? "INR 7000" : "USD 200"}
          nonIeee={indian ? "INR 4000" : "USD 300"}
        />
      </div>
    </div>
  );
};

function SubmissionPage() {
  return (
    <div className={styles.SubmissionPage}>
      <Packages />
    </div>
  );
}

export default SubmissionPage;
