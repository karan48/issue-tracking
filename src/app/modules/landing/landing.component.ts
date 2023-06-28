import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, switchMap } from 'rxjs';
import { SharedService } from '../shared/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateSprintComponent } from './create-sprint/create-sprint.component';

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
  ]
  searchControl = new FormControl();
  suggestions$: Observable<any[]>;
  
  constructor(
    private _sharedService: SharedService,
    public dialog: MatDialog) {
    this.suggestions$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      switchMap((term) => this._sharedService.getIssueById(term))
    );
   }

  ngOnInit(): void {
  }

  onSelect(value: any) {
    if(value == 1) {
      this.createSprint();    
    }
  }

  createSprint(): void {
    const dialogRef = this.dialog.open(CreateSprintComponent, {
      data: {name: 'karan', animal: 'Human'},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
