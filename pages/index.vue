<template>
  <UDashboardPage>
    <UDashboardPanel>
      <UDashboardNavbar :title="data?.title" />
      <UDashboardPanelContent>
        <UPageBody prose>
          <SanityContent :blocks="data?.content" />
        </UPageBody>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>

<script setup lang="ts">
import type { ContentPost } from '~/types'

const query = groq`*[_type == "homePage"][0]{
  title,
  content
}`
const { data } = useSanityQuery<ContentPost>(query)
</script>
