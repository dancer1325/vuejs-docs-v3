# Single-File Components {#single-file-components}

## Introduction {#introduction}

* Vue Single-File Components (SFC)
  * == 👀`*.vue`👀
    * == Vue framework's specific file format
    * requirements
      * pre-compiled by [@vue/compiler-sfc](https://github.com/vuejs/core/tree/main/packages/compiler-sfc) | standard JavaScript and CSS
  * == 💡template(`<template>`) + logic(`<script>`) + style(`<style>`)💡
  * [SFC Specification](/vuejs-docs-v3/src/api/sfc-spec.md)
  * ALTERNATIVES
    * JS is separated -- , via [Src Imports](/api/sfc-spec#src-imports), to -- CSS
      * enable
        * hot-reloading
        * pre-compilation features

## Why SFC {#why-sfc}

* cons
  * require a build step
* pros
  - Author modularized components
  - [couple concerns](#what-about-separation-of-concerns-what-about-separation-of-concerns)
  - Pre-compiled templates 
    - WITHOUT runtime compilation cost
  - [Component-scoped CSS](../../api/sfc-css-features)
  - [| work with Composition API, MORE ergonomic syntax](../../api/sfc-script-setup)
  - MORE compile-time optimizations -- by -- cross-analyzing template & script
  - [IDE support](../../guide/scaling-up/tooling.md#ide-support-ide-support)
  - Hot-Module Replacement (HMR) support

* use cases
  - Single-Page Applications (SPA)
    - _Example:_ [here](examples/sfc)
  - Static Site Generation (SSG)
    - _Example:_ TODO:
  - NON-trivial frontend | build step can be justified -- for -- better development experience (DX)

* ❌NOT use cases❌
  * simple scenarios
    * -> use [petite-vue](https://github.com/vuejs/petite-vue) 

## How It Works {#how-it-works}

* compiled SFC
  * == 👀standard JavaScript (ES) module👀
    * -> SFC can be imported -- as a -- module

* `<style>` tags
  * | SFCs,
    * 💡are injected -- as -- native `<style>` tags | development💡 
      * Reason:🧠support hot updates🧠
  * | production,
    * 👀merge | 1! CSS file👀

* [Vue SFC Playground](https://play.vuejs.org/)

* uses
  * integrate the SFC compiler -- with a -- build tool (_Examples:_ [Vite](https://vitejs.dev/) or [Vue CLI](http://cli.vuejs.org/))
    * [create-vue](https://github.com/vuejs/create-vue) as scaffolding tool

* [SFC Tooling](tooling)

## What About Separation of Concerns? {#what-about-separation-of-concerns}

* ⚠️separation of concerns != separation of file types (HTML, CSS, JS)⚠️
