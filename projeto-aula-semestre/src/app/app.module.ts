import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { VisualizarTarefasComponent } from './componentes/visualizar-tarefas/visualizar-tarefas.component';
import { VisualizarConsultasComponent } from './componentes/visualizar-consultas/visualizar-consultas.component'; // Importar o componente
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    PaginaInicialComponent,
    VisualizarTarefasComponent,
    VisualizarConsultasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
