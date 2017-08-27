<template>
  <div id="app">
    <div class="columns">
      <div class="column"></div>
      <div class="column">
        <br>
        <br>
        <div class="card">
          <div class="card-content">
            <p class="subtitle has-text-centered">
            Number of Times Your Parents will Suggest a $20,000+ venue
            </p>
            <p class="title has-text-centered">
               <result></result>
            </p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item"> 
              <counter>
                Pope's Family
              </counter>
            </p>
            <p class="card-footer-item">
              <counter>
                Sacha's Family
              </counter>
            </p>
          </footer>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
  import counter from './components/Counter';
  import result from './components/Result';

  export default {
    name: 'app',
    components: {
      counter,
      result,
    },
  };
</script>

