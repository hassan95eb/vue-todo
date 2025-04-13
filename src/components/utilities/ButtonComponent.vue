<template>
  <router-link :to="to" class="mx-2">
    <button
      class="font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
      :class="{
        'bg-blue-500 text-white hover:bg-blue-700': type === 'primary',
        'bg-gray-500 text-white hover:bg-gray-700': type === 'secondary',
        'bg-green-500 text-white hover:bg-green-700': type === 'success',
        'bg-red-500 text-white hover:bg-red-700': type === 'danger',
        'bg-yellow-500 text-white hover:bg-yellow-700': type === 'warning',
        'bg-purple-500 text-white hover:bg-purple-700': type === 'info',
        'bg-pink-500 text-white hover:bg-pink-700': type === 'light',
        'bg-black text-white hover:bg-gray-800': type === 'dark',
      }"
    >
      <slot></slot>
    </button>
  </router-link>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "primary",
    validator: (value) => {
      return [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].includes(value);
    },
  },
});
</script>
