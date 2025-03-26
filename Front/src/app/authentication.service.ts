import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:8080/api/usuarios';

  register(user: any): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/register`, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }
}
