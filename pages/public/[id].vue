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
            <!-- <UCarousel v-slot="{ item, index }" :items="data?.gallery" :ui="{ item: 'w-full' }">
                <div class="text-center mx-auto">
                    {{ item }}
                    <img :src="$urlFor(item.asset._ref)" :alt="item.label" class="rounded-full w-48 h-48 mb-2" draggable="false">

                    <p class="font-semibold">
                    {{ index + 1 }}. {{ item.name }}
                    </p>
                </div>
            </UCarousel> -->
            <!-- <SanityImage :asset-id="data?.gallery[0].asset._ref" auto="format" /> -->
        </UDashboardPanel>
    </UDashboardPage>
</template>

<script setup lang="ts">
const route = useRoute()

import type { ContentPost } from '~/types'

const query = groq`*[_id == $id][0] {
title,
content,
video,
gallery
}`

const { data } = useSanityQuery<ContentPost>(query, { id: route.params.id})
</script>