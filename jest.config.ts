import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "<rootDir>/__mocks__/svgMock.tsx",
    "^@/(.*)$": "<rootDir>/$1",
    "^constants/(.*)$": "<rootDir>/constants/$1",
    "\\.svg$": "<rootDir>/__mocks__/svgrMock.tsx",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
};

export default config;
