<template>
  <div class="wrapper flex justify-center items-center">
    <div class="bg-indigo-500 rounded-xl p-8 dark:bg-slate-800 text-center text-white m-4">{{ serverData }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const serverData = ref(null);

async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    serverData.value = data.message;
  } catch (error) {
    console.error("There was a problem fetching the data:", error);
  }
}

onMounted(() => {
  fetchData();
});
</script>
