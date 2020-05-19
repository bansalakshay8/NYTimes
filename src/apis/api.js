/*This file contains api calls to local server and NYT server using axios
*/
import axios from "axios";

//IP where local JWT server is configured
const LOCAL_IP="192.168.43.244";

//JWT auth token to be sent in every network call 
let currentAuthToken = null;
export function setToken(token) {
  currentAuthToken = token;
}
export function getToken() {
  return currentAuthToken;
}

//api call for user registration
export async function makeRegisterCall(params) {
  return await axios({
    method: "post",
    url: `http://${LOCAL_IP}:8000/auth/register`,
    data: params,
  })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

//api call for user login
export async function makeLoginCall(params) {
  return await axios({
    method: "post",
    url: `http://${LOCAL_IP}:8000/auth/login`,
    data: {
      email: "nilson@email.com",
      password: "nilson",
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

//api call for fetching news in Science/World tab
export async function makeSearchCall(params) {
  let NYURL = `https://api.nytimes.com/svc/topstories/v2/${params.searchText}.json?api-key=ieafWZelkDeAP0YI9UbeNFTFFyvdfeBn`;

  console.log("URL is:" + NYURL);
  console.log("currentAuthToken is " + currentAuthToken);
  return await axios
    .get(NYURL, { headers: { Authorization: `Bearer ${currentAuthToken}` } })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

//api call to make search in search tab
export async function makeCustomSearch(payloadObj) {
  let queryString = payloadObj.searchTerm.trim().split(" ").join("+");
  let NYURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${queryString}&page=${payloadObj.index}&sort=newest&api-key=ieafWZelkDeAP0YI9UbeNFTFFyvdfeBn`;

  console.log("make custom search URL is:" + NYURL);
  return await axios
    .get(NYURL, { headers: { Authorization: `Bearer ${currentAuthToken}` } })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

//api call to fetch comments corresponding to particular news item
export async function fetchCommentCall(payloadObj) {
  // let NYURL = `https://api.nytimes.com/svc/community/v3/user-content/url.json?url=https://www.nytimes.com/2020/05/14/world/europe/coronavirus-russia-doctors-hospitals.html&sort=newest&api-key=ieafWZelkDeAP0YI9UbeNFTFFyvdfeBn&offset=0&sort="newest"`;
  let NYURL = `https://api.nytimes.com/svc/community/v3/user-content/url.json?url=${payloadObj.newsURL}&api-key=ieafWZelkDeAP0YI9UbeNFTFFyvdfeBn&offset=0&sort="newest"`;
  console.log("make comment search URL is:" + NYURL);
  return await axios
    .get(NYURL, { headers: { Authorization: `Bearer ${currentAuthToken}` } })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

//api call to fetch new token , if token is expired before making any call to NYTimes API 
export async function makeRefreshTokenCall() {
  return await axios({
    method: "post",
    url: `http://${LOCAL_IP}:8000/auth/login`,
    data: {
      email: "nilson@email.com",
      password: "nilson",
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}
