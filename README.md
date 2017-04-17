![](bolt.png)

# lightpack

> Quick tool for webpack. Call a function and get to the real work...

### Quick Set Up

Add the lib

```sh
$ yarn add lightpack --dev
```

Scaffold a `webpack.config.js`
```sh
$ ./node_modules/.bin/lightpack-config
```

```js
import lightpack from 'lightpack'

const config = lightpack(process.env.NODE_ENV)

module.exports = config
```

Set process.env.NODE_ENV
  - test  
  - development
  - production

Update npm scripts

```json
{
  "scripts": {
    "start": "NODE_ENV=development lightpack-server",
    "build": "NODE_ENV=development lightpack"
  }
}
```
Run webpack or webpack-dev-server

```sh
$ npm start
```
```
$ npm run build
```

### With Options & Plugins

```sh
$ yarn add webpack friendly-errors-webpack-plugin --dev
```

```js
import lightpack from 'lightpack'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'

const config = lightpack({
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

LICENSE

Copyright (c) 2016 Cameron Roe

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.