
# Troubleshoting
## Android
If you experience a crash on startup when running your game on Android, you might first want to get the crash reason. To do so, open a terminal and run the following command:
```sh
adb logcat
```
### `Invalid application ID`
If the logs from `adb` indicate `Invalid application ID`, it means your AdMob application ID is invalid. The crash will disappear once you use the good one available on AdMob page.

!> The AdMob application ID is not an ad ID. It looks like `ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX`.

### Undefined symbols when packaging for Android with architecture `x86` or `x86_64`.
The plugin only comes with the Firebase C++ SDK compiled for `arm64-v8a` and `armeabi-v7a` for Android.

To add support for x86 or x86_64:
1. Download the binaries from the corresponding link [x86_64](https://drive.google.com/file/d/1_7M2rxWNOxnt_ijLTlb5P1e-1q5zNtNx/view?usp=sharing) or [x86](https://drive.google.com/file/d/1lgfNdldpKNL9MkImqRAoSyQADMbuN4B8/view?usp=sharing).
2. Unzip the files and copy them to `FirebaseFeatures/Source/ThirdParty/libs/android/{arch}`. i.e. for `x86_64`, the following file has to exist: `FirebaseFeatures/Source/ThirdParty/libs/android/x86_64/c++/libfirebase_app.a`.
3. Open `FirebaseFeatures/Source/FirebaseFeatures.Build.cs` and uncomment the line `297` (x86) or `298` (x86_64).

### Application crashes at startup: failed to find `google-services.json`.
If you correctly placed `google-services.json` and `GoogleService-Info.plist` to the `Services` folder, this error shouldn't happen. You can manually fix it with the following steps:

1. Rename your packaged game `MyGame.apk` or `MyGame.ipa` to `MyGame.zip`.
2. Copy `GoogleService-Info.plist` (case-sensitive) for iOS or `google-services.json` for Android to the root of the zip archive.
3. Rename `MyGame.zip` to `MyGame.apk` for Android or `MyGame.ipa` for iOS.


### Error: Cook failed. Editor terminated with exit code `16384`.
If you encounter this issue:
1. Go in the Firebase Console. Click on `Realtime Database` in the left panel and create a new Realtime Database.
2. Download the `google-services.json` again and replace the one in your project with it.

### uses-sdk:minSdkVersion `x` cannot be smaller than version `y` declared in library `[com.google.firebase:firebase_messaging_cpp]`
As we use the latest available libraries for Firebase C++ SDK, you might encounter this error if you target an old SDK version.
You need to change the minSdk to the `y` value:
1. Open Project's Config.
2. Locate the `Platforms` > `Android` > `APK Packaging` > `Minimum SDK Version (19=KitKat, 21=Lolipop)` config.
3. Set its value to `y`.

## Desktop
### Crashes when calling `Firebase - Features` functions.
If you encouter crashes when using the Desktop platform, the cause is very likely a missing `google-services.json` file. Follow the instructions [here](/installation) correctly. Make sure to check the Output Log after editor startup.

!> If you plan to only use `Firebase - Features` on iOS, you'll have to download the `.json` and the `.plist` to test it in editor.
