import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { HttpAuthService } from 'src/app/https/http-auth.service';
import { environment } from 'src/environments/environment';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = environment.API;
  constructor(
    private http: HttpClient,
    private router: Router,
    private $auth: HttpAuthService
  ) { }

  validate() {
    if (localStorage.getItem('INVLG_user')) return true
    return false
  }
  get() {
    let auth: any = localStorage.getItem('PT_auth')
    if (auth) {
      return auth
    } else {
      return null

    }
  }

  login(url:string) {
    let auth = localStorage.getItem('PT_auth')
    if (!auth || (auth && auth != 'admin')) {
      let passwordInput: HTMLInputElement
      Swal.fire({
        title: 'Password',
        html: '<input type="password" id="password" class="swal2-input" placeholder="Password">',
        didOpen: () => {
          const popup = Swal.getPopup()!
          passwordInput = popup.querySelector('#password') as HTMLInputElement
          passwordInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm()
        },
        preConfirm: () => {
          const password = passwordInput.value
          if (!password) {
            Swal.showValidationMessage(`Please enter password`)
          }
          return { password }
        }
      }).then(async (v: SweetAlertResult) => {
        if (v.isConfirmed) {
          const resAuth = await lastValueFrom(this.$auth.get())
          if (resAuth && resAuth.length > 0 && v.value && v.value.password == resAuth[0].password) {
            localStorage.setItem('PT_auth','admin')
            this.router.navigate([url])
          } else {
            Swal.fire('Password not correct!!', '', 'error')
          }
        }
      })
    } else {
      this.router.navigate([url])
    }

  }

}
