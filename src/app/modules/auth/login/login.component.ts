import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  signInForm: any;
  errorMsg = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.signInForm = this._formBuilder.group({
      username: ['bob@gmail.com', [Validators.required]],
      password: ['123456', Validators.required],
    });
  }

  login() {
    this._authService.login(this.signInForm.value).subscribe((res) => {
      if(res.length > 0) {
        console.log("Login successfull");
        this.errorMsg = '';
        this._authService.saveLoginuserInfoLocally(res[0]);
        this._router.navigateByUrl('/landing');
      } else {
        console.log("Login fail");
        this.errorMsg = "Username or Password is wrong";
      }
    })
  }
}
