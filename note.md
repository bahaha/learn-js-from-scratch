### ESLint
Airbnb
```bash
npm info eslint-config-airbnb@latest peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev eslint-config-airbnb@latest
```
It would add `eslint-config-airbnb`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y` and `eslint-plugin-react` to your `package.json` file.

+ use `/* eslint-disable no-console */` to allow the use of `console`
+ use semicolon-less style by set up rules to `.eslintrc.json`
```json
{
	"extends": "airbnb",
	"rules": {
		"semi": [2, "never"],
		"no-unexpected-multiline": 2
	}
}
```