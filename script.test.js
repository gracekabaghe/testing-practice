const { stringLength, reverseString, capitalize } = require('./string.js'); 

test('returns character count of function argument', () => {
  expect(stringLength('back')).toBe(4)
})

test('throws an error', () => {
  expect(() => {
    stringLength('');
  }).toThrow();
});

test("reverse string", () => {
  expect(reverseString("mary")).toBe("yram")
})

test("capitalyze string", () => {
  expect(capitalize('hello')).toMatch('Hello')
  expect(capitalize('Hello')).toMatch('Hello')
  expect(capitalize('hello World')).toMatch('Hello World')
  expect(capitalize('h')).toMatch('H')
})