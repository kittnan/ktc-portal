import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { HttpFileUploadService } from 'src/app/https/http-file-upload.service';
import { HttpPortalService } from 'src/app/https/http-portal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-portal-add',
  templateUrl: './portal-add.component.html',
  styleUrls: ['./portal-add.component.scss']
})
export class PortalAddComponent implements OnInit {
  corporateOption: any[] = ['ADT', 'DST', 'AMT']
  portalAddGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    url: new FormControl(null, Validators.required),
    corporate: new FormControl(null, Validators.required),
    section: new FormControl(null, Validators.required),
    owner: new FormControl(null, Validators.required),
    developer: new FormControl(null, Validators.required),
    logo: new FormControl(null, Validators.required),
    status: new FormControl(true, Validators.required),
    _id: new FormControl(null),
  })
  receivedData: any;
  uploadState: boolean = false
  constructor(
    private $fileUpload: HttpFileUploadService,
    private $portal: HttpPortalService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.receivedData = navigation?.extras.state?.['data'];
  }

  ngOnInit(): void {
    this.portalAddGroup.markAllAsTouched()
    if (this.receivedData) {
      this.portalAddGroup.patchValue({
        ...this.receivedData,
      })
      setTimeout(() => {
        let preview: any = document.getElementById('previewLogo');
        preview.src = this.receivedData.logo[0]['path']
      }, 300);
    }
  }

  async handleSubmit() {

    if (this.uploadState) {
      let formData = new FormData()
      const file: any = this.portalAddGroup.value.logo
      const name = this.portalAddGroup.value.name
      formData.append('path', `ktc_portal/${name}/`)
      formData.append('file', file)
      const resUpload = await lastValueFrom(this.$fileUpload.upload(formData))
      this.portalAddGroup.patchValue({
        logo: resUpload
      })

      const resPortal = await lastValueFrom(this.$portal.createOrUpload(this.portalAddGroup.value))
      Swal.fire(({
        title: 'Success',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      })).then(() => this.router.navigate(['admin']))
    } else {
      const resPortal = await lastValueFrom(this.$portal.createOrUpload(this.portalAddGroup.value))
      Swal.fire(({
        title: 'Success',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      })).then(() => this.router.navigate(['admin']))
    }


  }
  handleUpload(files: any) {
    this.uploadState = true
    this.portalAddGroup.patchValue({
      logo: files[0]
    })
    setTimeout(() => {
      let preview: any = document.getElementById('previewLogo');
      var reader = new FileReader();
      reader.onload = function (e: any) {
        preview.src = e.target.result;
      };
      if (files[0]) {
        reader.readAsDataURL(files[0]);

      } else {
        preview.src = '';
      }
    }, 300);
  }

}
