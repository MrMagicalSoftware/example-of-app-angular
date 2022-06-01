import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetcher',
  templateUrl: './fetcher.component.html',
  styleUrls: ['./fetcher.component.scss']
})
export class FetcherComponent implements OnInit {


  private isContentLoaded: boolean;

  urlImage: string;


  getIsContentLoaded(): boolean {
    return this.isContentLoaded;
  }

  constructor(private httpClient: HttpClient) {
    this.isContentLoaded = false;
    this.urlImage = "";
  }

  ngOnInit(): void {
    this.dataFetcher();
  }

  dataFetcher(): void {
    this.httpClient.get('https://dog.ceo/api/breeds/image/random').subscribe(

      (response: any) => {
        this.isContentLoaded = true;
        this.urlImage = response["message"];
      }


    )
  }

}






