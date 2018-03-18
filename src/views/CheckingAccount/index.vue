<template>
  <div style="height:100%">
    <router-link to="/" class="back-link w-inline-block">
      <div class="back-icon"></div>
      <div class="back-text">Back</div>
    </router-link>
    <carousel class="citi-slider" :perPage="1" :paginationActiveColor="'#ffffff'" :paginationColor="'#c8c8c8'">
        <slide class="slide w-slide">
          <h3 class="slide-header">There&#x27;s a Citi account for everybody. Find the one.</h3>
          <div class="slider__text">Our range of checking options gives you access to the good stuff: personalized insights, easy access to your accounts, and snart tech to help you manage your money like a pro.</div>
          <div class="slider__text-with-icon">
            <div class="icon"></div>
            <div class="text">10 Minutes to apply</div>
          </div>
          <div class="bottom-text">Swipe to Start</div>
        </slide>
        <slide class="slide w-slide">
          <div class="bottom-text">Access to the Citi Mobile® App requires a Citi Account.</div>
          <div class="slider__package-info">
            <h4 class="package-info__header">Access Account Package</h4>
            <div class="package-info__benefits">
              <div class="benefit-icon"></div>
              <div class="text-block">$10 monthly service fee*</div>
            </div>
            <div class="package-info__benefits">
              <div class="benefit-icon"></div>
              <div class="text-block">No overdraft fess</div>
            </div>
            <div class="package-info__benefits">
              <div class="benefit-icon"></div>
              <div class="text-block">No paper checks</div>
            </div>
            <div class="package-info__text">*Waived if you make one qualifying direct deposit per statement period or one qualifying bill payment per statement period or maintain a $1,500+ combined average monthly balance in eligible linked accounts.</div>
            <div class="buttons-container">
              <a :href="QR.signInQRCode" class="package-button verified w-button">Apply with Verified.Me</a>
              <a href="#" class="package-button w-button">Go to Form</a></div>
          </div>
          <h5 class="pick-checking-account">Pick a Checking Account</h5>
        </slide>
        <slide class="slide w-slide">
          <div class="bottom-text">Access to the Citi Mobile® App requires a Citi Account.</div>
          <div class="slider__package-info">
            <h4 class="package-info__header">Basic Banking Package</h4>
            <div class="package-info__benefits">
              <div class="benefit-icon"></div>
              <div class="text-block">$12 monthly service fee*</div>
            </div>
            <div class="package-info__benefits">
              <div class="benefit-icon"></div>
              <div class="text-block">Unlimited check writing</div>
            </div>
            <div class="package-info__benefits">
              <div class="benefit-icon"></div>
              <div class="text-block">Special perks for those 62 and older</div>
            </div>
            <div class="package-info__text">*Waived if you make one qualifying direct deposit per statement period or one qualifying bill payment per statement period or maintain a $1,500+ combined average monthly balance in eligible linked accounts. Fee also waived for first listed account owner ages 62 or older.</div>
            <div class="buttons-container"><a :href="QR.signInQRCode" class="package-button verified w-button">Apply with Verified.Me</a><a href="#" class="package-button w-button">Go to Form</a></div>
          </div>
          <h5 class="pick-checking-account">Pick a Checking Account</h5>
        </slide>
        <slide class="slide w-slide">
          <div class="bottom-text">Access to the Citi Mobile® App requires a Citi Account.</div>
          <div class="slider__package-info">
            <h4 class="package-info__header">Citibank Account Package</h4>
            <div class="package-info__benefits">
              <div class="benefit-icon"></div>
              <div class="text-block">$25 monthly service fee*</div>
            </div>
            <div class="package-info__benefits">
              <div class="benefit-icon"></div>
              <div class="text-block">No Citi fee at non-Citi ATMs*</div>
            </div>
            <div class="package-info__benefits">
              <div class="benefit-icon"></div>
              <div class="text-block">Eligible customers can earn ThankYou® Points with this account package</div>
            </div>
            <div class="package-info__text">*Waived if you maintain a combined average monthly balance of $10,000+ in eligible linked deposit, retirement and investment accounts.</div>
            <div class="buttons-container"><a :href="QR.signInQRCode" class="package-button verified w-button">Apply with Verified.Me</a><a href="#" class="package-button w-button">Go to Form</a></div>
          </div>
          <h5 class="pick-checking-account">Pick a Checking Account</h5>
        </slide>
        <slide class="slide black-slide w-slide">
          <div class="bottom-text">Access to the Citi Mobile® App requires a Citi Account.</div>
          <div class="slider__package-info black-package">
            <h4 class="package-info__header">Citibank Account Package</h4>
            <div class="package-info__benefits">
              <div class="benefit-icon"></div>
              <div class="text-block">$30 monthly service fee*</div>
            </div>
            <div class="package-info__benefits">
              <div class="benefit-icon"></div>
              <div class="text-block">Preferred pricing &amp; rates on select products &amp; services</div>
            </div>
            <div class="package-info__benefits">
              <div class="benefit-icon"></div>
              <div class="text-block">Helpful resources &amp; tools</div>
            </div>
            <div class="package-info__text">*Waived if you maintain a combined average monthly balance of $50,000+ in eligible linked deposit, retirement and investment accounts.</div>
            <div class="buttons-container"><a :href="QR.signInQRCode" class="package-button verified w-button">Apply with Verified.Me</a><a href="#" class="package-button black-button w-button">Go to Form</a></div>
          </div>
          <h5 class="pick-checking-account">Pick a Checking Account</h5>
        </slide>
    </carousel>
  </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex';
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    name: 'CheckingAccount',
    components: {
      Carousel,
      Slide,
    },
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
