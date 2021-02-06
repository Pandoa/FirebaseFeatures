
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
