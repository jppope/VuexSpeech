<template>
  <div>
  <br>
    <pre>
      <code>
        {{ storeData }}
      </code>
    </pre>
  </div>
</template>
<script>
  export default {
    computed: {
      storeData() {
        return JSON.stringify(this.$store.state, null, 2);
      },
    },
  };
</script>
<style>
  pre {
    font-family:"Courier New", Courier, monospace;
  }
</style>