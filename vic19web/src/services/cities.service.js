import {apiUrl} from '../config/config';
import axios from 'axios'
import City from '../models/City'
export const citiesService = {
    getCities
};
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function getCities() {
    await sleep(2000);
    return axios({
        url: `${apiUrl}city`, 
        method: "GET",
        headers: { "Content-Type": 'application/json' },
        
      })
        .then(data => {
            if(data.status==200){
                var cities=[];
                for(var c of data.data){               
                    var city=new City().fromJson(c);
                    cities.push(city);
                }

                return cities;
            }
            else{
                throw "error";
            }
        }).catch(()=>{
            throw "error";});
}