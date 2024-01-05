import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { LoginService } from './services/login/login.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideBarsItems: any[] = [];
  pageActive: string = '';
  constructor(
    private router: Router,
    private $login: LoginService
  ) {}

  ngOnInit(): void {
    try {



    } catch (error) {
      console.log('🚀 ~ error:', error);
    }
  }

  ngOnDestroy(): void {
    localStorage.removeItem('PT_auth')

  }
}
