<script lang="ts" setup>
import { provide, readonly, Ref } from "vue";

import { useHead } from "@vueuse/head";
import { useFetch } from "@vueuse/core";

import Me from "./component/Me.vue";
import About from "./component/About.vue";
import Experience from "./component/Experience.vue";
import Education from "./component/Education.vue";
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
  <div class="min-h-fit">
    <div v-if="resume" class="flex flex-row overflow-hidden bg-effect">
      <div class="container w-[70%]">
        <Me />
        <About />
        <Experience />
        <Certifications />
        <!-- <Education /> -->
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
</style>
