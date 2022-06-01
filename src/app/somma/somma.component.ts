import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-somma',
  templateUrl: './somma.component.html',
  styleUrls: ['./somma.component.scss']
})
export class SommaComponent implements OnInit {

  @Input("numero1") numero1: number;
  @Input("numero2") numero2: number;


  constructor() {
    this.numero1 = 0;
    this.numero2 = 0;
  }



  ngOnInit(): void {
  }

}
