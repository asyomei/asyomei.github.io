import { type Ref, onUnmounted, ref } from "vue"

export function useDateNow(): Ref<string> {
  const now = ref(new Date())

  const interval = setInterval(() => {
    now.value = new Date()
  }, 1000)

  onUnmounted(() => clearInterval(interval))

  return computed(() => now.value.toLocaleString())
}
