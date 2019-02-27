import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(data) {
      data = {grant_type:'password',scope:'dataEventRecords',client_id:'oauthClient2',client_secret:'superSecretPassword2', username: 'admin', password: 'admin' };
      return this.http.post('connect/token', data);
  }

  getCurrentUserDetails() {
      return this.http.get('http://localhost:3070/currentUser/details');
  }

}
