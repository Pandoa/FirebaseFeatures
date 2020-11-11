
# Firebase Features - Documentation
|:warning:| This documentation is still in construction|
|:---:|:---
## Table of Content
1. [Setup Firebase Features](#1-setup-firebase-features)</br>
  1.1. [Create a Firebase project](#11-create-a-firebase-project).</br>
  1.2. [AdMob Configuration](#12-admob-configuration)</br>
  1.3. [`google-services.json`](#13-google-servicesjson)</br>
  1.4. [Configuration for C++](#14-configuration-for-c)</br>
2. [Firebase Components](#2-firebase-components)</br>
  2.1. [AdMob](#21-admob)</br>
  2.2. [Analytics](#22-analytics)</br>
  2.3. [Auth](#23-auth)</br>
  2.4. [Cloud Firestore](#24-cloud-firestore)</br>
  2.5. [Cloud Functions](#25-cloud-functions)</br>
  2.6. [Cloud Messaging](#26-cloud-messaging)</br>
  2.7. [Cloud Storage](#27-cloud-storage)</br>
  2.8. [Dynamic Links](#28-dynamic-links)</br>
  2.9. [Realtime Database](#29-realtime-database)</br>
  2.10. [Remote Config](#210-remote-config)</br>

# 1. Setup Firebase Features
## 1.1. Create a Firebase project.
To use Firebase, you need a Firebase project. To create one, go to [the Firebase Console](https://console.firebase.google.com/u/0/), click on `Add a project` and fill the fields asked for your new project.
## 1.2. AdMob Configuration
If you plan to use AdMob, you have to configure it first.
1. Start by going to [AdMob Home Page](https://apps.admob.com/v2/home).  
2. Click `Application` > `Add an Application`. 
3. Once the application is added, go to `Application Settings`
4. Click on `Associate with Firebase`. This last step will ask you your application's package name that you choose while creating your Firebase Project.
<!--
5. You now need to go to `Apps` > `YourApp` > `App Settings`, copy the App ID and paste it in `DefaultEngine.ini` with the following structure: 
 ```ini
[Firebase]
AdMobApplicationId="ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX"
```
-->
## 1.3. `google-services.json`
To work, Firebase requires the file `google-services.json` (or `GoogleService-Info.plist` for iOS). 
1. Go to `Project Settings > Global Settings` 
2. Click on <img align="center" width="170" height="30" src="https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/download-gs.png?raw=true"> to download the `google-services.json` file.
3. Now that `google-services.json` is downloaded, you need to copy it to `<YourProject>/Services/`.  You can then start the Editor and proceed to the next step.

|:information_source:| If the file is invalid or not placed correctly, you will see an error message in the output log when you start the Editor with the message `Failed to create Firebase Application. Make sure the google-services.json file exists and is valid`. If this message doesn't appear, you can assume it is correctly configured.|
|:--:|:--|

## 1.4. Configuration for C++
This step is only required if you plan to use Firebase Features through C++ code.
Open  `YourProject.Build.cs` and add the following line to your module's constructor:
```csharp
PrivateDependencyModuleNames.Add("FirebaseFeatures");
```
|:warning:|You need to regenerate project files for the includes to work with your code editor.|
|:--:|:--|

# 2. Firebase Components
## 2.1. AdMob
AdMob helps you monetize your mobile app through in-app advertising. Three types of advertising are available.
|:warning:| For development, you should pick a [Sample ad unit ID](https://developers.google.com/admob/android/test-ads#sample_ad_units) or your AdMob account might be flagged. |
|:--:|:---|
### 2.1.1. Banner View
<img src="https://developers.google.com/admob/images/format-banner.svg" align="left" width="100"/>
Banners are rectangular ads that occupy a portion of an app's layout. They can be refreshed automatically after a period of time.
</br></br></br>

Here is a simple use case to create a banner, load an add and finally show the ad:
![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/CreateBannerView.png?raw=true)
Once the Banner is created, you can manage its behavior with the following methods:
![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/BannerViewFunctions.png?raw=true)

### 2.1.2. Interstitial Ads
<img src="https://developers.google.com/admob/images/format-interstitial.svg" align="left" width="100"/>
Interstitial ads are full-page ad format that appear at natural breaks and transitions, such as level completion.
</br></br></br></br>

The following Blueprint code shows how to create an Interstitial Ad, load an ad and finally show it. The ad will then be discarded by your user.
![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/CreateInterstitial.png?raw=true)
### 2.1.3. Rewarded Videos
<img src="https://developers.google.com/admob/images/format-rewarded.svg" align="left" width="100"/>
Rewarded videos are ad formats that reward users for watching ads. They are great for monetising free-to-play users.
</br></br></br></br>

Here's how to show a Rewarded Video to your users: you start by binding the reward event to a custom function, you then load the ad with your Ad Unit Id and finally show it when it is loaded.
![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/ShowRewardedVideo.png?raw=true)

## 2.2. Analytics
Google Analytics collects usage and behavior data for your app.
### 2.2.1. Before Starting
Firebase Features uses Unreal Engine's analytic system. To use this system as the default system for your project, you have to edit your project's configuration. 
Open `<YourGame>/Config/DefaultEngine.ini` and add the following lines:
```ini
[Analytics]
ProviderModuleName=FirebaseFeatures
```
### 2.2.2. Managing the Analytic Session
You can now start an Analytic Session with the following node:
![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/StartAnalyticSession.png?raw=true)
And if you want to end the session, you can call `End Session` at any time:
![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/EndAnalyticSession.png?raw=true)
### 2.2.3. Logging Events
Now that the analytic session has started, you can start logging events. Firebase Features offers several methods to easily log different kinds of events:
![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/AnalyticLogFunctions.png?raw=true)
### 2.2.4. Going Further
Firebase Features offers other methods to manage analytics. You can safely call them after you started the session.
![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/AnalyticsFunctions.png?raw=true)
## 2.3. Auth
You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login.
### 2.3.1. Sign Up new Users
To sign up new users, you need to create a form that allows new users to register with your app using their email address and a password. When a user completes the form, validate the email address and password provided by the user, then pass them to the `Create User with Email and Password`:
![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/AuthCreateUser.png?raw=true)
### 2.3.2. Sign In
Firebase offers several methods to sign in:
![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/AuthSignIn.png?raw=true)
### 2.3.3. Going Further
The Firebase C++ SDK offers a lot of methods in the `Auth` module. We've converted all of them to Unreal Engine with Blueprint support. However, this documentation won't list all of them and their use. To see and learn how to use them, have a look at [the Official Firebase C++ SDK Documentation](https://firebase.google.com/docs/auth/cpp/start). We have kept the same name for each methods. Futures are replaced with execution pins on asynchronous nodes to keep it easy to use.
## 2.4. Cloud Firestore
Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform. Like Firebase Realtime Database, it keeps your data in sync across client apps through realtime listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity.
### 2.4.1. Get Data from Firestore
![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/FirestoreGetData.png?raw=true)
## 2.5. Cloud Functions
Cloud Functions for Firebase is a serverless framework that lets you automatically run backend code in response to events triggered by Firebase features and HTTPS requests. Your JavaScript or TypeScript code is stored in Google's cloud and runs in a managed environment. There's no need to manage and scale your own servers.
### 2.5.1. Call a function
To call a Cloud Function, you have to first retrieve an Https Callable Reference with the node `Get Https Callble`. Once the reference is retrieved, you can call it with a Variant data parameter.
![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/CallCloudFunctions.png?raw=true)

## 2.6. Cloud Messaging
Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost.

Using FCM, you can notify a client app that new email or other data is available to sync. You can send notification messages to drive user re-engagement and retention. For use cases such as instant messaging, a message can transfer a payload of up to 4KB to a client app.
### 2.6.1. Receive a message
To handle Messaging's module events, we have to call the `Listen for Messaging Events` node:
![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/MessagingReceiveMessage.png?raw=true)
After that, the execution pin `On Message` is going to fire each time a message is received.
## 2.7. Cloud Storage
Cloud Storage for Firebase lets you upload and share user generated content, such as images and video, which allows you to build rich media content into your apps. Your data is stored in a [Google Cloud Storage](https://cloud.google.com/storage) bucket, an exabyte scale object storage solution with high availability and global redundancy. Cloud Storage lets you securely upload these files directly from mobile devices and web browsers, handling spotty networks with ease.
### 2.7.1 Download a file from Cloud Storage
![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/StorageDownloadFile.png?raw=true)
### 2.7.2. Upload a file to Cloud Storage
![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/StorageUploadFile.png?raw=true)
## 2.8. Dynamic Links

## 2.9. Realtime Database

## 2.10. Remote Config
You can use Firebase Remote Config to define parameters in your app and update their values in the cloud, allowing you to modify the appearance and behavior of your app without distributing an app update.

With Firebase Features, you would do the following to get config data from Firebase:
You start by fetching the Remote Config Data from Firebase's server. Once it's done, you activate the fetched data with the `Activate Fetched` node. After that, you can safely get your data to configure your game with the `Get String`, `Get Bool`, `Get Int32`, `Get Float`, `Get Int64` or `Get Data` nodes.
![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/RemoteConfigExample.png?raw=true)
