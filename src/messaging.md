## Cloud Messaging
Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost.

Using FCM, you can notify a client app that new email or other data is available to sync. You can send notification messages to drive user re-engagement and retention. For use cases such as instant messaging, a message can transfer a payload of up to 4KB to a client app.

### Platform Notifications

#### Disabling Automatic Notification Request
By default, the plugin automatically asks for notification on launch. This behavior can be disabled in the plugin settings:

<div class="centered">
<img src="_images/NotificationsSettings.png" alt="Editor setting to enable or disable notifications" />
</div>

#### Request Notifications at Runtime
If you disabled notification requests on launch, you can manually request notification access with the following code:


<div class="code-switcher show-cpp-true">
<div class="switcher" >
<span class="sw-bp" onclick="switchBp()">Blueprints</span>
<span class="sw-cpp" onclick="switchCpp()">C++</span>
</div>
<div class="cpp">
    

```cpp
// C++ example not available yet.
```

    
</div>
<div class="bp">
<div class="bpcode">
<textarea readonly>
Begin Object Class=/Script/BlueprintGraph.K2Node_AsyncAction Name="K2Node_AsyncAction_42" ExportPath="/Script/BlueprintGraph.K2Node_AsyncAction'/Game/DemoActor.DemoActor:EventGraph.K2Node_AsyncAction_42'"
   ProxyFactoryFunctionName="RequestPermission"
   ProxyFactoryClass="/Script/CoreUObject.Class'/Script/FirebaseFeatures.RequestPermissionProxy'"
   ProxyClass="/Script/CoreUObject.Class'/Script/FirebaseFeatures.RequestPermissionProxy'"
   NodePosX=64
   NodePosY=-32000
   NodeGuid=C924732F4766297FC18E9CB99CA0E1AC
   CustomProperties Pin (PinId=A16E70974F91298B6A4DDD913E102B4F,PinName="execute",PinType.PinCategory="exec",PinType.PinSubCategory="",PinType.PinSubCategoryObject=None,PinType.PinSubCategoryMemberReference=(),PinType.PinValueType=(),PinType.ContainerType=None,PinType.bIsReference=False,PinType.bIsConst=False,PinType.bIsWeakPointer=False,PinType.bIsUObjectWrapper=False,PinType.bSerializeAsSinglePrecisionFloat=False,PersistentGuid=00000000000000000000000000000000,bHidden=False,bNotConnectable=False,bDefaultValueIsReadOnly=False,bDefaultValueIsIgnored=False,bAdvancedView=False,bOrphanedPin=False,)
   CustomProperties Pin (PinId=9579CE01410D181B6F3745A18D5586AD,PinName="then",Direction="EGPD_Output",PinType.PinCategory="exec",PinType.PinSubCategory="",PinType.PinSubCategoryObject=None,PinType.PinSubCategoryMemberReference=(),PinType.PinValueType=(),PinType.ContainerType=None,PinType.bIsReference=False,PinType.bIsConst=False,PinType.bIsWeakPointer=False,PinType.bIsUObjectWrapper=False,PinType.bSerializeAsSinglePrecisionFloat=False,PersistentGuid=00000000000000000000000000000000,bHidden=False,bNotConnectable=False,bDefaultValueIsReadOnly=False,bDefaultValueIsIgnored=False,bAdvancedView=False,bOrphanedPin=False,)
   CustomProperties Pin (PinId=8C7C9626470DE1559E48B1B8EEC96EAF,PinName="OnRequestOver",PinFriendlyName=NSLOCTEXT("UObjectDisplayNames", "RequestPermissionProxy:OnRequestOver", "On Request Over"),PinToolTip="completes when the notification prompt has been\ndismissed.",Direction="EGPD_Output",PinType.PinCategory="exec",PinType.PinSubCategory="",PinType.PinSubCategoryObject=None,PinType.PinSubCategoryMemberReference=(),PinType.PinValueType=(),PinType.ContainerType=None,PinType.bIsReference=False,PinType.bIsConst=False,PinType.bIsWeakPointer=False,PinType.bIsUObjectWrapper=False,PinType.bSerializeAsSinglePrecisionFloat=False,PersistentGuid=00000000000000000000000000000000,bHidden=False,bNotConnectable=False,bDefaultValueIsReadOnly=False,bDefaultValueIsIgnored=False,bAdvancedView=False,bOrphanedPin=False,)
   CustomProperties Pin (PinId=293FC8FD44C5C6ADDD4A96AC62E995E8,PinName="OnError",PinFriendlyName=NSLOCTEXT("UObjectDisplayNames", "RequestPermissionProxy:OnError", "On Error"),Direction="EGPD_Output",PinType.PinCategory="exec",PinType.PinSubCategory="",PinType.PinSubCategoryObject=None,PinType.PinSubCategoryMemberReference=(),PinType.PinValueType=(),PinType.ContainerType=None,PinType.bIsReference=False,PinType.bIsConst=False,PinType.bIsWeakPointer=False,PinType.bIsUObjectWrapper=False,PinType.bSerializeAsSinglePrecisionFloat=False,PersistentGuid=00000000000000000000000000000000,bHidden=False,bNotConnectable=False,bDefaultValueIsReadOnly=False,bDefaultValueIsIgnored=False,bAdvancedView=False,bOrphanedPin=False,)
   CustomProperties Pin (PinId=C2C573CD4A1D22BD64C9D78F9DB25349,PinName="Error",PinToolTip="Error\nEFirebaseMessagingError Enum",Direction="EGPD_Output",PinType.PinCategory="byte",PinType.PinSubCategory="",PinType.PinSubCategoryObject="/Script/CoreUObject.Enum'/Script/FirebaseFeatures.EFirebaseMessagingError'",PinType.PinSubCategoryMemberReference=(),PinType.PinValueType=(),PinType.ContainerType=None,PinType.bIsReference=False,PinType.bIsConst=True,PinType.bIsWeakPointer=False,PinType.bIsUObjectWrapper=False,PinType.bSerializeAsSinglePrecisionFloat=False,PersistentGuid=00000000000000000000000000000000,bHidden=False,bNotConnectable=False,bDefaultValueIsReadOnly=False,bDefaultValueIsIgnored=False,bAdvancedView=False,bOrphanedPin=False,)
End Object
</textarea>
<img src="_images/RequestNotificationsPermission.png" alt="Code example for notification request permission in blueprints"/>
<button onclick="copyBlueprintCode(this)">Copy Code</button>
</div>
</div>
</div>


### Receive a message
To handle Messaging's module events, we have to call the `Listen for Messaging Events` node:

<div class="code-switcher show-cpp-false">
<div class="switcher" >
<span class="sw-bp" onclick="switchBp()">Blueprints</span><span class="sw-cpp" onclick="switchCpp()">C++</span>
</div>
<div class="cpp">

```cpp
#include "Messaging/MessagingLibrary.h"

// 1. Bind to the OnMessage delegate to handle incoming messages.
FFirebaseMessagingLibrary::OnMessage().AddLambda([](const FFirebaseMessage& Message)
{
    // Check if the message contains a notification.
    if (!Message.Notification.Title.IsEmpty())
    {
        UE_LOG(LogTemp, Log, TEXT("Notification Received! Title: %s, Body: %s"), 
            *Message.Notification.Title, *Message.Notification.Body);
    }

    // Access custom data sent with the message.
    for (const auto& Entry : Message.Data)
    {
        UE_LOG(LogTemp, Log, TEXT("Key: %s, Value: %s"), *Entry.Key, *Entry.Value);
    }

    // Check if the message was opened via the system tray.
    if (Message.bNotificationOpened)
    {
        UE_LOG(LogTemp, Log, TEXT("The user tapped the notification to open the app."));
    }
});

// 2. Bind to the OnTokenReceived delegate.
// You usually need this token to send messages to this specific device from your server.
FFirebaseMessagingLibrary::OnTokenReceived().AddLambda([](const FString& Token)
{
    UE_LOG(LogTemp, Log, TEXT("FCM Registration Token: %s"), *Token);
});
```

</div>
<div class="bp">
<div class="bpcode">
<textarea readonly>
Begin Object Class=/Script/BlueprintGraph.K2Node_Event Name="K2Node_Event_0"
   EventReference=(MemberParent=Class'"/Script/Engine.Actor"',MemberName="ReceiveBeginPlay")
   bOverrideFunction=True
   NodePosX=2864
   NodePosY=-8000
   NodeGuid=EDA9BCD24CAE469A81DBF3B3582B7D30
   CustomProperties Pin (PinId=F155888A4133BB95B824C1BCAC89DF05,PinName="OutputDelegate",Direction="EGPD_Output",PinType.PinCategory="delegate",PinType.PinSubCategory="",PinType.PinSubCategoryObject=None,PinType.PinSubCategoryMemberReference=(MemberParent=Class'"/Script/Engine.Actor"',MemberName="ReceiveBeginPlay"),PinType.PinValueType=(),PinType.ContainerType=None,PinType.bIsReference=False,PinType.bIsConst=False,PinType.bIsWeakPointer=False,PinType.bIsUObjectWrapper=False,PersistentGuid=00000000000000000000000000000000,bHidden=False,bNotConnectable=False,bDefaultValueIsReadOnly=False,bDefaultValueIsIgnored=False,bAdvancedView=False,bOrphanedPin=False,)
   CustomProperties Pin (PinId=0B1ED49045A150980B45CFB205ADE038,PinName="then",Direction="EGPD_Output",PinType.PinCategory="exec",PinType.PinSubCategory="",PinType.PinSubCategoryObject=None,PinType.PinSubCategoryMemberReference=(),PinType.PinValueType=(),PinType.ContainerType=None,PinType.bIsReference=False,PinType.bIsConst=False,PinType.bIsWeakPointer=False,PinType.bIsUObjectWrapper=False,LinkedTo=(K2Node_AsyncAction_111 62883AB54FCAE7D621A258ACA564A7C9,),PersistentGuid=00000000000000000000000000000000,bHidden=False,bNotConnectable=False,bDefaultValueIsReadOnly=False,bDefaultValueIsIgnored=False,bAdvancedView=False,bOrphanedPin=False,)
End Object
Begin Object Class=/Script/BlueprintGraph.K2Node_AsyncAction Name="K2Node_AsyncAction_111"
   ProxyFactoryFunctionName="ListenForMessagingEvents"
   ProxyFactoryClass=Class'"/Script/FirebaseFeatures.MessagingEventsProxy"'
   ProxyClass=Class'"/Script/FirebaseFeatures.MessagingEventsProxy"'
   NodePosX=3056
   NodePosY=-8000
   NodeGuid=EB70C45040D903D2D696C3A54CA6253D
   CustomProperties Pin (PinId=62883AB54FCAE7D621A258ACA564A7C9,PinName="execute",PinToolTip="\nExec",PinType.PinCategory="exec",PinType.PinSubCategory="",PinType.PinSubCategoryObject=None,PinType.PinSubCategoryMemberReference=(),PinType.PinValueType=(),PinType.ContainerType=None,PinType.bIsReference=False,PinType.bIsConst=False,PinType.bIsWeakPointer=False,PinType.bIsUObjectWrapper=False,LinkedTo=(K2Node_Event_0 0B1ED49045A150980B45CFB205ADE038,),PersistentGuid=00000000000000000000000000000000,bHidden=False,bNotConnectable=False,bDefaultValueIsReadOnly=False,bDefaultValueIsIgnored=False,bAdvancedView=False,bOrphanedPin=False,)
   CustomProperties Pin (PinId=F618A8F648EBCCFD68DF2ABD22CE368B,PinName="then",Direction="EGPD_Output",PinType.PinCategory="exec",PinType.PinSubCategory="",PinType.PinSubCategoryObject=None,PinType.PinSubCategoryMemberReference=(),PinType.PinValueType=(),PinType.ContainerType=None,PinType.bIsReference=False,PinType.bIsConst=False,PinType.bIsWeakPointer=False,PinType.bIsUObjectWrapper=False,PersistentGuid=00000000000000000000000000000000,bHidden=False,bNotConnectable=False,bDefaultValueIsReadOnly=False,bDefaultValueIsIgnored=False,bAdvancedView=False,bOrphanedPin=False,)
   CustomProperties Pin (PinId=111572E7493220F3FE894D92C95209A0,PinName="OnMessage",PinFriendlyName="On Message",PinToolTip="Called when a message has been received.",Direction="EGPD_Output",PinType.PinCategory="exec",PinType.PinSubCategory="",PinType.PinSubCategoryObject=None,PinType.PinSubCategoryMemberReference=(),PinType.PinValueType=(),PinType.ContainerType=None,PinType.bIsReference=False,PinType.bIsConst=False,PinType.bIsWeakPointer=False,PinType.bIsUObjectWrapper=False,PersistentGuid=00000000000000000000000000000000,bHidden=False,bNotConnectable=False,bDefaultValueIsReadOnly=False,bDefaultValueIsIgnored=False,bAdvancedView=False,bOrphanedPin=False,)
   CustomProperties Pin (PinId=4D21D1B14EF51E68EFD0A1964B13EAD8,PinName="OnTokenReceived",PinFriendlyName="On Token Received",PinToolTip="Called when the FCM token has been sent to this client.",Direction="EGPD_Output",PinType.PinCategory="exec",PinType.PinSubCategory="",PinType.PinSubCategoryObject=None,PinType.PinSubCategoryMemberReference=(),PinType.PinValueType=(),PinType.ContainerType=None,PinType.bIsReference=False,PinType.bIsConst=False,PinType.bIsWeakPointer=False,PinType.bIsUObjectWrapper=False,PersistentGuid=00000000000000000000000000000000,bHidden=False,bNotConnectable=False,bDefaultValueIsReadOnly=False,bDefaultValueIsIgnored=False,bAdvancedView=False,bOrphanedPin=False,)
   CustomProperties Pin (PinId=B1E0849544E8D43187562FBCAC57B9A9,PinName="Message",PinToolTip="Message",Direction="EGPD_Output",PinType.PinCategory="struct",PinType.PinSubCategory="",PinType.PinSubCategoryObject=ScriptStruct'"/Script/FirebaseFeatures.FirebaseMessage"',PinType.PinSubCategoryMemberReference=(),PinType.PinValueType=(),PinType.ContainerType=None,PinType.bIsReference=True,PinType.bIsConst=True,PinType.bIsWeakPointer=False,PinType.bIsUObjectWrapper=False,PersistentGuid=00000000000000000000000000000000,bHidden=False,bNotConnectable=False,bDefaultValueIsReadOnly=False,bDefaultValueIsIgnored=False,bAdvancedView=False,bOrphanedPin=False,)
   CustomProperties Pin (PinId=C9CBCD124B6C9340BEEBA79B5E9CB61D,PinName="Token",PinToolTip="Token",Direction="EGPD_Output",PinType.PinCategory="string",PinType.PinSubCategory="",PinType.PinSubCategoryObject=None,PinType.PinSubCategoryMemberReference=(),PinType.PinValueType=(),PinType.ContainerType=None,PinType.bIsReference=False,PinType.bIsConst=False,PinType.bIsWeakPointer=False,PinType.bIsUObjectWrapper=False,PersistentGuid=00000000000000000000000000000000,bHidden=False,bNotConnectable=False,bDefaultValueIsReadOnly=False,bDefaultValueIsIgnored=False,bAdvancedView=False,bOrphanedPin=False,)
End Object
</textarea>
<img src="_images/MessagingReceiveMessage.png"/>
<button onclick="copyBlueprintCode(this)">Copy Code</button>
</div>
</div>
</div>

After that, the execution pin `On Message` is going to fire each time a message is received.


<script>
setTimeout(() => {
	bShowCPP = !JSON.parse(getCookie('bShowCPP'));
	switchCode();
}, 0);
</script>