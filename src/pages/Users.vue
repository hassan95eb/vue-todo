<template>
  <div class="container mx-auto">
    <!--Loading-->
    <div v-if="isLoading">
      <LoadingComponent />
    </div>
    <!--Loading-->
    <div
      v-else-if="users.length"
      class="flex flex-col justify-center md:flex-row flex-wrap"
    >
      <div
        v-for="user in users"
        :key="user.id"
        class="md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 h-auto"
      >
        <UserCard :user="user" />
      </div>
    </div>
  </div>
</template>

<script setup>
import UserCard from "@/components/UserCard.vue";
import LoadingComponent from "@/components/utilities/LoadingComponent.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const users = ref([]);
const isLoading = ref(true);

onMounted(() => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    if (response.status === 200) {
      users.value = response.data;
      isLoading.value = false;
    } else {
      console.error("Error fetching users:", response.status);
    }
  });
});
</script>

<style></style>
