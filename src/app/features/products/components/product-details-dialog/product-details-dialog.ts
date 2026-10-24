import { Component, inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

import { TranslocoPipe } from '@jsverse/transloco';
import { Check, X, LucideAngularModule } from 'lucide-angular';

import { Product } from '../../models/product.model';
import { UiButton } from '../../../../shared/components/ui-button/ui-button';

@Component({
  selector: 'app-product-details-dialog',
  standalone: true,
  imports: [TranslocoPipe, LucideAngularModule, UiButton],
  templateUrl: './product-details-dialog.html',
  styleUrl: './product-details-dialog.css',
})
export class ProductDetailsDialog {
  readonly product = inject<Product>(DIALOG_DATA);
  readonly dialogRef = inject(DialogRef);

  readonly Check = Check;
  readonly X = X;

  close(): void {
    this.dialogRef.close();
  }
}
