import { TodoItem } from "./todoitem";

export class Model{
    name:string;
    items:TodoItem[];
    person:string | undefined;

    constructor(){
        this.name="Daily";
        this.person="Reşit";
        this.items=[
            {description:"Kahvaltı", action:true,immediate:true},
            {description:"Spor", action:true,immediate:true},
            {description:"Alışveriş", action:false,immediate:true},
            {description:"Ders", action:true,immediate:true}
        ]
    }
}
