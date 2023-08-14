import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    //private service: AuthService, 
    private router: Router
    ) {
    this.loginForm = new FormGroup({
      userName: new FormControl(null),
      password: new FormControl(null)
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    const userCred = {
      email: this.loginForm.value.userName,
      password: this.loginForm.value.password
    }
    // this.service.login(userCred).subscribe(data => {
    //   if (data) {
    //     localStorage.setItem('USER_TOKEN', JSON.stringify(data));
    //   }
    // });
    this.router.navigate(['auth/sign-in']);
  }


}
