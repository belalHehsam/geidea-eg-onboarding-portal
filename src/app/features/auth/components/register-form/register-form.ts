import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Building2, LockKeyhole, Mail, Phone, UserRound } from 'lucide-angular';
import { egyptianMobileValidator } from '../../validators/egyptian-mobile.validator';
import { Router } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { UiInput } from '../../../../shared/components/ui-input/ui-input';
import { UiButton } from '../../../../shared/components/ui-button/ui-button';
import { UiSpinner } from '../../../../shared/components/ui-spinner/ui-spinner';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule, TranslocoPipe, UiInput, UiButton, UiSpinner],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})
export class RegisterForm {
  private readonly router = inject(Router);

  // for lucide icons
  readonly UserRound = UserRound;
  readonly Building2 = Building2;
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly LockKeyhole = LockKeyhole;

  readonly isLoading = signal(false);
  readonly submitted = signal(false);

  readonly registerForm = new FormGroup({
    fullName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    businessName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    mobile: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, egyptianMobileValidator],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  errorFor(field: keyof typeof this.registerForm.controls): string | null {
    const control = this.registerForm.controls[field];

    if (!control.invalid || !(control.touched || this.submitted())) {
      return null;
    }

    if (control.hasError('required')) {
      return `auth.register.validation.${field}Required`;
    }

    if (control.hasError('email')) {
      return 'auth.register.validation.emailInvalid';
    }

    if (control.hasError('invalidMobile')) {
      return 'auth.register.validation.mobileInvalid';
    }

    if (control.hasError('minlength')) {
      return field === 'password'
        ? 'auth.register.validation.passwordMinLength'
        : 'auth.register.validation.minLength';
    }

    return null;
  }

  onSubmit(): void {
    this.submitted.set(true);
    this.registerForm.markAllAsTouched();

    if (this.registerForm.invalid || this.isLoading()) {
      return;
    }

    // TODO: Register API -> OTP verification.
    this.router.navigate(['./']);
    // Do not navigate or claim account creation until API succeeds.
    console.log('Register form passed client-side validation');
  }
}
