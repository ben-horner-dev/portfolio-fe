import { dirname, join } from "path";
import { fileURLToPath } from "url";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    webpack: (config, { isServer }) => {
        const __dirname = dirname(fileURLToPath(import.meta.url));
        config.resolve.alias["@"] = join(__dirname, "src");
        return config;
    },
};

export default nextConfig;
