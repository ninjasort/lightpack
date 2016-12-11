import test from 'ava'
import path from 'path'
import Logger from '../src/plugin'
import lightpack from '../src'
import webpack from 'webpack'

process.env.NODE_ENV = 'production'

let config

// NODE_ENV === test
// -------------------------------------------------
test.before(t => {
  config = lightpack({
    context: './fixtures',
    entry: {
      main: ['./src/index.js']
    },
    target: 'node',
    html: {
      template: path.resolve(__dirname, './fixtures/src/index.html')
    }
  }, process.env.NODE_ENV)
})

test.after(t => {
  delete process.env.NODE_ENV
})

test.cb('bundles webpack without errors', t => {
  const compiler = webpack(config)
  compiler.run((err, stats) => {
    if (err) throw new Error(err)

    t.is(err, null)
    t.end()
  })
})