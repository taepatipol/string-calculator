const chai = require('chai');

const { expect } = chai;
const { calc } = require('../main');

// Start test cases for Example Behaviors
function itAlwaysTrue() {
  // Chai API Reference can be found at http://www.chaijs.com/api/bdd/
  expect(true).to.be.true;
}

function itAlwaysBe2() {
  expect(2).to.be.equal(2);
}

// Start Example Behaviors
function exampleBehaviors() {
  it('should be true', itAlwaysTrue);
  it('should be equal 2', itAlwaysBe2);
}

// Start Describe
describe('Example', exampleBehaviors);

describe('string calculator', () => {
  it('should return 0 for empty string', () => {
    expect(calc('')).to.equal(0);
  });

  it('should return number for number input', () => {
    expect(calc('76')).to.equal(76);
  });

  it('should sum numbers with ,', () => {
    expect(calc('4,5')).to.equal(9);
    expect(calc('8,7')).to.equal(15);
  });

  it('should sum numbers with newline', () => {
    expect(calc('4\n7')).to.equal(11);
    expect(calc('8 \n 8')).to.equal(16);
  });

  it('should sum numbers with newline', () => {
    expect(calc('1\n2\n3')).to.equal(6);
    expect(calc('1,2,3')).to.equal(6);
  });
});
