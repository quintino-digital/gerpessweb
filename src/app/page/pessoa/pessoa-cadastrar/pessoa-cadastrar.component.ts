import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pessoa-cadastrar',
  templateUrl: './pessoa-cadastrar.component.html',
  styleUrls: ['./pessoa-cadastrar.component.css']
})
export class PessoaCadastrarComponent implements OnInit {

  public tipoPessoaList: any[] = [
    { codigo: 1, descricao: 'Pessoa Física' },
    { codigo: 2, descricao: 'Pessoa Jurídica' },
  ];

  constructor(
    public dialogRef: MatDialogRef<PessoaCadastrarComponent>,
  ) { }

  ngOnInit(): void { }

  public salveOne() {

  }

  public cancelarCadastro() {
    this.dialogRef.close();
  }

}
