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
### React Hot Module Replacement
+ Run `yarn add react-hot-loader@next`
+ Update `webpack.config.babel.js`
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

### Husky
set up Git Hooks to automatically run the task before every `git commit` and `git push`.
+ Run `yarn add -D husky`
+ Add scripts to `package.json`

### Express
+ set up `isProd` in `util.js` with `eslint-disable-next-line import/prefer-default-export`
+ Run `yarn add express compression`
+ `compression` is an Express middleware to activate **`Gzip`** compression on the server
+ add `config.js` file to define `WEB_PROT`, `STATIC_PATH` and `APP_NAME` constants
+ change `yarn start` script from `package.json`
+ use `Nodemon` to automatically restart Node server when file changes happen in the directory by using script `nodemon --ignore lib --exec babel-node src/server`

### PM2
It keeps your process alive in **production**, and offer tons of features to manage them
+ Run `yarn add -D pm2`
+ clean up the `lib` folder before a new build by using `rimraf`, Run `yarn add -D rimraf` and add new script `rimraf lib && babel src -d lib --ignore .test.js`
+ use `prod:start` to run app, stop by `prod:stop`
We are going to pass a `NODE_ENV` environment variable to PM2, With Unix, you would do this by running `NODE_ENV=production pm2`, but Windows uses a different syntax.
+ Run `yarn add -D cross-env` to make the syntax work on Windows

### Webpack
+ add `babel-polyfill` to dependency to use some of the most recent ES features in clinet code
+ add `webpack.config.babel.js` to bundle this ES6 client app into an ES5 bundle.
+ `.babel.js` to apply babel transformations to this config file.
+ Run `yarn add -D webpack webpack-dev-server babel-core babel-loader`
+ We will use `webpack-dev-server` to do **`Hot Module Reloading`** when develop, and in production, we will simply use `webpack` to generate bundle.
+ use `--progress` flag to display additional information when Webpack compiling
+ use `-p` flag to minify our code and set the `NODE_ENV` to `production`

### React Helmet
A library to inject content to the `head` of a React app, on both the client and the server.
+ `const head = Helmet.rewind()`

### Socket.IO
A library to easily deal with `Websockets`
+ Run `yarn add socket.io socket.io-client`
+ [set up with `Express`](https://socket.io/docs/#using-with-express-3/4)
+ use the server reference of `http.Server(express())` to listen on PORT