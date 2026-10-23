import { inputType, ChangeFn, TouchedFn } from './../../types';
import { Component, forwardRef, input, signal } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
})
export class UiInput implements ControlValueAccessor {
  // Configuration from Parent
  readonly label = input('');
  readonly placeholder = input('');
  readonly type = input<inputType>('text');

  // Internal State
  readonly value = signal('');
  readonly disabled = signal(false);

  // Callbacks registered by Angular Forms
  private onChange: ChangeFn = () => {};
  private onTouched: TouchedFn = () => {};

  private static nextId = 0;

  readonly inputId = `ui-input-${UiInput.nextId++}`;

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
}
