# Firebase Features - Documentation
|:warning:| This documentation is still in construction|
|:---:|:---
## Table of Content
1. Setup Firebase Features</br>
  1.1. Create a Firebase project.</br>
  1.2. AdMob Configuration</br>
  1.3. `google-services.json`</br>
  1.4. Configuration for C++</br>
2. Firebase Components</br>
  2.1. AdMob</br>
  2.1. AdMob</br>
  2.2. Analytics</br>
  2.3. Auth</br>
  2.4. Cloud Firestore</br>
  2.5. Cloud Functions</br>
  2.6. Cloud Messaging</br>
  2.7. Cloud Storage</br>
  2.8. Dynamic Links</br>
  2.9. Realtime Database</br>
  2.10. Remote Config</br>

## 1. Setup Firebase Features
### 1.1. Create a Firebase project.
To use Firebase, you need a Firebase project. To create one, go to [the Firebase Console](https://console.firebase.google.com/u/0/), click on `Add a project` and fill the fields asked for your new project.
### 1.2. AdMob Configuration
If you plan to use AdMob, you have to configure it first. Start by going to [AdMob Home Page](https://apps.admob.com/v2/home).  Click `Application > Add an Application`. Once the application is added, go to `Application Settings` and click on `Associate with Firebase`. This last step will ask you your application's package name that you choose while creating your Firebase Project.
### 1.3. `google-services.json`
To work, Firebase requires the file `google-services.json` (or `google-services.plist` for iOS). Go to `Project Settings > Global Settings` and click on <img align="center" width="170" height="30" src="https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/download-gs.png?raw=true"> to download the `google-services.json` file.

Now that `google-services.json` is downloaded, you need to copy it to `<YourProject>/Services/`.  You can now start the Editor and proceed to the next step.
|:information_source:| If the file is invalid or not placed correctly, you will see an error message in the output log when you start the Editor with the message `Failed to create Firebase Application. Make sure the google-services.json file exists and is valid`. If this message doesn't appear, you can assume it is correctly configured.|
|:--:|:--|

### 1.4. Configuration for C++
This step is only required if you plan to use Firebase Features through C++ code.
Open  `YourProject.Build.cs` and add the following line to your module's constructor:
```csharp
PrivateDependencyModuleNames.Add("FirebaseFeatures");
```
|:warning:|You need to regenerate project files for the includes to work with your code editor.|
|:--:|:--|

## 2. Firebase Components
### 2.1. AdMob
AdMob helps you monetize your mobile app through in-app advertising. Three types of advertising are available:
#### 2.1.1. Banner View
<img src="https://developers.google.com/admob/images/format-banner.svg" align="left"/>
Banners are rectangular ads that occupy a portion of an app's layout. They can be refreshed automatically after a period of time.

#### 2.1.2. Interstitial Ads
<img src="https://developers.google.com/admob/images/format-interstitial.svg" align="left"/>
Interstitial ads are full-page ad format that appear at natural breaks and transitions, such as level completion.

#### 2.1.3. Rewarded Videos
<img src="https://developers.google.com/admob/images/format-rewarded.svg" align="left"/>
Rewarded videos are ad formats that reward users for watching ads. Great for monetising free-to-play users.

### 2.2. Analytics
### 2.3. Auth
### 2.4. Cloud Firestore
### 2.5. Cloud Functions
### 2.6. Cloud Messaging
### 2.7. Cloud Storage
### 2.8. Dynamic Links
### 2.9. Realtime Database
### 2.10. Remote Config
