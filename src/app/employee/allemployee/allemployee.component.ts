import { Component } from "@angular/core";
@Component({
    selector: 'allemployee',
    templateUrl: "./allemployee.component.html",
    styleUrls: ["./allemployee.component.css"]
})
export class allemployeeComponent{
    emp: any = [
        {
            ava: "https://i.pinimg.com/originals/84/a4/80/84a4804f44ebcafc2467ee1d005c68e2.png",
            name: "Vision",
            lv: "Team Lead",
            birth: "01/01/0001",
            city: "paris",
            phone: 1111111111
        },
        {
            ava: "https://i.pinimg.com/originals/25/ca/5b/25ca5b7e283334932e285564f274de07.png",
            name: "Ultron1",
            lv: "Developer",
            birth: "02/02/0002",
            city: "paris",
            phone: 2222222222
        }, 
        {
            ava: "https://i.pinimg.com/originals/f2/3b/d2/f23bd2bd0fd82ba2c975fde3d49c2003.png",
            name: "Ultron2",
            lv: "Developer",
            birth: "03/03/0003",
            city: "paris",
            phone: 3333333333
        },
        {
            ava: "https://i.pinimg.com/originals/c7/b8/39/c7b839f75367f4774aba9352cf8088af.png",
            name: "IronMan",
            lv: "Team Lead",
            birth: "04/04/0004",
            city: "london",
            phone: 4444444444
        },
        {
            ava: "https://i.pinimg.com/originals/8c/ef/33/8cef33be1e3d51157c149139ec0a3a82.png",
            name: "Thor",
            lv: "Developer",
            birth: "05/05/0005",
            city: "london",
            phone: 5555555555
        }, 
        {
            ava: "https://i.pinimg.com/originals/fe/2a/94/fe2a94795c29b1b1d07572386b269110.png",
            name: "Hulk",
            lv: "Developer",
            birth: "06/06/0006",
            city: "london",
            phone: 6666666666
        },
        {
            ava: "https://i.pinimg.com/originals/c5/47/2f/c5472ff2d4b7fb7812a617c1a18d0efe.png",
            name: "Captain",
            lv: "Team Lead",
            birth: "07/07/0007",
            city: "rome",
            phone: 777777777
        },
        {
            ava: "https://i.pinimg.com/originals/9e/ba/8b/9eba8b8d7f6e82eb3001f400b32de239.png",
            name: "Black Window",
            lv: "Developer",
            birth: "08/08/0008",
            city: "rome",
            phone: 8888888888
        }, 
        {
            ava: "https://i.pinimg.com/originals/02/bd/e4/02bde42cd5ad999e1381ed93f77a3c0b.png",
            name: "Hawkeye",
            lv: "Developer",
            birth: "09/09/0009",
            city: "rome",
            phone: 9999999999
        }
    ]

    selectedEmp: any;

  showDetails(employee: any) {
    this.selectedEmp = employee;
  }
}