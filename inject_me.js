(function injectMeScope() {
  "use strict";
  // Simulate a library setting something on window
  for(var i = 0; i < 10000; i++) {
    console.log("inject me script running!");
  }
  console.log("inject me script ending!");
  window.injectMe = true;
})();
