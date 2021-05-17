export default class Shelter
{
    idShelter;
    idCity;
    nameCity;
    name;
    lon;
    lat;
    constructor(idShelter,idCity,name,lon,lat,nameCity){
        this.idShelter=idShelter;
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
        this.idShelter=json.idShelter;
        this.idCity=json.idCity;
        this.name=json.name;
        this.lon=json.lon;
        this.lat=json.lat;
        return this;
    }

    

}
