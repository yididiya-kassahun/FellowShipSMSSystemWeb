import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {HttpClient, HttpEventType, HttpHeaders} from "@angular/common/http";
import {StorageService} from "../../../service/storage.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-import-contact',
  templateUrl: './import-contact.component.html',
  styleUrls: ['./import-contact.component.scss']
})
export class ImportContactComponent {

  selectedFile: File = null;


  constructor(
      private formBuilder: FormBuilder,
      private httpClient: HttpClient,
      private storageService: StorageService,
      public dialogRef: MatDialogRef<ImportContactComponent>
  ) { }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('xl', this.selectedFile, this.selectedFile.name);
    const headers = new HttpHeaders()
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Methods', 'POST')
        .append('X-Requested-With', 'XMLHttpRequest')
        .append('Access-Control-Allow-Headers', 'Content-Type')
        .append('Authorization', `Bearer ${this.storageService.getStorage('accessToken')}`);
    this.httpClient.post('http://localhost:8000/api/importContact',
        fd, { reportProgress: true, observe: 'events', headers: headers
        }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log('wait..')
      } else if (event.type === HttpEventType.Response) {
        console.log(event)
      }
    }, error1 => {
      console.log(error1)
    })
  }

  onNoClick() {
    this.dialogRef.close();
  }


}
