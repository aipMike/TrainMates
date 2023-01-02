import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private HttpClient: HttpClient) { }

  getUsers(user: string, pass: string){
    let logged = false;
    return this.HttpClient.get<any>('https://data.mongodb-api.com/app/trainmates-ugayt/endpoint/login').pipe(map((dati) => {
      console.log(dati);
      dati.forEach(element => {
        console.log(element);
        if(element.email == user || element.username == user){
          if(element.password == pass){
            logged = true;
          }
        }
      });
      return logged;

    }));
/*
    this.HttpClient.get<any>('https://data.mongodb-api.com/app/trainmates-ugayt/endpoint/login').subscribe(dati => {
    dati.results.forEach(element => {
        if(element.email == user || element.username == user){
          if(element.password == pass){
            logged = true;
            return logged;
          }
        }
      });
    });
    return logged;
*/
  }
}
