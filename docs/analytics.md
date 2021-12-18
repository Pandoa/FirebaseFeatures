# Analytics

Google Analytics collects usage and behavior data for your app.


### Before Starting
Firebase Features uses Unreal Engine's analytic system. To use this system as the default system for your project, you have to edit your project's configuration. 
Open `<YourGame>/Config/DefaultEngine.ini` and add the following lines:
```ini
[Analytics]
ProviderModuleName=FirebaseFeatures
```
### Managing the Analytic Session
You can now start an Analytic Session with the following node:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/StartAnalyticSession.png?raw=true)

And if you want to end the session, you can call `End Session` at any time:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/EndAnalyticSession.png?raw=true)

### Logging Events
Now that the analytic session has started, you can start logging events. Firebase Features offers several methods to easily log different kinds of events:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/AnalyticLogFunctions.png?raw=true)

### Going Further
Firebase Features offers other methods to manage analytics. You can safely call them after you started the session.

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/AnalyticsFunctions.png?raw=true)

