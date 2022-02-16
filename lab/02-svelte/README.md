## Lab 2

Note that this project is scaffolded from the default Svelte template, which comes with its own readme, titled `svelte_README.md`.

### Objective

**Understand the basics of Svelte**

- structure of a `.svelte` file and differences from regular HTML/JS
- syntax for iterators, data binding, and reactive props
- component structure

**(Re-)introduce you to some geographic utilities**

- `topojson.feature` functions from the [topojson-client](https://github.com/topojson/topojson-client) library
- `geoPath` and other functions from the [d3-geo](https://github.com/d3/d3-geo) module

### Questions to check your understanding

- Why do we use `geoIdentity` with the `geoPath` in the Map component?
- What does the `$` in the App component do?
- What does it mean when an index (for example `list.indexOf(state)` in App) is -1?
- How do we indicate the end of a loop in the markup of a component?

### Features to try implementing

- [easy] add a button to reset the map
- [medium] sort the list alphabetically
- [hard] add the name of each state to the map, but only show it on hover
