// GLOBALs - NO WINDOW  acess anywhere varaiable in the app
// __dirname - path to current directory
// __filename - file name
// require - function to use module
// module - info about the current module
// process - info about env where the prg is being execuited
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')
require('./7-mind-granade')
console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)


