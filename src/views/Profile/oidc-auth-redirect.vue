<template>
  <div class="profile-info">
    <div class="profile-logo"></div>
    <div class="profile-info__block">
      <div class="profile-info__loading" >
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
  export default {
    created() {
      this.$store.dispatch('getUserInfo', this.$route.query);
    },
  };
</script>
