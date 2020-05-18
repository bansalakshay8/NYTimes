# NYTimes

This repository contains codebase for "NY Times Most Popular Articles".

Steps to run:

Before going forward, I am making few assumptions like you have installed android sdk, npm ,git and also have avd installed etc. on your local system.

- As this app uses local JWT authentication, first we need to setup local auth server from https://github.com/techiediaries/fake-api-jwt-json-server and start the server as mentioned in the project.
Clone the repository on your local system and run "npm install" and "npm run start-auth"  to start the local server.

But there is two issues with this local JWT authentication.
1. Registration URL : http://{LOCAL IP}:8000/auth/register is working fine but login URL http://{LOCAL IP}:8000/auth/login is working only for some specific data.
So I have used following object for login in the backend:
{
  "email": "nilson@email.com",
  "password":"nilson"
}

2. I am able to register/login on local JWT server using debug apk but release apk is unable to ping that URL.

- Now clone this repository on local using

"git clone https://github.com/bansalakshay8/NYTimes"

- Goto project folder in command prompt and run "npm install" and "npm cache clean --force"
- Also run "cd android & gradlew clean"
- Now go to main project folder and run "react-native run-android" to run the android app on your configured avd in debug mode.
