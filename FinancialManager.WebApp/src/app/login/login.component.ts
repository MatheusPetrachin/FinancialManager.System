import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLogin: boolean = true;

  constructor(private authService: AuthService, private router: Router) { }

  hide = true;
  hideRegisterPassword: boolean = true;
  hideRegisterConfirmPassword: boolean = true;

  ngOnInit() {
  }

  login() {
    this.authService.showHeader.emit(true);
    this.router.navigate(['/home']);
  }

  register() {
    this.isLogin = false;
  }

  submitRegister() {
    this.isLogin = true;
  }

}
