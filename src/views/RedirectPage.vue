<template>
  <div class="redirect-button" @click="redirectToURL()">
    Go back to the Bank of America app
  </div>
</template>
<script>

  export default {
    mounted() {
      window.location.href = 'citibank://open.my.app?url_launch=https://citibankverified.herokuapp.com/profile';
    },
    methods: {
      redirectToURL() {
        window.location.href = 'citibank://open.my.app?url_launch=https://citibankverified.herokuapp.com/profile';
      },
    },
  };
</script>
<style scoped>
  .redirect-button {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 300px;
    text-align: center;
    height: 50px;
    padding: 15px 10px;
    margin: auto;
    background-color: #0082f3;
    color: #fff;
    font-weight: bold;
    letter-spacing: .8px;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: -2px 2px 6px 0 rgba(0, 0, 0, .3);
  }
</style>


