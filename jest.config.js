import { TestEnvironment } from "jest-environment-jsdom";

module.exports({
    TestEnvironment: 'jsdom',
    testEnvironmentOptions: {
        resources: 'usable',
    }
})