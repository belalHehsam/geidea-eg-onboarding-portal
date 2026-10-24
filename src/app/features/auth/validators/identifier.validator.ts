import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export const identifierValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const value = String(control.value ?? '').trim();

  if (!value) return null;

  const isEmail = Validators.email({ value } as AbstractControl) === null;

  const isMobile = /^(?:\+20|0)?1[0125]\d{8}$/.test(value);

  return isEmail || isMobile ? null : { invalidIdentifier: true };
};
