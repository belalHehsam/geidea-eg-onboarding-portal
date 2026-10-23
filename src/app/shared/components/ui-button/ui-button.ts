import { Component, input, output } from '@angular/core';
import { buttonType, ButtonVariant } from '../../types';

@Component({
  selector: 'app-ui-button',
  imports: [],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.css',
})
export class UiButton {
  readonly type = input<buttonType>('button');
  readonly disabled = input(false);

  readonly fullWidth = input(false);

  readonly variant = input<ButtonVariant>('primary');
  readonly buttonClicked = output<void>();

  onButtonClicked() {
    this.buttonClicked.emit();
  }
}
