const readline = require('readline');
const MRTTimings = require('./lib/index')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Pick a station: ', answer => {
    MRTTimings.getStationTimings(answer, (err, timings) => {
        console.log(err)
        console.log(JSON.stringify(timings, null, 1));
        process.exit(0)
    });
});
