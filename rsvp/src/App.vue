<template>
  <div id="app">
    <navbar></navbar>

    <div>
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
};
</script>

<style>
</style>
