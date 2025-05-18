import React from "react";
import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // Return an img element in place of next/image
    return <img {...props} alt="" />;
  },
}));
