require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"AudioRecorder":[function(require,module,exports){
"use strict";
cc._RFpush(module, '280c3rsZJJKnZ9RqbALVwtK', 'AudioRecorder');
// Script/AudioRecorder.js

cc.Class({
    'extends': cc.Component,

    properties: {
        recordLabel: cc.Label
    },

    onLoad: function onLoad() {
        if (cc.sys.isNative && cc.sys.OS === cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod('AudioRecorder', 'initRecorder');
        }
    },

    play: function play() {
        if (cc.sys.isNative && cc.sys.OS === cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod('AudioRecorder', 'playLatest');
        }
    },

    record: function record() {
        if (cc.sys.isNative && cc.sys.OS === cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod('AudioRecorder', 'record');
            if (jsb.reflection.callStaticMethod('AudioRecorder', 'isRecording')) {
                this.recordLabel.string = 'Stop';
            } else {
                this.recordLabel.string = 'Record';
            }
        }
    }
});

cc._RFpop();
},{}],"PhotoTaker":[function(require,module,exports){
"use strict";
cc._RFpush(module, '5b3bdbPS+dEbJm+EmEA1au1', 'PhotoTaker');
// Script/PhotoTaker.js

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

        _fileDir: null,
        _filePath: null,
        _count: 0,
        photo: cc.Sprite
    },

    onLoad: function onLoad() {
        if (cc.sys.isNative) {
            this._fileDir = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/PhotoTaker", "getDir", "()Ljava/lang/String;");
            cc.log('Save photos to ' + this._fileDir);
        }
    },

    capture: function capture() {
        if (cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID) {
            this._filePath = this._fileDir + 'photo' + this._count + '.jpg';
            cc.log('New photo file path: ' + this._filePath);
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/PhotoTaker", "capture", "(Ljava/lang/String;)V", this._filePath);
            this._count++;

            // cc.game.once(cc.game.EVENT_SHOW, function () {
            //     this.scheduleOnce(this.showPhoto, 1);
            // }, this);
        }
    },

    showPhoto: function showPhoto() {
        var image = new cc.Image();
        image.initWithImageFile(this._filePath);
        var texture = new cc.Texture2D();
        texture.initWithImage(image);
        cc.log('Texture size: (' + texture.getPixelWidth() + ', ' + texture.getPixelHeight() + ')');
        var spriteFrame = new cc.SpriteFrame(texture);
        this.photo.spriteFrame = spriteFrame;
        this.photo.node.width = 300;
        this.photo.node.height = 500;
    }
});

cc._RFpop();
},{}]},{},["AudioRecorder","PhotoTaker"]);
