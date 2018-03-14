<template>
  <div v-if="QR">
    <div class="checking-header">
      <h4 class="checking-heading">Checking Accounts</h4>
    </div>
    <div class="hero-image">
      <div class="bank-comparison">
        <h4 class="bank-comparison__heading">Banking wherever and whenever you need it</h4>
        <div>Account access at our network of financial centers, online or on the go</div><a href="#" class="button w-button">Compare Accounts</a></div>
    </div>
    <div class="checking-choices">
      <div class="checking-choices__choice">
        <h4 class="choice-header">I want to keep it simple</h4>
        <h4 class="choice-header red">Bank of America Core Checking</h4>
        <div class="choice-text">A straightforward personal checking solution - good for those with direct deposit.</div>
        <div class="choice-text money">$12 or $0 monthly fee</div>
        <div class="choice-text">Minimum balance or qualifying direct deposit required for the $0 monthly fee</div>
        <div class="choice-text blue">View more details</div>
        <div class="choice-buttons">
          <a :href="QR.signInQRCode" class="choice-buttons__button verified w-button">Open with Verified.Me</a>
          <a href="#" class="choice-buttons__button w-button">Go to Form</a></div>
        <div class="student-discount"><img src="../../assets/student.svg" width="70" class="image">
          <div class="text-block-2">Student? We&#x27;ll waive the monthly maintenance fee.<br><a>Learn more about eligibility</a></div>
        </div>
      </div>
      <div class="checking-choices__choice">
        <h4 class="choice-header">I want to keep it simple</h4>
        <h4 class="choice-header red">Bank of America Interest Checking</h4>
        <div class="choice-text">For those who keep high balances and want multiple interest-earning accounts with complimentary services.</div>
        <div class="choice-text money">$25 or $0 monthly fee</div>
        <div class="choice-text">Minimum balance required for the $0 monthly fee</div>
        <div class="choice-text blue">View more details</div>
        <div class="choice-buttons">
          <a :href="QR.signInQRCode" class="choice-buttons__button verified w-button">Open with Verified.Me</a>
          <a href="#" class="choice-buttons__button w-button">Go to Form</a></div>
      </div>
    </div>
    <h4 class="checking-subheader">Not sure? Compare checking accounts</h4>
    <h4 class="checking-subheader second">Small business owners, <a class="link">search checking options</a> for your business</h4>
  </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'CheckingAccount',
    computed: {
      ...mapState([
        'QR',
      ]),
    },
    methods: {
      ...mapActions([
        'getSignInQRCode',
      ]),
    },
    mounted() {
      this.getSignInQRCode();
    },
  };
</script>
