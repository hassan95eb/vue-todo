<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-semibold">Posts</h1>
    <div v-if="isLoading">
      <LoadingComponent />
    </div>
    <div v-else-if="error">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-2xl font-bold text-red-500">Error</h1>
        <p class="text-gray-600">Failed to load posts data.</p>
        <p class="text-gray-600">{{ error.message }}</p>
      </div>
    </div>

    <div v-else class="flex flex-col md:flex-row justify-center flex-wrap">
      <div
        v-for="post in posts"
        :key="post.id"
        class="md:w-1/2 lg:w-1/3 xl:w-1/3 p-2 h-auto"
      >
        <PostCard :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PostCard from "@/components/PostCard.vue";
import LoadingComponent from "@/components/utilities/LoadingComponent.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const posts = ref([]);
const isLoading = ref(true);
const error = ref(null);
onMounted(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      posts.value = res.data;
      isLoading.value = false;
    })
    .catch((error) => {
      error.value = error;
      isLoading.value = false;
    });
});
</script>

<style></style>
