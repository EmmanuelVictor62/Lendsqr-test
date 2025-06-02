export type UserStatusType = "Active" | "Inactive" | "Pending" | "Blacklisted";
export type UserDetailsTabType =
  | "General Details"
  | "Documents"
  | "Bank Details"
  | "Loans"
  | "Savings"
  | "App and System";

export type User = {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: UserStatusType;
  personalInfo: {
    fullName: string;
    phoneNumber: string;
    email: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    residenceType: string;
  };
  educationAndEmployment: {
    levelOfEducation: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: [string, string];
    loanRepayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantors: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  }[];
};
