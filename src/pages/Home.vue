<template>
  <div class="pt-4">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold mt-4">Welcome to the Todo App</h1>
      <p class="pt-2 text-gray-600">
        This is a simple Todo application built with Vue 3 and Tailwind CSS. You
        can manage your tasks efficiently and keep track of your progress.
      </p>
      <div class="flex mt-3">
        <ButtonComponent type="info" to="/users">Go to Users</ButtonComponent>
        <ButtonComponent type="light" to="/posts">Go to Posts</ButtonComponent>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "@/components/utilities/ButtonComponent.vue";
</script>

<style></style>
