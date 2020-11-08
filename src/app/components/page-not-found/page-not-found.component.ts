import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

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
