<template>
  <div v-if="userData">
    <div class="checking-header">
      <h4 class="checking-heading">Your Account</h4>
    </div>
    <h4 class="profile-account__header">Welcome to your account, {{userData.given_name}}</h4>
    <div class="account-options">
      <div class="account-options__option transactions">
        <h2 class="account-options__heading">Past Transactions</h2>
      </div>
      <div class="account-options__option profile">
        <h2 class="account-options__heading">Bank Profile</h2>
      </div>
      <div class="account-options__option cards">
        <h2 class="account-options__heading">Credit Cards</h2>
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
