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

  selectOptions = [
    {
      id: 1,
      name: 'Create New Sprint'
    },
    {
      id: 2,
      name: 'Create new Issue'
    }
  ];

  searchControl = new FormControl();
  
  navigations = ["All sprints", "Issue Graph", "Menu Three", "Menu Four", "Menu Five", "Menu Six"];

  issues: Issue[] = [];

  constructor(public dialog: MatDialog, private _sharedService: SharedService) {}

  ngOnInit(): void {
    this.getIssue();
  }

  onSelect(value: any) {
    if(value == 1) {
      this.createSprint();    
    } else {
      this.createIssue();
    }
  }

  createSprint(): void {
    const dialogRef = this.dialog.open(CreateSprintComponent, {
      data: {},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  createIssue(): void {
    const dialogRef = this.dialog.open(CreateIssueComponent, {
      disableClose: true,
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getIssue() {
    this._sharedService.getIssues().subscribe(res => {
      console.log('issue', res);
      this.issues = res;
    })
  }
}
