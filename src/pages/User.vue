<template>
  <div class="container mx-auto">
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
      <h1 class="font-bold text-4xl">{{ user.name }}</h1>
      <hr />
      <div class="flex flex-col">
        <p class="text-gray-600 my-1">Email: {{ user.email }}</p>
        <p class="text-gray-600 my-1">Phone: {{ user.phone }}</p>
        <p class="text-gray-600 my-1">Website: {{ user.website }}</p>
        <p class="text-gray-600 my-1">Company: {{ user.company.name }}</p>
        <p class="text-gray-600 my-1">
          Address: {{ user.address.street }}, {{ user.address.city }}
        </p>
        <p class="text-gray-600">Zipcode: {{ user.address.zipcode }}</p>
      </div>
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
const userId = route.params.id;
const user = ref({});
const isLoading = ref(true);
const error = ref(null);

onMounted(() => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => {
      user.value = res.data;

      isLoading.value = false;
    })
    .catch((err) => {
      isLoading.value = false;
      error.value = err;
    });
});
</script>
