import readPkg from 'read-pkg'
import camelCase from 'camelcase';
import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';

const {name} = readPkg.sync()

export default {
    input: 'src/index.js',
    output: [
        { file: 'lib/index.js', format: 'cjs' },
        { file: `lib/${name}.js`, format: 'iife', name: `${camelCase(name)}` },
        { file: `docs/${name}.js`, format: 'iife', name: `${camelCase(name)}` }
    ],
    plugins: [
        resolve(),
        commonjs(),
        builtins(),
        babel({
            plugins: [],
            presets: [
                [
                  '@babel/env'
                ]
            ]
        }),
        terser()
    ]
};
