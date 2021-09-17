const assert = require("assert");
const Calculate =  require('../index.js')

describe('Calculate', () => {

  describe('.factorial()', () => {
    it('returns 120 when passing 5', () => {
      const expectedResult = 120;
      const inputNumber = 5;

      const result = Calculate.factorial(inputNumber);

      assert.strictEqual(result, expectedResult);
    })
    
    it('returns 1 when passing 1', () => {
      const expectedResult = 1;
      const inputNumber = 1;

      const result = Calculate.factorial(inputNumber);

      assert.strictEqual(result, expectedResult);
    })
    
    it('returns 1 when when passing 0', () => {
      const expectedResult = 1;
      const inputNumber = 1;

      const result = Calculate.factorial(inputNumber);

      assert.strictEqual(result, expectedResult);
    })
    
    it('returns -5040 when passing -7', () => {
      const expectedResult = -5040;
      const inputNumber = -7;

      const result = Calculate.factorial(inputNumber);

      assert.strictEqual(result, expectedResult);
    })
    
    it('throws TypeError when passing a string', () => {
      const expectedResult = TypeError;
      const inputNumber = 'one';

      const result = () => Calculate.factorial(inputNumber);

      assert.throws(()=>{result()}, expectedResult);
    })
    
    it('throws MathError when passing a float', () => {
      const expectedResult = /MathError: Can't compute factorial of floating numbers/;
      const inputNumber = 1.5;

      const result = () => Calculate.factorial(inputNumber);

      assert.throws(()=>{result()}, expectedResult);
    })

  });
});