import { Injectable ,signal } from '@angular/core';

type Theme ='light' |'dark';

@Injectable({
  providedIn: 'root',
})

export class ThemeService  {
  readonly theme = signal<Theme>('light');
  constructor(){
    const savedTheme= localStorage.getItem("theme");
    this.setTheme(
      savedTheme==='dark' ?'dark' :'light'
    )
  }

  toggleTheme():void{
    const nextTheme=this.theme() ==='light'?'dark':'light';
    this.setTheme(nextTheme);
  }
  
  setTheme(theme:Theme):void{
    this.theme.set(theme)
    document.documentElement.classList.toggle('dark',theme==='dark')
    localStorage.setItem('theme', theme);
  }
}
