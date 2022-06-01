import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  //title: string = "Esempio di un titolo"
  @Input("titoloArgomento") title: string = ""
  @Input("password") password: string = ""

  ngOnInit(): void {
  }

  myLengthPassword(parola: string) {
    return parola.length;
  }


}
