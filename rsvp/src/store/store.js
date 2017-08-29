import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable */
// cause like eslint doesn't like not- export default
export const store = new Vuex.Store({
  state: {
    user: {},
  },
  getters: {
    step: state => state.step,
  },
  mutations: {
    incrementStep: state => state.step++,
    setUser: (state, user) => { state.user = user },
  },
  actions: {
    incrementStep: context => context.commit('incrementStep'),
    checkUser: (context, payload) => {
      // pretend this is a database call
      if (payload == 'peteruritis@gmail.com') {
        
        setTimeout(function(){
          // eslint-disable-nextline
          context.commit('incrementStep');
          
          // eslint-disable-nextline
          context.commit('setUser', {
            name: 'Peter Uritis',
            email: 'peteruritis@gmail.com',
            description: 'Salesman, Goliath of Guiness, Breaker of Chains, and the mother of dragons',
            allowedGuest: true,
          });
        }, 1000);

      } else {
        alert("Nope... Nope");
      }
    },
  }
})