webpackJsonp([1],{"+Eha":function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile-info"},[a("div",{staticClass:"profile-logo"}),t._v(" "),a("div",{staticClass:"profile-info__block"},[a("div",{staticClass:"profile-info__loading"},[a("div",{staticClass:"icon-loader w-embed"},[a("svg",{attrs:{version:"1.1",id:"L4",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",height:"100%",width:"100%",viewbox:"0 0 100 100","enable-background":"new 0 0 0 0","xml:space":"preserve"}},[a("circle",{attrs:{fill:"#000",stroke:"none",cx:"30%",cy:"50",r:"6"}},[a("animate",{attrs:{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.1"}})]),t._v(" "),a("circle",{attrs:{fill:"#000",stroke:"none",cx:"50%",cy:"50",r:"6"}},[a("animate",{attrs:{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.2"}})]),t._v(" "),a("circle",{attrs:{fill:"#000",stroke:"none",cx:"70%",cy:"50",r:"6"}},[a("animate",{attrs:{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.3"}})])])]),t._v(" "),a("div",{staticClass:"loading-text"},[t._v("Loading...")])])])])},n=[]},"0cXR":function(t,e,a){"use strict";var i=a("Vc7i"),n=a("+Eha"),s=a("XyMi"),c=Object(s.a)(i.a,n.a,n.b,!1,null,null,null);e.a=c.exports},"3bYE":function(t,e,a){"use strict";e.a={name:"Home"}},"4uLN":function(t,e,a){"use strict";var i=a("HJtx"),n=a("KBcC"),s=a("XyMi"),c=Object(s.a)(i.a,n.a,n.b,!1,null,null,null);e.a=c.exports},"6IPz":function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view-empty"},[t._v("\n  page not found "),a("router-link",{attrs:{to:"/"}},[t._v("back home")])],1)},n=[]},"73wl":function(t,e,a){"use strict";var i,n=a("bOdI"),s=a.n(n),c=a("mtWM"),o=a.n(c),r=a("VLWU"),l={signInQRCode:null,fetchedSignInQR:!1},u={},d=(i={},s()(i,r.d,function(t){t.fetchedSignInQR=!1}),s()(i,r.e,function(t){t.fetchedSignInQR=!1}),s()(i,r.f,function(t,e){t.fetchedSignInQR=!0,t.signInQRCode=e.appLink}),i),v={getSignInQRCode:function(t){var e=t.commit;e(r.d),o.a.post("/api/licenseRequest").then(function(t){t&&e(r.f,t.data)}).catch(function(t){console.error(t),e(r.e)})}};e.a={state:l,getters:u,mutations:d,actions:v}},"75kI":function(t,e){},"7QvO":function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("transition",{attrs:{name:"router",mode:"out-in"}},[a("router-view")],1)],1)},n=[]},"D+VX":function(t,e,a){"use strict";var i,n=a("bOdI"),s=a.n(n),c=a("mtWM"),o=a.n(c),r=a("VLWU"),l=a("YaEn"),u={userAuthorized:!1,authorizeURLFetching:!1,authorizeURL:null},d=(i={},s()(i,r.a,function(t){t.userAuthorized=!1,t.authorizeURLFetching=!0}),s()(i,r.b,function(t){t.authorizeURLFetching=!1}),s()(i,r.c,function(t,e){t.authorizeURL=e,t.authorizeURLFetching=!1}),i),v={authorizeUser:function(t){var e=t.commit;t.state.userAuthorized||(e(r.a),o.a.post("/oidc/authorize").then(function(t){t.data&&(console.log("finished fetching authorization url",t.data),e(r.c),window.location.href=t.data)}).catch(function(t){console.error(t),e(r.b)}))},getUserInfo:function(t,e){var a=t.commit;console.log(e),u.userAuthorized||(a(r.g),o.a.post("/oidc/get-user",e).then(function(t){console.log(t.data),t.data&&(a(r.i,t.data),l.a.push("/profile"))}).catch(function(t){console.error(t),a(r.h)}))}};e.a={state:u,mutations:d,actions:v}},Dgx1:function(t,e){},FPVq:function(t,e,a){"use strict";var i=a("Dd8w"),n=a.n(i),s=a("NYxO"),c=a("/kJX");a.n(c);e.a={name:"CheckingAccount",components:{Carousel:c.Carousel,Slide:c.Slide},computed:n()({},Object(s.d)(["QR"])),methods:n()({},Object(s.b)(["getSignInQRCode"]),{authorizeUser:function(){this.$store.dispatch("authorizeUser")}}),mounted:function(){this.getSignInQRCode()}}},FffS:function(t,e,a){"use strict";function i(t){a("75kI")}var n=a("rz+E"),s=a("nu55"),c=a("XyMi"),o=i,r=Object(c.a)(n.a,s.a,s.b,!1,o,"data-v-4fcb78ae",null);e.a=r.exports},HJtx:function(t,e,a){"use strict";var i=a("Dd8w"),n=a.n(i),s=a("NYxO");e.a={computed:n()({},Object(s.c)(["userData"]))}},IcnI:function(t,e,a){"use strict";var i=a("7+uW"),n=a("NYxO"),s=a("sax8"),c=(a.n(s),a("bREw")),o=a("73wl"),r=a("D+VX");i.a.use(n.a);var l=new n.a.Store({modules:{User:c.a,QR:o.a,Auth:r.a},strict:!1,plugins:[]});e.a=l},KBcC:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.userData?a("section",{staticClass:"profile-info"},[a("div",{staticClass:"profile-logo"}),t._v(" "),a("div",{staticClass:"welcome-account"},[t._v("Welcome to your account, "+t._s(t.userData.given_name))]),t._v(" "),t._m(0)]):t._e()},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control-panel"},[a("div",{staticClass:"control-panel__item"},[t._v("Your Savings >")]),t._v(" "),a("div",{staticClass:"control-panel__item"},[t._v("Past Transactions >")]),t._v(" "),a("div",{staticClass:"control-panel__item"},[t._v("Credit Options >")]),t._v(" "),a("div",{staticClass:"control-panel__item"},[t._v("Upgrade Your Account >")]),t._v(" "),a("div",{staticClass:"control-panel__item exit"},[t._v("Exit")])])}]},KWv7:function(t,e,a){"use strict";var i=a("O11y"),n=a("esL9"),s=a("TBEP"),c=a("FffS"),o=a("4uLN"),r=a("otSd"),l=a("0cXR");e.a=[{path:"/",components:{default:n.a}},{path:"/checking-account",components:{default:r.a}},{path:"/profile",components:{default:s.a}},{path:"/account",components:{default:o.a}},{path:"/redirect",components:{default:c.a}},{path:"/oidc-response",components:{default:l.a}},{path:"*",component:i.default}]},M93x:function(t,e,a){"use strict";function i(t){a("ibv2")}var n=a("xJD8"),s=a("7QvO"),c=a("XyMi"),o=i,r=Object(c.a)(n.a,s.a,s.b,!1,o,null,null);e.a=r.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),s=a("7+uW"),c=a("IcnI"),o=a("YaEn"),r=a("9JMe"),l=a.n(r),u=a("M93x");s.a.config.productionTip=!1,l.a.sync(c.a,o.a),new s.a(n()({el:"app",router:o.a,store:c.a},u.a))},O11y:function(t,e,a){"use strict";function i(t){a("Dgx1")}var n=a("UuVd"),s=a.n(n),c=a("6IPz"),o=a("XyMi"),r=i,l=Object(o.a)(s.a,c.a,c.b,!1,r,null,null);e.default=l.exports},Rje3:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%"}},[a("router-link",{staticClass:"back-link w-inline-block",attrs:{to:"/"}},[a("div",{staticClass:"back-icon"}),t._v(" "),a("div",{staticClass:"back-text"},[t._v("Back")])]),t._v(" "),a("carousel",{staticClass:"citi-slider",attrs:{perPage:1,paginationActiveColor:"#ffffff",paginationColor:"#c8c8c8"}},[a("slide",{staticClass:"slide w-slide"},[a("h3",{staticClass:"slide-header"},[t._v("There's a Citi account for everybody. Find the one.")]),t._v(" "),a("div",{staticClass:"slider__text"},[t._v("Our range of checking options gives you access to the good stuff: personalized insights, easy access to your accounts, and snart tech to help you manage your money like a pro.")]),t._v(" "),a("div",{staticClass:"slider__text-with-icon"},[a("div",{staticClass:"icon"}),t._v(" "),a("div",{staticClass:"text"},[t._v("10 Minutes to apply")])]),t._v(" "),a("div",{staticClass:"bottom-text"},[t._v("Swipe to Start")])]),t._v(" "),a("slide",{staticClass:"slide w-slide"},[a("div",{staticClass:"bottom-text"},[t._v("Access to the Citi Mobile® App requires a Citi Account.")]),t._v(" "),a("div",{staticClass:"slider__package-info"},[a("h4",{staticClass:"package-info__header"},[t._v("Access Account Package")]),t._v(" "),a("div",{staticClass:"package-info__benefits"},[a("div",{staticClass:"benefit-icon"}),t._v(" "),a("div",{staticClass:"text-block"},[t._v("$10 monthly service fee*")])]),t._v(" "),a("div",{staticClass:"package-info__benefits"},[a("div",{staticClass:"benefit-icon"}),t._v(" "),a("div",{staticClass:"text-block"},[t._v("No overdraft fess")])]),t._v(" "),a("div",{staticClass:"package-info__benefits"},[a("div",{staticClass:"benefit-icon"}),t._v(" "),a("div",{staticClass:"text-block"},[t._v("No paper checks")])]),t._v(" "),a("div",{staticClass:"package-info__text"},[t._v("*Waived if you make one qualifying direct deposit per statement period or one qualifying bill payment per statement period or maintain a $1,500+ combined average monthly balance in eligible linked accounts.")]),t._v(" "),a("div",{staticClass:"buttons-container"},[a("a",{staticClass:"package-button verified w-button",attrs:{href:t.QR.signInQRCode}},[t._v("Open with bankID")]),t._v(" "),a("div",{staticClass:"package-button black-button w-button",on:{click:function(e){t.authorizeUser()}}},[t._v("Go to Form")])])]),t._v(" "),a("h5",{staticClass:"pick-checking-account"},[t._v("Pick a Checking Account")])]),t._v(" "),a("slide",{staticClass:"slide w-slide"},[a("div",{staticClass:"bottom-text"},[t._v("Access to the Citi Mobile® App requires a Citi Account.")]),t._v(" "),a("div",{staticClass:"slider__package-info"},[a("h4",{staticClass:"package-info__header"},[t._v("Basic Banking Package")]),t._v(" "),a("div",{staticClass:"package-info__benefits"},[a("div",{staticClass:"benefit-icon"}),t._v(" "),a("div",{staticClass:"text-block"},[t._v("$12 monthly service fee*")])]),t._v(" "),a("div",{staticClass:"package-info__benefits"},[a("div",{staticClass:"benefit-icon"}),t._v(" "),a("div",{staticClass:"text-block"},[t._v("Unlimited check writing")])]),t._v(" "),a("div",{staticClass:"package-info__benefits"},[a("div",{staticClass:"benefit-icon"}),t._v(" "),a("div",{staticClass:"text-block"},[t._v("Special perks for those 62 and older")])]),t._v(" "),a("div",{staticClass:"package-info__text"},[t._v("*Waived if you make one qualifying direct deposit per statement period or one qualifying bill payment per statement period or maintain a $1,500+ combined average monthly balance in eligible linked accounts. Fee also waived for first listed account owner ages 62 or older.")]),t._v(" "),a("div",{staticClass:"buttons-container"},[a("a",{staticClass:"package-button verified w-button",attrs:{href:t.QR.signInQRCode}},[t._v("Open with bankID")]),a("div",{staticClass:"package-button black-button w-button",on:{click:function(e){t.authorizeUser()}}},[t._v("Go to Form")])])]),t._v(" "),a("h5",{staticClass:"pick-checking-account"},[t._v("Pick a Checking Account")])]),t._v(" "),a("slide",{staticClass:"slide w-slide"},[a("div",{staticClass:"bottom-text"},[t._v("Access to the Citi Mobile® App requires a Citi Account.")]),t._v(" "),a("div",{staticClass:"slider__package-info"},[a("h4",{staticClass:"package-info__header"},[t._v("Citibank Account Package")]),t._v(" "),a("div",{staticClass:"package-info__benefits"},[a("div",{staticClass:"benefit-icon"}),t._v(" "),a("div",{staticClass:"text-block"},[t._v("$25 monthly service fee*")])]),t._v(" "),a("div",{staticClass:"package-info__benefits"},[a("div",{staticClass:"benefit-icon"}),t._v(" "),a("div",{staticClass:"text-block"},[t._v("No Citi fee at non-Citi ATMs*")])]),t._v(" "),a("div",{staticClass:"package-info__benefits"},[a("div",{staticClass:"benefit-icon"}),t._v(" "),a("div",{staticClass:"text-block"},[t._v("Eligible customers can earn ThankYou® Points with this account package")])]),t._v(" "),a("div",{staticClass:"package-info__text"},[t._v("*Waived if you maintain a combined average monthly balance of $10,000+ in eligible linked deposit, retirement and investment accounts.")]),t._v(" "),a("div",{staticClass:"buttons-container"},[a("a",{staticClass:"package-button verified w-button",attrs:{href:t.QR.signInQRCode}},[t._v("Open with bankID")]),a("div",{staticClass:"package-button black-button w-button",on:{click:function(e){t.authorizeUser()}}},[t._v("Go to Form")])])]),t._v(" "),a("h5",{staticClass:"pick-checking-account"},[t._v("Pick a Checking Account")])]),t._v(" "),a("slide",{staticClass:"slide black-slide w-slide"},[a("div",{staticClass:"bottom-text"},[t._v("Access to the Citi Mobile® App requires a Citi Account.")]),t._v(" "),a("div",{staticClass:"slider__package-info black-package"},[a("h4",{staticClass:"package-info__header"},[t._v("Citibank Account Package")]),t._v(" "),a("div",{staticClass:"package-info__benefits"},[a("div",{staticClass:"benefit-icon"}),t._v(" "),a("div",{staticClass:"text-block"},[t._v("$30 monthly service fee*")])]),t._v(" "),a("div",{staticClass:"package-info__benefits"},[a("div",{staticClass:"benefit-icon"}),t._v(" "),a("div",{staticClass:"text-block"},[t._v("Preferred pricing & rates on select products & services")])]),t._v(" "),a("div",{staticClass:"package-info__benefits"},[a("div",{staticClass:"benefit-icon"}),t._v(" "),a("div",{staticClass:"text-block"},[t._v("Helpful resources & tools")])]),t._v(" "),a("div",{staticClass:"package-info__text"},[t._v("*Waived if you maintain a combined average monthly balance of $50,000+ in eligible linked deposit, retirement and investment accounts.")]),t._v(" "),a("div",{staticClass:"buttons-container"},[a("a",{staticClass:"package-button verified w-button",attrs:{href:t.QR.signInQRCode}},[t._v("Open with bankID")]),a("div",{staticClass:"package-button black-button w-button",on:{click:function(e){t.authorizeUser()}}},[t._v("Go to Form")])])]),t._v(" "),a("h5",{staticClass:"pick-checking-account"},[t._v("Pick a Checking Account")]),t._v(" "),a("h5",{staticClass:"pick-checking-account"},[t._v("Pick a Checking Account")])])],1)],1)},n=[]},TBEP:function(t,e,a){"use strict";var i=a("a9PU"),n=a("omSd"),s=a("XyMi"),c=Object(s.a)(i.a,n.a,n.b,!1,null,null,null);e.a=c.exports},UuVd:function(t,e){},VLWU:function(t,e,a){"use strict";a.d(e,"d",function(){return i}),a.d(e,"f",function(){return n}),a.d(e,"e",function(){return s}),a.d(e,"a",function(){return c}),a.d(e,"c",function(){return o}),a.d(e,"b",function(){return r}),a.d(e,"g",function(){return l}),a.d(e,"i",function(){return u}),a.d(e,"h",function(){return d});var i="QR_SIGN_IN_REQUEST",n="QR_SIGN_IN_REQUEST_SUCCEED",s="QR_SIGN_IN_REQUEST_FAILED",c="AUTHORIZE_URL_REQUEST",o="AUTHORIZE_URL_REQUEST_SUCCEED",r="AUTHORIZE_URL_REQUEST_FAILED",l="USER_DATA_REQUEST",u="USER_DATA_REQUEST_SUCCEED",d="USER_DATA_REQUEST_FAILED"},Vc7i:function(t,e,a){"use strict";e.a={created:function(){this.$store.dispatch("getUserInfo",this.$route.query)}}},YaEn:function(t,e,a){"use strict";var i=a("7+uW"),n=a("/ocq"),s=a("KWv7");i.a.use(n.a);var c=new n.a({mode:"history",base:"/",routes:s.a,scrollBehavior:function(){return{x:0,y:0}}});e.a=c},a9PU:function(t,e,a){"use strict";var i=a("Dd8w"),n=a.n(i),s=a("NYxO");e.a={created:function(){this.$store.dispatch("getUserData")},computed:n()({},Object(s.c)(["userData"]))}},bREw:function(t,e,a){"use strict";var i,n=a("bOdI"),s=a.n(n),c=a("mtWM"),o=a.n(c),r=a("VLWU"),l=a("YaEn"),u={userDataFetched:!1,userDataLoading:!1,userData:null},d={userData:function(t){return t.userData}},v=(i={},s()(i,r.g,function(t){t.userDataFetched=!1,t.userDataLoading=!0}),s()(i,r.h,function(t){t.userDataFetched=!1,t.userDataLoading=!1}),s()(i,r.i,function(t,e){t.userDataFetched=!0,t.userDataLoading=!1,t.userData=e}),i),_={getUserData:function(t){var e=t.commit;t.state.userDataFetched||(e(r.g),o.a.post("/api/get-user").then(function(t){t.data&&(e(r.i,t.data),l.a.push("/profile"))}).catch(function(t){console.error(t),e(r.h)}))}};e.a={state:u,getters:d,mutations:v,actions:_}},esL9:function(t,e,a){"use strict";var i=a("3bYE"),n=a("ubGd"),s=a("XyMi"),c=Object(s.a)(i.a,n.a,n.b,!1,null,null,null);e.a=c.exports},ibv2:function(t,e){},nu55:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"redirect-button",on:{click:function(e){t.redirectToURL()}}},[t._v("\n  Go back to the Bank of America app\n")])},n=[]},omSd:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile-info"},[a("div",{staticClass:"profile-logo"}),t._v(" "),a("div",{staticClass:"profile-info__block"},[t.userData?a("div",{staticClass:"profile-info__data"},[a("h4",{staticClass:"heading"},[t._v("Please verify your personal information to proceed further:")]),t._v(" "),a("div",{staticClass:"form-block w-form"},[a("form",{attrs:{id:"email-form",name:"email-form","data-name":"Email Form"}},[a("label",{attrs:{for:"name"}},[t._v("First Name:")]),t._v(" "),a("input",{staticClass:"input-field w-input",attrs:{type:"text",maxlength:"256",name:"name","data-name":"Name",id:"name"},domProps:{value:t.userData.given_name}}),t._v(" "),a("label",{attrs:{for:"surname"}},[t._v("Second Name:")]),t._v(" "),a("input",{staticClass:"input-field w-input",attrs:{type:"text",maxlength:"256",name:"surname","data-name":"surname",id:"surname"},domProps:{value:t.userData.family_name}}),t._v(" "),a("label",{attrs:{for:"address"}},[t._v("Address:")]),t._v(" "),a("input",{staticClass:"input-field w-input",attrs:{type:"text",maxlength:"256",name:"address","data-name":"address",id:"address"},domProps:{value:t.userData.address?t.userData.address.street_address:t.userData.street_address}}),t._v(" "),a("label",{attrs:{for:"phone"}},[t._v("Phone:")]),t._v(" "),a("input",{staticClass:"input-field w-input",attrs:{type:"text",maxlength:"256",name:"phone","data-name":"phone",id:"phone"},domProps:{value:t.userData.phone_number}}),t._v(" "),a("label",{attrs:{for:"postal"}},[t._v("Postal Code:")]),t._v(" "),a("input",{staticClass:"input-field w-input",attrs:{type:"text",maxlength:"256",name:"postal",id:"postal"},domProps:{value:t.userData.address?t.userData.address.postal_code:t.userData.postal_code}})]),t._v(" "),a("router-link",{staticClass:"button w-button",attrs:{to:"/account"}},[t._v("Confirm")])],1)]):t._e(),t._v(" "),t.userData?t._e():a("div",{staticClass:"profile-info__loading"},[a("div",{staticClass:"icon-loader w-embed"},[a("svg",{attrs:{version:"1.1",id:"L4",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",height:"100%",width:"100%",viewbox:"0 0 100 100","enable-background":"new 0 0 0 0","xml:space":"preserve"}},[a("circle",{attrs:{fill:"#000",stroke:"none",cx:"30%",cy:"50",r:"6"}},[a("animate",{attrs:{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.1"}})]),t._v(" "),a("circle",{attrs:{fill:"#000",stroke:"none",cx:"50%",cy:"50",r:"6"}},[a("animate",{attrs:{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.2"}})]),t._v(" "),a("circle",{attrs:{fill:"#000",stroke:"none",cx:"70%",cy:"50",r:"6"}},[a("animate",{attrs:{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.3"}})])])]),t._v(" "),a("div",{staticClass:"loading-text"},[t._v("Loading...")])])])])},n=[]},otSd:function(t,e,a){"use strict";var i=a("FPVq"),n=a("Rje3"),s=a("XyMi"),c=Object(s.a)(i.a,n.a,n.b,!1,null,null,null);e.a=c.exports},"rz+E":function(t,e,a){"use strict";e.a={mounted:function(){window.location.href="citibank://open.my.app?url_launch=https://citibankverified.herokuapp.com/profile"},methods:{redirectToURL:function(){window.location.href="citibank://open.my.app?url_launch=https://citibankverified.herokuapp.com/profile"}}}},ubGd:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"citi-login"},[a("div",{staticClass:"citi-login__content"},[a("div",{staticClass:"citi-logo"}),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"get-started"},[t._v("Let's get started.")]),t._v(" "),a("router-link",{staticClass:"action-button w-button",attrs:{to:"/checking-account"}},[t._v("Open a Checking Account")]),t._v(" "),a("a",{staticClass:"action-button w-button",attrs:{href:"#"}},[t._v("Register or Activate a Card")]),t._v(" "),a("div",{staticClass:"already-registered"},[t._v("Already registered? Sign On")])],1),t._v(" "),t._m(1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"signin-title"},[t._v("Welcome to your "),a("br"),t._v("new Citi Mobile® App!")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"citi-login__footer"},[a("div",{staticClass:"footer__support"},[t._v("Support")]),t._v(" "),a("div",{staticClass:"footer__citigroup"},[t._v("2018 Citigroup Inc")])])}]},xJD8:function(t,e,a){"use strict";var i=a("Dd8w"),n=a.n(i),s=a("NYxO");e.a={name:"App",methods:n()({},Object(s.b)(["getSignInQRCode","getSignUpQRCode"]))}}},["NHnr"]);
//# sourceMappingURL=app.36ab0a29f3a2c493d41d.js.map