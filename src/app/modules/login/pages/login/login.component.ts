import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  public registerForm: FormGroup;
  public acceptForm: FormGroup;
  public acceptPhone: boolean = false;
  public login: boolean = true;
  constructor(
    private loginService: LoginService,
    private dialogRef: MatDialogRef<LoginComponent>
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.initAcceptForm();
  }

  initForm() {
    this.registerForm = new FormGroup({
      mobile: new FormControl('', Validators.required),
      device_id: new FormControl('browser', Validators.required),
      device_model: new FormControl('web', Validators.required),
      device_os: new FormControl('angularJS', Validators.required),
    });
  }

  initAcceptForm() {
    this.acceptForm = new FormGroup({
      mobile: new FormControl('', Validators.required),
      device_id: new FormControl('browser', Validators.required),
      device_model: new FormControl('web', Validators.required),
      device_os: new FormControl('angularJS', Validators.required),
      verification_code: new FormControl('', Validators.required),
      nickname: new FormControl('', Validators.required),
    });
  }

  onAcceptSubmit() {
    this.loginService
      .acceptPhoneNumber(this.acceptForm.value)
      .subscribe((res) => {
        localStorage.setItem("token", JSON.stringify(res));
        location.reload();
      });
  }

  onSubmit() {
    this.loginService
      .postPhoneNumber(this.registerForm.value)
      .subscribe((res) => {
        this.login = false;
        this.acceptPhone = true;
        this.acceptForm.patchValue({
          nickname: res.nickname,
          mobile: this.registerForm.get('mobile').value,
        });
      });
  }
}
