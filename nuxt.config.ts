// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxthub/core', '@nuxt/ui-pro'],
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
  modules: ['@nuxt/ui', '@nuxtjs/kinde', '@nuxtjs/sanity', "@nuxt/image"],
  sanity: {
    projectId: 'azn1k8lx',
  },
  kinde: {
    authDomain: process.env.NUXT_KINDE_AUTH_DOMAIN, 
    clientId: process. env.NUXT_KINDE_CLIENT_ID, 
    clientSecret: process.env.NUXT_KINDE_CLIENT_SECRET, 
    redirectURL: process.env.NUXT_KINDE_REDIRECT_URL, 
    logoutRedirecturL: process.env.NUXT_KINDE_LOGOUT_REDIRECT_URL,
    postLoginRedirecturl: process.env.NUXT_KINDE_POST_LOGIN_REDIRECT_URL,
  }
})