const converters = require('../')

test('should export functions', () => {
  expect(converters).toBeDefined()
})

test('should convert to different units', () => {
  const ONE_BYTE = 1
  expect(converters.toBits(ONE_BYTE)).toBe('8.000 b')
  expect(converters.toBits(ONE_BYTE, 0)).toBe('8 b')
  expect(converters.toBits(ONE_BYTE, (result, unit) => `${unit} ${result}`)).toBe('b 8')
  expect(converters.toGibibits(ONE_BYTE, 15)).toBe('0.000000007450581 Gibit')
  expect(converters.toGibibytes(ONE_BYTE, 15)).toBe('0.000000000931323 Gib')
  expect(converters.toGigabits(ONE_BYTE, 15)).toBe('0.000000008000000 Gb')
  expect(converters.toKibibits(ONE_BYTE, 15)).toBe('0.007812500000000 Kibit')
})
