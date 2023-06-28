import { FormGroup } from '@angular/forms';


export function compareFields (controlEmail1: string, controlEmail2: string){
  return (formGroup: FormGroup) => {
    const control1 = formGroup.get(controlEmail1);
    const control2 = formGroup.get(controlEmail2);

    if (control2?.errors && !control2.errors?.['mustMatch']) {
      return;
    }

    if (control1?.value !== control2?.value) {
      control2?.setErrors({ mustMatch: true });
    } else {
      control2?.setErrors(null);
    }
  };
}
