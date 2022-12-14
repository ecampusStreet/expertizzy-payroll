import { Injectable } from '@angular/core';
declare var $: any;
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
  } from '@angular/material/snack-bar';
  
@Injectable({
  providedIn: 'root'
})
export class ToastService {
    durationInSeconds = 5;
constructor(private _snackBar: MatSnackBar){ }
    success(msg:any){
        this._snackBar.open(msg,'', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: this.durationInSeconds * 1000,
            panelClass:'success'
          });

    }
    error(msg:any){
        this._snackBar.open(msg, '', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: this.durationInSeconds * 1000,
            panelClass:'error'
          });
    }
}