# Realtime Database
The Firebase Realtime Database stores and synchronizes data using a NoSQL cloud database. Data is synchronized across all clients in realtime, and remains available when your app goes offline.

## Save data
For basic write operations, you can use the `Set Value` node to save data to a specified reference, replacing any existing data at that path:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/DatabaseSetValue.png?raw=true)

## Retrieve data

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/DatabaseGetValue.png?raw=true)

## Watch data
Realtime Database allows you to react to Database change in realtime. To do so, you just have to setup the listeners and bind the `OnValueChanged` delegate:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/DatabaseWatchValue.png?raw=true)

There are other events you can listen for as well:

|Event Name|Details|
|:---|:---|
|`OnChildAdded`| Called when a child has been added to the reference watched.|
|`OnChildChanged`| Called when a child of the reference we watch has been modified.|
|`OnChildMoved`| Called when a child of the reference we watch has been moved.|
|`OnChildRemoved`| Called when a child of the reference we watch has been removed.|
|`OnCancelled`| Called when the watch has been cancelled.|
|`OnValueChanged`| Called when the value watched has changed.|

## Setup Disconnection Handler
Operations can be setup on the Database when a user disconnects.

![](https://github.com/Pandoa/FirebaseFeatures/blob/gh-pages/docs/_images/DatabaseDisconnectionHandler.png?raw=true)

The following operations are available:
1. Remove Value
2. Set Value
3. Set Value and Priority
4. Update Children