import test from 'ava'
import path from 'path'
import Logger from '../src/plugin'
import webpack from 'webpack'
import lightpack from '../src'
import fs from 'fs'

process.env.NODE_ENV = 'development'

// NODE_ENV === development
// -------------------------------------------------

test('should add new plugin', t => {
  const less = lightpack(process.env.NODE_ENV) // 5
  const more = lightpack({ plugins: [new Logger({ message: 'works' })] }, process.env.NODE_ENV) // 6
  t.is(more.plugins.length > less.plugins.length, true)
})

test('overrides a html injection', t => {
  const standard = lightpack(process.env.NODE_ENV)
  const override = lightpack({
    html: {
      inject: false
    }
  }, process.env.NODE_ENV)
  
  t.is(standard.plugins[2].options.inject, 'body')
  t.is(override.plugins[2].options.inject, false)
})

test('should throw error if no src/index.html is present', t => {
  const error = t.throws(() => {
    
    lightpack({
      context: path.resolve(__dirname, './html-creation'),
      entry: {
        main: ['./src/index.js']
      },
      output: {
        path: __dirname + '/html-creation/dist'
      }
    }, process.env.NODE_ENV)

  }, Error)
  
  t.is(error.message, 'Could not find index.html in root src/ directory. Please add one and try again.')
})


















