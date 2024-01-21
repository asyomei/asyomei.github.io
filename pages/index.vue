<script setup>
import { useDateNow } from "@/hooks/use-date-now"
import {
  fullName,
  oldUsername,
  oldUsernameUrl,
  socials,
  username,
  websiteGithubUrl,
} from "@/server/consts"

useHead({ title: "Home" })

const avatarId = ref(0)
function nextAvatar() {
  avatarId.value = (avatarId.value + 1) % 2
}

const now = useDateNow()
</script>

<template>
  <div class="pt-20 px-6">
    <div class="bg-[#1D1D1D] pt-16 pb-20 rounded-lg max-w-md mx-auto">
      <div class="text-center">
        <img
          :src="`/avatar${avatarId + 1}.jpg`"
          :alt="`Avatar #${avatarId + 1}`"
          @click="nextAvatar"
          width="160"
          class="inline-block rounded-full cursor-pointer"
        />
        <p class="pt-8 text-4xl text-primary">{{ username }}</p>
        <p class="text-2xl text-secondary">{{ fullName }}</p>
        <p class="pt-1 text-[#666]">
          (aka
          <a
            class="underline underline-offset-2"
            :href="oldUsernameUrl"
            >{{ oldUsername }}</a
          >)
        </p>
      </div>

      <div class="flex justify-center gap-4 pt-8">
        <IconLink
          v-for="(social, i) of socials"
          :key="i"
          :="social"
          :width="30"
        />
      </div>
    </div>

    <a
      :href="websiteGithubUrl"
      class="text-secondary text-xs absolute bottom-4 left-4 underline underline-offset-2"
    >
      Source code of this website
    </a>
    <p class="text-secondary text-xs absolute bottom-4 right-4">
      {{ now }}
    </p>
  </div>
</template>
