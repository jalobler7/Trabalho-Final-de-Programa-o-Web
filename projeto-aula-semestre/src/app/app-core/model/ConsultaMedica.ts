export class ConsultaMedica {
  id?: number;
  titulo: string;
  data: string;
  nomePaciente: string;
  descricao: string;
  imagem?: string;

  constructor(titulo: string, data: string, nomePaciente: string, descricao: string, id?: number, imagem?: string) {
    this.titulo = titulo;
    this.data = data;
    this.nomePaciente = nomePaciente;
    this.descricao = descricao;
    this.id = id;
    this.imagem = imagem;
  }
}
