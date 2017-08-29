<template>
  <div id="app">
    <navbar></navbar>

    <section class="section">
      <div class="container">
        <h1 class="title is-1 has-text-centered"> Hi There! </h1>
      </div>
    </section>


  </div>
</template>

<script>
import navbar from './components/Navbar';

export default {
  name: 'app',
  components: {
    navbar,
  },
  computed: {},
};
</script>

<style>
</style>
