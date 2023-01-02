import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../service/api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('email', {static: false}) email!: ElementRef;
  @ViewChild('password', {static: false}) password!: ElementRef;

  logged = false;

  constructor(private service: ApiService, private main: AppComponent) { }

  ngOnInit(): void {
  }

  login(){
    let mail = this.email.nativeElement.value;
    let pw = this.password.nativeElement.value;
    this.service.getUsers(mail, pw).subscribe(logged => {
      this.logged = logged;
      console.log(logged);
    });
    console.log(this.logged);
    this.main.isLogged = this.logged;
  }

}
