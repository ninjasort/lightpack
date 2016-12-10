export default class Logger {
  constructor(options) {
  }
  apply(compiler) {
    compiler.plugin("compile", (params) => {
      console.log(option.message)
      console.log("The compiler is starting to compile...")
    })

    compiler.plugin("compilation", (compilation) => {
      console.log("The compiler is starting a new compilation...")

      compilation.plugin("optimize", () => {
	console.log("The compilation is starting to optimize files...")
      })
    })

    compiler.plugin("emit", (compilation, callback) => {
      console.log("The compilation is going to emit files...")
      callback()
    })
  }
}