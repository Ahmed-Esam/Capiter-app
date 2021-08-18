import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private Url = environment.apiUrl;

  constructor(private http: HttpClient) { }
  ListingUser(){
    return this.http.get(`${this.Url}?page=2`)
  }
  SingleUser(id:Number){
    return this.http.get(`${this.Url}/${id}`)
  }
  createUser(body:any){
    return this.http.post(`${this.Url}`,body)
  }
  UpdateUser(id:number,body:any){
    return this.http.patch(`${this.Url}/${id}`,body)
  }
  DeleteUser(id:number){
    return this.http.delete(`${this.Url}/${id}`)
  }
}
