# Setup Firebase Features

This section guides you to install the plugin and start using it. You can skip the optional steps.

> If you want to use the plugin for desktop (Windows, MacOS, Linux), the steps are the same as for Android.

<div style="display:flex;justify-content:center">
<div style="max-width: 640px;flex-grow:1;">
<iframe src="https://www.youtube.com/embed/SbVVrKnS78Y?rel=0" class="video" alt="Installation Video Guide" title="The installation instructions below in video" allow="fullscreen" allowfullscreen="1" mozallowfullscreen msallowfullscreen oallowfullscreen webkitallowfullscreen>
</iframe>
</div>
</div>

<style>
.markdown-section h2 {
   border-top: 4px solid #333;
   padding-top: 35px;
}
</style>

## 1. Create a Firebase project.
To use Firebase, you need a Firebase project. To create one, go to [the Firebase Console](https://console.firebase.google.com/u/0/), click on `Add a project` and fill the fields asked for your new project.

## 2. Configure AdMob (optional)

If you plan to use AdMob, you have to configure it first.
1. Start by going to [AdMob Home Page](https://apps.admob.com/v2/home).  
2. Click `Application` > `Add an Application`. 
3. Once the application is added, go to `Application Settings`
4. Click on `Associate with Firebase`. This last step will ask you your application's package name that you choose while creating your Firebase Project.
5. You now need to go to `Apps` > `YourApp` > `App Settings`, copy the App ID and paste it in `DefaultEngine.ini` with the following structure:   

 ```ini
[Firebase]
AdMobApplicationId="ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX"
; Optional platform overrides, fall back to AdMobApplicationId if not set.
AndroidAdMobApplicationId="ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX"
iOSAdMobApplicationId="ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX"
```  

## 3. Install the File `google-services.json`

To work, Firebase requires the file `google-services.json` (or `GoogleService-Info.plist` for iOS). 
1. Go to `Project Overview > Project Settings` 
2. Click on <img align="center" width="170" height="30" src="_images/download-gs.png"> to download the `google-services.json` file.
3. Now that `google-services.json` is downloaded, you need to copy it to `<YourProject>/Services/`.  You can then start the Editor and proceed to the next step.

The following image shows the required steps to arrive to the Download button:

<div class="centered">

![Firebase Console Download Services Actions](_images/FBConsoleProjectSettings.png)

</div>

!> If the file is invalid or placed incorrectly, you will see an error message in the output log when you start the Editor with the message `Failed to create Firebase Application. Make sure the google-services.json file exists and is valid`. If this message doesn't appear, you can assume it is correctly configured.

!> Even if you plan to only use `Firebase - Features` on iOS, we recommend to download the `.json` file as well as the `.plist` to test in-Editor.

!> Desktop platforms use the Android `google-services.json` file.

## 4. Configuration for C++ (optional)
This step is only required if you plan to use Firebase Features through C++ code. You can safely skip it if you plan to code using Blueprints only.

Open  `YourProject.Build.cs` and add the following line to your module's constructor:
```csharp
PrivateDependencyModuleNames.Add("FirebaseFeatures");
```

!> You need to regenerate project files for the includes to work with your code editor.

## 5. You are done!

If you correctly placed your `google-services.json` file in the `Services` folder, you can start the Unreal Engine Editor and use the plugin!

You can click on one of the modules below to access its documentation.


<div class="fb-f-cont">

<a class="fb-elem" href="#firestore">
  <image src="_images/firebase/Firestore.png" class="fb" width="360px" height="360px"  alt="Firestore icon"/>
  <div class="fb-txt">
    Firestore
  </div>
</a>

<a class="fb-elem" href="#functions">
  <image src="_images/firebase/CloudFunctions.png" class="fb" width="360px" height="360px"  alt="Cloud Functions icon"/>
  <div class="fb-txt">
    Cloud Functions
  </div>
</a>

<a class="fb-elem" href="#auth">
  <image src="_images/firebase/Auth.png" class="fb" width="360px" height="360px"  alt="Firebase Auth icon"/>
  <div class="fb-txt">
    Authentication
  </div>
</a>

<a class="fb-elem" href="#database">
  <image src="_images/firebase/Database.png" class="fb" width="360px" height="360px"  alt="Realtime Database icon"/>
  <div class="fb-txt">
    Realtime Database
  </div>
</a>

<a class="fb-elem" href="#storage">
  <image src="_images/firebase/Storage.png" class="fb" width="360px" height="360px"  alt="Firebase Cloud Storage icon"/>
  <div class="fb-txt">
    Cloud Storage
  </div>
</a>


<a class="fb-elem" href="#appcheck">
  <image src="_images/firebase/AppCheck.png" class="fb" width="360px" height="360px"  alt="Firebase App Check icon"/>
  <div class="fb-txt">
    AppCheck
  </div>
</a>

<a class="fb-elem" href="#crashlytics">
  <image src="_images/firebase/Crashlytics.png" class="fb" width="360px" height="360px"  alt="Crashlytics icon"/>
  <div class="fb-txt">
    Crashlytics
  </div>
</a>

<a class="fb-elem" href="#admob">
  <image src="_images/firebase/AdMob.png" class="fb" width="360px" height="360px"  alt="AdMob icon"/>
  <div class="fb-txt">
    AdMob
  </div>
</a>

<a class="fb-elem" href="#analytics">
  <image src="_images/firebase/Analytics.png" class="fb" width="360px" height="360px"  alt="Firebase Analytics icon"/>
  <div class="fb-txt">
    Analytics
  </div>
</a>

<a class="fb-elem" href="#messaging">
  <image src="_images/firebase/Messaging.png" class="fb" width="360px" height="360px"  alt="Firebase Messaging icon"/>
  <div class="fb-txt">
    Cloud Messaging
  </div>
</a>

<a class="fb-elem" href="#remoteconfig">
  <image src="_images/firebase/RemoteConfig.png" class="fb" width="360px" height="360px"  alt="Remote Config icon"/>
  <div class="fb-txt">
    RemoteConfig
  </div>
</a>

<a class="fb-elem" href="#dynamiclinks">
  <image src="_images/firebase/Dynamicinks.png" class="fb" width="360px" height="360px"  alt="Dynamic Links icon" />
  <div class="fb-txt">
    Dynamic Links
  </div>
</a>

<a class="fb-elem" href="#performance">
  <image src="_images/firebase/Performance.png" class="fb" width="360px" height="360px"  alt="Firebase Performance icon"/>
  <div class="fb-txt">
    Performance
  </div>
</a>

</div>