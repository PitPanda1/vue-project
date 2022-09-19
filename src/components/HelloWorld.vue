<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="increment">Counts: {{ count }}</button>    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      test: 'test'
    }
  },
  props: {
    msg: String
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
}
</script>

<style scoped>

</style>
