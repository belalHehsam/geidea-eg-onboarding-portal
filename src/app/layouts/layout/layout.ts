import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { Navbar } from '../public-layout/navbar/navbar';

@Component({
  selector: 'app-layout',
  imports: [Navbar, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
