import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { redirects } from "@/libs/utils/conts/redirects";
import path from "path";

/* @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  /* config options here */
  sassOptions: {
    implementation: "sass",
    additionalData: `
    @use "./variables.scss" as v;
    @use "./mixins.scss" as m;
    `,
  },
  redirects: async () => [
    ...redirects,
  ],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
