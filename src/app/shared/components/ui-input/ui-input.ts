import { inputType, ChangeFn, TouchedFn } from './../../types';
import { Component, forwardRef, input, signal } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Eye, EyeOff, LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-ui-input',
  templateUrl: './ui-input.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInput),
      multi: true,
    },
  ],
  imports: [LucideAngularModule],
})
export class UiInput implements ControlValueAccessor {
  // Configuration from Parent
  readonly label = input('');
  readonly placeholder = input('');
  readonly type = input<inputType>('text');
  readonly icon = input<LucideIconData | null>(null);
  readonly showPasswordToggle = input(false);
  readonly autocomplete = input('');
  readonly error = input<string | null>(null);

  // for accessability
  readonly showPasswordLabel = input('Show password');
  readonly hidePasswordLabel = input('Hide password');
  // Icons used internally by UiInput
  readonly Eye = Eye;
  readonly EyeOff = EyeOff;

  // Internal State
  readonly value = signal('');
  readonly disabled = signal(false);
  readonly passwordVisible = signal(false);

  // Callbacks registered by Angular Forms
  private onChange: ChangeFn = () => {};
  private onTouched: TouchedFn = () => {};

  private static nextId = 0;

  readonly inputId = `ui-input-${UiInput.nextId++}`;

  readonly errorId = `${this.inputId}-error`;

  // Angular Forms -> UiInput
  writeValue(value: string | null): void {
    this.value.set(value ?? '');
  }

  // Angular Forms gives us the change callback
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // Angular Forms gives us the touched callback
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Angular Forms -> Disabled State
  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  // UiInput -> Angular Forms
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newValue = target.value;

    this.value.set(newValue);
    this.onChange(newValue);
  }

  // UiInput -> Angular Forms
  onBlur(): void {
    this.onTouched();
  }

  togglePasswordVisibility(): void {
    this.passwordVisible.update((visible) => !visible);
  }
}
