import { type Ref, onUnmounted, ref } from "vue"

export function useDateNow(): Ref<string> {
  const now = ref(new Date())

  let interval: NodeJS.Timeout

  onMounted(() => {
    interval = setInterval(() => {
      now.value = new Date()
    }, 1000)
  })

  onUnmounted(() => clearInterval(interval))

  return computed(() => now.value.toLocaleString())
}
