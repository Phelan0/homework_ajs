import { Component } from "@angular/core";
@Component({
    selector: 'paris',
    templateUrl: "./paris.component.html",
    styleUrls: ['./paris.component.css']
})
export class parisComponent{
    paris:any = [
        {
            ava: "https://i.pinimg.com/originals/84/a4/80/84a4804f44ebcafc2467ee1d005c68e2.png",
            name: "Vision",
            lv: "Team Lead"
        },
        {
            ava: "https://i.pinimg.com/originals/25/ca/5b/25ca5b7e283334932e285564f274de07.png",
            name: "Ultron1",
            lv: "Developer"
        }, 
        {
            ava: "https://i.pinimg.com/originals/f2/3b/d2/f23bd2bd0fd82ba2c975fde3d49c2003.png",
            name: "Ultron2",
            lv: "Developer"
        }
    ]
}