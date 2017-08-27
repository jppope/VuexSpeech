<template>
  <div>
    {{ storeCounter }}
  </div>
</template>

<script>

export default {
  name: 'app',
  computed: {
    storeCounter() {
      return this.$store.state.counter;
    },
  },
};
</script>

