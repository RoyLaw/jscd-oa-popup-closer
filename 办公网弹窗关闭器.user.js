// ==UserScript==
// @name         办公网弹窗关闭器
// @namespace    http://www.jsmot.com
// @version      0.2.1
// @description  江苏交通OA系统专用脚本
// @author       Roy Law
// @license      MIT
// @match        *://172.26.14.6:8888/*
// @icon         https://img.icons8.com/ultraviolet/2x/resize.png
// @grant        unsafeWindow
// ==/UserScript==

(function () {
  'use strict';

  // Your code here...
  var counter = 0;
  var timer = null;
  var timerList = [];

  var endLoopIndicator = false;

  unsafeWindow.check = function () {
    return true;
  } //rip the agreement popup.

  function tryToFixPopups() {
    try {

      if (document.querySelector('a.aui_close')) { //  the last btn of this checking list.

        endLoopIndicator = true;
        console.log("it's ture");

      }
      document.querySelector('a.aui_close').click();
      //document.querySelector('div.aui_state_lock a.aui_close').click();

      if (endLoopIndicator) {
        intervalEnd();
        console.log("Ending loop.");
      }
    }
    catch (e) {
      if (window.console) {
        window.console.log("Error in this userscript");
        intervalEnd();
      }
    }
  }

  function intervalStart() {
    intervalEnd();
    timer = window.setInterval(function () {
      console.log("Loop started.");

      tryToFixPopups();

    }, 1000);
    timerList.push(timer);
  }

  function intervalEnd() {
    if (timer) {
      console.log("Loop ended.");
      timerList.forEach((item, index) => {
        clearInterval(item);
      })
      timerList = [];
      timer = 0;
    }
  }

  intervalStart();

})();
