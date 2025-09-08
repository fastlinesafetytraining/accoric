import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import cspellPlugin from "@cspell/eslint-plugin";
import customMarkdownPlugin from "./eslint-rules/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		plugins: { 
			'@cspell': cspellPlugin,
			'custom-markdown': customMarkdownPlugin
		},
		rules: {
			'@cspell/spellchecker': ['error', {
				configFile: './cspell.config.yaml'
			}]
		}
	},
	// Markdown-specific configuration
	{
		files: ["**/*.md", "**/*.mdx"],
		plugins: {
			'custom-markdown': customMarkdownPlugin
		},
		languageOptions: {
			parser: require('@babel/parser'),
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'script',
				allowImportExportEverywhere: true,
				allowReturnOutsideFunction: true,
				plugins: ['jsx', 'typescript']
			},
		},
		rules: {
			// Custom rule for markdown metadata validation
			'custom-markdown/markdown-metadata': ['error', {
				requiredFields: [
					'title',
					'date', 
					'author',
					'slug',
					'image',
					'imageAlt',
					'excerpt'
				]
			}],
		},
	}
];

export default eslintConfig;
