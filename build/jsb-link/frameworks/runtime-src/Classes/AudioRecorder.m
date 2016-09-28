//
//  AudioRecorder.m
//  ReflectionSample
//
//  Created by panda on 9/26/16.
//
//

#import "AudioRecorder.h"

static bool inited = false;
static AVAudioRecorder *recorder;
static AVAudioPlayer *player;
static AudioRecorder *instance;

@implementation AudioRecorder

+ (void)initRecorder
{
    if (inited) {
        return;
    }
    
    instance = [[AudioRecorder alloc] init];
    
    // Set the audio file
    NSArray *pathComponents = [NSArray arrayWithObjects:
                               [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) lastObject],
                               @"MyAudioMemo.m4a",
                               nil];
    NSURL *outputFileURL = [NSURL fileURLWithPathComponents:pathComponents];
    
    // Setup audio session
    AVAudioSession *session = [AVAudioSession sharedInstance];
    [session setCategory:AVAudioSessionCategoryPlayAndRecord error:nil];
    
    // Define the recorder setting
    NSMutableDictionary *recordSetting = [[NSMutableDictionary alloc] init];
    
    [recordSetting setValue:[NSNumber numberWithInt:kAudioFormatMPEG4AAC] forKey:AVFormatIDKey];
    [recordSetting setValue:[NSNumber numberWithFloat:44100.0] forKey:AVSampleRateKey];
    [recordSetting setValue:[NSNumber numberWithInt: 2] forKey:AVNumberOfChannelsKey];
    
    // Initiate and prepare the recorder
    recorder = [[AVAudioRecorder alloc] initWithURL:outputFileURL settings:recordSetting error:nil];
    recorder.delegate = instance;
    recorder.meteringEnabled = YES;
    [recorder prepareToRecord];
}

+ (void)record
{
    // Stop the audio player before recording
    if (player.playing)
    {
        [player stop];
    }
    
    if (!recorder.recording)
    {
        AVAudioSession *session = [AVAudioSession sharedInstance];
        [session setActive:YES error:nil];
        
        // Start recording
        [recorder record];
    } else
    {
        // Stop recording
        [recorder stop];
        
        AVAudioSession *session = [AVAudioSession sharedInstance];
        [session setActive:NO error:nil];
    }
}

+ (BOOL) isRecording {
    return recorder.recording;
}

+ (void)playLatest
{
    if (recorder.recording){
        // Stop recording
        [recorder stop];
        AVAudioSession *session = [AVAudioSession sharedInstance];
        [session setActive:NO error:nil];
    }
    
    player = [[AVAudioPlayer alloc] initWithContentsOfURL:recorder.url error:nil];
    [player setDelegate:instance];
    [player play];
}

#pragma mark - AVAudioRecorderDelegate

- (void) audioRecorderDidFinishRecording:(AVAudioRecorder *)avrecorder successfully:(BOOL)flag{
    
}

#pragma mark - AVAudioPlayerDelegate

- (void) audioPlayerDidFinishPlaying:(AVAudioPlayer *)player successfully:(BOOL)flag{
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle: @"Done"
                                                    message: @"Finish playing the recording!"
                                                   delegate: nil
                                          cancelButtonTitle:@"OK"
                                          otherButtonTitles:nil];
    [alert show];
}

@end
