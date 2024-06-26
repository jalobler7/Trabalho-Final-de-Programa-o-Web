import { Component, OnInit } from '@angular/core';
import { ConsultaMedicaService } from '../../app-core/servicos/consulta-medica.service';
import { ConsultaMedica } from '../../app-core/model/ConsultaMedica';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-visualizar-consultas',
  templateUrl: './visualizar-consultas.component.html',
  styleUrls: ['./visualizar-consultas.component.css']
})
export class VisualizarConsultasComponent implements OnInit {

  consultas: ConsultaMedica[] = [];
  consultaVisualizar: ConsultaMedica | null = null;
  form: FormGroup;

  constructor(private consultaService: ConsultaMedicaService,
              private fb: FormBuilder) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      data: ['', Validators.required],
      nomePaciente: ['', Validators.required],
      descricao: ['', Validators.required],
      id: [0],
      imagem: ['']
    });
  }

  openModal() {
    $('#add-consulta').modal('show');
  }

  closeModal() {
    $('#add-consulta').modal('hide');
  }

  salvarForm() {
    if (this.form.valid) {
      const novaConsulta: ConsultaMedica = new ConsultaMedica(
        this.form.value.titulo,
        this.form.value.data,
        this.form.value.nomePaciente,
        this.form.value.descricao,
        undefined,
        this.form.value.imagem
      );
      this.consultaService.adicionarConsulta(novaConsulta).then(
        resposta => {
          Swal.fire('Sucesso', 'Consulta salva com sucesso!', 'success');
          this.form.reset();
          this.closeModal();
          this.listarConsultas();
        },
        error => {
          Swal.fire('Erro', 'Não foi possível salvar a consulta, tente novamente mais tarde', 'error');
          console.error(error);
        }
      );
    } else {
      Swal.fire('Atenção', 'Alguns campos do formulário não estão corretos.', 'warning');
      this.marcarTodosComoClicados();
    }
  }

  isCampoValido(inputNome: string): boolean {
    const campo: any = this.form.get(inputNome);
    return campo && campo.touched && campo.invalid;
  }

  marcarTodosComoClicados() {
    Object.values(this.form.controls).forEach(campo => {
      campo.markAsTouched();
    });
  }

  listarConsultas() {
    this.consultaService.buscarConsultas().then(resposta => {
      this.consultas = resposta;
    });
  }

  setConsultaAtual(consulta: ConsultaMedica) {
    this.consultaVisualizar = consulta;
  }

  excluirConsulta(id: number) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar consulta!',
      confirmButtonColor: '#3085d6'
    }).then((tipoBotao) => {
      if (tipoBotao.isConfirmed) {
        this.consultaService.removerConsulta(id).then(() => {
          Swal.fire('Deletado!', 'A consulta foi deletada.', 'success');
          this.listarConsultas();
        }, error => {
          Swal.fire('Erro!', 'A consulta não foi deletada.', 'error');
          console.error(error);
        });
      }
    });
  }

  submitForm() {
    if (this.form.value.id > 0) {
      this.editarForm();
    } else {
      this.salvarForm();
    }
  }

  carregarDadosConsulta(consulta: ConsultaMedica) {
    this.form.patchValue({
      titulo: consulta.titulo,
      data: consulta.data,
      nomePaciente: consulta.nomePaciente,
      descricao: consulta.descricao,
      id: consulta.id,
      imagem: consulta.imagem
    });
    this.openModal();
  }

  editarForm() {
    if (this.form.valid) {
      const editarConsulta: ConsultaMedica = new ConsultaMedica(
        this.form.value.titulo,
        this.form.value.data,
        this.form.value.nomePaciente,
        this.form.value.descricao,
        this.form.value.id,
        this.form.value.imagem
      );
      this.consultaService.atualizarConsulta(this.form.value.id, editarConsulta).then(
        resposta => {
          Swal.fire('Sucesso!', 'Consulta editada com sucesso.', 'success');
          this.form.reset();
          this.closeModal();
          this.listarConsultas();
        },
        error => {
          Swal.fire('Erro!', 'Não foi possível editar a consulta.', 'error');
          console.error(error);
        }
      );
    } else {
      Swal.fire('Atenção!', 'Alguns campos estão incorretos.', 'warning');
      this.marcarTodosComoClicados();
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        this.form.patchValue({ imagem: loadEvent?.target?.result });
      };
      reader.readAsDataURL(file);
    }
  }

  ngOnInit(): void {
    this.listarConsultas();
  }

}
