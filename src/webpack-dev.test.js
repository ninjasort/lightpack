import test from 'ava'
import Logger from './plugin'
import lightpack from './'

process.env.NODE_ENV = 'development'

let config

// NODE_ENV === development
// -------------------------------------------------
test.before(t => {
  config = lightpack(process.env.NODE_ENV)
})

test('webpack has a config object', t => {
  t.is(typeof config, 'object')
})

test('should add new plugin', t => {
  const less = lightpack(process.env.NODE_ENV) // 5
  const more = lightpack({ plugins: [new Logger({ message: 'works' })] }, process.env.NODE_ENV) // 6
  t.is(more.plugins.length > less.plugins.length, true)
})