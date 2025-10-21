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
  - Pre-compiled templates WITHOUT runtime compilation cost
  - [Component-scoped CSS](/api/sfc-css-features)
  - [More ergonomic syntax when working with Composition API](/api/sfc-script-setup)
  - More compile-time optimizations by cross-analyzing template and script
  - [IDE support](/guide/scaling-up/tooling#ide-support) with auto-completion and type-checking for template expressions
  - Out-of-the-box Hot-Module Replacement (HMR) support

* TODO:
SFC is a defining feature of Vue as a framework, and is the recommended approach for using Vue in the following scenarios:

- Single-Page Applications (SPA)
- Static Site Generation (SSG)
- Any non-trivial frontend where a build step can be justified for better development experience (DX).

That said, we do realize there are scenarios where SFCs can feel like overkill
* This is why Vue can still be used via plain JavaScript without a build step
* If you are just looking for enhancing largely static HTML with light interactions, you can also check out [petite-vue](https://github.com/vuejs/petite-vue), 
a 6 kB subset of Vue optimized for progressive enhancement.

## How It Works {#how-it-works}

* compiled SFC
  * == 👀standard JavaScript (ES) module👀
    * -> SFC can be imported -- as a -- module

* `<style>` tags
  * | SFCs,
    * are injected -- as -- native `<style>` tags | development 
      * Reason:🧠support hot updates🧠
  * | production,
    * you can extract and merge | 1! CSS file

* [Vue SFC Playground](https://play.vuejs.org/)

* uses
  * integrate the SFC compiler -- with a -- build tool (_Examples:_ [Vite](https://vitejs.dev/) or [Vue CLI](http://cli.vuejs.org/))
    * [create-vue](https://github.com/vuejs/create-vue) as scaffolding tool
* [SFC Tooling](tooling)

## What About Separation of Concerns? {#what-about-separation-of-concerns}

* ⚠️separation of concerns != separation of file types (HTML, CSS, JS)⚠️
