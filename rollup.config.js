import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from 'rollup-plugin-uglify';
import clear from "rollup-plugin-clear";

export default {
  input: "src/index.js",
  output: {
    name: "autoSizeEchart.js",
    dir: "./dist",
    format: "es"
  },
  plugins: [
    clear({
      targets: ["./dist"],
      watch: true
    }),
    resolve(),
    commonjs(),
    uglify()
  ]
};
