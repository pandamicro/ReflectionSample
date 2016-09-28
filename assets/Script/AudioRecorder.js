cc.Class({
    extends: cc.Component,

    properties: {
        recordLabel: cc.Label
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
            if (jsb.reflection.callStaticMethod('AudioRecorder', 'isRecording')) {
                this.recordLabel.string = 'Stop';
            }
            else {
                this.recordLabel.string = 'Record';
            }
        }
    },
});
