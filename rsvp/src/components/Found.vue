<template>
  <div>
    
    <div class="lil-padding">
      <h1 class="title is-1 has-text-centered">Found You!!!</h1>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://tctechcrunch2011.files.wordpress.com/2014/12/style.gif" alt="Image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ user.name }} </p>
              <p class="subtitle is-6">{{ user.email }}</p>
            </div>
          </div>

          <div class="content">
            {{ user.description }}
          </div>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" @click="rsvp">RSVP</a>
            <a class="card-footer-item" @click="alert('Sorry About that')">Whoops... (It's not me)</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState([
        'user',
      ]),
    },
    methods: {
      rsvp() {
        this.$store.dispatch('incrementStep');
        this.$store.dispatch('responded');
      },
    },
  };
</script>
<style>
  .lil-padding {
    padding:30px;
  }
</style>


