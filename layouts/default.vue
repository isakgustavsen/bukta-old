<template>
  <div>
    <UDashboardLayout>
      <UDashboardPanel :width="400" :resizable="{ min: 200, max: 300 }" collapsible>
        <UDashboardNavbar />

        <UDashboardSidebar>
          <template #header>
            <!-- Place anything you like here -->
            <UDashboardSearchButton />
          </template>

          <UDashboardSidebarLinks :links="links[0].children" />

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
      <slot />
    </UDashboardLayout>
  </div>
</template>

<script setup lang="ts">
const query = groq`*[_type == 'homePage']{
    'label': title,
    'children': *[_type == 'contentPage' && references(^._id)]|order(title asc){
      'label': title,
      'to': "/plans/" + slug.current,
      'children': *[_type == 'contentPage' && references(^._id)]|order(title asc){
        'label': title,
        'to': "/plans/" + slug.current}
    }
  }`
const { data: links } = useSanityQuery(query)

</script>