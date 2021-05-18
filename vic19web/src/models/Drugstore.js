export default class Drugstore
{
    idDrugtore;
    idCity;
    nameCity;
    name;
    lon;
    lat;

    constructor(idDrugtore,idCity,name,lon,lat,nameCity){
        this.idDrugtore=idDrugtore;
        this.idCity=idCity;
        this.name=name;
        this.lon=lon;
        this.lat=lat;
        this.nameCity=nameCity;
    }

    toJson(){
        return JSON.stringify(this);
    }
    
    fromJson(json){
        this.idDrugtore=json.idDrugtore;
        this.idCity=json.idCity;
        this.name=json.name;
        this.lon=json.lon;
        this.lat=json.lat;
        return this;
    }
}