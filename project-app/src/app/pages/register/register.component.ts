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
    username: ['', [Validators.required, Validators.minLength(3)]],
    email:['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
    emailRepeat:['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
    numberTelephone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
  },
  {
    validator: compareFields('email', 'emailRepeat')
  });
}

public onSubmit(): void {
  this.submitted = true;

  console.log(this.userRegisterForm);
  if (this.userRegisterForm.valid) {

    const user: UserRegister = {
      username: this.userRegisterForm.value.username,
      email: this.userRegisterForm.value.email,
      emailRepeat: this.userRegisterForm.value.emailRepeat,
      numberTelephone: this.userRegisterForm.value.numberTelephone,
      password: this.userRegisterForm.value.password,
    };
    console.log(user);

    this.userRegisterForm.reset();
    this.submitted = false;
  }
}
}
