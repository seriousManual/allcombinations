var expect = require('chai').expect

var allcombinations = require('./index')

describe('allcombinations', () => {
    var combinations = []
    before(() => {
        for (var item of allcombinations([1, 2, 3])) combinations.push(item)
    })

    it('should create all combinations', () => expect(combinations).to.deep.equal([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
    ]))
})