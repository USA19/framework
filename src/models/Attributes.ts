export class Attributes<T>{

    constructor(private data:T){}

    get=<K extends keyof T>(key:K):T[K]=>{
        return this.data[key];
    }

    set=(updatedUserProp:T):void=>{
        // over-write all the properties of data 
        Object.assign(this.data,updatedUserProp);
    }

    getAll=():T=>{
        return this.data;
    }
}