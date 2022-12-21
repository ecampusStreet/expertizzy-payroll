import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataModalComponent } from 'src/app/shared/components/data-modal/data-modal.component';
import { GenericConfirmPopupComponent } from 'src/app/shared/components/generic-confirm-popup/generic-confirm-popup.component';
import { menu, urls } from '../constants';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  list =menu;
    constructor(public dialog: MatDialog,
      private apiService : ApiService){
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
                
              });
        })
      }

      getDepartments(){
        return new Promise((resolve, reject) => {
        const config ={
          url:urls.departments.list
        }
         this.apiService.get(config).subscribe(resp =>{
          if(resp.success){
          resolve(resp.result.data);
          }
        })
      })
      }
      getShifts(){
        return new Promise((resolve, reject) => {
        const config ={
          url:urls.shifts.list
        }
         this.apiService.get(config).subscribe(resp =>{
          if(resp.success){
          resolve(resp.result.data);
          }
        })
      })
      }
      
      designations(){
        return new Promise((resolve, reject) => {
        const config ={
          url:urls.designation.list
        }
         this.apiService.get(config).subscribe(resp =>{
          if(resp.success){
          resolve(resp.result.data);
          }
        })
      })
      }
      branches(){
        return new Promise((resolve, reject) => {
        const config ={
          url:urls.branch.list
        }
         this.apiService.get(config).subscribe(resp =>{
           if(resp.success){
            resolve(resp.result.data);
           }
        })
      })
      }
      getSalaryGrade(){
        return new Promise((resolve, reject) => {
        const config ={
          url:urls.payroll.list
        }
         this.apiService.get(config).subscribe(resp =>{
          if(resp.success){
          resolve(resp.result.data);
          }
        })
      })
      }

      getRoles(){
        return new Promise((resolve, reject) => {
        const config ={
          url:urls.roles.list
        }
         this.apiService.get(config).subscribe(resp =>{
          if(resp.success){
          resolve(resp.data);
          }
        })
      })
      }

      checkPermissions(permissions:any){
        this.list.forEach((element:any) => {
            console.log(element,permissions[element.key],"permissions");
            if(permissions[element.key] && permissions[element.key].accessible){
              console.log(element.children,"element.children");
              if(element.children && element.children.length){
                element.children.forEach((child :any) => {
                    console.log(child,"children" );
                });
              }
            }
        });
      }
}