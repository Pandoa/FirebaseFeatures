# Remote Config
You can use Firebase Remote Config to define parameters in your app and update their values in the cloud, allowing you to modify the appearance and behavior of your app without distributing an app update.

With Firebase Features, you would do the following to get config data from Firebase:
You start by fetching the Remote Config Data from Firebase's server. Once it's done, you activate the fetched data with the `Activate Fetched` node. After that, you can safely get your data to configure your game with the `Get String`, `Get Bool`, `Get Int32`, `Get Float`, `Get Int64` or `Get Data` nodes.

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/RemoteConfigExample.png?raw=true)





