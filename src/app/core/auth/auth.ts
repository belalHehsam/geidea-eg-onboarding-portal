import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authenticatedState = signal(false);

  readonly isAuthenticated = this.authenticatedState.asReadonly();

  // Temporary demo method — replace with real API authentication.
  setDemoAuthenticated(value: boolean): void {
    this.authenticatedState.set(value);
  }
}
