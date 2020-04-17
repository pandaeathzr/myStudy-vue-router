<template>
  <div>
    <nav>
      <router-link
        class="nav"
        v-for="item in nvaList"
        :key = item.id
        :to = item.url>{{item.name}}</router-link>
    </nav>
    <router-view class="main"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nvaList:[
        {
          name: 'home',
          id: 0,
          url: '/home'
        },
        {
          name: 'first',
          id: 1,
          url: '/first'
        },
        {
          name: 'second',
          url: '/second',
          id: 2,
        }
      ]
    }
  },
  methods: {
    handleClick() {
      console.log(this.$router)
    }
  }
}
</script>
<style scoped>
.nav{
  width: 100px;
  background-color: #ffffe0;
  margin: 10px;
}
.main{
  background-color: red;
  height: 100vh;
}
</style>