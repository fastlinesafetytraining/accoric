import type { MDXComponents } from "mdx/types";

export function useMDXComponents(): MDXComponents {
    return {
        h1: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
        h2: ({ children }) => <h2 className="text-xl font-bold">{children}</h2>,
        h3: ({ children }) => <h3 className="text-lg font-bold">{children}</h3>,
        p: ({ children }) => <p className="text-base">{children}</p>,
        a: ({ children, href }) => <a href={href} className="text-blue-500">{children}</a>,
    };
}
