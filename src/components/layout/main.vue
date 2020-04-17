<template>
  <div>
    <header>
      <nav>
        <router-link
          class="item"
          v-for="item in nvaList"
          :key = item.id
          :to = item.url>{{item.name}}</router-link>
      </nav>
    </header>
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
        },
        {
          name: 'test',
          url: '/test',
          id: 3,
        }
      ]
    }
  },
  methods: {
    // handleClick() {
    //   console.log(this.$router)
    // }
  }
}
</script>
<style scoped>
header{
  background-color: #002d72;
  height: 6rem;
  line-height: 6rem;
}
nav{
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  font-size: 1rem;
  height: 1rem;
  margin-right: 10rem;
}
.item{
  color: #fff;
  margin: 0 20px;
  text-decoration-line: none;
  transition: 0.3s;
}
.item:hover{
  color: #f1c400
}
.main{
  background-color: red;
  height: 100vh;
}
</style>