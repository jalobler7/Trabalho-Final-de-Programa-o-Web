import { Component } from '@angular/core';
import { Usuario } from '../../app-core/model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: Usuario = new Usuario('', 0, '', '', '');

  constructor(private router: Router) {}

  onSubmit() {
    console.log(this.usuario);
    // Navegar para a página inicial após login bem-sucedido
    this.router.navigate(['/pagina-inicial']);
  }
}
