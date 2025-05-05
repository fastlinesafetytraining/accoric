import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { redirects } from "@/libs/utils/conts/redirects";

/* @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  /* config options here */
  redirects: async () => [
    ...redirects,
  ],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
