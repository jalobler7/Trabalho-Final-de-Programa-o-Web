import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-aula-semestre';

  constructor(private router: Router) {}

  showHeader(): boolean {
    return this.router.url !== '/login';
  }
}
