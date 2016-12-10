# quickpack

> Quick tool for webpack. Call a function and get to the real work...

### Usage

Add the lib

```sh
$ yarn add quickpack --dev
```

- Create a `webpack.config.js`
- Set process.env.NODE_ENV
  - test  
  - development
  - production

```js
import quickpack from 'quickpack'

const config = quickpack(process.env.NODE_ENV)

module.exports = config
```

With Options & Plugins

```sh
yarn add webpack friendly-errors-webpack-plugin --dev
```

```js
import quickpack from 'quickpack'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'

const config = quickpack({
  entry: {
    main: ['./src/index'], // main required
    vendor: ['./src/vendor']
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin()
  ]
}, process.env.NODE_ENV)

module.exports = config
```



