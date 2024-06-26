import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { ConsultaMedica } from '../model/ConsultaMedica';

@Injectable({
  providedIn: 'root'
})
export class ConsultaMedicaService extends Dexie {
  consultas: Dexie.Table<ConsultaMedica, number>;

  constructor() {
    super('ConsultaMedicaDB');
    this.version(1).stores({
      consultas: '++id, titulo, data, nomePaciente, descricao, imagem'
    });
    this.consultas = this.table('consultas');
  }

  async adicionarConsulta(consulta: ConsultaMedica): Promise<number> {
    return await this.consultas.add(consulta);
  }

  async buscarConsultas(): Promise<ConsultaMedica[]> {
    return await this.consultas.toArray();
  }

  async removerConsulta(id: number): Promise<void> {
    return await this.consultas.delete(id);
  }

  async atualizarConsulta(id: number, consulta: ConsultaMedica): Promise<number> {
    return await this.consultas.update(id, consulta);
  }
}
