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
            <div className={styles.SubmissionPage_heading}>
      <h1 className={styles.h1}>SUBMISSION RULES</h1>
      <div className={styles.secion_rules_box}>
        <ul className={styles.SubmissionPage_square}>
          <li className={styles.SubmissionPage_notes}>
            All the papers submitted to the conference should be written in
            English with the maximum page length of six printed pages (10pt
            font).
          </li>
          <li className={styles.SubmissionPage_notes}>
            {" "}
            Authors should submit their original unpublished work in PDF format
            to ICSCCC 2023.
          </li>
          <li className={styles.SubmissionPage_notes}>
            Simultaneous submissions (papers already submitted to other
            conferences/journals) are not allowed.
          </li>
          <li className={styles.SubmissionPage_notes}>
            {" "}
            Submission should strictly follow recommended IEEE conference
            template, which can be found here.
          </li>
          <li className={styles.SubmissionPage_notes}>
            The decision regarding the acceptance of paper is at the discretion
            of Technical Program Committee.
          </li>
          <li className={styles.SubmissionPage_notes}>
            Plagiarism Check using Turnitin.
          </li>
          <li className={styles.SubmissionPage_notes}>
            All the paper submission will be done on EasyChair conference
            management software.
          </li>
          <li className={styles.SubmissionPage_notes}>
            Reviewer assignment will be made using EasyChair.
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.heading}>Fees</div>
      <Packages />
    </div>
  );
}

export default SubmissionPage;
