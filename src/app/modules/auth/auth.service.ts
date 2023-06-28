import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../shared/shared.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  login(payload: {username: string, password: string}): Observable<user[]> {
    return this._http.get<user[]>(`${environment.api}users?email=${payload.username}&password=${payload.password}`)
  }

  saveLoginuserInfoLocally(payload: user) {
    localStorage.setItem('user', JSON.stringify(payload));
  }
  
  getLoginUserInfo(): user | null {
    const user = localStorage.getItem('user');
    if(user) {
      return JSON.parse(user);    
    } else {
      return null;
    }
  }

}
