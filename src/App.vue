<script lang="ts" setup>
import { provide } from "vue";

import { useHead } from "@vueuse/head";
import { useFetch } from "@vueuse/core";

import Me from "./component/Me.vue";
import About from "./component/About.vue";
import Experience from "./component/Experience.vue";
import Certifications from "./component/Certifications.vue";
import Skills from "./component/Skills.vue";
import Languages from "./component/Languages.vue";
import Online from "./component/Online.vue";

const gist = "leonardssh/d72297eb48abfad33e70e1313cd35614";

const { data: resume } = useFetch(
  `https://gist.githubusercontent.com/${gist}/raw/resume.json`
)
  .get()
  .json();

provide("resume", resume);

useHead({
  htmlAttrs: {
    class: "bg-[url('/images/left-bg.jpg')]",
  },
});
</script>

<template>
  <div class="page break">
    <div v-if="resume" class="flex flex-row overflow-hidden bg-effect">
      <div class="container w-[70%]">
        <Me />
        <About />
        <Experience />
        <Certifications />
        <Online />
      </div>
      <div
        class="bg-[url(/images/right-bg.jpg)] bg-cover bg-[#101926] text-white w-[30%]"
      >
        <Skills />
        <Languages />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bg-effect {
  background: rgba(0, 0, 0, 0)
    radial-gradient(
      64.9% 34.2308% at 0% 0%,
      rgba(147, 196, 253, 0.275) 0%,
      rgba(255, 255, 255, 0) 100%
    )
    repeat scroll 0% 0%;
}

.page {
  width: 210mm;
  min-height: 297mm;

  @apply relative z-50 grid shadow;
  @apply print:shadow-none;

  &.break::after {
    content: "A4 Page Break";
    top: calc(297mm - 19px);

    @apply absolute w-full border-b border-dashed border-white;
    @apply flex items-end justify-end pr-2 pb-0.5 font-inter text-xs font-medium text-white;
    @apply print:hidden;
  }
}
</style>
