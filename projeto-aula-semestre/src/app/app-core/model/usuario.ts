export class Usuario {
  id?: number;
  nome: string;
  idade: number;
  profissao: string;
  sexo: string;
  email: string;

  constructor(nome: string, idade: number, profissao: string, sexo: string, email: string, id?: number) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    this.sexo = sexo;
    this.email = email;
    this.id = id;
  }
}
