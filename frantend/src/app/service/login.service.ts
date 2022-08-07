import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map}  from 'rxjs/operators'
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //  selectedLogin:Login;
  //  login:Login[];
  constructor() { }
}
