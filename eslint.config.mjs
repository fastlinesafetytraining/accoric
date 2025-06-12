import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import cspellPlugin from "@cspell/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		plugins: { '@cspell': cspellPlugin},
		rules: {
			'@cspell/spellchecker': ['error', {
				configFile: './cspell.config.yaml'

			}]
		}
	}
];

export default eslintConfig;
