import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../service/api.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('email', {static: false}) email!: ElementRef;
  @ViewChild('password', {static: false}) password!: ElementRef;

  logged = [false, ""];

  constructor(private service: ApiService, private main: AppComponent, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    let mail = this.email.nativeElement.value;
    let pw = this.password.nativeElement.value;
    this.service.getUsers(mail, pw).subscribe(logged => {
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
