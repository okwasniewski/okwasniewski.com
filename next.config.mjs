import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

const mdxConfig = {
  extension: /\.mdx?$/,
  options: {
    jsx: true,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
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
