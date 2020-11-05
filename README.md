# Firebase Features - Documentation
|:warning:| This documentation is still in construction|
|:---:|:---
## Table of Content
1. Setup Firebase Features</br>
  1.1. Create a Firebase project.
  1.2. AdMob Configuration</br>
  1.3. `google-services.json`</br>
  1.4. Configuration for C++</br>
2. Firebase Components
  2.1. AdMob

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
