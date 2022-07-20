<script lang="ts" setup>
import { inject } from "vue";
import Divider from "./Divider.vue";
import type { Resume } from "../types/resume";

const resume = inject<Resume>("resume");
</script>

<template>
  <div class="mt-5 ml-5">
    <h4 class="pb-2 text-sm font-normal text-slate-500 font-dm-sans">About</h4>
    <div class="space-y-3">
      <template v-for="summary of resume?.basics.summary.split('\n\n')">
        <p class="text-xs font-normal text-slate-700 font-inter">
          {{ summary }}
        </p>
      </template>
    </div>
    <Divider />
  </div>
</template>
