<script setup lang="ts">
const route = useRoute()
const appConfig = useAppConfig()


const client = useKindeClient()
const links = []

async function fetchAdmin() {
  const query = groq`*[_type == 'homePage' && _id == '1932d52c-4e4c-4127-845e-26d7f13c2dfe']{
    'label': title,
    'children': *[_type == 'contentPage' && references(^._id)]|order(title asc){
      'label': title,
      'to': "/" + slug.current,
      'children': *[_type == 'contentPage' && references(^._id)]|order(title asc){
        'label': title,
        'to': "/" + slug.current}
    }
  }`
  const { data } = await useSanityQuery(query)
  return data
}

async function fetchNavigation() {
  const query = groq`*[_type == 'homePage' && _id == '0b6bd09e-c564-49b1-bfe7-fd5701b11e24']{
    'label': title,
    'children': *[_type == 'contentPage' && references(^._id)]|order(title asc){
      'label': title,
      'to': "/" + slug.current,
      'children': *[_type == 'contentPage' && references(^._id)]|order(title asc){
        'label': title,
        'to': "/" + slug.current}
    }
  }`
  const { data } = await useSanityQuery(query)
  return data
}

const {data: isUser} = await useAsyncData(async () => {
  return (await client?.getPermission('user')) ?? {}
})

const {data: isAdmin} = await useAsyncData(async () => {
  return (await client?.getPermission('admin')) ?? {}
})

//Fetch navigation if user has access
if(isUser.value.isGranted){
  const res1 = await fetchNavigation()
  links.push(res1.value[0])
}
if(isAdmin.value.isGranted){
  const res = await fetchAdmin()
  links.push(res.value[0])
}

const defaultColors = ref(['green', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet'].map(color => ({ label: color, chip: color, click: () => appConfig.ui.primary = color })))
const colors = computed(() => defaultColors.value.map(color => ({ ...color, active: appConfig.ui.primary === color.label })))
</script>

<template>
  <UDashboardLayout>
    <UDashboardPanel :width="250" :resizable="{ min: 200, max: 300 }" collapsible>
      <UDashboardNavbar class="!border-transparent" :ui="{ left: 'flex-1' }">
        <template #left>
          <TeamsDropdown />
        </template>
      </UDashboardNavbar>

      <UDashboardSidebar>
        <template #header>
          <UDashboardSearchButton />
        </template>

        <UDashboardSidebarLinks :links="links" />

        <UDivider />

        <UDashboardSidebarLinks :links="[{ label: 'Colors', draggable: true, children: colors }]" @update:links="colors => defaultColors = colors" />

        <div class="flex-1" />

        <UDashboardSidebarLinks :links="footerLinks" />

        <UDivider class="sticky bottom-0" />

        <template #footer>
          <!-- ~/components/UserDropdown.vue -->
          <UserDropdown />
        </template>
      </UDashboardSidebar>
    </UDashboardPanel>

    <slot />

    <!-- ~/components/HelpSlideover.vue -->
    <HelpSlideover />
    <!-- ~/components/NotificationsSlideover.vue -->
    <NotificationsSlideover />

    <ClientOnly>
      <LazyUDashboardSearch :groups="groups" />
    </ClientOnly>
  </UDashboardLayout>
</template>