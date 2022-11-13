import { MatSnackBar } from '@angular/material/snack-bar';
import { PessoaService } from './../../../service/pessoa.service';
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

  public pessoaList: any[] = [];

  public isLoading: boolean = false;

  public isSpinner: boolean = false;

  public tipoPessoaList: any[] = [
    { codigo: 1, descricao: 'Pessoa Física' },
    { codigo: 2, descricao: 'Pessoa Jurídica' },
  ];

  constructor(
    public dialogRef: MatDialogRef<PessoaCadastrarComponent>,
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private _snackBar: MatSnackBar
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
      tipoPessoa: {
        codigo: this.formGroup.value.codigoTipoPessoa,
      }
    };
    this.isLoading = true;
    this.isSpinner = true;
    return this.pessoaService.saveOne(pessoaRequestDTO).subscribe( response => {
      setTimeout(() => {
        this.isLoading = false;
        this.isSpinner = false;
        this.pessoaService.findAll();
      }, 2000);
      this.apresentarMensagemRemoveSucesso();
    });
  }

  public cancelarCadastro() {
    this.dialogRef.close();
  }

  private apresentarMensagemRemoveSucesso() {
    this._snackBar.open("Dados Cadastrados com Sucesso", "", {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'end', //'start' | 'center' | 'end' | 'left'
    });
  };

}
