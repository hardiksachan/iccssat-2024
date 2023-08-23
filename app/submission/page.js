"use client";

import styles from "@/styles/pages/Submission.module.scss";
import React, { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";


const PackageCard = ({ ieee, nonIeee, title }) => {
  return (
    <div className={styles.PackageCard}>
      <h3 className={styles.PackageCard_title}>{title}</h3>
      <div className={styles.PackageCard_label}>IEEE</div>
      <h4 className={styles.PackageCard_price}>{ieee}</h4>
      <div className={styles.PackageCard_label}>Non-IEEE</div>
      <h4 className={styles.PackageCard_price}>{nonIeee}</h4>
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
          ieee={indian ? "INR 7000" : "USD 300"}
          nonIeee={indian ? "INR 8400" : "USD 350"}
        />
        <PackageCard
          title="Student"
          ieee={indian ? "INR 5000" : "USD 200"}
          nonIeee={indian ? "INR 7200" : "USD 250"}
        />
        <PackageCard
          title="Attendees"
          ieee={indian ? "INR 2500" : "USD 100"}
          nonIeee={indian ? "INR 3500" : "USD 150"}
        />
      </div>
    </div>
  );
};

function SubmissionPage() {
  return (
    <div className={styles.SubmissionPage}>
            <h2 className="h2"> Details of Submission</h2>
      <div className={styles.SubmissionPage_table}>
      <table className={styles.SubmissionPage_table_resp}>
  <thead className={styles.SubmissionPage_table_resp_Tittle}>
    <tr>
      <th>Category</th>
      <th>Dates</th>
    </tr>
  </thead>
  
    <tr>
      <td className={styles.SubmissionPage_table_resp_Content}>Full paper Submission Deadline</td>
      <td className={styles.SubmissionPage_table_resp_Content}>October 31st , 2023</td>
    </tr>
    <tr>
      <td className={styles.SubmissionPage_table_resp_Content}>Acceptance Notification Deadline</td>
      <td className={styles.SubmissionPage_table_resp_Content}>January 31st , 2024</td>
    </tr>
    <tr>
      <td className={styles.SubmissionPage_table_resp_Content}>Camera Ready Manuscript Deadline</td>
      <td className={styles.SubmissionPage_table_resp_Content}>February 15th , 2024</td>
    </tr>
    <tr>
      <td className={styles.SubmissionPage_table_resp_Content}>Conference registration Deadline</td>
      <td className={styles.SubmissionPage_table_resp_Content}>February 28th , 2024</td>
    </tr>
    <tr>
      <td className={styles.SubmissionPage_table_resp_Content}>Conference Dates</td>
      <td className={styles.SubmissionPage_table_resp_Content}>April 26 - 28, 2024</td>
    </tr>
</table>
</div>
            <div className={styles.SubmissionPage_heading}>
      <h2 className="h2">SUBMISSION RULES</h2>
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
            to ICSCCAT 2024.
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
          <br></br></li>
        </ul>
      </div>
    </div>
    <h2 className="h2">Fees</h2>
      <Packages />
    </div>
  );
}

export default SubmissionPage;
