<template>
<div class="body-2" v-if="userData">
  <div class="welcome-image">
    <div class="hero-overlay">
      <h1 class="heading-5">Welcome, {{userData.given_name}}</h1>
    </div>
  </div>
  <div data-collapse="small" data-animation="default" data-duration="400" class="navbar-2 w-nav">
    <div class="container-2 w-container"><a href="#" class="brand w-nav-brand"></a>
      <nav role="navigation" class="w-nav-menu"><a href="#" class="nav-link w-nav-link">Account Settings</a><a href="#" class="nav-link w-nav-link">Your Transactions</a><a href="#" class="nav-link w-nav-link">Online banking</a><a href="#" class="nav-link w-nav-link">Credit</a><a href="#" class="nav-link w-nav-link">Pay online</a></nav>
      <div class="w-nav-button">
        <div class="w-icon-nav-menu"></div>
      </div>
    </div>
  </div>
  <p class="paragraph">Congratulations! You have received a free template for your payments. <a>Use one now </a>and never forget about your pending transactions.</p>
  <div class="my-cards">
    <div class="text-block-3">Go to Template &gt;</div>
  </div>
  <div class="my-cards">
    <div class="text-block-3">My Cards &gt;</div>
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
