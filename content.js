/* eslint no-console:0 */
/*global chrome console document */
(function () {
  "use strict";

  var injectScriptTag = function(pathToScript) {
    console.log("Injecting " + pathToScript);
    var s = document.createElement("script");
    s.onload = function injectScriptOnLoadCb() {
      console.log("Injected " + pathToScript);

      setTimeout(function() { console.log("window.injectMe = " + window.injectMe + ". Should be 'true' but isn't."); }, 1000);

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
