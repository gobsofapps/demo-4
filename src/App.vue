<template>
  <div id="app" class="app">
    <transition name="router" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'App',
    methods: {
      ...mapActions([
        'getSignInQRCode',
        'getSignUpQRCode',
      ]),
    },
  };
</script>

<style>
  @import 'styles/normalize.css';
  @import 'styles/webflow.css';
  @import 'styles/wells-fargo.css';

  html,
  body {
    height: 100%;
    font-family: Verdana, Geneva, sans-serif;
  }

  .app {
    min-height: 100%;
  }
</style>
