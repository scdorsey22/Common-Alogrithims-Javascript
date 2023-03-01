const reverseString = require('../solution/resverseStringSolution')
const reverseStr = require('../solution/resverseStringSolution')

test("can handle many characters", () => {
    expect(reverseString('hello')).toBe('olleh')
})

test("can handle many characters", () => {
    expect(reverseStr('hello')).toBe('olleh')
})