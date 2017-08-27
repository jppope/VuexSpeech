

<template>
  <div>
    <a class="button is-primary" @click="increment">
      <slot></slot> 
      {{ count }}
    </a>
  </div>
</template>

<script>
  export default {
    name: 'counter',
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      increment() {
        // eslint-disable-next-line
        this.count++;
        // eslint-disable-next-line
        this.$store.state.counter++;
      },
    },
  };
</script>

