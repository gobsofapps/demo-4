<template>
  <div class="main">
    <section class="signin-section">
      <div class="form-block w-form">
        <form id="email-form" name="email-form" data-name="Email Form" class="form">
          <div class="signin-section__input"><label for="name" class="label">Username</label><input type="text" class="text-field w-input" maxlength="256" name="name" data-name="Name" placeholder="Enter your name" id="name"></div>
          <div class="signin-section__input"><label for="email" class="label">Password</label><input type="text" class="text-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Enter your email" id="email" required=""></div>
          <div class="signin-section__radio">
            <div class="radio-input">
              <div class="checkbox w-checkbox">
                <input type="checkbox" id="checkbox" name="checkbox" class="w-checkbox-input ios8-switch">
                <label for="checkbox" class="w-form-label">Save Username</label></div>
            </div>
            <div class="radio-input">
              <div class="checkbox w-checkbox">
                <input type="checkbox" id="checkbox-2" name="checkbox-2" data-name="Checkbox 2" class="w-checkbox-input ios8-switch">
                <label for="checkbox-2" class="w-form-label">Set Up Touch ID/Face ID</label>
              </div>
            </div>
          </div>
          <div class="signin-section__action">
            <div class="action-forgot-password">
              <div class="text-block">Forgot Password/Username?</div>
            </div>
            <div class="action-button">
              <div>Sign On</div>
            </div>
          </div>
        </form>
      </div>
    </section>
    <section class="section">
      <div data-animation="slide" data-duration="500" class="slider w-slider">
        <div class="w-slider-mask">
          <div class="slide w-slide">
            <div class="slider-text">
              <div class="slider-text__icon"></div>
              <div class="slider-text__headlines">
                <h4 class="slider-text__header">Everyday Checking</h4>
                <div>Open a new checking accounts in minutes</div>
              </div>
            </div>
          </div>
          <div class="slide-2 w-slide">
            <div class="slider-text">
              <div class="slider-text__icon pig"></div>
              <div class="slider-text__headlines">
                <h4 class="slider-text__header">Save for your goals</h4>
                <div>With automatic transfers, apps, and easy online tools</div>
              </div>
            </div>
          </div>
          <div class="slide-3 w-slide">
            <div class="slider-text">
              <div class="slider-text__icon house"></div>
              <div class="slider-text__headlines">
                <h4 class="slider-text__header">Buying a house?</h4>
                <div>See how much you may be able to borrow</div>
              </div>
            </div>
          </div>
        </div>
        <div class="left-arrow w-slider-arrow-left">
          <div class="icon-2 w-icon-slider-left"></div>
        </div>
        <div class="right-arrow w-slider-arrow-right">
          <div class="icon w-icon-slider-right"></div>
        </div>
        <div class="w-slider-nav w-round">
          <div class="w-slider-dot w-active"></div>
          <div class="w-slider-dot"></div>
          <div class="w-slider-dot"></div>
        </div>
      </div>
    </section>
    <div class="actions-section">
      <router-link to="/checking-account" class="actions-section__action">
        <div>Open a checking account</div>
        <div class="red-arrow"></div>
      </router-link>
      <div class="actions-section__action">
        <div>Explore home loans</div>
        <div class="red-arrow"></div>
      </div>
      <div class="actions-section__action">
        <div>Find a credit card</div>
        <div class="red-arrow"></div>
      </div>
      <div class="actions-section__action">
        <div>Make an appointment with a banker</div>
        <div class="red-arrow"></div>
      </div>
    </div>
    <div class="thumbnails">
      <div class="thumbnail">
        <div class="thumbnail__image"><img src="../../assets/thumbnail_1.jpg"></div>
        <div class="thumbnail__text">
          <h5>Four steps to a safer mobile device</h5>
        </div>
      </div>
      <div class="thumbnail">
        <div class="thumbnail__image"><img src="../../assets/thumbnail_2.jpg"></div>
        <div class="thumbnail__text">
          <h5>To save or to invest?</h5>
        </div>
      </div>
      <div class="thumbnail">
        <div class="thumbnail__image"><img src="../../assets/thumbnail_3.jpg"></div>
        <div class="thumbnail__text">
          <h5>Use our financial health tools</h5>
        </div>
      </div>
      <div class="thumbnail">
        <div class="thumbnail__image"><img src="../../assets/thumbnail_4.jpg"></div>
        <div class="thumbnail__text">
          <h5>Need online access?<br>Enroll Now</h5>
        </div>
      </div>
      <div class="thumbnail">
        <div class="thumbnail__image"><img src="../../assets/thumbnail_5.jpg"></div>
        <div class="thumbnail__text">
          <h5>Get your new checking account</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  };
</script>
<style scoped lang="less">
  input[type="checkbox"].ios8-switch {
    display: none;
  }
  input[type="checkbox"].ios8-switch + label {
    position: relative;
    padding: 5px 0 0 50px;
    line-height: 14px;
  }
  input[type="checkbox"].ios8-switch + label:before {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 40px; /* x*5 */
    height: 24px; /* x*3 */
    border-radius: 16px; /* x*2 */
    background: #fff;
    border: 1px solid #d9d9d9;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  input[type="checkbox"].ios8-switch + label:after {
    content: "";
    position: absolute;
    display: block;
    left: 0px;
    top: 0px;
    width: 24px; /* x*3 */
    height: 24px; /* x*3 */
    border-radius: 16px; /* x*2 */
    background: #fff;
    border: 1px solid #d9d9d9;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  input[type="checkbox"].ios8-switch + label:hover:after {
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
  }
  input[type="checkbox"].ios8-switch:checked + label:after {
    margin-left: 16px;
  }
  input[type="checkbox"].ios8-switch:checked + label:before {
    background: #55D069;
  }
</style>
