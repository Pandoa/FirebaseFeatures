# Getting Started with C++
This section contains information for C++ development using Firebase - Features as well as some examples.
# Includes
Here is an exhaustive list of includes available:
```cpp
// Common files
#include "FirebaseFeatures.h"
#include "FirebaseSdk/FirebaseVariant.h"

// Auth
#include "Auth/Auth.h"
#include "Auth/Credential.h"
#include "Auth/User.h"

// Analytics
#include "Analytics/FirebaseAnalyticsProvider.h"
#include "Analytics/FirebaseAnalyticsLibrary.h"

// AdMob
#include "AdMob/AdMobLibrary.h"
#include "AdMob/AdMobTypes.h"
#include "AdMob/BannerView.h"
#include "AdMob/InterstitialAd.h"
#include "AdMob/RewardedVideo.h"

// Realtime Database
#include "Database/Database.h"
#include "Database/DatabaseReference.h"

// Firestore
#include "Firestore/Firestore.h"
#include "Firestore/Query.h"
#include "Firestore/FieldValue.h"
#include "Firestore/FieldPath.h"
#include "Firestore/DocumentSnapshot.h"
#include "Firestore/DocumentReference.h"
#include "Firestore/CollectionReference.h"

// Cloud Functions
#include "Functions/FunctionsLibrary.h"
#include "Functions/CallableReference.h"

// Cloud Messaging
#include "Messaging/MessagingLibrary.h"

// Remote Config
#include "RemoteConfig/RemoteConfig/.h"

// Cloud Storage
#include "Storage/Storage.h"
#include "Storage/StorageReference.h"
```

# Code Examples
## Analytics
?> Make sure to read the [Before Starting](https://pandoa.github.io/FirebaseFeatures/#/components?id=before-starting) section.

The headers available for this part of the SDK are:
```cpp
#include "Analytics/FirebaseAnalyticsProvider.h"
#include "Analytics/FirebaseAnalyticsLibrary.h"
```
### Get the Firebase Analytics Provider
```cpp
// The provider inheriting the Engine's IAnalyticsProvider (for 4.25+).
const TSharedPtr<FFirebaseAnalyticsProvider> Provider =  UFirebaseAnalyticsLibrary::GetAnalyticsProvider();

// Provider is invalid if not set in config file.
if (Provider)
{
    // Use the provider.
}
```
### Managing the Analytics Session
The `UFirebaseAnalyticsLibrary` class provides static methods to manage the Analytics Session.
```cpp
// To start the analytics session.
// Short-hand for GetProvider()->StartSession().
UFirebaseAnalyticsLibrary::StartSession();

// Do stuff with analytics.

// To end the analytics session.
// Short-hand for GetProvider()->EndSession().
UFirebaseAnalyticsLibrary::EndSession();
```

## Realtime Database
```cpp
UDatabase* const Database = UDatabase::GetInstanceFromUrl(TEXT("https://app-db.firebaseio.com/"));
if (Database)
{
    Database->GoOnline();

    // Should keep the reference marked as UPROPERTY somewhere
    // to prevent its garbage collection.
    UDatabaseReference* const Ref = Database->GetReferenceFromPath(TEXT("/SomeVal"));

    if (Ref && Ref->IsValid())
    {
        Ref->SetKeepSynchronized(true);
        Ref->SetupListeners();

        Ref->OnValueChanged.AddDynamic(this, &UMyClass::OnValueChanged);

        Ref->GetValue(FSnapshotCallback::CreateUObject(this, &UMyClass::OnGetValue));
    }
    else
    {
        UE_LOG(LogTemp, Error, TEXT("Invalid reference."));
    }
}
else
{
    UE_LOG(LogTemp, Error, TEXT("Invalid database."));
}
```
