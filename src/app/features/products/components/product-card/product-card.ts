import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';
import { UiButton } from '../../../../shared/components/ui-button/ui-button';
import { TranslocoPipe } from '@jsverse/transloco';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-product-card',
  imports: [UiButton, TranslocoPipe, Reveal],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  readonly product = input.required<Product>();

  readonly selected = output<string>();
  readonly detailsRequested = output<string>();

  onSelect(): void {
    this.selected.emit(this.product().id);
  }

  onDetails(): void {
    this.detailsRequested.emit(this.product().id);
  }
}
