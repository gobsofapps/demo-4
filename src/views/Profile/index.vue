<template>
<div class="profile">
  <h3 class="heading-4">Your account was successfully created. Please confirm that your personal information is correct to finish your registration</h3>
  <div class="personal-details w-form">
    <form id="email-form" name="email-form" class="personal-details__form">
      <label for="name">Name:</label>
      <input type="text"
             class="w-input"
             maxlength="256"
             value="userData.given_name"
             name="name"
             id="name">
      <label for="surname">Surname:</label>
      <input type="text"
             class="w-input"
             maxlength="256"
             value="userData.family_name"
             name="surname"
             id="surname">
      <label for="phone_number">Phone Number:</label>
      <input type="text"
             class="w-input"
             maxlength="256"
             value="userData.phone_number"
             name="phone_number" id="phone_number">
      <label for="address">Address:</label>
      <input type="text"
             class="w-input"
             maxlength="256"
             name="address"
             value="userData.address.street_address"
             id="address">
      <label for="postal-code">Address:</label>
      <input type="text"
             class="w-input"
             maxlength="256"
             name="address"
             value="userData.address.postal_code"
             id="postal-code">
      <label for="country">Country of Residence:</label>
      <input type="text"
             class="w-input"
             maxlength="256"
             name="country"
             value="USA"
             id="country">
      <label for="email">Email:</label>
      <input type="text"
             class="w-input"
             maxlength="256"
             name="email"
             value="userData.email"
             id="email">
      <router-link to='/account' class="confirm-button w-button">Confirm</router-link>
    </form>
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
