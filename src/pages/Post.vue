<template>
  <div class="container mx-auto mt-4">
    <!--Loading-->
    <div v-if="isLoading">
      <LoadingComponent />
    </div>
    <!--Loading-->

    <!--Error-->
    <div v-else-if="error">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-2xl font-bold text-red-500">Error</h1>
        <p class="text-gray-600">Failed to load user data.</p>
        <p class="text-gray-600">{{ error.message }}</p>
      </div>
    </div>
    <!--Error-->

    <!--content-->
    <div v-else class="flex flex-col">
      <h1 class="font-bold text-2xl">{{ post.title }}</h1>
      <hr />

      <p class="text-gray-600 my-3">{{ post.body }}</p>
    </div>
    <!--content-->
  </div>
</template>
<script setup>
import LoadingComponent from "@/components/utilities/LoadingComponent.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const postId = route.params.id;
const post = ref({});
const isLoading = ref(true);
const error = ref(null);

onMounted(() => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => {
      post.value = res.data;
      isLoading.value = false;
    })
    .catch((err) => {
      isLoading.value = false;
      error.value = err;
    });
});
</script>
