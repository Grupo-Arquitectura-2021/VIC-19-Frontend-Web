import {apiUrl} from '../config/config';
import axios from 'axios'
import News from '../models/News'
export const newsService = {
    getNews,
    //editNews,
    //addNews,
    deleteNews
};
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function getNews(n,i,search) {
    var complement="";
    if(search==null||search==""||search==undefined)
    complement=`n=${n}&i=${i}`
    else
    complement=`n=${n}&i=${i}&search=${search}`
    await sleep(2000);
    return axios({
        url: `${apiUrl}news?`+complement, 
        method: "GET",
        headers: { "Content-Type": 'application/json' },
        
      })
        .then(data => {
            if(data.status==200){
                var newsList=[];
                for(var h of data.data.newsList){               
                    var news=new News().fromJson(h);
                    newsList.push(news);
                }

                return {newsList:newsList,total:data.data.total};
            }
            else{
                throw "error";
            }
        }).catch(()=>{
            throw "error";});
}
async function deleteNews(news) {
    console.log(news.toJson())
    await sleep(2000);
    return axios({
        url: `${apiUrl}news/deleteNews`,
        method: "PUT",
        data:news.toJson(),
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