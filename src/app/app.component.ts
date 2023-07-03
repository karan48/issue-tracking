import { Component } from '@angular/core';
import { CreateIssueComponent } from './modules/landing/create-issue/create-issue.component';
import { CreateSprintComponent } from './modules/landing/create-sprint/create-sprint.component';
import { MatDialog } from '@angular/material/dialog';
import { AppConfig } from './modules/shared/shared.type';
import { SharedService } from './modules/shared/shared.service';
import { AuthService } from './modules/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectOptions = [
    {
      id: 1,
      name: 'Create New Sprint',
    },
    {
      id: 2,
      name: 'Create new Issue',
    },
  ];

  navigations = [
    {
      name: 'All sprints',
      link: '/sprint'
    },
    {
      name: 'Issue Graph',
      link: '/issue'
    }
  ];

  appConfig: any;

  constructor(public dialog: MatDialog, private _sharedService: SharedService, private _auth: AuthService) {
    this._sharedService.appConfig$.subscribe((res) => {
      this.appConfig = res;    
    });
  }

  ngOnInit(): void {}

  onSelect(value: any) {
    if (value == 1) {
      this.createSprint();
    } else {
      this.createIssue();
    }
  }

  createSprint(): void {
    const dialogRef = this.dialog.open(CreateSprintComponent, {
      data: {},
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  createIssue(): void {
    const dialogRef = this.dialog.open(CreateIssueComponent, {
      disableClose: true,
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  logOut() {
    this._auth.logOut();
  }
}
