import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit, OnDestroy {

  @Input("listaPosti") listaPosti: boolean[];



  constructor() {
    this.listaPosti = [];

  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

  /**
   * 
   *  [ true , false , true , false]  ==>
   *  
   *  [ libero , occupato , libero , occupato]
   * 
   *  */
  stampaSituazionePosti() {

    const vettString: string[] = []

    this.listaPosti.forEach(item => {
      if (item)
        vettString.push("Libero");
      else
        vettString.push("Occupato");
    })

    return vettString;
  }


  contaPostiOccupati() {
    return this.listaPosti.length - this.contaPostiLiberi();
  }

  contaPostiLiberi() {
    let conta = 0;

    this.listaPosti.forEach(item => {
      if (item)
        conta++;
    })

    return conta;
    /*
    for (let i = 0; i < this.listaPosti.length; i++) {
      if (this.listaPosti[i] )
        conta++
    }
    */
  }
  ngOnInit(): void {
  }

}
