import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { redirects } from "@/libs/utils/const/redirects";

/* @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  /* config options here */
  sassOptions: {
    implementation: "sass",
    additionalData: `
    @use "./styles/_variables.scss" as v;
    @use "./styles/_mixins.scss" as m;
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
