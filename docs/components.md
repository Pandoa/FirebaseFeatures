# Firebase Components
## AdMob
AdMob helps you monetize your mobile app through in-app advertising. Three types of advertising are available.

!> For development, you should pick a [Sample ad unit ID](https://developers.google.com/admob/android/test-ads#sample_ad_units) or your AdMob account might be flagged.

### Setting up AdMob for development  
For development, AdMob displays test ads instead of real ads. To enable test ads there are two possibilities.
#### Using Test Ad IDs
Instead of using created ads' IDs, you can pick the one matching the type of ad you display to automatically use test ads:

|Ad Type| Ad ID|
|:---|:---|
|Banner|	ca-app-pub-3940256099942544/6300978111|
|Interstitial|	ca-app-pub-3940256099942544/1033173712|
|Interstitial Video|	ca-app-pub-3940256099942544/8691691433|
|Rewarded Video|	ca-app-pub-3940256099942544/5224354917|

You would then pass these Ads IDs for the parameter `Ad Unit Id`.

You can read more about these ads IDs [here](https://developers.google.com/admob/android/test-ads#sample_ad_units).
#### Adding the Device ID for Development
A more convenient method to not have to change Ad Unit IDs is to register your device as a Test Device.

To do so:
1. Get your Test Device ID. You get it watching your device logs with `adb logcat` when you launch an ad. A line looking like `AdRequest.Builder.addTestDevice("YOUR_DEVICE_TEST_ID")` will appear in the logs.
2. Each time you load an ad, add your test device ID(s) to the ad request as followed:
![Add Test Device](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/TestAdDeviceId.png?raw=true)    


### Banner View
<img src="https://developers.google.com/admob/images/format-banner.svg" align="left" width="100"/>
Banners are rectangular ads that occupy a portion of an app's layout. They can be refreshed automatically after a period of time.
</br></br></br>

Here is a simple use case to create a banner, load an add and finally show the ad:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/CreateBannerView.png?raw=true)
Once the Banner is created, you can manage its behavior with the following methods:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/BannerViewFunctions.png?raw=true)

### Interstitial Ads
<img src="https://developers.google.com/admob/images/format-interstitial.svg" align="left" width="100"/>
Interstitial ads are full-page ad format that appear at natural breaks and transitions, such as level completion.
</br></br></br></br>

The following Blueprint code shows how to create an Interstitial Ad, load an ad and finally show it. The ad will then be discarded by your user.

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/CreateInterstitial.png?raw=true)
### Rewarded Videos
<img src="https://developers.google.com/admob/images/format-rewarded.svg" align="left" width="100"/>
Rewarded videos are ad formats that reward users for watching ads. They are great for monetising free-to-play users.
</br></br></br></br>

Here's how to show a Rewarded Video to your users: you start by binding the reward event to a custom function, you then load the ad with your Ad Unit Id and finally show it when it is loaded.

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/ShowRewardedVideo.png?raw=true)

## Analytics
Google Analytics collects usage and behavior data for your app.
### Before Starting
Firebase Features uses Unreal Engine's analytic system. To use this system as the default system for your project, you have to edit your project's configuration. 
Open `<YourGame>/Config/DefaultEngine.ini` and add the following lines:
```ini
[Analytics]
ProviderModuleName=FirebaseFeatures
```
### Managing the Analytic Session
You can now start an Analytic Session with the following node:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/StartAnalyticSession.png?raw=true)

And if you want to end the session, you can call `End Session` at any time:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/EndAnalyticSession.png?raw=true)

### Logging Events
Now that the analytic session has started, you can start logging events. Firebase Features offers several methods to easily log different kinds of events:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/AnalyticLogFunctions.png?raw=true)

### Going Further
Firebase Features offers other methods to manage analytics. You can safely call them after you started the session.

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/AnalyticsFunctions.png?raw=true)

## Auth
You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login.
### Sign Up new Users
To sign up new users, you need to create a form that allows new users to register with your app using their email address and a password. When a user completes the form, validate the email address and password provided by the user, then pass them to the `Create User with Email and Password`:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/AuthCreateUser.png?raw=true)

### Sign In
Firebase offers several methods to sign in:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/AuthSignIn.png?raw=true)

### Going Further
The Firebase C++ SDK offers a lot of methods in the `Auth` module. We've converted all of them to Unreal Engine with Blueprint support. However, this documentation won't list all of them and their use. To see and learn how to use them, have a look at [the Official Firebase C++ SDK Documentation](https://firebase.google.com/docs/auth/cpp/start). We have kept the same name for each methods. Futures are replaced with execution pins on asynchronous nodes to keep it easy to use.
## Cloud Firestore
Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform. Like Firebase Realtime Database, it keeps your data in sync across client apps through realtime listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity.
### Get Data from Firestore

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/FirestoreGetData.png?raw=true)

## Cloud Functions
Cloud Functions for Firebase is a serverless framework that lets you automatically run backend code in response to events triggered by Firebase features and HTTPS requests. Your JavaScript or TypeScript code is stored in Google's cloud and runs in a managed environment. There's no need to manage and scale your own servers.
### Call a function
To call a Cloud Function, you have to first retrieve an Https Callable Reference with the node `Get Https Callble`. Once the reference is retrieved, you can call it with a Variant data parameter.

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/CallCloudFunctions.png?raw=true)

## Cloud Messaging
Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost.

Using FCM, you can notify a client app that new email or other data is available to sync. You can send notification messages to drive user re-engagement and retention. For use cases such as instant messaging, a message can transfer a payload of up to 4KB to a client app.
### Receive a message
To handle Messaging's module events, we have to call the `Listen for Messaging Events` node:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/MessagingReceiveMessage.png?raw=true)

After that, the execution pin `On Message` is going to fire each time a message is received.
## Cloud Storage
Cloud Storage for Firebase lets you upload and share user generated content, such as images and video, which allows you to build rich media content into your apps. Your data is stored in a [Google Cloud Storage](https://cloud.google.com/storage) bucket, an exabyte scale object storage solution with high availability and global redundancy. Cloud Storage lets you securely upload these files directly from mobile devices and web browsers, handling spotty networks with ease.
### Download a file from Cloud Storage

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/StorageDownloadFile.png?raw=true)

### Upload a file to Cloud Storage

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/StorageUploadFile.png?raw=true)

## Dynamic Links
Firebase Dynamic Links are links that work the way you want, on multiple platforms, and whether or not your app is already installed.
You can listen to Dynamic Links with the `On Dynamic Link Received` node.

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/DynamicLinksEvent.png?raw=true)

## Realtime Database
The Firebase Realtime Database stores and synchronizes data using a NoSQL cloud database. Data is synchronized across all clients in realtime, and remains available when your app goes offline.

### Save data
For basic write operations, you can use the `Set Value` node to save data to a specified reference, replacing any existing data at that path:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/DatabaseSetValue.png?raw=true)

### Retrieve data

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/DatabaseGetValue.png?raw=true)

### Watch data
Realtime Database allows you to react to Database change in realtime. To do so, you just have to setup the listeners and bind the `OnValueChanged` delegate:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/DatabaseWatchValue.png?raw=true)

There are other events you can listen for as well:

|Event Name|Details|
|:---|:---|
|`OnChildAdded`| Called when a child has been added to the reference watched.|
|`OnChildChanged`| Called when a child of the reference we watch has been modified.|
|`OnChildMoved`| Called when a child of the reference we watch has been moved.|
|`OnChildRemoved`| Called when a child of the reference we watch has been removed.|
|`OnCancelled`| Called when the watch has been cancelled.|
|`OnValueChanged`| Called when the value watched has changed.|



## Remote Config
You can use Firebase Remote Config to define parameters in your app and update their values in the cloud, allowing you to modify the appearance and behavior of your app without distributing an app update.

With Firebase Features, you would do the following to get config data from Firebase:
You start by fetching the Remote Config Data from Firebase's server. Once it's done, you activate the fetched data with the `Activate Fetched` node. After that, you can safely get your data to configure your game with the `Get String`, `Get Bool`, `Get Int32`, `Get Float`, `Get Int64` or `Get Data` nodes.

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/RemoteConfigExample.png?raw=true)
