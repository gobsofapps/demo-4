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
  @import 'styles/bank-of-america.css';

  html,
  body {
    padding-bottom: 53px;
    font-family: 'PT Sans', sans-serif;
  }

  .app {
    min-height: 100%;
  }
</style>
