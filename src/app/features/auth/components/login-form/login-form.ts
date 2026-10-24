import { TranslocoService, TranslocoPipe } from '@jsverse/transloco';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UiInput } from '../../../../shared/components/ui-input/ui-input';
import { UiButton } from '../../../../shared/components/ui-button/ui-button';
import { ArrowRight, LockKeyhole, LucideAngularModule, Mail } from 'lucide-angular';
import { identifierValidator } from '../../validators/identifier.validator';
import { UiSpinner } from '../../../../shared/components/ui-spinner/ui-spinner';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, UiInput, UiButton, LucideAngularModule, TranslocoPipe, UiSpinner],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  readonly isLoading = signal(false);
  private readonly router = inject(Router);
  private readonly transloco = inject(TranslocoService);

  readonly Mail = Mail;
  readonly LockKeyhole = LockKeyhole;
  readonly ArrowRight = ArrowRight;

  readonly loginForm = new FormGroup({
    Identifier: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, identifierValidator],
    }),
    Password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  get identifierError(): string | null {
    const control = this.loginForm.controls.Identifier;

    if (!control.touched) return null;

    if (control.hasError('required')) {
      return this.transloco.translate('auth.validation.identifierRequired');
    }

    if (control.hasError('invalidIdentifier')) {
      return this.transloco.translate('auth.validation.identifierInvalid');
    }

    return null;
  }

  get passwordError(): string | null {
    const control = this.loginForm.controls.Password;

    if (!control.touched) return null;

    if (control.hasError('required')) {
      return this.transloco.translate('auth.validation.passwordRequired');
    }

    return null;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    if (this.isLoading()) return;

    // TODO: Connect AuthService when the API is ready.

    this.router.navigate(['./']);
  }
}
