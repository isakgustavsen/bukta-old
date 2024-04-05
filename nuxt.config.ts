// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@nuxthub/core", "@nuxt/ui-pro"],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  nitro: {
    experimental: {
      // Enable Server API documentation within NuxtHUb
      openAPI: true,
    },
  },
  modules: ["@nuxt/ui", "@nuxtjs/kinde", "@nuxtjs/sanity"],
  sanity: {
    projectId: "azn1k8lx",
  },
});