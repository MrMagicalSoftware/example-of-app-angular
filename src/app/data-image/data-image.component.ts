import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-image',
  templateUrl: './data-image.component.html',
  styleUrls: ['./data-image.component.scss']
})
export class DataImageComponent implements OnInit {


  private myTitle: string;

  @Input("myObject") myObject: any

  constructor() {
    this.myObject = {
      id: Number,
      url: String
    }
    this.myTitle = "Welcome"
  }

  getMyTitle() {
    return this.myTitle;
  }

  ngOnInit(): void {
  }

}
