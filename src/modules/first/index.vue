<template>
  <div>
    this is first.vue
    <br>
    <button @click="getBy$store">getBy$store</button>
    <button @click="getByMapGetters">getByMapGetters</button>
    <button @click="getByMapGettersChangeName">getByMapGettersChangeName</button>
    <hr><hr><hr>
    <div>{{getA}}</div>
    <div>{{getB}}</div>
    <div>{{BName}}</div>
    <div>{{CName}}</div>
    <hr><hr><hr>
    <button @click="changeABy$store">changeABy$store</button>
    <button @click="changeBByMapMutations">changeBByMapMutations</button>
    <hr><hr><hr>
    <button @click="asyncChangeABy$store">asyncChangeABy$store</button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'getA',
      'getB'
    ]),
    ...mapGetters({
      BName: 'getB',
      CName: 'getC',
    })
  },
  methods: {
    getBy$store() {
      console.log(this.$store.getters.getA);
    },
    getByMapGetters() {
      console.log(this.getA);
      console.log(this.getB);
    },
    getByMapGettersChangeName() {
      console.log(this.BName);
      console.log(this.CName);
    },
    changeABy$store() {
      this.$store.commit('changeA','this is changA!');
    },
    changeBByMapMutations () {
      this.changeB('this is changB!')
    },
    ...mapMutations([
      'changeA',
      'changeB',
      'changeC'
    ]),
    asyncChangeABy$store() {
      this.$store.dispatch('asyncChangeA','11111111')
    }
  }
}
</script>