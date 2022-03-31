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

  unsafeWindow.check = function () {
    return true;
  } //rip the agreement popup.

  var timer = setInterval(function () {
    try {

      if (document.querySelector('a.aui_close')) var getOut = 1; //  the last btn of this checking list.

      document.querySelector('a.aui_close').click();
      //document.querySelector('div.aui_state_lock a.aui_close').click();

      if (getOut) {
        clearInterval(timer);
        console.log("Loop ended.");
      }
    }
    catch (e) {
      if (window.console) {
        window.console.log("Error in this userscript");
      }
    }
  }, 1000);

  this.setData({
    interval: timer
  });
})();
