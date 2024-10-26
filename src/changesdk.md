# Change the Firebase C++ SDK Used by the Plugin

?> **This section is deprecated.** The plugin ships with up to date SDKs, so you shouldn't need to change it.

The following steps will guide you to change the version of the SDK used internally by the plugin:

1. Download the version of the SDK you want to use. Releases of the SDK can be found [here](https://github.com/firebase/firebase-cpp-sdk/releases). If you don't want to build the SDK, you can download the prebuilt binaries.
2. Convert your project to a C++ project if it isn't the case already. It can be done by simply adding an empty C++ through the Editor.
3. Copy the plugin from `<UE_ROOT>/Engine/Plugins/Marketplace/FirebaseFeatures/` to `<PROJECT_ROOT>/Plugins/FirebaseFeatures`.
4. Replace the libraries of the current SDK by the ones you downlaoded. The location of the libraries depend of the platform:
    * For Windows, libraries are in `FirebaseFeatures\Source\ThirdParty\firebase_cpp_sdk\libs\windows\VS2019\MD\x64\Release\`.
    * For MacOS, libraries are in `FirebaseFeatures/Source/ThirdParty/firebase_cpp_sdk/libs/darwin/universal/`.
    * For Linux, libraries are in `FirebaseFeatures/Source/ThirdParty/firebase_cpp_sdk/libs/darwin/universal/linux/x86_64/`.
    * For Android, libraries are in `FirebaseFeatures/Source/ThirdParty/firebase_cpp_sdk/x.y.z/libs/android/{arch}/c++/`.
    * For iOS, frameworks are in `FirebaseFeatures/Source/ThirdParty/firebase_cpp_sdk/frameworks/ios/universal`. Note that every framework has to be zipped.
5. Replace the includes in the corresponding directories.
6. Right click on your `.uproject` file and select `Generate <IDE> project files`.
7. Open the C++ solution by double clicking it. On Windows, the solution file is called `<Project>.sln`.
8. Build the project. The default shortcut to build the project is `CTRL + SHIFT + B` with Visual Studio or `CMD + B` with Xcode. 

!> As the plugin isn't compatible with all the existing Firebase C++ SDK versions, you might get build errors when building. If that is the case, send an email to [pandores.marketplace@gmail.com](mailto:pandores.marketplace+newsdk@gmail.com) with the version you want to use. A plugin update will follow, making it compatible with the wanted version.
