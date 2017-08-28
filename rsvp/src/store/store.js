import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable */
// cause like eslint doesn't like not- export default
export const store = new Vuex.Store({
  state: {
    step: 0,
    user: {},
  },
  getters: {
    step: state => state.step,
    // doubleCounter: state => state.counter * 2,
    // stringCounter: state => `${state.counter} clicks`,
  },
  mutations: {
    incrementStep: state => state.step++,
    setUser: (state, user) => { state.user = user },
  },
  actions: {
    // increment: context => context.commit('increment')
    checkGuest: (context, payload) => {

      // pretend this is a database call
      if (payload == 'peteruritis@gmail.com') {

        // eslint-disable-nextline
        context.commit('incrementStep');
        
        // eslint-disable-nextline
        context.commit('setUser', {
          name: 'Peter Uritis',
          email: 'peteruritis@gmail.com',
          description: 'Salesman, Goliath of Guiness, Breaker of Chains, and the mother of dragons',
        });

      } else {
        alert("Nope... Nope");
      }
    },
    incrementStep: (context) => context.commit('incrementStep'),
  }
})