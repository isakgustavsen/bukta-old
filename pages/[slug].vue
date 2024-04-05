<template>
  <div class="w-full">
    <UDashboardNavbar :title="data?.title" />
    <UPageBody prose class="px-8">
      <SanityContent :blocks="data?.content" />
      <LazySanityFile v-if="data?.video" :asset-id="data.video.asset._ref">
        <template #default="{ src }">
          <video controls>
            <source :src="src" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </template>
      </LazySanityFile>
    </UPageBody>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

definePageMeta({
  middleware: ['auth-logged-in']
})

const query = groq`*[_type == "contentPage" && slug.current == $slug][0] {
  title,
  content,
  video
}`

const { data } = useSanityQuery(query, { slug: route.params.slug })
console.log(data)
</script>