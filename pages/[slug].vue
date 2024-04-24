<template>
  <UDashboardPage prose>
    <UDashboardPanel>
      <UDashboardNavbar :title="data?.title" />
      <UDashboardPanelContent>
        <UPageBody class="lg:max-w-2xl xl:max-w-4xl" prose>
          <SanityContent :blocks="data?.content" />
        </UPageBody>
      
      </UDashboardPanelContent>
      
      <LazySanityFile v-if="data?.video" :asset-id="data.video.asset._ref">
        <template #default="{ src }">
          <video controls>
            <source :src="src" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </template>
      </LazySanityFile>
      <UTable :rows="data.gallery" />
    </UDashboardPanel>
  </UDashboardPage>
</template>

<script setup lang="ts">
const route = useRoute()

import type { ContentPost } from '~/types'

definePageMeta({
  middleware: ['auth-logged-in']
})

const query = groq`*[_type == "contentPage" && slug.current == $slug][0] {
  title,
  content,
  video,
  gallery
}`

const { data } = useSanityQuery<ContentPost>(query, { slug: route.params.slug })
console.log(data)
</script>