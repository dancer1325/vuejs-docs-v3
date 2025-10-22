# sfc

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## SFC cons
### require a build step
* [here](#compile-and-hot-reload-for-development)

## SFC pros
### Define SFC | [components/](src/components/)
* == author modularized components
### couple concerns
* _Example:_ ALL about hello | [HelloWorld.vue](src/components/HelloWorld.vue) 
### Pre-compiled templates WITHOUT runtime compilation cost
* check `VueComponents.render`
### Component-scoped CSS
* | `npm run dev`
  * http://localhost:5173/ 's F12's element
    * gets unique `data-v-xxxxx` attributes
### | work with Composition API, MORE ergonomic syntax
* TODO:
### MORE compile-time optimizations -- by -- cross-analyzing template & script
  * TODO:
### IDE support
  * TODO:
### Hot-Module Replacement (HMR) support
* modify ANY file & check the hot reload


## How It Works
### compiled SFC == standard JavaScript (ES) module
* | `npm run dev`
  * http://localhost:5173/ > F12 > sources
    * MULTIPLE files / EACH .vue /
      * regular JavaScript syntax
### `<style>` tags
#### | SFCs, injected -- as -- native `<style>` tags | development
* | `npm run dev`
  * http://localhost:5173/ > F12 > elements
    * find the Vue's `<style>`
      * _Example:_ `border: 2px solid orange;`, `border: 2px solid blue;`
#### | production, merge | 1! CSS file
* `npm run build` 
* "dist/assets"
  * ONLY find 1! `.css` file
### uses, integrate the SFC compiler -- with a -- build tool
* here
  * created -- via -- create-vue
