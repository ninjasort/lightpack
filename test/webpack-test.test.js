import test from 'ava'
import Logger from '../src/plugin'
import lightpack from '../src'

process.env.NODE_ENV = 'test'

let config

// NODE_ENV === test
// -------------------------------------------------
test.before(t => {
  config = lightpack(process.env.NODE_ENV)
})

test.after(t => {
  delete process.env.NODE_ENV
})

test('webpack externals have a default', t => {
  t.deepEqual(
    config.externals,
    {
      'jsdom': 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    }
  )
})