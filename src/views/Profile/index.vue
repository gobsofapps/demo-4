<template>
  <div class="profile-info">
    <div class="profile-info__block">
      <div class="profile-info__data" v-if="userData">
        <h4 class="heading">Please verify your personal information to proceed further:</h4>
        <div class="form-block w-form">
          <form id="email-form" name="email-form" data-name="Email Form">
            <label for="name">First Name:</label>
            <input type="text"
                   class="input-field w-input"
                   maxlength="256" name="name"
                   data-name="Name"
                   id="name"
                   :value="userData.given_name">
            <label for="surname">Second Name:</label>
            <input
              type="text"
              class="input-field w-input"
              maxlength="256"
              name="surname"
              data-name="surname"
              id="surname"
              :value="userData.family_name"
            >
            <label for="address">Address:</label>
            <input
              type="text"
              class="input-field w-input"
              maxlength="256"
              name="address"
              data-name="address"
              id="address"
              :value="userData.address.street_address"
            >
            <label for="phone">Phone:</label>
            <input
              type="text"
              class="input-field w-input"
              maxlength="256"
              name="phone"
              data-name="phone"
              id="phone"
              :value="userData.address.street_address"
            >
            <label for="postal">Postal Code:</label>
            <input
              type="text"
              class="input-field w-input"
              maxlength="256"
              name="postal"
              id="postal"
              :value="userData.address.postal_code"
            >
          </form>
          <a href="#" class="button w-button">Confirm</a>
        </div>
      </div>
      <div class="profile-info__loading">
        <div class="icon-loader w-embed">
          <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" width="100%" viewbox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
            <circle fill="#000" stroke="none" cx="30%" cy="50" r="6">
    <animate
      attributeName="opacity"
      dur="1s"
      values="0;1;0"
      repeatCount="indefinite"
      begin="0.1"/>
  </circle>
  <circle fill="#000" stroke="none" cx="50%" cy="50" r="6">
    <animate
      attributeName="opacity"
      dur="1s"
      values="0;1;0"
      repeatCount="indefinite"
      begin="0.2"/>
  </circle>
  <circle fill="#000" stroke="none" cx="70%" cy="50" r="6">
    <animate
      attributeName="opacity"
      dur="1s"
      values="0;1;0"
      repeatCount="indefinite"
      begin="0.3"/>
  </circle>
          </svg>
        </div>
        <div class="loading-text">Loading...</div>
      </div>

    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';

  export default {
    created() {
      this.$store.dispatch('getUserData');
    },
    computed: {
      ...mapGetters([
        'userData',
      ]),
    },
  };
</script>
