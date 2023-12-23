import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { HttpAuthService } from 'src/app/https/http-auth.service';
import { LoginService } from 'src/app/services/login/login.service';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: any = null
  constructor(
    private router: Router,
    private $login: LoginService
  ) {
    localStorage.removeItem('PT_auth')
   }

  ngOnInit(): void {
    try {
      this.menu = [
        {
          name: 'Admin',
          logo: './assets/icons/hacker.png',
          url: 'admin'
        },
        {
          name: 'Slogan',
          logo: './assets/icons/blackboard.png',
          url: 'admin/slogan'
        },
      ]
    } catch (error) {
      console.log("🚀 ~ error:", error)

    }
  }
  handleLink(url: string) {
    // window.open(url, '_blank');
    if (url.includes('admin')) {
      this.$login.login(url)
    } else {
      this.router.navigate([url])
    }
  }


}
