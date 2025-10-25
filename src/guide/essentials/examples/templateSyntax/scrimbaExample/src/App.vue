<script setup>
import { ref } from 'vue';

//data
const name = ref('Rachel');
const href = ref('https://www.scrimba.com');
const disabled = ref(true);
const attributes = {
  id: 'big_emoji',
  class: 'waving',
};
const coding_years = ref(0);
const getFormattedDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-UK', options);
};
const username = ref('rachelktyjohnson');
const event = ref('dblclick');
const blockLeave = () => {
  alert("You can't leave!");
};
</script>

<template>
  <span>👋🏻</span>
  <h1>Hi, my name is NAME</h1>
  <a target="_blank">
    <button>Click to visit my favourite website! If you can...</button>
  </a>
  <h2>I have been coding for 100 years</h2>
  <h3>Today is 29 February 1993</h3>
</template>
