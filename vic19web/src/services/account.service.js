import {apiUrl} from '../config/config';
import axios from 'axios'
import User from '../models/User'
export const accountService = {
    login
};
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function login(loginRequest) {
    console.log(loginRequest.toJson());
    
    await sleep(2000);
    return axios({
        url: `${apiUrl}user/login`, 
        data: loginRequest.toJson(),
        method: "POST",
        headers: { "Content-Type": 'application/json' },
        
      })
        .then(data => {
            if(data.status==200){
                var user=new User().fromJson(data.data);
                return user;
            }
            else{
                return null;
            }
        }).catch(()=>{return null});
}