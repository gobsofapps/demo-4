<template>
  <section class="profile-info" v-if="userData">
    <div class="welcome-account">Welcome to your account, {{userData.given_name}}</div>
    <div class="control-panel">
      <div class="control-panel__item">Your Savings &gt;</div>
      <div class="control-panel__item">Past Transactions &gt;</div>
      <div class="control-panel__item">Credit Options &gt;</div>
      <div class="control-panel__item">Upgrade Your Account &gt;</div>
      <div class="control-panel__item exit">Exit</div>
    </div>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'userData',
      ]),
    },
  };
</script>
