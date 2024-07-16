import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./src/",
});

// Add any custom config to be passed to Jest
const config: Config = {
    coverageProvider: "v8",
    setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
    testEnvironment: "jsdom",
    rootDir: "./src/",
    coveragePathIgnorePatterns: [
        "<rootDir>/components/atoms/checkoutTableHeader/CheckoutTableHeader.tsx", // No logic to test
        "<rootDir>/components/atoms/checkoutTablePayment/CheckoutTablePayment.tsx", // No logic to test, uses mui & redux only
        "<rootDir>/components/atoms/imageListItemImage/ImageListItemImage.tsx", // No logic to test
        "<rootDir>/components/atoms/imageListItemImageInfo/ImageListItemImageInfo.tsx", // No logic to test
        "<rootDir>/components/atoms/imageTrackArrow/ImageTrackArrow.tsx", // No logic to test
        "<rootDir>/components/molecules/checkoutTable/CheckoutTable.tsx", // No logic to test
        "<rootDir>/components/molecules/eCommerce/ECommerce.tsx", // No logic to test
        "<rootDir>/components/molecules/modal/Modal.tsx", // No logic to test
        "<rootDir>/components/molecules/logoBtn/LogoBtn.tsx", // No logic to test
        "<rootDir>/components/organisms/Payment/Payment.tsx", // Temp skip before full feature implementation
        "<rootDir>/contexts/refProvider.tsx", // No logic to test
    ],
    moduleNameMapper: {
        // ...
        "^@/(.*)$": "<rootDir>/$1",
    },
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
