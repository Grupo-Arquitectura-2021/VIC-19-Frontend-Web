export default class Account
{
    idHospital;
    nameCity;
    name;
    lon;
    lat;
    constructor(idHospital,nameCity,name,lon,lat){
        this.idHospital=idHospital;
        this.nameCity=nameCity;
        this.name=name;
        this.lon=lon;
        this.lat=lat;
    }
    toJson(){
        return JSON.stringify(this);
    }
    fromJson(json){
        this.idHospital=json.idHospital;
        this.nameCity=json.nameCity;
        this.name=json.name;
        this.lon=json.lon;
        this.lat=json.lat;
        return this;
    }

    

}
