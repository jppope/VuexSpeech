import Vue from 'vue';
import Router from 'vue-router';
import FindGuest from '@/components/FindGuest';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FindGuest',
      component: FindGuest,
    },
  ],
});
