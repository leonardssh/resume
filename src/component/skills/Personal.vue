<script lang="ts" setup>
import { inject, Ref } from "vue";
import { Resume } from "../../types/resume";

const resume = inject<Ref<Resume>>("resume");
const [{ name, keywords }] = resume!.value.skills.filter((skill) =>
  skill.name.includes("Personal Skills")
);
</script>

<template>
  <div class="pb-5 text-sm font-medium text-slate-400 font-inter">
    {{ name }}
    <ul class="text-xs font-medium text-white list-disc">
      <li v-for="(keyword, key) of keywords" :key="key" class="space-x-2">
        {{ (keyword as any).name }}
      </li>
    </ul>
  </div>
</template>
