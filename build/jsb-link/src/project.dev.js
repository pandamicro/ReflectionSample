require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"AudioRecorder":[function(require,module,exports){
"use strict";
cc._RFpush(module, '280c3rsZJJKnZ9RqbALVwtK', 'AudioRecorder');
// Script/AudioRecorder.js

cc.Class({
    'extends': cc.Component,

    properties: {},

    onLoad: function onLoad() {
        if (cc.sys.OS === cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod('AudioRecorder', 'initRecorder');
        }
    },

    play: function play() {
        if (cc.sys.OS === cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod('AudioRecorder', 'playLatest');
        }
    },

    record: function record() {
        if (cc.sys.OS === cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod('AudioRecorder', 'record');
        }
    }
});

cc._RFpop();
},{}],"ScreenShot":[function(require,module,exports){
"use strict";
cc._RFpush(module, '5b3bdbPS+dEbJm+EmEA1au1', 'ScreenShot');
// Script/ScreenShot.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    capture: function capture() {
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/ScreenCapturer", "capture", "()V");
    }
});

cc._RFpop();
},{}]},{},["AudioRecorder","ScreenShot"]);
