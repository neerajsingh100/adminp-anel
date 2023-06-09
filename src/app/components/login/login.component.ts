import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: boolean;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  showPassword() {
    this.password = !this.password;
  }

  doLogin(){
    this.router.navigate(['/admin/dashboard'])
  }
}
