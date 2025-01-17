/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables React's Strict Mode for better error handling
    swcMinify: true, // Enables SWC-based minification
    webpack(config, { isServer }) {
        // Customize Webpack config if needed
        return config;
    },
};

export default nextConfig;
