# quickpack

> Quick tool for webpack. Call a function and get to the real work...

### Usage

Add the lib

```sh
$ yarn add quickpack --dev
```

Create a `webpack.config.js`

```js
import quickpack from 'quickpack'

const config = quickpack(process.env.NODE_ENV)

module.exports = config
```