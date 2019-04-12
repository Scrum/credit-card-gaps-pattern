import readPkg from 'read-pkg'
import camelCase from 'camelcase';
import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";

const {name} = readPkg.sync()

export default {
    input: 'src/index.js',
    output: [
        { file: 'lib/index.js', format: 'cjs' },
        { file: `lib/${name}.js`, format: 'iife', name: `${camelCase(name)}` }
    ],
    plugins: [
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
