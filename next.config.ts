import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    env: {
        API_BASE_URL: process.env.API_BASE_URL,
        CROWDIN_API_TOKEN: process.env.CROWDIN_API_TOKEN,
        CROWDIN_PROJECT_ID: process.env.CROWDIN_PROJECT_ID
    },
};

export default nextConfig;
