import {apiUrl} from '../config/config';
import axios from 'axios'
import Hospital from '../models/Hospital'
export const hospitalService = {
    getHospitals
};
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function getHospitals(n,i) {
    
    await sleep(2000);
    return axios({
        url: `${apiUrl}hospital/allInfo?n=${n}&i=${i}`, 
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