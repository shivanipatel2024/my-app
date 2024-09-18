import { ValidatorFn, AbstractControl } from '@angular/forms';

export function passwordMatchValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { mismatch: true };
  }

  return null;
}
