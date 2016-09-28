package org.cocos2dx.javascript;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Log;

import org.cocos2dx.lib.Cocos2dxActivity;

import java.io.File;
import java.io.IOException;

/**
 * Created by panda on 9/27/16.
 */

public class PhotoTaker {
    private static Bitmap bmScreen;
    public static int count = 0;

    public static String getDir () {
        final String dir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES) + "/picFolder/";
        File newdir = new File(dir);
        newdir.mkdirs();
        return dir;
    }

    public static void capture (String FilePath) {
        File newfile = new File(FilePath);
        try {
            newfile.createNewFile();
        }
        catch (IOException e)
        {
            Log.e("error", "Create file failed");
        }

        Uri outputFileUri = Uri.fromFile(newfile);

        Intent cameraIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        cameraIntent.putExtra(MediaStore.EXTRA_OUTPUT, outputFileUri);

        Activity cocosActivity = ((Activity)Cocos2dxActivity.getContext());
        cocosActivity.startActivityForResult(cameraIntent, 0);
    }
}
