<template>
  <div id="app">
    <navbar></navbar>

    <div v-if="step == 0">
      <findguest></findguest>
    </div>

    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-half">

        <!-- display state --> 
          <div v-if="step != 0">
            <state></state>
          </div>

        </div>

        <!-- display steps -->
        <div class="column">

          <!-- step 1 --> 
          <div v-if="step == 1">
            <found></found>
          </div>

          <!-- step 2 -->
          <div v-if="step == 2">
            <rsvp></rsvp>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from './components/Navbar';
import findguest from './components/FindGuest';
import found from './components/Found';
import rsvp from './components/Rsvp';
import state from './components/State';

export default {
  name: 'app',
  components: {
    navbar,
    findguest,
    found,
    rsvp,
    state,
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
