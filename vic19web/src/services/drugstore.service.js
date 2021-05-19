import {apiUrl} from '../config/config';
import axios from 'axios'
import Drugstore from '../models/Drugstore'
export const drugstoreService = {
    getDrugstores,
    editDrugstore,
    addDrugstore,
    deleteDrugstore
};
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function getDrugstores(n,i,search) {
    var complement="";
    if(search==null||search==""||search==undefined)
    complement=`n=${n}&i=${i}`
    else
    complement=`n=${n}&i=${i}&search=${search}`
    await sleep(2000);
    return axios({
        url: `${apiUrl}drugstore/allInfo?`+complement, 
        method: "GET",
        headers: { "Content-Type": 'application/json' },
        
      })
        .then(data => {
            if(data.status==200){
                var drugstores=[];
                for(var d of data.data.drugstores){               
                    var drugstore=new Drugstore().fromJson(d);
                    drugstores.push(drugstore);
                }

                return {drugstores:drugstores,total:data.data.total};
            }
            else{
                throw "error";
            }
        }).catch(()=>{
            throw "error";});
}
async function editDrugstore(drugstore) {
    await sleep(2000);
    return axios({
        url: `${apiUrl}drugstore/updateDrugstore`,
        method: "PUT",
        data:drugstore.toJson(),
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
async function addDrugstore(drugstore) {
    await sleep(2000);
    return axios({
        url: `${apiUrl}drugstore`,
        method: "POST",
        data:drugstore.toJson(),
        headers: { "Content-Type": 'application/json' },
        
      })
        .then(data => {
            if(data.status==200){
                return data.data.idDrugstore;
            }
            else{
                return null;
            }
        }).catch(()=>{return null});
}
async function deleteDrugstore(drugstore) {
    var complement = "";
    complement= `drugstoreId=${drugstore.idDrugstore}`
    console.log(drugstore.toJson())
    await sleep(2000);
    return axios({
        url: `${apiUrl}drugstore/deleteDrugstore?`+complement,
        method: "DELETE",
        data:drugstore.toJson(),
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