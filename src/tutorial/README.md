* goal
  * how to work with Vue -- via -- Options API OR Composition API
  * 1 Vue core feature / EACH step

* Vue
  * provides
    * [2 API styles](/vuejs-docs-v3/src/guide/introduction.md#api-styles-api-styles)
      * Options API
      * Composition API
    * 2 modes
      * SFC-mode
        * MOST used one
        * ⚠️requires a build step⚠️
          * _Example:_ [Vite](https://vitejs.dev/)
          * [Tooling guide](/vuejs-docs-v3/src/guide/scaling-up/tooling.md#note-on-in-browser-template-compilation-note-on-in-browser-template-compilation)
      * HTML-mode
        * ❌NO require build step❌ -> use
          ```
          import { ... } from 'vue/dist/vue.esm-bundler.js'
          ```
