import axios from "axios";
export async function makeRegisterCall(params) {
  console.log("in register api");
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
  console.log("in login api");
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
