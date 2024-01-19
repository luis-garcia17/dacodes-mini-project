/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    prependData: `
      @import './src/app/variables';
    `,
  },
};

export default nextConfig;
