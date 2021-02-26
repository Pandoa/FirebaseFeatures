# Setup Firebase Features
## Create a Firebase project.
To use Firebase, you need a Firebase project. To create one, go to [the Firebase Console](https://console.firebase.google.com/u/0/), click on `Add a project` and fill the fields asked for your new project.
## AdMob Configuration
If you plan to use AdMob, you have to configure it first.
1. Start by going to [AdMob Home Page](https://apps.admob.com/v2/home).  
2. Click `Application` > `Add an Application`. 
3. Once the application is added, go to `Application Settings`
4. Click on `Associate with Firebase`. This last step will ask you your application's package name that you choose while creating your Firebase Project.
5. You now need to go to `Apps` > `YourApp` > `App Settings`, copy the App ID and paste it in `DefaultEngine.ini` with the following structure: 
 ```ini
[Firebase]
AdMobApplicationId="ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX"
```  

## File `google-services.json`

To work, Firebase requires the file `google-services.json` (or `GoogleService-Info.plist` for iOS). 
1. Go to `Project Overview > Project Settings` 
2. Click on <img align="center" width="170" height="30" src="https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/download-gs.png?raw=true"> to download the `google-services.json` file.
3. Now that `google-services.json` is downloaded, you need to copy it to `<YourProject>/Services/`.  You can then start the Editor and proceed to the next step.

The following image shows the required steps to arrive to the Download button:

![Firebase Console Download Services Actions](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/FBConsoleProjectSettings.png?raw=true)

!> If the file is invalid or not placed correctly, you will see an error message in the output log when you start the Editor with the message `Failed to create Firebase Application. Make sure the google-services.json file exists and is valid`. If this message doesn't appear, you can assume it is correctly configured.

!> Even if you plan to only use `Firebase - Features` on iOS, we recommend to download the `.json` file as well as the `.plist` to test in-Editor.

## Creating a Realtime Database
To create a Realtime Database for your project:
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. In the left panel, click on Realtime Database.
3. Click on `Create a Database`
4. Download and update your current `google-services.json`.

## Crashlytics (Android Only)
To enable Crashlytics for your project:
1. Open your project's `Config/DefaultEngine.ini` in a text editor.
2. Add `CrashlyticsEnabled=true` under the `Firebase` category.
```ini
[Firebase]
AdMobApplicationId="ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX"
CrashlyticsEnabled=true
```

## Configuration for C++
This step is only required if you plan to use Firebase Features through C++ code.
Open  `YourProject.Build.cs` and add the following line to your module's constructor:
```csharp
PrivateDependencyModuleNames.Add("FirebaseFeatures");
```

!> You need to regenerate project files for the includes to work with your code editor.

## Disabling unused modules
If you want to disable a Firebase Module, you can do so by going to your project's configuration > Plugins > Firebase Features.
You can then untick the box of the modules you don't want to use.

![Firebase Features configuration panel](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/ConfigPanel.png?raw=true)

!> Disabling a module will skip its initialization. Be careful to not call a method of a module that you disabled.

## Removing all the code for a module
If you want to remove totally a module from the plugin, you can do so by editing a line in `FirebaseFeatures.Build.cs`.
This file is located to `<Engine_Dir>/Plugins/Marketplace/FirebaseFeatures/Source/FirebaseFeatures/`.

Open the file and comment out the library you don't want in the list starting at line `22`. Also, read the code comment containing an example.

?> After following this procedure, the specified module won't be linked and used in your app at all.  

!> After doing so, you have to rebuild the plugin. If you target iOS/Android, make sure to delete any intermediate files to trigger a full plugin rebuild.
For Desktop platforms, you have to move the plugin to `<Project>/Plugins` and have a C++ project so the plugin triggers a rebuild.

## Disabling a Module (Android)
Android has one last step to totally eradicate a module from your application.

1. Open the default Engine config file, usually located at `<Project>/Config/DefaultEngine.ini`.
2. Under the `Firebase` category add `ModuleEnabled=false`.
```ini
[Firebase]
AdMobApplicationId="ca-app-pub-XXX~XXX" ; Other configs.
; ...
AdMobEnabled=false ; <- The module we want to disable.
```

The current modules you can enable/disable this way are:  

|Module Name|Config Name|Default Value|
|:---|:---|:---:|
|AdMob|`AdMobEnabled`|`true`|
|Crashlytics|`CrashlyticsEnabled`|`false`|

!> Send an email to [pandores.marketplace@gmail.com](mailto:pandores.marketplace@gmail.com) if you want to disable an unlisted module.
