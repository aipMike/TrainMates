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
  public data: Date = new Date();


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

  timeInsert(newTime: Tempi){
    let body = JSON.stringify(newTime);
    return this.HttpClient.post<any>('https://data.mongodb-api.com/app/trainmates-ugayt/endpoint/inserttime', body).pipe(map((dati) => {
      return dati;
    }));
  }

  timeDelete(time: Tempi){
    return this.HttpClient.delete<any>('https://data.mongodb-api.com/app/trainmates-ugayt/endpoint/deletetime/' + time.id).pipe(map((dati) => {
      return dati;
    }));
  }

  getTypes(){
    let indexedArray: {[key: string]: string}
    return this.HttpClient.get<any>('https://data.mongodb-api.com/app/trainmates-ugayt/endpoint/gettypes').pipe(map((dati) => {
      dati.forEach(element =>{
        indexedArray[element[0]] = element[1];
      })
      return indexedArray;
    }));
  }
}
