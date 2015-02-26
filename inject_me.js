(function injectMeScope() {
  "use strict";
  // Simulate a library setting something on window
  for(var i = 0; i < 100; i++) {
    console.log("inject me script running!");
  }
  console.log("inject me script ending!");
  document.querySelector("html").dataset.injectMe = true;
})();
