<script lang="ts" setup>
import { inject } from "vue";
import { formatDate } from "../helpers/formatDate";

import type { Resume } from "../types/resume";

const resume = inject<Resume>("resume");
</script>

<template>
  <div class="mt-5 ml-5" v-if="resume?.education.length">
    <div class="pb-2 text-sm font-normal text-slate-500 font-dm-sans">
      Education
    </div>
    <div class="grid grid-cols-1 gap-4">
      <div
        v-for="(
          { area, startDate, endDate, description }, key
        ) in resume?.education"
        :key="key"
      >
        <h4 class="text-sm font-medium font-inter">{{ area }}</h4>
        <h4 class="text-xs font-medium text-slate-500 font-dm-sans">
          {{
            startDate ? formatDate(startDate.month, startDate.year) : "Unknown"
          }}
          -
          {{ endDate ? formatDate(endDate.month, endDate.year) : "Present" }}
        </h4>
        <p class="mt-2 text-xs font-normal text-slate-700 font-inter">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
