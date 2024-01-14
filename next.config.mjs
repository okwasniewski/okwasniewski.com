import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkHint from "remark-hint";
import remarkToc from 'remark-toc'
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const options = {
  theme: "material-theme-darker",
};

const mdxConfig = {
  extension: /\.mdx?$/,
  options: {
    jsx: true,
    remarkPlugins: [remarkGfm, remarkHint, remarkToc],
    rehypePlugins: [rehypeAutolinkHeadings,rehypeSlug,[rehypePrettyCode, options]],
  },
};

const withMDX = createMDX(mdxConfig);

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
};

export default withMDX(nextConfig);
