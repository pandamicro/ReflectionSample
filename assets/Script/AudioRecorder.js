cc.Class({
    extends: cc.Component,

    properties: {
    },
    
    onLoad: function () {
        jsb.reflection.callStaticMethod('AudioRecorder', 'initRecorder');
    },

    play: function () {
        jsb.reflection.callStaticMethod('AudioRecorder', 'playLatest');
    },

    record: function () {
        jsb.reflection.callStaticMethod('AudioRecorder', 'record');
    },
});
