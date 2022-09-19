<template>
  <div class="FooBar">
    Countdown: {{ count }}
    <button @click="reset">Reset Counter</button>
  </div>
</template>

<script>
export default {
  name: 'FooBar',
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    reset() {
      this.$store.commit('reset');
    }
  }
}
</script>

<style>
.FooBar {
  padding: 1rem;
  background-color: yellowgreen;
  margin: 1rem 0;
}
</style>
