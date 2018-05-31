// https://www.thecalculatorsite.com/conversions/datastorage.php
const bytesTo = {
  Bits: {
    val: 0.125,
    unit: 'b'
  },
  Gibibits: {
    val: 134217728,
    unit: 'Gibit'
  },
  Gibibytes: {
    val: 1073741824,
    unit: 'Gib'
  },
  Gigabits: {
    val: 125000000,
    unit: 'Gb'
  },
  Gigabytes: {
    val: 1000000000,
    unit: 'GB'
  },
  Kibibits: {
    val: 128,
    unit: 'Kibit'
  },
  Kibibytes: {
    val: 1024,
    unit: 'KiB'
  },
  Kilobits: {
    val: 125,
    unit: 'kb'
  },
  Kilobytes: {
    val: 1000,
    unit: 'kB'
  },
  Mebibits: {
    val: 131072,
    unit: 'Mibit'
  },
  Megabits: {
    val: 125000,
    unit: 'Mb'
  },
  Megabytes: {
    val: 1000000,
    unit: 'MB'
  },
  Petabits: {
    val: 125000000000000,
    unit: 'Pb'
  },
  Petabytes: {
    val: 1000000000000000,
    unit: 'PB'
  },
  Terabits: {
    val: 125000000000,
    unit: 'Tb'
  },
  Terabytes: {
    val: 1000000000000,
    unit: 'TB'
  }
}

const conversions = {}

Object.keys(bytesTo).forEach(key => {
  const {val, unit} = bytesTo[key]
  conversions[`to${key}`] = function (bytes = 0, precision = 3) {
    if (typeof bytes === 'string') {
      bytes = Number(bytes)
    }

    const result = bytes / val

    // Custom formatter
    if (typeof precision === 'function') {
      return precision(result, unit)
    }

    return `${result.toFixed(precision)} ${unit}`
  }
})

module.exports = conversions
