import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { ArrowDown, ArrowRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TranslocoPipe, LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly ArrowDown = ArrowDown;
  readonly ArrowRight = ArrowRight;
}
