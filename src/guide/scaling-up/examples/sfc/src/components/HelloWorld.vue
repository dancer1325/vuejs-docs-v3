<script>
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  }
}
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<!-- scoped       -- Reason: check CSS scoped -->
<style scoped>
.greeting {
  color: red;
  font-weight: bold;
  border: 2px solid blue;
}
</style>
