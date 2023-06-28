import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { UserRegister } from '../../models/user';
import { compareFields } from '../../utils/validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
public userRegisterForm!: FormGroup;
public submitted: boolean = false;

constructor(private formBuilder: FormBuilder) {}

ngOnInit(): void {
  this.userRegisterForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
    passwordRepeat: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
  },
  {
    validator: compareFields('password', 'passwordRepeat')
  });
}

public onSubmit(): void {
  this.submitted = true;

  console.log(this.userRegisterForm);
  if (this.userRegisterForm.valid) {

    const user: UserRegister = {
      username: this.userRegisterForm.value.username,
      password: this.userRegisterForm.value.password,
      password2: this.userRegisterForm.value.passwordRepeat,
    };
    console.log('Enviando user a la API:', user);

    this.userRegisterForm.reset();
    this.submitted = false;
  }
}
}
