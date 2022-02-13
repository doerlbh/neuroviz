## Lab 1

### Objective

**Understand the basics of Vue.js**

- relationship between template and component definitions
- data, methods, computed props

**Refresh some basics of d3.js**

- how do `.domain` and `.range` work in a scale?
- what is the difference between `scaleBand` and `scaleLinear`?

### Questions to check your understanding

- how does the `addGuess` method get called?
- what is the data structure of `gridData`?
- when does an attribute get a `:` in front of it?
- what do the double-curlies (`{{ }}`) do?

### Features to try implementing

- [easy] add a button to restart the game
  - erase all previous guesses
- [medium] reject a guess that is longer than 5 letters or has already been made
  - add a method to validate current guess by comparing it to `guesses`
  - add a UI element that appears when a guess is rejected
- [hard] add color-coding to each letter
  - add a method to check the guess's letters against the target
  - change `gridData` so each cell is an object with `text` and `color` instead of a string
  - update the `rect` and `text` to accept their respective properties from the object
