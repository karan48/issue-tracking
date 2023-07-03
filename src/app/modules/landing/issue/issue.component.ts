import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SharedService } from '../../shared/shared.service';
import { Issue, Sprint } from '../../shared/shared.type';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {

  searchControl = new FormControl();
  
  issues: Issue[] = [];

  appConfig: any;

  constructor(private _sharedService: SharedService) {
    this.appConfig = this._sharedService.appConfig;
    this.appConfig.header.hidden = false;
    this.appConfig.navigation.hidden = false
    this._sharedService.setAppConfig(this.appConfig);
  }

  ngOnInit(): void {
    this.getIssue();
  }

 
  getIssue() {
    this._sharedService.getIssues().subscribe(res => {
      console.log('getSprint', res);
      this.issues = res;
    })
  }
}
