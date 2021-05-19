export default class News
{
    idNews;
    title;
    content;
    dateNews;
    urlImage;
    source;
    dateNewsView;
    constructor(idNews,title,content,dateNews,urlImage,source,dateNewsView){
        this.idNews=idNews;
        this.title=title;
        this.content=content;
        this.dateNews=dateNews;
        this.urlImage=urlImage;
        this.source=source;
        this.dateNewsView=dateNewsView;
    }
    toJson(){
        return JSON.stringify(this);
    }
    fromJson(json){
        this.idNews=json.idNews;
        this.title=json.title;
        this.content=json.content;
        this.dateNews=json.dateNews;
        this.urlImage=json.urlImage;
        this.source=json.source;
        return this;
    }

    

}
