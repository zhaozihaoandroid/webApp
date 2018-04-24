package com.webapp;

import android.content.Intent;
import android.net.Uri;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class NativeModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public NativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext =reactContext;
    }

    @Override
    public String getName() {
        return "NativeMethodModule";
    }
    @ReactMethod
    public void callPhone(String phone){
        Intent intent = new Intent(Intent.ACTION_DIAL);
        Uri data = Uri.parse("tel:" + phone);
        intent.setData(data);
        reactContext.startActivity(intent);
    }
}
