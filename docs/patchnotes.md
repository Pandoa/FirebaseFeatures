# Patch Notes

This section contains patch notes for the plugin.

!> The Unreal Engine Marketplace allows updates only for the last three major Engine versions. To get the latest version of the plugin on older Engine versions, download the plugin through the latest Engine installation or contact our support email address.

### `1.7.18`
- Fix a formatting error when converting Firestore's `FFieldValue` to a JSON string.

### `1.7.17`
- `AddSnapshotListener` now returns a handle to remove the listener. Call `Remove` on this handle to stop listening.
- `AddSnapshotListener` is now available on all platforms.

### `1.7.16`
- Fix 4.27 build errors.

### `1.7.15`
- Updated the Firebase C++ SDK for iOS to version `12.1.0`.

### `1.7.14`
- Updated the Firebase C++ SDK for iOS to version `12.0.0`.

### `1.7.13`
- Add support for Unreal Engine 5.4.
- Replace Linux binaries with PIC binaries.

### `1.7.12`
- Updated the Firebase C++ SDK for Linux to version `11.9.0`.
- Add `GetToken()` C++ function and `Get Token` async node to get the Firebase Installation ID token.
- `ListenForMessagingEvents` async node now fires immediatly if a previous Firebase Messaging Token was missed.

### `1.7.11`
- Updated the Firebase C++ SDK for iOS to version `11.9.0`.
