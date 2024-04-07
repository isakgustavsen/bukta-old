<script setup lang="ts">

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <!-- <UDashboardPanel :width="400" :resizable="{ min: 200, max: 300 }" collapsible>
      <UDashboardNavbar>
        <template #toggle>
          <UDashboardNavbarToggle icon="i-heroicons-x-mark" />
        </template>
      </UDashboardNavbar>
      <UDashboardSidebar>
        <template #header>
          <UDashboardSearchButton />
        </template>

        <UDashboardSidebarLinks :links="links" />

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
    <UDashboardPage>
      <NuxtPage />
    </UDashboardPage> -->
</template>
