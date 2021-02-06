# Getting Started with C++
This section contains information for C++ development using Firebase - Features as well as some examples.
## Includes
Here is an exhaustive list of incldes available:
```cpp
#include "FirebaseFeatures.h
#include "FirebaseSdk/FirebaseVariant.h"
#include "Auth/Auth.h"
#include "Auth/Credential.h"
#include "Auth/User.h"
#include "Analytics/FirebaseAnalyticsProvider.h"
#include "Analytics/FirebaseAnalyticsLibrary.h"
#include "AdMob/AdMobLibrary.h"
#include "AdMob/AdMobTypes.h"
#include "AdMob/BannerView.h"
#include "AdMob/InterstitialAd.h"
#include "AdMob/RewardedVideo.h"
#include "Database/Database.h"
#include "Database/DatabaseReference.h"
#include "Firestore/Firestore.h"
#include "Firestore/Query.h"
#include "Firestore/FieldValue.h"
#include "Firestore/FieldPath.h"
#include "Firestore/DocumentSnapshot.h"
#include "Firestore/DocumentReference.h"
#include "Firestore/CollectionReference.h"
#include "Functions/FunctionsLibrary.h"
#include "Functions/CallableReference.h"
#include "Messaging/MessagingLibrary.h"
#include "RemoteConfig/RemoteConfig/.h"
#include "Storage/Storage.h"
#include "Storage/StorageReference.h"
```

## Code Examples
### Realtime Database
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
