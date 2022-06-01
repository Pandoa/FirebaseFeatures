
# Support

## Detecting the Problem
If you encounter an issue, you can get useful information with the logs.
Two types of logs can be helpful:
1. **The Output Log**: In the Editor, go to `windows` > `Developer Tools` > `Output Log`. If you see red or yellow text, 
that's probably the reason of the error.
2. **The device's logs**: Especially useful on Android and iOS. 
    - **Android**: 
        1. Connect your Android device to your computer.
        2. Open a command line prompt.
        3. Start by cleaning the logs with: 
        ```bash
        adb logcat -c
        ```
        4. You can then start getting the logs with:
        ```bash
        adb logcat
        ```
        5. After that, make the bug happen.
        6. Save the ouptut in a file and link it to your email when contacting us.
    - **iOS**: You can get the device's logs with the following steps: 
        1. Open XCode go to `Window` > `Devices and Simulators`.
        2. Select your device in the left and click Open Console.
        3. Select to start recording messages.
        4. In the search bar in the top right corner, enter `process: <YourProcessName>` to filter system messages.
        5. Clear the console and make your crash or issue happens.


## Contact
If you need help, have a feature request or experience troubles, please contact us at [pandores.marketplace@gmail.com](mailto:pandores.marketplace+FirebaseFeatures@gmail.com?subject=Firebase%20Features%20-%20).

!> Please, include logs in your email.
