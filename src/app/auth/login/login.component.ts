import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import general from '../../common/constants/general';
import { AuthService } from '../../common/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = general.title;

  // @ts-ignore
  form: FormGroup;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required
      ])
    });
  }

  private login(): void {
    this.authService.login();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.login();
  }
}
