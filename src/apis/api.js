import axios from "axios";
export async function makeRegisterCall(params) {
  return await axios({
    method: "post",
    url: "http://192.168.43.244:8000/auth/register",
    data: params,
  })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

export async function makeLoginCall(params) {
  return await axios({
    method: "post",
    url: "http://192.168.43.244:8000/auth/login",
    data: params,
  })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

export async function makeSearchCall(params) {
  let NYURL = `https://api.nytimes.com/svc/topstories/v2/${params.searchText}.json?api-key=ieafWZelkDeAP0YI9UbeNFTFFyvdfeBn`;

  console.log("URL is:" + NYURL);
  // if (params.searchText == "world") {
  //   NYURL =
  //     "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=ieafWZelkDeAP0YI9UbeNFTFFyvdfeBn";
  // }
  return await axios({
    method: "get",
    url: NYURL,
  })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

export async function makeCustomSearch(payloadObj) {
  let queryString = payloadObj.searchTerm.trim().split(" ").join("+");
  let NYURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${queryString}&page=${payloadObj.index}&sort=newest&api-key=ieafWZelkDeAP0YI9UbeNFTFFyvdfeBn`;

  console.log("make custom search URL is:" + NYURL);
  // if (params.searchText == "world") {
  //   NYURL =
  //     "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=ieafWZelkDeAP0YI9UbeNFTFFyvdfeBn";
  // }
  return await axios({
    method: "get",
    url: NYURL,
  })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

export async function fetchCommentCall(payloadObj) {
  // let NYURL = `https://api.nytimes.com/svc/community/v3/user-content/url.json?url=https://www.nytimes.com/2020/05/14/world/europe/coronavirus-russia-doctors-hospitals.html&sort=newest&api-key=ieafWZelkDeAP0YI9UbeNFTFFyvdfeBn&offset=0&sort="newest"`;
  let NYURL = `https://api.nytimes.com/svc/community/v3/user-content/url.json?url=${payloadObj.newsURL}&api-key=ieafWZelkDeAP0YI9UbeNFTFFyvdfeBn&offset=0&sort="newest"`;
  console.log("make comment search URL is:" + NYURL);
  // console.log('custom URL is'+`https://api.nytimes.com/svc/community/v3/user-content/url.json?url=${payloadObj.newsURL}&api-key=ieafWZelkDeAP0YI9UbeNFTFFyvdfeBn&offset=0&sort="newest"`)
  return await axios({
    method: "get",
    url: NYURL,
  })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}
