# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Junaydh/lotide`

**Require it:**

`const _ = require('@Junaydh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)` : returns the first element of a given array.

* `tail(array)` : returns all elements of a given array except for the first element.

* `middle(array)` : returns the middle element of an array, and two elements if the array is even.

* `assertArraysEqual(arr1, arr2)` : uses eqArrays to compare to arrays, if true it will log passed for the given arrays, if false it will log failed.

* `assertEqual(actual, expected)` : asserts if an actual value matches the expected value.

* `assertObjectsEqual(obj1, obj2)` : uses eqObjects to compare objects, if true it will log passed for the given arrays, if false it will log failed.

* `countLetters("string")` : is return an object with characters as keys from the given string, and assign them a value equal to their occurence within the given string.

* `countOnly(array, object)` : recieves an array of strings and an object of which values it wants to be counted, and returns an object with the instances of each string that the object parameter told it to count. 

* `eqArrays(arr1, arr2)` : returns true if arr1 equals arr2, and false if they are not equal.

* `eqObjects(obj1, obj2)` : returns true if obj1 equals obj2, and false if they are not equal.

* `findKey(object, callback)` : scans the object and returns the first key that the callback returns a truthy value for, if no key is found it will return undefined.

* `findKeyByValue(object, value)` : returns the key of the object that is associated with the parameter value.

* `isArrayLengthEven(array)` : determines if an array has an even amount of elements, used by middle.

* `letterPositions("string")` : returns an object with the characters of the given string as keys, and their positions as values.

* `map(array, callback)` : transforms a given array, and returns an array based on the callback function.

* `takeUntil(array, callback)` : returns the given array as an array with the same elements until the specifications of the callback function. 

* `without(arr1, arr2)` : returns an array similar to arr1, by removing the elements of arr2 if it includes those elements. the input arrays remain unchanged.
