<template>
  <div>
    <section class="section whitesmoke">
      <div class="container is-large">
        <h1 class="title is-3 has-text-centered">
        {{ msg }}
        <br>
          <small>Type Your Email to Check In!</small>
        </h1>
        <div class="columns">
          <div class="column"></div>
          <div class="column">
            <div class="field has-addons">
              <div class="control is-expanded">
                <input class="input" v-model="email">
              </div>
              <div class="control">
                <a class="button is-info" @click="checkUser(email)">Find Guest</a>                
              </div>
            </div>
          </div>
          <div class="column"></div>          
        </div>
        <p class="has-text-centered">
          <small>*Please use your email in so that we can find your information in our systems</small>
        </p>
      </div>
    </section>
    <section class="section">
      <div class="container is-large">
        <div class="has-text-centered">
          <img src="https://www.elegantweddinginvites.com/wp-content/uploads/2015/12/creative-funny-wedding-photo-ideas.jpg">
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'findGuest',
  data() {
    return {
      msg: 'Wedibration.com',
      email: 'peteruritis@gmail.com',
    };
  },
};
</script>

<style scoped>
.whitesmoke {
  background: whitesmoke;
}
</style>
