import axios from "axios";
export async function makeRegisterCall(params) {
  return await   axios({
    method: 'post',
    url: 'http://192.168.43.244:8000/auth/register',
    data: params
    })
  .then((response) => {
    return response.data
  })
  .catch(function (error) {
    return error;
  });
}
