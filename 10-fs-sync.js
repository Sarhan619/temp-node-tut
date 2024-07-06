const { readFileSync, writeFileSync } = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const secound = readFileSync('./content/secound.txt','utf8')

console.log(first, secound)

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${secound}`,
    {flag: 'a'}
)
console.log('done with the task')
console.log('starting the next one')