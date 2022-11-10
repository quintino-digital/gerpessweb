import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PessoaService } from '../../service/pessoa.service';
import { PessoaCadastrarComponent } from './pessoa-cadastrar/pessoa-cadastrar.component';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['nome', 'tipoPessoa', 'acoes'];

  dataSource = new MatTableDataSource<any>();

  constructor(
    public dialog: MatDialog,
    private pessoaService: PessoaService
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.findAll();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator._intl.itemsPerPageLabel = "Itens por página: ";
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

  public findAll() {
    return this.pessoaService.findAll().subscribe( response => {
      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
