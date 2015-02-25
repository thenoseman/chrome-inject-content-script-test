/*global chrome */
(function () {
  "use strict";
  var tabId;

  // Clicking the browser action:
  chrome.browserAction.onClicked.addListener(function (){
    var port = chrome.tabs.connect(tabId);
    port.postMessage({"action": "injectScripts", "message": "inject_me.js"});
  });

  // When a tab is activated:
  chrome.tabs.onActivated.addListener(function (activeInfo) {
    tabId = activeInfo.tabId;
  });
})();
