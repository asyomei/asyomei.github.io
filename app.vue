<script setup>
import { username } from "./server/consts"

useHead({
  titleTemplate: `%s | ${username} Website`,
  link: [
    {
      rel: "icon",
      type: "image/jpeg",
      href: "/avatar1.jpg",
    },
  ],
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
