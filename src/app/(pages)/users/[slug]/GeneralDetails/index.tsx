import React from "react";

import { User } from "types/user";

import styles from "./details.module.scss";

interface KeyValue {
  label: string;
  value: string;
}

interface SectionData {
  heading: string;
  fields: KeyValue[];
}

interface GeneralDetailsProps {
  user: User;
}

const GeneralDetails: React.FC<GeneralDetailsProps> = ({ user }) => {
  console.log(user);
  const sections: SectionData[] = [
    {
      heading: "Personal Information",
      fields: [
        { label: "Full Name", value: user?.personalInfo.fullName },
        { label: "Phone Number", value: user?.personalInfo.phoneNumber },
        { label: "Email Address", value: user?.personalInfo.email },
        { label: "BVN", value: user?.personalInfo.bvn },
        { label: "Gender", value: user?.personalInfo.gender },
        { label: "Marital Status", value: user?.personalInfo.maritalStatus },
        { label: "Children", value: user?.personalInfo.children },
        { label: "Type of Residence", value: user?.personalInfo.residenceType },
      ],
    },
    {
      heading: "Education and Employment",
      fields: [
        {
          label: "Level of Education",
          value: user?.educationAndEmployment.levelOfEducation,
        },
        {
          label: "Employment Status",
          value: user?.educationAndEmployment.employmentStatus,
        },
        {
          label: "Sector of Employment",
          value: user?.educationAndEmployment.sector,
        },
        {
          label: "Duration of Employment",
          value: user?.educationAndEmployment.duration,
        },
        {
          label: "Office Email",
          value: user?.educationAndEmployment.officeEmail,
        },
        {
          label: "Monthly Income",
          value: user?.educationAndEmployment.monthlyIncome.join(" - "),
        },
        {
          label: "Loan Repayment",
          value: user?.educationAndEmployment.loanRepayment,
        },
      ],
    },
    {
      heading: "Socials",
      fields: [
        { label: "Twitter", value: user?.socials.twitter },
        { label: "Facebook", value: user?.socials.facebook },
        { label: "Instagram", value: user?.socials.instagram },
      ],
    },
    {
      heading: "Guarantor",
      fields: user?.guarantors.flatMap((guarantor, i) => [
        { label: "Full Name", value: guarantor.fullName },
        { label: "Phone Number", value: guarantor.phoneNumber },
        { label: "Email Address", value: guarantor.email },
        { label: "Relationship", value: guarantor.relationship },
        ...(i < user.guarantors.length - 1 ? [{ label: "", value: "" }] : []), // This helps me add a space between each of the row in guarantor
      ]),
    },
  ];

  return (
    <div className={styles["general-details"]}>
      {sections.map((section, i) => (
        <div key={i} className={styles["general-details__section"]}>
          <h2 className={styles["general-details__section-heading"]}>
            {section.heading}
          </h2>
          <div className={styles["general-details__section-grid"]}>
            {section.fields?.map((field, index) => (
              <div
                key={index}
                className={styles["general-details__section-grid-item"]}
              >
                {field.label && (
                  <p
                    className={
                      styles["general-details__section-grid-item-label"]
                    }
                  >
                    {field.label}
                  </p>
                )}
                <p
                  className={styles["general-details__section-grid-item-value"]}
                >
                  {field.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GeneralDetails;
