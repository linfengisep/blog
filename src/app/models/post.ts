export class Post{
    created_at:Date;
    loveIts:number;
    constructor(public id:number,
                public title:string,
                public content:string){
        this.created_at = new Date();
        this.loveIts=0;
    }
}
