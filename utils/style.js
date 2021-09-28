export const css = (...args) =>
  args.reduce((acc, cur) => (cur ? `${acc} ${cur}` : acc), "");
