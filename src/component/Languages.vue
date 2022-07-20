<script lang="ts" setup>
import { inject, type Ref } from "vue";
import type { Resume } from "../types/resume";

const resume = inject<Ref<Resume>>("resume");
</script>

<template>
  <div class="ml-5 font-inter" v-if="resume?.languages">
    <div class="pb-5 text-sm font-medium text-slate-400 font-inter">
      Languages
      <ul class="text-xs font-medium text-white list-disc">
        <li
          v-for="({ language, fluency }, key) of resume?.languages"
          :key="key"
          class="space-x-2"
        >
          <span class="font-semibold">{{ language }}</span> ({{ fluency }})
        </li>
      </ul>
    </div>
  </div>
</template>
