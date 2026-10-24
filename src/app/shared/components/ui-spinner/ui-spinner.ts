import { Component, input } from '@angular/core';
import { spinnerSize } from '../../types';

@Component({
  selector: 'app-ui-spinner',
  imports: [],
  templateUrl: './ui-spinner.html',
  styleUrl: './ui-spinner.css',
})
export class UiSpinner {
  readonly size = input<spinnerSize>('md');
}
