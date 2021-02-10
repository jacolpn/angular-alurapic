import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   photos = [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/49/TOTVS_pos.jpg',
        alt: 'TOTVS'
      }
   ]

  constructor(http: HttpClient) {
    console.log(http);
  }
}
