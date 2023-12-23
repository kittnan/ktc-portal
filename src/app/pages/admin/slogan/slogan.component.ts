import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { HttpFileUploadService } from 'src/app/https/http-file-upload.service';
import { HttpPortalService } from 'src/app/https/http-portal.service';
import { HttpSloganService } from 'src/app/https/http-slogan.service';

@Component({
  selector: 'app-slogan',
  templateUrl: './slogan.component.html',
  styleUrls: ['./slogan.component.scss']
})
export class SloganComponent implements OnInit {
  uploadState: boolean = false
  sloganForm: any = {
    files: []
  }
  tempFiles:any =[]
  constructor(
    private $slogan: HttpSloganService,
    private router: Router,
    private $file: HttpFileUploadService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      const resSlogan = await lastValueFrom(this.$slogan.get(new HttpParams()))
      this.sloganForm = {
        ...resSlogan[0],
        files: resSlogan[0].files.map((file: any) => file.path)
      }
      setTimeout(() => {
        let preview: any = document.querySelectorAll('#previewLogo');
        for (let i = 0; i < preview.length; i++) {
          const element = preview[i];
          element.src = this.sloganForm.files[i]
        }

      }, 300);
    } catch (error) {
      console.log("🚀 ~ error:", error)
    }
  }

  handleUpload(files: any) {
    this.uploadState = true
    this.sloganForm['files'] = files
    setTimeout(() => {
      let preview: any = document.querySelectorAll('#previewLogo');
      for (let i = 0; i < preview.length; i++) {
        const element = preview[i];
        var reader = new FileReader();
        reader.onload = function (e: any) {
          element.src = e.target.result;
        };
        if (files[i]) {
          reader.readAsDataURL(files[i]);

        } else {
          preview.src = '';
        }
      }

    }, 300);
  }

  async handleSubmit() {
    try {
      if (this.uploadState) {
        let formData: FormData = new FormData()
        formData.append('path', 'ktc_portal/slogan/')
        for (let i = 0; i < this.sloganForm.files.length; i++) {
          const file = this.sloganForm.files[i];
          formData.append('file', file)
          if (i + 1 === this.sloganForm.files.length) {
            const resFile = await lastValueFrom(this.$file.upload(formData))
            this.sloganForm.files = resFile
            const resSlogan = await lastValueFrom(this.$slogan.createOrUpload(this.sloganForm))
          }
        }
      }else{
        const resSlogan = await lastValueFrom(this.$slogan.createOrUpload(this.sloganForm))
      }
    } catch (error) {
      console.log("🚀 ~ error:", error)

    }
  }

}
