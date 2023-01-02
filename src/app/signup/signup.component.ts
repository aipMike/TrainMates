import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../service/api.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('nome', {static: false}) nome!: ElementRef;
  @ViewChild('cognome', {static: false}) cognome!: ElementRef;
  @ViewChild('username', {static: false}) username!: ElementRef;
  @ViewChild('email', {static: false}) email!: ElementRef;
  @ViewChild('password', {static: false}) password!: ElementRef;

  constructor(private service: ApiService, private main: AppComponent, private router: Router) { }

  logged = [false, ""];

  ngOnInit(): void {
  }

  signup(){
    let nm = this.nome.nativeElement.value;
    let cgnm = this.cognome.nativeElement.value;
    let user = this.username.nativeElement.value;
    let mail = this.email.nativeElement.value;
    let pw = this.password.nativeElement.value;
    this.service.signUp(nm, cgnm, user, mail, pw).subscribe(logged => {
      console.log(logged);
      this.logged = logged;
      this.main.isnotLogged = logged.values[0];
      this.main.username = logged[1];
      console.log(this.main.isnotLogged);
      console.log(this.main.username);
      if(logged[0]){
        this.router.navigate(['/']);
      }
    });
    console.log(this.logged);
  }

}
