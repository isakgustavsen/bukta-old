<template>
  <main class="w-full">
    <UPageHeader :title="data.title" />
    <div class="mt-8 mx-16">
      <SanityContent :blocks="data.content" />
    </div>
  </main>
</template>

<script setup lang="ts">

const query = groq`*[_type == "homePage"][0]{
  title,
  content
}`
const { data } = useSanityQuery(query)
</script>
