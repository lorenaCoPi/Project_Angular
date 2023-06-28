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
// Inicialización del formulario
public userRegisterForm!: FormGroup;
// Variable submitted a false
public submitted: boolean = false;

// Estoy "inyectando" el formBuilder de Angular Forms
constructor(private formBuilder: FormBuilder) {}

ngOnInit(): void {
  // Nuestro formulario - sin campos por defecto
  // Podemos meter valores por defecto en las comillas
  this.userRegisterForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
    passwordRepeat: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
  },
  {
    // Validación custom de password
    validator: compareFields('password', 'passwordRepeat')
  });
}

//Función accionada al clickar en submit
public onSubmit(): void {
  // El usuario ha pulsado en submit->cambia a true submitted
  this.submitted = true;

  console.log(this.userRegisterForm);
  // Si el formulario es valido
  if (this.userRegisterForm.valid) {

    // Creamos un Usuario y lo emitimos
    const user: UserRegister = {
      username: this.userRegisterForm.value.username,
      password: this.userRegisterForm.value.password,
      password2: this.userRegisterForm.value.passwordRepeat,
    };
    console.log('Enviando user a la API:', user);

    // Reseteamos todos los campos y el indicador de envío o submitted
    this.userRegisterForm.reset();
    this.submitted = false;
  }
}
}
