import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  getIssueById(id: number) {
    return this._http.get<any>(`${environment.api}`)  
  }
}
