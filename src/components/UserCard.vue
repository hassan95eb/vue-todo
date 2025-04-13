<template>
  <div class="px-3 py-2 rounded border border-gray-300 shadow-sm">
    <div class="flex items-center flex-col">
      <div>
        <h2 class="text-lg font-semibold">{{ user.name }}</h2>
        <p class="text-gray-600">{{ user.email }}</p>
      </div>
    </div>
    <div class="mt-2 text-center">
      <p class="text-gray-700">Phone: {{ user.phone }}</p>
    </div>
  </div>
</template>

<script setup>
// console.log("UserCard");
import { defineProps } from "vue";
defineProps({
  user: {
    type: Object,
  },
});
</script>

<style></style>
