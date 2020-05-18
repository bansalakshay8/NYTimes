# NYTimes

This repository contains codebase for "NY Times Most Popular Articles".


###### Functonalities have been implemented in this app:-
- user registration and login has been implemented after integration
with local server using this repo -> https://github.com/techiediaries/fake-api-jwt-jsonserver
- The token fetched from login call, is being passed through all NY Times requests in Authorization JWT Bearer token header.
- A middleware has been implemented to send the token.
- User can either select to see categorized top news(World or Science) or search for articles. Three tabs(World,Science,Search News) has been created for same.
- On click of "World" and "Science" tab , top news of each category is automatically loaded.
- When user clicks on any of the article in the World or Science tab, news detail is shown and where news title,detail,image related to the news ,link to original article and comments for that article are shown.
- In Search tab, we have search bar and on entering the text , live search is implemented to search the news corresponding to entered text.
- Last 5 searches are shown below the search bar and user can click on any of the search history item to search it again.
- Pagination has been implemented in search results screen to fetch more results while scrolling down.
- When user clicks on any of the article in the search result, news detail is shown and where news title,detail, link to original article and comments for that article are shown.
- Spinner has also been implemented whenever we are making a network call.


## Steps to run:

Before going forward, I am making few assumptions like you have installed android sdk, npm ,git and also have avd installed etc. on your local system.

- As this app uses local JWT authentication, first we need to setup local auth server from https://github.com/techiediaries/fake-api-jwt-json-server and start the server as mentioned in the project.
Clone the repository on your local system and run `npm install` and `npm run start-auth`  to start the local server.

But there is two issues with this local JWT authentication.
  1. Registration URL : http://{LOCAL IP}:8000/auth/register is working fine but login URL http://{LOCAL IP}:8000/auth/login is working only for some specific data.
So I have used following object for login in the backend:
{
  "email": "nilson@email.com",
  "password":"nilson"
}

  2. I am able to register/login on local JWT server using debug apk but release apk is unable to ping that URL.

- Now clone this repository on local using

`git clone https://github.com/bansalakshay8/NYTimes`

- Goto project folder in command prompt and run `npm install` and `npm cache clean --force`
- Also run `cd android & gradlew clean`
- Now go to main project folder and run `react-native run-android` to run the android app on your configured avd in debug mode.


## Libararies/Modules used

- axios : for making http calls
- react-navigation v4 : for navigation
- react-native-elements : for material UI
- react-native-vector-icons : for icons
- redux : for data persistence in the form of global state
- redux-saga : for asychronous handling in redux
