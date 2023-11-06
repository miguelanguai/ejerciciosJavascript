# Arrays and functions exercises

1. Implement:

   insertInArray(arrayIn, indexThatIsBefore, arrayOrPrimitiveToInsert)

   Returns the modified array that inserts the last parameter into the first
   array, at the index after the second parameter. When inserting an array,
   it inserts it flat (its elements side by side with the elements of the
   other array).
   Assume that the arrays are of primitives.

   Usage/examples:

   ```js
   let arrayOut = insertInArray([ true, "hi", 4, "yes", null, 8 ], 3, "bye");
   // arrayOut contains: [ true, "hi", 4, "yes", "bye", null, 8 ]

   let arrayOut2 =
     insertInArray([ true, "hi", 4, "yes", null, 8 ], 3, ["bye", 3]);
   // arrayOut2 contains: [ true, "hi", 4, "yes", "bye", 3, null, 8 ]
   ```

2. Implement:

   insertInArrayInPlace(/* same */)

   Same, but modifies the input array in place, and does not return anything.

   Usage/example:

   ```js
   let arrayInOut = [ 8, 9 ];
   insertInArrayInPlace(arrInOut, 0, "hi");
   // arrayInOut contains: [ 8, "hi", 9 ]
   ```

3. Implement:

   cleanArrayInPlace(arrayIn);

   Removes the entries of the input array that have value null or undefined
   or "empty" entries.
   Does not asume array of primitives, but does not work recursively.

   ```js
   let arrayInOut2 =
     [ 3, , , , 4, undefined, 5, null, { a: 6 }, [ 7, 8, null, 9 ], 10 ];
   cleanArrayInPlace(arrayInOut2);
   // arrayInOut2 contains: [ 3, 4, 5, { a: 6 }, [ 7, 8, null, 9 ], 10 ]

Notes::
- Don't use array methods not seen: only pop/push/shift/unshift, and the
  lengh property are allowed.
- Prepare also auto-verified UT's for each function (even if minimal).

