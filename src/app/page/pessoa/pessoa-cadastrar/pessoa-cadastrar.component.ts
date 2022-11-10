import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pessoa-cadastrar',
  templateUrl: './pessoa-cadastrar.component.html',
  styleUrls: ['./pessoa-cadastrar.component.css']
})
export class PessoaCadastrarComponent implements OnInit {

  public formGroup: FormGroup;

  public tipoPessoaList: any[] = [
    { codigo: 1, descricao: 'Pessoa Física' },
    { codigo: 2, descricao: 'Pessoa Jurídica' },
  ];

  constructor(
    public dialogRef: MatDialogRef<PessoaCadastrarComponent>,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      nome: ["", Validators.required],
      codigoTipoPessoa: ["", Validators.required],
    });
  }

  ngOnInit(): void { }

  public saveOne() {
    if(this.formGroup.invalid) {
      return;
    }
    const pessoaRequestDTO = {
      nome: this.formGroup.value.nome,
      codigoTipoPessoa: this.formGroup.value.codigoTipoPessoa,
    };
    console.log(pessoaRequestDTO);

  }

  public cancelarCadastro() {
    this.dialogRef.close();
  }

}
