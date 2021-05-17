export default class Account
{
    id;
    name;
    lastName;
    email;
    constructor(id,name,lastname,email){
        this.id=id;
        this.name=name;
        this.lastName=lastname;
        this.email=email;
    }
    toJson(){
        return JSON.stringify(this);
    }
    fromJson(json){
        this.id=json.id;
        this.name=json.name;
        this.lastName=json.lastName;
        this.email=json.email;
    }

    

}
