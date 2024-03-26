<template>
  <div class="flex justify-center items-center">
    <div class="bg-indigo-500 rounded-xl p-8 dark:bg-slate-800 text-center text-white m-4">
      <ul>
        <li v-for="item in items" :key="item._id">
          {{ item.message }}
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';

const items = ref([]);

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/database');
    items.value = await res.json();
  } catch (err) {
    console.error('Error fetching items:', err);
  }
});
</script>