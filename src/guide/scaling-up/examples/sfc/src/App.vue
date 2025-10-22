<script setup>
import Greeting from './components/Greeting.vue'
import HelloWorld from './components/HelloWorld.vue'
import TestPrecompiled from './components/TestPrecompiled.vue'

// Verificar pre-compilación de tus componentes
console.log('Greeting render function:', !!Greeting.render)
console.log('HelloWorld render function:', !!HelloWorld.render)
console.log('Greeting component:', Greeting)
console.log('HelloWorld component:', HelloWorld)
</script>

<template>
  <h1>You did it!</h1>
  <Greeting />
  <HelloWorld />
  <TestPrecompiled />
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>
