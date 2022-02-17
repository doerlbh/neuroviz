## Lab 3

## Objective

**Understand how to start a project with both Vue and Svelte**

- Vue CLI
- Svelte template

### Vue steps

Follow the [documentation here](https://cli.vuejs.org/#getting-started).

1. install `@vue/cli`
2. either use the CLI (`vue create <project-name>`) or UI (`vue ui`)
3. select your presets. I recommend `Default preset (Vue 3)`, but you can choose "Manual" if you want to see what the configuration options are.
4. `cd` into your `<project-name>` directory
5. run your yarn/npm command to `serve`

### Svelte steps

Follow the [documentation here](https://svelte.dev/).

1. Install `npx`
2. run `npx degit sveltejs/template <project-name>`.
3. run your yarn/npm command to install
4. run your yarn/npm command to run `dev`

### Features to try implementing in each framework

- In the `main.js` file, change the DOM element where the app is mounted
- Add a new component and pass it one prop
- Explore devtools
  - with Vue, install the Vue Devtools extension
  - with Svelte, look up and use the `@debug` tag
- Run the command to build your app and look at the size of the resulting files
