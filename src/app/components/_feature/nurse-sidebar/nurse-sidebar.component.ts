import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-nurse-sidebar',
  templateUrl: './nurse-sidebar.component.html',
  styleUrls: ['./nurse-sidebar.component.css']
})
export class NurseSidebarComponent implements OnInit {
  person_id: string;
  @Output() 
  myEvent = new EventEmitter<string>();

  callParent(choice:string) {
   
    this.myEvent.emit(choice);
  }


  constructor(private authService: AuthService) { }

  logout()
  {
    this.authService.logOut();
  }

  ngOnInit(): void {
    this.person_id = localStorage.getItem("person_id");
  }
}
