module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "setupFiles": [
        "<rootDir>/src/setupTests.ts"
    ],
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
}

