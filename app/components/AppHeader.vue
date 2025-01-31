<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Hacker News</h1>
          <!-- Navigation links for different feeds -->
          <div class="space-x-5">
            <!-- v-for Loop through feedsInfo object 
            :key="key"   Generates a dynamic route based on the key
            :class Adds 'active' class if the current route matches -->
            <NuxtLink
              v-for="(list, key) in feedsInfo"
              :key="key"
              :to="`/${key}`"
              :class="{ active: $route.path.startsWith(`/${key}`) }"
            >
              {{ list.title }}
            </NuxtLink>
          </div>
          <ColorScheme>
            <USelect
              v-model="$colorMode.preference"
              :options="['system', 'light', 'dark']"
            />
          </ColorScheme>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>

<script setup>
import { feedsInfo } from "~~/utils/api";
</script>
