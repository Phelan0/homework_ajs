import { Component } from "@angular/core";
@Component({
    selector: 'rome',
    templateUrl: "./rome.component.html",
    styleUrls: ['./rome.component.css']
})
export class romeComponent{
    rome:any = [
        {
            ava: "https://i.pinimg.com/originals/c5/47/2f/c5472ff2d4b7fb7812a617c1a18d0efe.png",
            name: "Captain",
            lv: "Team Lead"
        },
        {
            ava: "https://i.pinimg.com/originals/9e/ba/8b/9eba8b8d7f6e82eb3001f400b32de239.png",
            name: "Black Window",
            lv: "Developer"
        }, 
        {
            ava: "https://i.pinimg.com/originals/02/bd/e4/02bde42cd5ad999e1381ed93f77a3c0b.png",
            name: "Hawkeye",
            lv: "Developer"
        } 
    ]
}