<template>
  <div>
    skills
  </div>
</template>

<script>
  export default {
    title: "Skills",
    asyncData ({ store }) {
      return store.dispatch('FETCH_DATA')
    }
  }
</script>

<style lang="stylus">
</style>