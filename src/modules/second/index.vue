<template>
  <div>
    <p>this is second.vue to test params;</p>
    <button @click="handleChange">handleChange</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1
    }
  },
  methods: {
    handleChange() {
      this.$router.push(`/secondPage/params/${this.page++}`);
    }
  }
}
</script>