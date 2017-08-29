<template>
  <div>
    <br>
    <br>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Répondez s'il vous plaît
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <p class="has-text-centered">
            Will you be able to Attend the Wedibration on 
          </p>
          <h2 class="subtitle is-4 has-text-centered"><strong>July 7th, 2018?</strong></h2>
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item" @click="attendingWedding">Yes</a>
        <a class="card-footer-item" @click="lame">No</a>
      </footer>
    </div>

  </div>
</template>
<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
      };
    },
    methods: {
      ...mapActions([
        'attending',
        'notAttending',
      ]),
      attendingWedding() {
        this.$store.dispatch('attending');
      },
      lame() {
        window.location.href = 'https://orig13.deviantart.net/9440/f/2011/350/2/1/south_park__cartman____that__s_so_lame____by_obsessed_wnew-d4j8sie.gif';
      },
    },
  };
</script>