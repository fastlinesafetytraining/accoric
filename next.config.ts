import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/* @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  /* config options here */
};

export default nextConfig;
