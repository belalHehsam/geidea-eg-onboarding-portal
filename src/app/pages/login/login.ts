import { Component } from '@angular/core';
import { LoginForm } from '../../features/auth/components/login-form/login-form';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ArrowLeft, Sparkles } from 'lucide-angular';
import { TranslocoPipe } from '@jsverse/transloco';
import { Reveal } from '../../shared/directives/reveal';

@Component({
  selector: 'app-login',
  imports: [LoginForm, RouterLink, LucideAngularModule, TranslocoPipe, Reveal],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  readonly ArrowLeft = ArrowLeft;
  readonly Sparkles = Sparkles;
}
