//
//  AudioRecorder.h
//  ReflectionSample
//
//  Created by panda on 9/26/16.
//
//

#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>

@interface AudioRecorder : NSObject <AVAudioRecorderDelegate, AVAudioPlayerDelegate>

+ (void) initRecorder;
+ (BOOL) isRecording;
+ (void) record;
+ (void) playLatest;

@end
