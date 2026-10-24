import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { ArrowLeft, LucideAngularModule } from 'lucide-angular';

import { RegisterForm } from '../../features/auth/components/register-form/register-form';
import { Reveal } from '../../shared/directives/reveal';

@Component({
  selector: 'app-register',
  imports: [RouterLink, TranslocoPipe, LucideAngularModule, RegisterForm, Reveal],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  readonly ArrowLeft = ArrowLeft;
}
