# Patch Notes

This section contains patch notes for the plugin.

!> The Unreal Engine Marketplace allows updates only for the last three major Engine versions. To get the latest version of the plugin on older Engine versions, download the plugin through the latest Engine installation or contact our support email address.

<style>
section.content ul {
  list-style: none;
}
section.content li {
  left: -20px;
  position: relative;
}
section.content li:before {
  content: url("_svgs/circle-solid.svg");
  width: 12px;
  padding: 3px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
}
section.content li.warn {
  color: #ffc229 !important;
}
section.content li.warn:before {
  content: url("_svgs/warn.svg");
}
section.content li.new {
  color: #a9d34f !important;
}
section.content li.new:before {
  content: url("_svgs/plus.svg");
}
</style>

### `1.7.19`
<ul>
  <li class="new">
    Added <code>OnPaid</code> event on <code>InterstitialAd</code> object.
  </li>
  <li class="new">
    Added <code>OnAdDidFailToPresentFullScreenContent</code> event on <code>InterstitialAd</code> object.
  </li>
  <li class="new">
    Added <code>OnAdWillPresentFullScreenContent</code> event on <code>InterstitialAd</code> object.
  </li>
  <li class="new">
    Added <code>OnAdDidDismissFullScreenContent</code> event on <code>InterstitialAd</code> object.
  </li>
  <li class="new">
    Added <code>OnAdDidRecordImpression</code> event on <code>InterstitialAd</code> object.
  </li>
  <li class="new">
    Added <code>OnAdDidRecordClick</code> event on <code>InterstitialAd</code> object.
  </li>
  <li class="new">
    Added <code>OnAdWillDismissFullScreenContent</code> event on <code>InterstitialAd</code> object.
  </li>
  <li>
    Rewrote <code>InterstitialAd</code> to use the native SDK. Other ad formats will be rewritten in following updates, following the deprecation of the Firebase C++ Admob SDK by Google.
  </li>
  <li class="warn">
    Deprecated the old API of <code>InterstitialAd</code>. Please, update your code to use the new API by following the deprecation message recommendations.
  </li>
</ul>

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
<ul>
<li class="new">
Add support for Unreal Engine 5.4.
</li>
<li>
Replace Linux binaries with PIC binaries.
</li>
</ul>

### `1.7.12`
<ul>
<li class="new">
Add <code>GetToken()</code> C++ function and <code>Get Token</code> async node to get the Firebase Installation ID token.
</li>
<li>
  Updated the Firebase C++ SDK for Linux to version <code>11.9.0</code>.
</li>
<li>
<code>ListenForMessagingEvents</code> async node now fires immediatly if a previous Firebase Messaging Token was missed
</li>
</ul>

### `1.7.11`
- Updated the Firebase C++ SDK for iOS to version `11.9.0`.
