import { Component, OnInit } from '@angular/core';
import axios, { Axios } from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  callapi(){
    axios.post(`http://localhost:5000/api/login`,)
  }

}
