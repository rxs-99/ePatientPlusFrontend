import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-token-expired',
  templateUrl: './auth-token-expired.component.html',
  styleUrls: ['./auth-token-expired.component.css']
})
export class AuthTokenExpiredComponent implements OnInit {

  counter: number = 10;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.countdown();
  }

  countdown(): any {
    const interval = setInterval(() => {
      this.counter--;
      if(this.counter <= 0){
        this.router.navigateByUrl("/login");
        clearInterval(interval);
      }
    }, 1000);
  }

}
