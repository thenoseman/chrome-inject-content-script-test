/* eslint no-console:0 */
/*global chrome console document */
(function () {
  "use strict";

  var injectScriptTag = function(pathToScript) {
    console.log("Injecting " + pathToScript);
    var s = document.createElement("script");
    s.onload = function injectScriptOnLoadCb() {
      console.log("Injected " + pathToScript);

      // Checking via the DOM works!
      setTimeout(function() {
        var h = document.querySelector("html").dataset;
        console.log(h);
      }, 1000);

      this.parentNode.removeChild(this);
    };
    s.src = chrome.extension.getURL(pathToScript);
    document.head.appendChild(s);
  };

  chrome.runtime.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (message) {
      if(message.action === "injectScripts" && typeof message.message !== "undefined") {
        injectScriptTag(message.message);
      }
    });
  });

})();
