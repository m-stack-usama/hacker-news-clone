// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxthub/core"],
  compatibilityDate: "2025-01-31",
  hub: {
    cache: true,
  },
});
