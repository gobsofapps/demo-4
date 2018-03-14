<template>
  <div v-if="userData">
    <div class="checking-header">
      <h4 class="checking-heading">Your Account</h4>
    </div>
    <h2 class="profile-account__header">Welcome to your account, {{userData.given_name}}</h2>
    <div class="account-options">
      <div class="account-options__option grey">
        <h2 class="account-options-__heading">Past Transactions</h2>
      </div>
      <div class="account-options__option">
        <h2 class="account-options-__heading">Bank Profile</h2>
      </div>
      <div class="account-options__option orange">
        <h2 class="account-options-__heading">Credit Cards</h2>
      </div>
    </div>
  </div>
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
