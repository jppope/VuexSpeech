<template>
  <div id="app">
    <navbar></navbar>

    <div v-if="step == 0">
      <findguest></findguest>
    </div>
  </div>
</template>

<script>
import navbar from './components/Navbar';
import findguest from './components/FindGuest';

export default {
  name: 'app',
  components: {
    navbar,
    findguest,
  },
  computed: {
    step() {
      return this.$store.getters.step;
    },
  },
};
</script>

<style>
</style>
