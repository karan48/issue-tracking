import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrls: ['./create-sprint.component.scss']
})
export class CreateSprintComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateSprintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}


  ngOnInit(): void {
    console.log('dialog data', this.data);    
  }

  close() {
    this.dialogRef.close()
  }

}
