# Rebuild the Plugin

> If you want to rebuild the plugin to disable a module, make sure you followed the steps [here](/disableunusedfeatures) for this module.

1. If the project doesn't contain C++ code, add an empty C++ class from the Editor.
2. Close the Editor.
3. Copy the plugin from `<UE_ROOT>/Engine/Plugins/Marketplace/FirebaseFeatures/` to `<PROJECT_ROOT>/Plugins/FirebaseFeatures`.
4. Delete the `Intermediate`, `Build`, and `Binaries` folders in `<PROJECT_ROOT>/Plugins/FirebaseFeatures`.
5. Open your project and select `Yes` when asked to build the sources. It will compile the plugin for your current platform.
6. Package your project for the target platform.


