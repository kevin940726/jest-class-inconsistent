const ref = require('./src');

test('ref should equal to global REF', () => {
  expect(ref).toBe(REF); // error
});
