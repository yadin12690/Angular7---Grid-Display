import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class MyserviceService {
  private finaldata = [];
  private apiurl = "./assets/users.json";
  constructor(private http: HttpClient) { }
  getData() {
     return this.http.get(this.apiurl);
  }
}