export default {
  concurrency: 10,
  nodeResolve: true,
  watch: true,
  rootDir: "./",
  files: [
    "**/*.spec.ts", // include `.spec.ts` files
    "!**/*.e2e.spec.ts", // exclude `.e2e.spec.ts` files
    "!**/node_modules/**/*" // exclude any node modules
  ]
};
