import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {
    console.log("Hello LocalStorageProvider Provider");
  }

  setLocalStorage(key:any, value:any): Promise<any> {
    return new Promise((resolve, reject) => {
    let data =  localStorage.setItem(key, value)
     resolve(data);
    });
  }

  getLocalStorage(key:any): Promise<any> {
    return new Promise((resolve, reject) => {
        let data =  localStorage.getItem(key)
        resolve(data);
    });
  }

  deleteAllStorage(): Promise<any> {
    return new Promise((resolve, reject) => {
        let data =  localStorage.clear();
        resolve(data);
    });
  }

//   deleteOneStorage(key): Promise<any> {
//     return new Promise((resolve, reject) => {
//       this.storage
//         .remove(key)
//         .then((data) => {
//           resolve();
//         })
//         .catch((error) => {
//           reject();
//         });
//     });
//   }
}