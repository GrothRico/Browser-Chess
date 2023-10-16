module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  moduleFileExtensions: ["js", "ts", "html"],
  transform: {
    "^.+\\.html?$": "jest-html-loader",
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        babel: true,
        tsconfig: "<rootDir>/tsconfig.json",
      },
    ],
  },
  transformIgnorePatterns: ["node_modules/(?!troublesome-dependency/.*)"],
};
