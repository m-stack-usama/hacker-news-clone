<script setup>
import { validFeeds } from "~~/utils/api";
// Defines a Nuxt page meta property with middleware

definePageMeta({
  middleware: (from) => {
        // If the user accesses the homepage ("/"), redirect to the first valid feed with page 1

    if (from.path === "/") {
      return navigateTo(`/${validFeeds[0]}/1`);
    }
  },
});
</script>
<template>
  <div>Index</div>
</template>
