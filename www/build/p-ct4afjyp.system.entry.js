System.register(["./p-f51e9fae.system.js","./p-5f414978.system.js","./p-c6a809dd.system.js"],function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.r;n=t.h},function(){},function(t){r=t.A}],execute:function(){function s(t){r.injectProps(t,["history","location"])}var o=function(){function t(t){e(this,t)}t.prototype.getName=function(){return this.name.charAt(0).toUpperCase()+this.name.slice(1)};t.prototype.onClick=function(){console.log(this.name,this.history);this.history.push("/datastore/"+this.name)};t.prototype.render=function(){var t=this;return n("div",null,n("div",{class:"datastore-card",onClick:function(){return t.onClick()}},n("span",null,this.getName())))};Object.defineProperty(t,"style",{get:function(){return".datastore-card{-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;width:200px;height:200px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:end;justify-content:flex-end;border-radius:12px;background-color:#343434;color:#fff;padding:24px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:20px;font-weight:500;margin:12px}.datastore-card:hover{background-color:#454545;-webkit-transform:scale(1.035);transform:scale(1.035)}.open{color:#fff;text-decoration:none}"},enumerable:true,configurable:true});return t}();t("datastore_card",o);s(o)}}});