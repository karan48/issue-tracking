import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppConfig, Issue, Sprint } from './shared.type';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { BehaviorSubject, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  appConfig: AppConfig = {
    header: {
      hidden: false
    },
    navigation: {
      hidden: true
    }
  }

  appConfig$ = new BehaviorSubject(this.appConfig);

  constructor(
    private readonly _http: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  notification(msg: string, panelClass: 'success' | 'warning' | 'error', horizontalPosition: MatSnackBarHorizontalPosition = 'end', verticalPosition: MatSnackBarVerticalPosition = 'bottom', duration = 5000  ){
    let tosterColor: string[] = []
    if(panelClass === 'success' ) {
      tosterColor = ['bg-green-700', 'text-white']
    } else if(panelClass === 'warning') {
      tosterColor = ['bg-amber-600', 'text-white']
    } else if(panelClass === 'error') {
      tosterColor = ['bg-warn-500', 'text-white']
    }

    this._snackBar.open(msg,'', {
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
      panelClass: tosterColor,
      duration: duration
    });
  }


  createSprint(payload: Sprint) {
    return this._http.post<Sprint>(`${environment.api}sprint`, payload);
  }

  getAllSprint() {
    return this._http.get<Sprint[]>(`${environment.api}sprint`);
  }

  createissue(payload: Issue) {
    return this._http.post<Issue>(`${environment.api}issue`, payload);
  }
  
  getIssues() {
    return this._http.get<Issue[]>(`${environment.api}issue`);
  }

  setAppConfig(config: AppConfig) {
   // this.appConfig = config;
    this.appConfig$.next(this.appConfig);
  }

  resetConfig() {
    this.appConfig$.next(this.appConfig);
  }
 


  
}
