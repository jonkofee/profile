<template>
  <nav>
    <router-link 
      v-for="(page, index) in pages" 
      :key="index" 
      :to="page"
    />
  </nav>
</template>

<script>
export default {
  data() {
    return {
      routes: this.$router.options.routes,
      pages: []
    }
  },
  created() {
    const indexRoute = this.routes.find(route => route.path === '/')
    this.recursiveAddPages(indexRoute)
  },
  methods: {
    recursiveAddPages(route) {
      this.pages.push(route.path)

      if (route.meta && route.meta.next) {
        const nextRoute = this.routes.find(el => el.path === route.meta.next)
        return this.recursiveAddPages(nextRoute)
      }
    }
  }
}
</script>


<style lang="stylus" scoped>
nav {
  display: flex;
  flex-direction: column;
  background-color: #5b3256;
  border-radius: 40px;
  padding: 18px 10px;
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}

a {
  display: block;
  background: #f58f84;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 12px solid transparent;
  margin: -7px -18px;
  transition: all .4s cubic-bezier(.3, 0, 0, 1.3);
  transform: scale(.35);
  backface-visibility: hidden;
  will-change: transform;
}

.router-link-exact-active {
  background: #c93756;
  transform: scale(1);
  border-color: #5b3256;
}
</style>
