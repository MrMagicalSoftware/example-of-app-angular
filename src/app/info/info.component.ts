import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input("nome") nome: string;
  @Input("cognome") cognome: string;
  @Input("listaCibi") listaCibi: string[]

  constructor() {
    this.nome = "";
    this.cognome = "";
    this.listaCibi = [];
  }

  ngOnInit(): void {
  }

}
