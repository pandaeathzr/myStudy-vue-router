<template>
  <div>
    this is home.vue
    <br>
    <router-link to='/homePageSon'>to next</router-link>
    <router-view></router-view>
    <p
      @click="$router.go(-1)"
      v-if="$route.path === '/homePageSon'">back</p>
  </div>
</template>
<script>
export default {
  mounted() {
  }
}
</script>