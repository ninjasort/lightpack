import test from 'ava'
import Logger from './plugin'
import quickpack from './'

process.env.NODE_ENV = 'test'

let config

// NODE_ENV === test
// -------------------------------------------------
test.before(t => {
  config = quickpack(process.env.NODE_ENV)
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