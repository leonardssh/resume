<script setup lang="ts">
interface Props {
  text: string;
}

const { text } = defineProps<Props>();
</script>

<template>
  <span
    class="px-2 py-[0.75px] flex justify-center items-center ml-2 text-xs font-medium text-[#93c5fd] uppercase border border-[#93c5fd] rounded-md font-inter"
  >
    {{ text }}
  </span>
</template>
