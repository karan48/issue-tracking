import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, switchMap } from 'rxjs';
import { SharedService } from '../shared/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateSprintComponent } from './create-sprint/create-sprint.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { Issue } from '../shared/shared.type';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  searchControl = new FormControl();
  
  issues: Issue[] = [];

  appConfig: any;

  constructor(private _sharedService: SharedService) {
    this.appConfig = this._sharedService.appConfig;
    this.appConfig.header.hidden = false;
    this.appConfig.navigation.hidden = false
    this._sharedService.setAppConfig(this.appConfig)
  }

  ngOnInit(): void {
    this.getIssue();
  }

 
  getIssue() {
    this._sharedService.getIssues().subscribe(res => {
      console.log('issue', res);
      this.issues = res;
    })
  }
}
