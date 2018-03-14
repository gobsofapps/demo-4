<template>
  <div>
    <div class="signin-header"></div>
    <div class="signin-form-container">
      <h5 class="signin-form-container__balance">My Balance<span class="text-span">TM</span></h5>
      <div class="arrow-up"></div>
      <div class="signin-form-container__form w-form">
        <form id="email-form" name="email-form" data-name="Email Form" class="form">
          <div class="form-section"><input type="text" class="form-input w-input" maxlength="256" name="Online-ID" data-name="Online ID" placeholder="Enter Online ID" id="Online-ID-2">
            <div class="radio-button-field w-radio"><input type="radio" id="radio" name="radio" value="Radio" data-name="Radio" class="radio-button w-radio-input"><label for="radio" class="field-label w-form-label">Save Online ID</label></div>
          </div>
          <div class="form-section"><input type="text" class="form-input passcode w-input" maxlength="256" name="passcode" data-name="passcode" placeholder="Enter Passcode" id="passcode">
            <div class="radio-button-field w-radio"><input type="radio" id="radio-2" name="radio" value="Radio" data-name="Radio 2" class="radio-button w-radio-input"><label for="radio-2" class="field-label w-form-label">Set Up Touch ID</label></div>
          </div>
        </form><a href="#" class="signin-button w-button">Sign In</a>
        <div class="forgot-password">
          <div class="forgot-password__textblock">Forgot ID/Passcode?</div>
          <div class="forgot-password__textblock">Enroll</div>
        </div>
      </div>
    </div>
    <div class="signin-menu">
      <router-link to="/checking-account" class="signin-menu__item">
        <div class="icon"><img src="../../assets/005-cart.svg" width="50" height="50"></div>
        <div class="text-block">Open an account or find a loan</div>
      </router-link>
      <div class="signin-menu__item">
        <div class="icon"><img src="../../assets/003-credit-card.svg" width="50" height="50"></div>
        <div class="text-block">Choose the card that works for you</div>
      </div>
      <div class="signin-menu__item">
        <div class="icon"><img src="../../assets/004-weekly-calendar.svg" width="50" height="50"></div>
        <div class="text-block">Schedule an appointment</div>
      </div>
      <div class="signin-menu__item">
        <div class="icon"><img src="../../assets/002-searching-magnifying-glass.svg" width="50" height="50"></div>
        <div class="text-block">Find your way with Better Money Habits</div>
      </div>
    </div>
    <div class="contact-info">
      <div class="contact-info__item"><img src="../../assets/002-facebook-placeholder-for-locate-places-on-maps.svg" width="20">
        <div class="contact-text">Find a location</div>
      </div>
      <div class="contact-info__item"><img src="../../assets/001-smartphone.svg" width="20">
        <div class="contact-text">Contact Us</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  };
</script>
