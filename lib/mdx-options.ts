import rehypePrettyCode from "rehype-pretty-code";

const rehypePrettyCodeOptions = {
  theme: "one-dark-pro",
  keepBackground: false,
};

export const mdxRehypePlugins = [[rehypePrettyCode, rehypePrettyCodeOptions]];
