<script setup lang="ts">
const client = useKindeClient()

const links = ref([])

const {data: isAdmin} = await useAsyncData(async () => {
  return (await client?.getPermission('admin')) ?? {}
})
if(isAdmin.value && isAdmin.value.isGranted){
  const query = groq`*[_type == 'homePage']{
    'label': title,
    'children': *[_type == 'contentPage' && references(^._id)]|order(title asc){
      'label': title,
      'to': "/" + slug.current,
      'children': *[_type == 'contentPage' && references(^._id)]|order(title asc){
        'label': title,
        'to': "/" + slug.current}
    }
  }`
  const { data: adminLinks } = await useSanityQuery(query)
  links.value = adminLinks
}
else{
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
  let { data: linkArray } = await useSanityQuery(query)
  links.value = linkArray
}
</script>

<template>
  <UDashboardLayout>
    <UDashboardPanel :width="400" :resizable="{ min: 200, max: 300 }" collapsible>
      <UDashboardNavbar />

      <UDashboardSidebar>
        <template #header>
          <UDashboardSearchButton />
        </template>

        <UDashboardSidebarLinks :links="links.value" />

        <UDivider />

        <UDashboardSidebarLinks />

        <template #footer>
          <span v-if="$auth.loggedIn">
            <UButton to="/api/logout" external>
              Logout
            </UButton>
          </span>
          <LoginLink v-else to="/api/login" external>
            <UButton>Login</UButton>
          </LoginLink>
        </template>
      </UDashboardSidebar>
    </UDashboardPanel>
    <NuxtPage />
  </UDashboardLayout>
  <UNotifications />
</template>
