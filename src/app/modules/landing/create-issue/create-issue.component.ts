import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedService } from '../../shared/shared.service';
import { Sprint } from '../../shared/shared.type';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.scss']
})
export class CreateIssueComponent implements OnInit {

  issueForm: any;
  sprints: Sprint[] = [];

  constructor(
    public dialogRef: MatDialogRef<CreateIssueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private _sharedService: SharedService
  ) {}


  ngOnInit(): void {
    this.getAllSprint();
    console.log('dialog data', this.data);  
    this.issueForm = this._formBuilder.group({
      title: ['', [Validators.required]],
      sprint: ['', Validators.required],
    });  
  }

  close() {
    this.dialogRef.close()
  }

  getAllSprint() {
    this._sharedService.getAllSprint().subscribe(res => {
      console.log('sprint', res);      
      this.sprints = res;
    })
  }

  createissue() {
    console.log('this.issueForm.value', this.issueForm.value);
    
    this._sharedService.createissue(this.issueForm.value).subscribe(res => {
      console.log('Issue', res);
      this.dialogRef.close(res);
    })
  }

}
