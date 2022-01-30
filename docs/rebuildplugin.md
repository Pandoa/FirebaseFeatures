# Rebuild the Plugin
1. If the project doesn't contain C++ code, add an empty C++ class from the Editor.
2. Copy the plugin from `<UE_ROOT>/Engine/Plugins/Marketplace/FirebaseFeatures/ to <PROJECT_ROOT>/Plugins/FirebaseFeatures`.
3. Delete the `Intermediate`, `Build`, and `Binaries` folder in `<PROJECT_ROOT>/Plugins/FirebaseFeatures`.
4. Open your project and select `Yes` when asked to build the sources. It will compile the plugin for your current platform.
5. Package your project for the target platform.


