import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private service: DataService, private router: Router) {
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
    this.service.login(userCred).subscribe(data => {
      //console.log(data);
      if (data) {
        localStorage.setItem('token', JSON.stringify(data));
      }
    });
    this.router.navigate(['navigation']);
  }
}
