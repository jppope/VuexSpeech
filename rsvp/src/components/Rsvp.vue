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

      <div class="modal" :class="{ 'is-active': show}">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Will there be anyone joining you?</p>
            <button class="delete" aria-label="close" @click="show = !show"></button>
          </header>
          <section class="modal-card-body">
          <br>
          <h3 class="title is-4">Number of Guests I'm Bringing:</h3>
          <div class="field">
            <div class="control">
              <label class="radio">
                <input type="radio" v-model="guest" v-bind:value="0">
                0
              </label>
              <label class="radio">
                <input type="radio" v-model="guest" v-bind:value="1">
                +1
              </label>
              <label class="radio">
                <input type="radio" v-model="guest" v-bind:value="2">
                +2
              </label>
            </div>
          </div>

          <div v-if="guest == 1">
            <div class="field">
              <label class="label">Guest Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="e.g Alex Smith" v-model="guestInfo.name">
              </div>
            </div>
            <div class="field">
              <label class="label">Guest Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model="guestInfo.email">
              </div>
            </div>
            <div class="field">
              <label class="label">Guest Phone</label>
              <div class="control">
                <input class="input" type="text" placeholder="e.g. alexsmith@gmail.com" v-model="guestInfo.phone">
              </div>
            </div>
          </div>

          <div v-if="guest == 2">
            <h1 class="title is-4">Please Explain Your Need for a +2</h1>

            <div class="control">
              <div class="select">
                <select v-model="guestInfo.reason">
                  <option :value="{ reason: 'the party just got more fun' }">
                    Damn millenials won't move out, and I don't trust he/she home alone 
                  </option>
                  <option :value="{ reason: 'the party just got more fun' }">
                    making a ménage à trois happen! 
                  </option>
                  <option :value="{ reason: 'the party just got more fun' }">
                    Girlfriend and Wife BOTH want to go 
                  </option>
                  <option :value="{ reason: 'the party just got more fun' }">
                    I can't count 
                  </option>
                </select>
              </div>
            </div>
          </div>

          </section>
          <footer class="modal-card-foot">
            <button class="button is-success">Save RSVP</button>
            <button class="button" @click="show = !show">Cancel</button>
          </footer>
        </div>
      </div>

  </div>
</template>
<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        show: false,
        guest: 0,
        guestInfo: {
          name: '',
          phone: '',
          email: '',
          reason: '',
        },
      };
    },
    methods: {
      ...mapActions([
        'attending',
        'notAttending',
      ]),
      attendingWedding() {
        if (this.$store.state.user.allowedGuest) {
          this.show = !this.show;
        }
        this.$store.dispatch('attending');
      },
      lame() {
        window.location.href = 'https://orig13.deviantart.net/9440/f/2011/350/2/1/south_park__cartman____that__s_so_lame____by_obsessed_wnew-d4j8sie.gif';
      },
    },
  };
</script>