const converters = require('./src')

console.log(converters)
// { toBits: [Function],
//     toGibibits: [Function],
//     toGibibytes: [Function],
//     toGigabits: [Function],
//     toGigabytes: [Function],
//     toKibibits: [Function],
//     toKibibytes: [Function],
//     toKilobits: [Function],
//     toKilobytes: [Function],
//     toMebibits: [Function],
//     toMegabits: [Function],
//     toMegabytes: [Function],
//     toPetabits: [Function],
//     toPetabytes: [Function],
//     toTerabits: [Function],
//     toTerabytes: [Function] }

console.log(converters.toBits(1)) // 8.000 b
console.log(converters.toBits(1, 0)) // 8 b
console.log(converters.toBits(1, (result, unit) => `${unit} ${result}`)) // b 8
console.log(converters.toGibibits(1, 15)) // 0.000000007450581 Gibit
console.log(converters.toGibibytes(1, 15)) // 0.000000000931323 Gib
console.log(converters.toGigabits(1, 15)) // 0.000000008000000 Gb
console.log(converters.toKibibits(1, 15)) // 0.007812500000000 Kibit
console.log(converters.toKibibytes(1)) // 0.001 KiB
console.log(converters.toKilobits(1)) // 0.008 kb
console.log(converters.toKilobytes(1)) // 0.001 kB
console.log(converters.toGigabytes(1)) // 0.000 GB
console.log(converters.toKilobits(1)) // 0.008 kb
console.log(converters.toMebibits(1, 15)) // 0.000007629394531 Mibit
console.log(converters.toMegabits(1, 15)) // 0.000008000000000 Mb
console.log(converters.toMegabytes(1, 15)) // 0.000001000000000 MB
console.log(converters.toPetabytes(1, 15)) // 0.000000000000001 PB
console.log(converters.toTerabits(1, 15)) // 0.000000000008000 Tb
console.log(converters.toTerabytes(1, 15)) // // 0.000000000001000 TB
