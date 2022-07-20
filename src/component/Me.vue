<script lang="ts" setup>
import { inject } from "vue";
import { Resume } from "../types/resume";

import Socials from "./Socials.vue";

const resume = inject<Resume>("resume");
</script>

<template>
  <div class="flex flex-row items-center justify-start w-full my-5 ml-5">
    <div
      :style="{ 'background-image': `url(${resume?.basics.image})` }"
      class="w-16 h-16 bg-center bg-no-repeat bg-cover rounded-full shadow-lg shadow-blue-300"
    ></div>
    <div class="flex flex-row items-center justify-between w-[calc(100%-5rem)]">
      <div class="flex flex-col items-start justify-center ml-5">
        <h1 class="text-xl font-bold font-inter">{{ resume?.basics.name }}</h1>
        <h2 class="text-sm font-medium font-inter text-slate-500">
          {{ resume?.basics.label }}
        </h2>
      </div>
      <Socials />
    </div>
  </div>
</template>
