// ==UserScript==
// @name         江苏交通办公网公告弹出框自动关闭脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  内部办公网专用脚本
// @author       roylaw
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

      if (document.querySelector('div.aui_state_lock a.aui_close')) var getOut = 1; //  the last btn of this checking list.

      document.querySelector('a.aui_close').click();
      document.querySelector('div.aui_state_lock a.aui_close').click();

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
