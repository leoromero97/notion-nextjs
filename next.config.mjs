/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
        port: '',
        pathname: '/e3dd1d15-e027-427f-86ac-806101de075b/**',
      },
    ],
  }
};

export default nextConfig;
