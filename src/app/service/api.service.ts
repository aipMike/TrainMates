import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tempi } from '../tempi';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public times: Tempi[] = [];


  constructor(private HttpClient: HttpClient) { }

  getUsers(user: string, pass: string){
    let logged = false;
    let username;
    return this.HttpClient.get<any>('https://data.mongodb-api.com/app/trainmates-ugayt/endpoint/login').pipe(map((dati) => {
      console.log(dati);
      dati.forEach(element => {
        if(element.email == user || element.username == user){
          if(element.password == pass){
            logged = true;
            username = element.username;
          }
        }
      });
      return [logged, username];

    }));
  }

  signUp(name: string, surname: string, user: string, mail: string, pass: string){
    let body = JSON.stringify({ nome: name, cognome: surname, username: user, email: mail, password: pass });
    return this.HttpClient.post<any>('https://data.mongodb-api.com/app/trainmates-ugayt/endpoint/signup', body).pipe(map((dati) => {
      console.log(dati);
      return [dati, user];
    }));
  }

  getTimes(){
    this.times = [];
    return this.HttpClient.get<any>('https://data.mongodb-api.com/app/trainmates-ugayt/endpoint/gettimes').pipe(map((dati) => {
      dati.forEach(element => {
        console.log(element.startTime.valueOf());
        this.times.push(new Tempi(element._id, element.user, element.sport, element.type, element.startTime, element.endTime))
      });
      console.log(this.times);
      return this.times;
    }));
  }
}
