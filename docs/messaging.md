## Cloud Messaging
Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost.

Using FCM, you can notify a client app that new email or other data is available to sync. You can send notification messages to drive user re-engagement and retention. For use cases such as instant messaging, a message can transfer a payload of up to 4KB to a client app.
### Receive a message
To handle Messaging's module events, we have to call the `Listen for Messaging Events` node:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/MessagingReceiveMessage.png?raw=true)

After that, the execution pin `On Message` is going to fire each time a message is received.