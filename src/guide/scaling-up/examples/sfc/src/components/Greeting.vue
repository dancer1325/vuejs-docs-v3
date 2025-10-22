<script setup>
import { ref } from 'vue'
const greeting = ref('Hello World!')
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<!-- scoped       -- Reason: check CSS scoped -->
<style scoped>
.greeting {
  color: green;
  font-weight: bold;
  border: 2px solid orange;
}
</style>
