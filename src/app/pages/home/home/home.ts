import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-home',
  imports: [TranslocoPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
