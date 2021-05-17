import {apiUrl} from '../config/config';
import axios from 'axios'
export const accountService = {
    login
};
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function login(loginRequest) {
    await sleep(2000);
    return axios({
        url: `${apiUrl}oauth/token`, 
        params:loginRequest.toJson(),
        method: "POST",
        headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' ,"Authorization":'Basic Y292aWQxOXByb3llY3Q6Y292aWQxOXByb3llY3QxMjM0NQ=='},
        
      })
        .then(data => {
            console.log(data);
            if(data.status==200){
                localStorage.setItem("token",data.data.access_token)
                localStorage.setItem("token_refresh",data.data.refresh_token)
                return true;
            }
            else{
                throw "error";
            }
        }).catch((error)=>{
            console.log(error);
            throw error;});
}