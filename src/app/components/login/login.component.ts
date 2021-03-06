import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/person';
import { Login } from '../../login';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalid: boolean = false;
  wait_flag: boolean = false;

  login: Login = {
    id: 0,
    username: "",
    password: ""
  };

  person: Person;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submitCreds(): void {
    this.authService.login(this.login).subscribe(
      (data) => {
        this.person = data.person;
        if (!(this.person == null)) {
          this.authService.setSession(data.person.id, data.token);
        }
        this.wait_flag = false;
        this.finishLogin();
      });
    console.log("before passed");

    this.wait_flag = true;
    this.invalid = false;
    //this.authService.login(this.login).toPromise().then(x => this.finishLogin());
  }

  finishLogin(): void {
    console.log("after passed");
    if (this.person == null) {
      this.invalid = true;
    } else if (this.person.position.id === 1) {
      this.router.navigate(['/patient'])
    } else if (this.person.position.id === 2) {
      this.router.navigate(['/nurse'])
    } else if (this.person.position.id === 3) {
      this.router.navigate(['/doctor'])
    }
  }

}
