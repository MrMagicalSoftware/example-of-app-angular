import { Component } from '@angular/core';

import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titleFromParent: string = 'Passaggio di valori dal padre al figlio';

  passwordDatabase: string = "ciao"

  listaDatiPadre = ["pasta", "pane", "cipolla"]

  myName: string = "rob";

  object: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
  myValue: number;

  constructor(public messageService : MessageService) {
    this.myValue = 80;
  }

  getValueFromMessageService(){

    return this.messageService.myMessage;
  }

  getService(){
    return this.messageService;
  }


  valoreInputPadre = {
    id: 55,
    url: "http://jsddjsjadja.com"
  }


  fetcherDatabase() {

    this.passwordDatabase = "";
  }

}
