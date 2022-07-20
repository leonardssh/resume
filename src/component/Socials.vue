<script lang="ts" setup>
import { inject } from "vue";
import type { Resume } from "../types/resume";

const resume = inject<Resume>("resume");
</script>

<template>
  <div class="flex items-center justify-center mr-5 space-x-3">
    <template v-for="(profile, key) in resume?.basics.profiles" :key="key">
      <a :href="profile.url">
        <img
          :src="`/icons/${profile.network}.svg`"
          class="w-5"
          :alt="profile.network"
        />
      </a>
    </template>
  </div>
</template>
