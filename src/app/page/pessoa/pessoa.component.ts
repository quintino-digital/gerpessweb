import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PessoaCadastrarComponent } from './pessoa-cadastrar/pessoa-cadastrar.component';

const ELEMENT_DATA: any[] = [
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'Banco do Brasil', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'Mirante Tecnologia', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'José Quintino', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
  { nome: 'Priscila Mariano', tipoPessoa: 'Pessoa Física', dataCadastro: new Date() },
];

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['nome', 'tipoPessoa', 'dataCadastro', 'acoes'];

  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  constructor(
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator._intl.itemsPerPageLabel = "Itens por página: ";
    this.dataSource.sort = this.sort;
  }

  pesquisarDados(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public saveOne() {
    const dialogRef = this.dialog.open(PessoaCadastrarComponent, {
       width: '800px',
       height: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
