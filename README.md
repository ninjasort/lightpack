# quickpack

> Quick tool for webpack. Call a function and get to the real work...

### Quick Set Up

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

### With Options & Plugins

```sh
$ yarn add webpack friendly-errors-webpack-plugin --dev
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

LICENSE

Copyright (c) 2016 Cameron Roe

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.