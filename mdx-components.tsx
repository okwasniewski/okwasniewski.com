import type { MDXComponents } from "mdx/types";
import { Pre } from "@/components/pre";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: Pre,
    ...components,
  };
}
