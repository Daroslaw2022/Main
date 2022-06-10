import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  config: {[key:string]:string} | null=null;

  constructor() {
    setTimeout( () => {
      this.config ={
        footer: "@ Darosław",
        date: new Date().toDateString()
      };
    }, 1000);
   }

  ngOnInit(): void {
  }

}
