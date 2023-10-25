import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  stays: any;

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('assets/stays.json').subscribe((data) => {
      this.stays = data;
    });
  }
}
