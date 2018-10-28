<template>
  <div>
    <router-link :to="'/'">404</router-link>
  </div>
</template>

<script>
  export default {
    title: '404',
    data() {
      return {}
    },

    computed: {},

    beforeMount() {},

    beforeDestroy() {},

    watch: {},

    methods: {}
  }
</script>

<style lang="stylus" scoped>
div
  letter-spacing 10px
  font-size 4em
  text-transform uppercase
  margin 0 0 10px
  font-weight 400
  text-shadow 3px 3px 0 rgba(0,0,0,.4)
  
  a
    color inherit
    text-decoration none
    
    &:hover 
      color inherit
      text-decoration none
      cursor pointer
</style>