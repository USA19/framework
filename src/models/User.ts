import {Model} from './Model';
import {Eventing} from './Eventing';
import {Sync} from './Sync';
import {Attributes} from './Attributes';
import {Collection} from './Collection';
// import {AxiosResponse} from 'axios';
export interface UserProps{
    id?:number;
    name?:string;
    age?:number;
}
const rootUrl='http://localhost:3000/users'

export class User extends Model<UserProps>{
    
    // public events:Eventing=new Eventing();
    // public sync:Sync<UserProps>=new Sync<UserProps>(rootUrl);
    // public attributes:Attributes<UserProps>;

    // constructor(attr:UserProps){
    //     this.attributes=new Attributes<UserProps>(attr);
    // }
    static buildUser(attr:UserProps):User{
       return new User(
            new Attributes<UserProps>(attr),
            new Sync<UserProps>(rootUrl),
            new Eventing()
        )
    }   

    static buildUserCollection():Collection<User,UserProps>{
        return new Collection <User,UserProps>(rootUrl,(json:UserProps):User=>{
            return User.buildUser(json);
        })
    }

    setRandomAge=():void=>{
        const age=Math.round(Math.random()*100);
        this.set({age});
    }

}