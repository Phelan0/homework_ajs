import { Component } from "@angular/core";
@Component({
    selector: 'london',
    templateUrl: "./london.component.html",
    styleUrls: ['./london.component.css']
})
export class londonComponent{
    london:any = [
        {
            ava: "https://i.pinimg.com/originals/c7/b8/39/c7b839f75367f4774aba9352cf8088af.png",
            name: "IronMan",
            lv: "Team Lead"
        },
        {
            ava: "https://i.pinimg.com/originals/8c/ef/33/8cef33be1e3d51157c149139ec0a3a82.png",
            name: "Thor",
            lv: "Developer"
        }, 
        {
            ava: "https://i.pinimg.com/originals/fe/2a/94/fe2a94795c29b1b1d07572386b269110.png",
            name: "Hulk",
            lv: "Developer"
        }
    ]
}