import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const egyptianMobileValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const value = String(control.value ?? '').trim();

  if (!value) return null;

  const valid = /^(?:\+20|0)?1[0125]\d{8}$/.test(value);

  return valid ? null : { invalidMobile: true };
};
