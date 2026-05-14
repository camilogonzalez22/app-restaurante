import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest, LoginResponse } from "../models/auth"; 
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/api/v1/auth';

  login(credentials: LoginRequest) {
    this.http.post<LoginResponse>(`${this.API_URL}/login`, credentials).pipe(tap({
  next: (res) => {
    console.log(res)
  },
  error: (err) => {
    console.error(err);
  },
}))

}
}