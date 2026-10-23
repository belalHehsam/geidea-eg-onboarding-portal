import { Component, inject } from '@angular/core';
import { UiButton } from '../../shared/components/ui-button/ui-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [UiButton],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly router = inject(Router);

  goHome() {
    this.router.navigate(['./']);
  }
}
