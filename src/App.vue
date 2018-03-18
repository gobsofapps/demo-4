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
  @import 'styles/citi-bank.css';

  html,
  body {

  }

  .app {
    height: 100%;
  }
</style>
