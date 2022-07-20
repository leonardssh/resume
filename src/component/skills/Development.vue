<script lang="ts" setup>
import { inject, Ref } from "vue";
import { Resume, Skill } from "../../types/resume";

const resume = inject<Ref<Resume>>("resume");

const [frontEnd, backEnd] = [
  resume?.value?.skills?.filter((skill) => skill.name.includes("Front-End"))[0]
    .keywords,
  resume?.value?.skills?.filter((skill) => skill.name.includes("Back-End"))[0]
    .keywords,
];

const skills = [
  ...Object.values(frontEnd!),
  ...Object.values(backEnd!),
] as unknown as Skill["keywords"][];

const uniqueGroups = [...new Set(skills.map((skill) => skill.group))];
const groupedSkills = uniqueGroups.map((group) => {
  return {
    group,
    skills: skills.filter((skill) => skill.group === group),
  };
});
</script>

<template>
  <div
    class="pb-5 text-sm font-medium text-slate-400 font-inter"
    v-if="skills.length"
  >
    Skillset
    <ul class="text-xs font-medium text-white list-disc">
      <li
        v-for="({ skills }, key) of groupedSkills"
        :key="key"
        class="space-x-1"
      >
        <template v-for="language of skills">
          <span class="font-light text-[#93c5fd] font-inter first:hidden"
            >/</span
          >
          {{ language.name }}
        </template>
      </li>
    </ul>
  </div>
</template>
