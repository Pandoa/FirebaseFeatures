
# Support

## Detecting the Problem
If you encounter an issue, you can get useful information with the logs.
Two types of logs can be helpful:
1. **The Output Log**: In the Editor, go to `windows` > `Developer Tools` > `Output Log`. If you see red or yellow text, 
that's probably the reason of the error.
2. **The device's logs**: Especially useful on Android and iOS. 
    - **Android**: Start by cleaning the logs with: 
    ```bash
    adb logcat -c
    ```
    You can then start getting the logs with:
    ```bash
    adb logcat
    ```
    After that, crash or make the bug happens.
    - **iOS**: You can get the device's logs with the following steps:
        1. Connect your iOS device to the Mac through USB.
        2. Launch Xcode. Go to `Windows` > `Devices and Simulators`.
        3. Reproduce the problem you encountered.
        4. Choose your device from the devices section on the left side of the screen.
        5. Click on the up-triangle on the bottom of the screen to view device logs.


## Contact
If you need help, have a feature request or experience troubles, please contact us at [pandores.marketplace@gmail.com](mailto:pandores.marketplace+FirebaseFeatures@gmail.com?subject=Firebase%20Features%20-%20).

!> Please, include logs in your email.

