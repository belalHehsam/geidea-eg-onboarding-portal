import { Component } from '@angular/core';
import { LoginForm } from '../../features/auth/components/login-form/login-form';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ArrowLeft, ArrowRight, Sparkles } from 'lucide-angular';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-login',
  imports: [LoginForm, RouterLink, LucideAngularModule, TranslocoPipe],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  readonly ArrowLeft = ArrowLeft;
  readonly Sparkles = Sparkles;
}
