<template>
  <div class="px-3 py-2 rounded border border-gray-300 shadow-sm">
    <div class="flex items-start flex-col">
      <h2 class="text-lg font-semibold border-b w-full border-gray-200">
        <router-link :to="{ name: 'User', params: { id: user.id } }">
          {{ user.name }}
        </router-link>
      </h2>
      <p class="text-gray-600">{{ user.email }}</p>
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
