<script lang="ts" setup>

const query = groq`*[_type == "contentPage"]{
  // 'content': pt::text(content)
  content
}`
// const data = await useSanity().fetch(query)

const sanity = useSanity()

async function test() {
  const data = await sanity.fetch(query);
  return data
}

const info = test()

console.log(info)
</script>

<template>
  <div>
    Data: {{ info }}
  </div>
</template>