﻿"use strict";
_kangoLoader.add("includes/content_init", function(require, exports, module) {
function runContentScripts(b){kango.invokeAsync("modules/kango/userscript_engine/getScripts",window.document.URL,b,window==window.top,function(a){object.forEach(a,function(a,c){kango.lang.evalScriptsInSandbox(window,a,c+"-"+b)})})}window.addEventListener("DOMContentLoaded",function(){apiReady.on(function(){runContentScripts("document-end")})},!1);apiReady.on(function(){runContentScripts("document-start")});initApi();

});