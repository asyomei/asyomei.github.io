<script setup lang="ts">
const props = defineProps<{
  name: string
  url: string
  img: string
  width: number
}>()

const hovered = ref(false)

const imgSrc = computed(() => {
  if (!hovered.value) return props.img
  const [name, ext] = props.img.split(".")
  return `${name}-hover.${ext}`
})
</script>

<template>
  <a :href="props.url">
    <img
      :src="imgSrc"
      :alt="props.name"
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
      :width="width"
    />
  </a>
</template>
