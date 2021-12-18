# Auth
You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login.

## Sign Up new Users
To sign up new users, you need to create a form that allows new users to register with your app using their email address and a password. When a user completes the form, validate the email address and password provided by the user, then pass them to the `Create User with Email and Password`:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/AuthCreateUser.png?raw=true)

## Sign In

Firebase offers several methods to sign in:

![](https://github.com/Pandoa/FirebaseFeatures/blob/main/Images/AuthSignIn.png?raw=true)

## Going Further
The Firebase C++ SDK offers a lot of methods in the `Auth` module. We've converted all of them to Unreal Engine with Blueprint support. However, this documentation won't list all of them and their use. To see and learn how to use them, have a look at [the Official Firebase C++ SDK Documentation](https://firebase.google.com/docs/auth/cpp/start). We have kept the same name for each methods. Futures are replaced with execution pins on asynchronous nodes to keep it easy to use.
