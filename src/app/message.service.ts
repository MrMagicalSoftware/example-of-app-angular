import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  myMessage : string ;



  constructor() {
    this.myMessage = "*********** Ciao a tutti da questo Service *********";
  }

  salutamiService(){
    return "CIAO A TUTTI DALLA FUNZIONE SALUTAMI DI MESSAGE SERVICE";
  }



  

}
