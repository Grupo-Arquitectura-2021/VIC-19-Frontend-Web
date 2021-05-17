export default class LoginRequest
{
    email;
    password;
    token;
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    toJson(){
        return JSON.stringify(this);
    }
    fromJson(json){
        this.email=json.email;
        this.password=json.password;
        this.token=json.token;
    }

    

}

