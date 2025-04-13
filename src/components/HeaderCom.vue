<template>
  <header class="px-2 py-2 border-b border-gray-200">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <h1 class="text-lg font-bold">Todo App</h1>

        <div>
          <ul class="flex space-x-4">
            <li class="hover:border-b hover:border-blue-600">
              <router-link class="text-black hover:text-blue-600" to="/"
                >Home</router-link
              >
            </li>
            <li class="hover:border-b hover:border-blue-600">
              <router-link class="text-black hover:text-blue-600" to="/users"
                >Users</router-link
              >
            </li>
            <li class="hover:border-b hover:border-blue-600">
              <router-link class="text-black hover:text-blue-600" to="/posts"
                >Posts</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
