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

### Compat
a ESLint plugin that warns you if you use some JavaScript APIs that are not available in the browsers you need to support.
+ Run `yarn add -D eslint-plugin-compat`
+ set up `package.json` with `browserslist: ["> 1%"]`
+ edit `.eslintrc.json`

### Flow
a static type checker by Facebook.
+ Run `yarn add -D flow-bin babel-preset-flow babel-eslint eslint-plugin-flowtype`
+ update `.babelrc`, add `flow` to presets
+ udpate `.eslintrc.json`
+ add flow config file `.flowconfig` to ignore any warning detected on the next line by setting up `suppress_comment`, so it could use like `something.flow(doesnt.like).for.instance()`

### Jest
+ Run `yarn add -D jest babel-jest`
+ Add `"env": { "jest": true }` to `.eslintrc.json` file