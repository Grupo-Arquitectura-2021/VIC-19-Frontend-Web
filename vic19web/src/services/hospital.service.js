import {apiUrl} from '../config/config';
import axios from 'axios'
import Hospital from '../models/Hospital'
export const hospitalService = {
    getHospitals
};
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function getHospitals(n,i,search) {
    var complement="";
    if(search==null||search==""||search==undefined)
    complement=`n=${n}&i=${i}`
    else
    complement=`n=${n}&i=${i}&search=${search}`
    await sleep(2000);
    return axios({
        url: `${apiUrl}hospital/allInfo?`+complement, 
        method: "GET",
        headers: { "Content-Type": 'application/json' },
        
      })
        .then(data => {
            if(data.status==200){
                var hospitals=[];
                for(var h of data.data.hospitals){               
                    var hospital=new Hospital().fromJson(h);
                    hospitals.push(hospital);
                }

                return {hospitals:hospitals,total:data.data.total};
            }
            else{
                return null;
            }
        }).catch(()=>{return null});
}