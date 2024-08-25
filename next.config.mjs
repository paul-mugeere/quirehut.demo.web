import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol : 'https',
                hostname : 'fakeimg.pl',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
