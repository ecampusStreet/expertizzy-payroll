import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
}