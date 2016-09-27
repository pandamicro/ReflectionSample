cc.Class({
    extends: cc.Component,

    properties: {
    },
    
    onLoad: function () {
        if (cc.sys.OS === cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod('AudioRecorder', 'initRecorder');
        }
    },

    play: function () {
        if (cc.sys.OS === cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod('AudioRecorder', 'playLatest');
        }
    },

    record: function () {
        if (cc.sys.OS === cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod('AudioRecorder', 'record');
        }
    },
});
