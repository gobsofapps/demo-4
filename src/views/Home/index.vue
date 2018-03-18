<template>
  <div class="citi-login">
    <div class="citi-logo"></div>
    <h3 class="signin-title">Welcome to your <br>new Citi Mobile® App!</h3>
    <div class="get-started">Let&#x27;s get started.</div>
    <router-link to="/checking-account" class="action-button w-button">Open a Checking Account</router-link>
    <a href="#" class="action-button w-button">Register or Activate a Card</a>
    <div class="already-registered">Already registered? Sign On</div>
    <div class="footer">
      <div class="footer__support">Support</div>
      <div class="footer__citigroup">2018 Citigroup Inc</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  };
</script>
