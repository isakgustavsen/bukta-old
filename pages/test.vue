<script lang="ts" setup>

const res = ref()

async function search(q:string) {
  const { data, error } = await $fetch('/api/querySanity',{
    method: 'GET',
    body:{name: 'Isak'}
  })
  res.value = data
}

const {data} = await useFetch('https://azn1k8lx.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27homePage%27+%26%26+_id+%3D%3D+%270b6bd09e-c564-49b1-bfe7-fd5701b11e24%27%5D%7B%0A++++%27label%27%3A+title%2C%0A++++%27children%27%3A+*%5B_type+%3D%3D+%27contentPage%27+%26%26+references%28%5E._id%29%5D%7Corder%28title+asc%29%7B%0A++++++%27label%27%3A+title%2C%0A++++++%27to%27%3A+%22%2F%22+%2B+slug.current%2C%0A++++++%27children%27%3A+*%5B_type+%3D%3D+%27contentPage%27+%26%26+references%28%5E._id%29%5D%7Corder%28title+asc%29%7B%0A++++++++%27label%27%3A+title%2C%0A++++++++%27to%27%3A+%22%2F%22+%2B+%5E.slug.current+%2B+%22%2F%22+%2B+slug.current%7D%0A++++%7D%0A++%7D')
console.log(data.value.result)
</script>

<template>
  <div>
    <UButton @click="search('test')" />
    {{ data }}
    <UDashboardSidebarLinks :links="data.result" />
  </div>
</template>

<style scoped></style>
