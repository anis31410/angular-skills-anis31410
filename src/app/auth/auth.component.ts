import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isAuth= false;
  constructor() { }
  buttonChange() {
    this.isAuth = !this.isAuth;
  }
  ngOnInit() {
  }

}