import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  public isLoading: boolean = false;

  constructor(
    public dialog: MatDialog,
    private pessoaService: PessoaService,
    private _snackBar: MatSnackBar
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
      this.findAll();
    });
  }

  public findAll() {
    this.isLoading = true;
    return this.pessoaService.findAll().subscribe( response => {
      setTimeout(() => {
        this.dataSource.data = response;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      }, 500);
    });
  }

  public deleteOne(codigo: number) {
    console.log("Remove One.....");
    return this.pessoaService.deleteOne(codigo).subscribe( response => {
      this.findAll();
      this.apresentarMensagemRemoveSucesso();
    });
  }

  private apresentarMensagemRemoveSucesso() {
    this._snackBar.open("Dados Deletados com Sucesso", "", {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'end', //'start' | 'center' | 'end' | 'left'
    });
  };

}
