require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"AudioRecorder":[function(require,module,exports){
"use strict";
cc._RFpush(module, '280c3rsZJJKnZ9RqbALVwtK', 'AudioRecorder');
// Script/AudioRecorder.js

cc.Class({
    'extends': cc.Component,

    properties: {},

    onLoad: function onLoad() {
        jsb.reflection.callStaticMethod('AudioRecorder', 'initRecorder');
    },

    play: function play() {
        jsb.reflection.callStaticMethod('AudioRecorder', 'playLatest');
    },

    record: function record() {
        jsb.reflection.callStaticMethod('AudioRecorder', 'record');
    }
});

cc._RFpop();
},{}]},{},["AudioRecorder"]);
