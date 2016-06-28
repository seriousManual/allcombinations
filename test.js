var expect = require('chai').expect

var allcombinations = require('./index')

expect(Array.from(allcombinations([1,2,3]))).to.deep.equal([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1]
])