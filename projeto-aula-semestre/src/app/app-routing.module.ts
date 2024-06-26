import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { VisualizarTarefasComponent } from './componentes/visualizar-tarefas/visualizar-tarefas.component';
import { VisualizarConsultasComponent } from './componentes/visualizar-consultas/visualizar-consultas.component'; // Importar o componente
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'pagina-inicial', component: PaginaInicialComponent },
  { path: 'visualizar-tarefas', component: VisualizarTarefasComponent },
  { path: 'visualizar-consultas', component: VisualizarConsultasComponent } // Adicionar a rota
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
