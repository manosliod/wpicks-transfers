import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    env: {
        CROWDIN_API_TOKEN: process.env.CROWDIN_API_TOKEN,
        CROWDIN_PROJECT_ID: process.env.CROWDIN_PROJECT_ID
    },
};

export default nextConfig;
