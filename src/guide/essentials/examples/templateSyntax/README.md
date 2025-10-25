# HTML /
## can be parsed -- by -- 
### spec-compliant browsers
* | browser,
  * opens [test-w3c-validation.html](test-w3c-validation.html)
### HTML parser
* `npm install`
* `node test-parser.js`
## ❌NOT HTML W3C valid❌
* | https://validator.w3.org/#validate_by_input,
  * paste [test-w3c-validation.html](test-w3c-validation.html), get errors
## Vue compiles -- into -- highly-optimized JavaScript code
* | [here](scrimbaExample)
  * `npm run build`
    * generate "dist/*.js" /
      * eliminated spaces
      * variable names / 1! letter
      * tree shaking
      * static hoisting
      * ...

# allows you
## bind declaratively the rendered DOM -- to the -- component instance's data
* | browser
  * [declarative-binding-demo.html](declarative-binding-demo.html)
    * click | "Increment" button
  * [imperative-vs-declarative.html](imperative-vs-declarative.html)
    * imperative vs declarative
## \+ reactivity system
### figures out the MINIMAL number of components to re-render
* TODO:
#### applies the MINIMAL amount of DOM manipulations | app state changes
* TODO:
