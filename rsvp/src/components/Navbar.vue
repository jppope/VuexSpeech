<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          Wedibration.com
        </a>
        <div class="navbar-burger burger" data-target="navMenuExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenuExample" class="navbar-menu">
        <div class="navbar-start">
        </div>
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link  is-active" href="/documentation/overview/start/">
              More
            </a>
            <div class="navbar-dropdown ">
              <a class="navbar-item " href="">About</a>
              <hr class="navbar-divider">
              <div class="navbar-item">
                <div>
                  <p class="is-size-6-desktop">
                    <strong class="has-text-info"></strong>
                  </p>
                  <small>
                    <a class="view-all-versions" href="/versions">View all versions</a>
                  </small>              
                </div>
              </div>
            </div>
          </div>
          <a class="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
            Github
          </a>
          <a class="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
            @jppope
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
  export default {
    name: 'navbar',
  };
</script>