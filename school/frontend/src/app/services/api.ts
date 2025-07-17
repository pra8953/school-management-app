import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Api {
  api = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }
  getNotices(){
    return this.http.get(`${this.api}/notice`)
  }
}
