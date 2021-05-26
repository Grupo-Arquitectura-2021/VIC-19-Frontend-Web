import {apiUrl} from '../config/config';
import axios from 'axios'
import Account from '../models/Account'
export const accountService = {
    login,
    addAccount,
    editAccount,
    deleteAccount,
    getAccounts
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
async function getAccounts(n,i,search) {
    var complement="";
    if(search==null||search==""||search==undefined)
    complement=`n=${n}&i=${i}`
    else
    complement=`n=${n}&i=${i}&search=${search}`
    await sleep(2000);
    return axios({
        url: `${apiUrl}user?`+complement, 
        method: "GET",
        headers: { "Content-Type": 'application/json' },
        
      })
        .then(data => {
            if(data.status==200){
                var accounts=[];
                console.log(data);
                for(var h of data.data.users){               
                    var account=new Account().fromJson(h);
                    accounts.push(account);
                }
                console.log(accounts);

                return {accounts:accounts,total:data.data.total};
            }
            else{
                throw "error";
            }
        }).catch(()=>{
            throw "error";});
}
async function editAccount(account) {
    console.log("editanto");
    await sleep(2000);
    return axios({
        url: `${apiUrl}user`,
        method: "PUT",
        data:account.toJson(),
        headers: { "Content-Type": 'application/json' },
        
      })
        .then(data => {
            console.log(data);
            if(data.status==200){
                return true;
            }
            else{
                throw "error";
            }
        }).catch((e)=>{
            console.log(e);
            throw "error";});
}
async function addAccount(account) {
    await sleep(2000);
    return axios({
        url: `${apiUrl}user`,
        method: "POST",
        data:account.toJson(),
        headers: { "Content-Type": 'application/json' },
        
      })
        .then(data => {
            if(data.status==200){
                return data.data.idUser;
            }
            else{
                return null;
            }
        }).catch(()=>{return null});
}
async function deleteAccount(account) {
    console.log(account.toJson())
    await sleep(2000);
    return axios({
        url: `${apiUrl}user`,
        method: "DELETE"
        ,params:{
            userId:account.idUser
        },
        headers: { "Content-Type": 'application/json' },
        
      })
        .then(data => {
            if(data.status==200){
                return true;
            }
            else{
                return null;
            }
        }).catch(()=>{return null});
}