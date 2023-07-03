import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Issue, Sprint } from '../../shared/shared.type';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {

  searchControl = new FormControl();
  
  sprints: Sprint[] = [];

  appConfig: any;

  constructor(private _sharedService: SharedService) {
    this.appConfig = this._sharedService.appConfig;
    this.appConfig.header.hidden = false;
    this.appConfig.navigation.hidden = false
    this._sharedService.setAppConfig(this.appConfig);
  }

  ngOnInit(): void {
    this.getSprint();
  }

 
  getSprint() {
    this._sharedService.getSprint().subscribe(res => {
      console.log('getSprint', res);
      this.sprints = res;
    })
  }
}
