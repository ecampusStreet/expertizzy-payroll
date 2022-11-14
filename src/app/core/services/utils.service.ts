import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataModalComponent } from 'src/app/shared/components/data-modal/data-modal.component';
import { GenericConfirmPopupComponent } from 'src/app/shared/components/generic-confirm-popup/generic-confirm-popup.component';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
    constructor(public dialog: MatDialog){
    }
    openDialog(payload:any): Promise<any> {
        return new Promise((resolve, reject) => {
            const dialogRef = this.dialog.open(GenericConfirmPopupComponent, {
                width: '250px',
                data: payload,
              });
              dialogRef.afterClosed().subscribe(result => {
                resolve(result)
              });
        })


       
      }

      dataFilter(payload:any): Promise<any> {
        return new Promise((resolve, reject) => {
            const dialogRef = this.dialog.open(DataModalComponent, {
                width: '500px',
                data: payload,
              });
              dialogRef.afterClosed().subscribe(result => {
                resolve(result);
      console.log(result,"set value response");
                
              });
        })


       
      }
}