import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-generic-confirm-popup',
  templateUrl: './generic-confirm-popup.component.html',
  styleUrls: ['./generic-confirm-popup.component.scss']
})
export class GenericConfirmPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<GenericConfirmPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data,"data");
  }

  yes(){
    this.dialogRef.close(true);
  }
  no(){
    this.dialogRef.close(false);
  }
}
