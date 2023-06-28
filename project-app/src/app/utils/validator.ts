import { FormGroup } from '@angular/forms';

/*
export function compareFields (controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
    debugger
		// Asignamos dos controladores a nuestros valores por param
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
		//  Control de errores
    if (matchingControl?.errors && !matchingControl.errors?.["mustMatch"]) {
      return;
    }
		// Setter Errores
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}*/


// Función para validar la contraseña
// Entran dos valores por parametro
export function compareFields (controlName1: string, controlName2: string){
  return (formGroup: FormGroup) => {
		// Asignamos dos controladores a nuestros valores por param
    // const control = formGroup.controls[controlName];
    const control1 = formGroup.get(controlName1);
    // const matchingControl = formGroup.controls[matchingControlName];
    const control2 = formGroup.get(controlName2);

		//  Control de errores
    if (control2?.errors && !control2.errors?.['mustMatch']) {
      return;
    }

		// Setter Errores
    if (control1?.value !== control2?.value) {
      control2?.setErrors({ mustMatch: true });
    } else {
      control2?.setErrors(null);
    }
  };
}
