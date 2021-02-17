
# Troubleshoting
## Android
If you experience a crash on startup when running your game on Android, you might first want to get the crash reason. To do so, open a terminal and run the following command:
```sh
adb logcat
```
### `Invalid application ID`
If the logs from `adb` indicate `Invalid application ID`, it means your AdMob application ID is invalid. The crash will disappear once you use the good one available on AdMob page.

!> The AdMob application ID is not an ad ID. It looks like `ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX`.

### Error: Cook failed. Editor terminated with exit code `16384`.
If you encounter this issue:
1. Go in the Firebase Console. Click on `Realtime Database` in the left panel and create a new Realtime Database.
2. Download the `google-services.json` again and replace the one in your project with it.

### uses-sdk:minSdkVersion `x` cannot be smaller than version `y` declared in library [com.google.firebase:firebase_messaging_cpp]
As we use the latest available libraries for Firebase C++ SDK, you might encounter this error if you target an old SDK version.
You need to change the minSdk to the `y` value:
1. Open Project's Config.
2. Locate the `Platforms` > `Android` > `APK Packaging` > `Minimum SDK Version (19=KitKat, 21=Lolipop)` config.
3. Set its value to `y`.

## Desktop
### Crashes when calling `Firebase - Features` functions.
If you encouter crashes when using the Desktop platform, the cause is very likely a missing `google-services.json` file. Follow the instructions [here](/installation) correctly. Make sure to check the Output Log after editor startup.

!> If you plan to only use `Firebase - Features` on iOS, you'll have to download the `.json` and the `.plist` to test it in editor.
