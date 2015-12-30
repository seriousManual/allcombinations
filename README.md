# allcombinations [![Build Status](https://travis-ci.org/seriousManual/allcombinations.png)](https://travis-ci.org/seriousManual/allcombinations)

Calculates on demand all the possible combinations of the elements of a given array.

````
var allcombinations = require('allcombinations')

for (var item of allcombinations([1, 2, 3])) {
    console.log(item)
}

// [1, 2, 3],
// [1, 3, 2],
// [2, 1, 3],
// [2, 3, 1],
// [3, 1, 2],
// [3, 2, 1]
````

## A Generator?

The number of possible combinations gets really big really fast (e.g. an array of 5 elements already has 120 possible permutations!).
Thus it is not realistic (or even possible) to precalculate the complete range of permutations and subsequently return it. (memory and cpu consumption would be absolutely terrible)

This little lazily calculates the combinations on demand therefore minimizing its memory footprint.  