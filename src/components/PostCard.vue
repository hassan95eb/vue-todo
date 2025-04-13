<template>
  <div class="flex flex-col border border-gray-200 py-2 px-3 rounded shadow-sm">
    <h1 class="font-bold text-2xl border-b border-gray-500">
      <router-link :to="{ name: 'Post', params: { id: post.id } }">{{
        post.title
      }}</router-link>
    </h1>
    <p class="mt-2">
      {{ post.body }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
  },
});
</script>
