import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintComponent } from './sprint/sprint.component';
import { RouterModule, Routes } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CreateSprintComponent } from './create-sprint/create-sprint.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { MatSelectModule } from '@angular/material/select';
import { IssueComponent } from './issue/issue.component';



const routes: Routes = [
  {
    path: 'sprint',
    component: SprintComponent
  },
  {
    path: 'issue',
    component: IssueComponent
  }
];

@NgModule({
  declarations: [SprintComponent, CreateSprintComponent, CreateIssueComponent, IssueComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule
  ]
})
export class LandingModule { }
