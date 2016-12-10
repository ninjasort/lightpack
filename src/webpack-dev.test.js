import test from 'ava'
import Logger from './plugin'
import quickpack from './'

process.env.NODE_ENV = 'development'

let config

// NODE_ENV === development
// -------------------------------------------------
test.before(t => {
  config = quickpack(process.env.NODE_ENV)
})

test('webpack has a config object', t => {
  t.is(typeof config, 'object')
})

test('should add new plugin', t => {
  const less = quickpack(process.env.NODE_ENV) // 5
  const more = quickpack({ plugins: [new Logger({ message: 'works' })] }, process.env.NODE_ENV) // 6
  t.is(more.plugins.length > less.plugins.length, true)
})