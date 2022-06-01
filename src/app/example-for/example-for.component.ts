import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-for',
  templateUrl: './example-for.component.html',
  styleUrls: ['./example-for.component.scss']
})
export class ExampleForComponent implements OnInit {


  @Input("listaDiNumeri") listaDiNumeri: number[];

  constructor() {
    this.listaDiNumeri = []
    //this.fillNumerberInotList();
  }

  moltiplicaPerDue() {
    const vett = this.listaDiNumeri.map(item => {
      return item * 2
    })
    return vett;
  }

  /*
  fillNumerberInotList() {
    this.listaDiNumeri.push(1);
    this.listaDiNumeri.push(2);
  }
  */


  ngOnInit(): void {
  }

}
