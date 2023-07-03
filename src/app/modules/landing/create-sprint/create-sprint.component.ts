import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrls: ['./create-sprint.component.scss']
})
export class CreateSprintComponent implements OnInit {

  sprintForm: any;

  constructor(
    public dialogRef: MatDialogRef<CreateSprintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private _sharedService: SharedService
  ) {}


  ngOnInit(): void {
    console.log('dialog data', this.data);  
    this.sprintForm = this._formBuilder.group({
      title: ['', [Validators.required]],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      active: [null, Validators.required],
    });  
  }

  close() {
    this.dialogRef.close();
  }

  createSprint() {
    this._sharedService.createSprint(this.sprintForm.value).subscribe(res => {
      if(res.id) {
        this._sharedService.notification('Sprint created successfully', 'success');
        this.dialogRef.close(res);
      } else {
        this._sharedService.notification('Something went wrong', 'error');
      }
    })
  }

}
