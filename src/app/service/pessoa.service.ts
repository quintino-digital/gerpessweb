import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public findAll() : Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.BASE_PESSOA_API}/api/v1/pessoa`);
  }

  public saveOne(pessoaRequestDTO: any) : Observable<any> {
    return this.httpClient.post(`${environment.BASE_PESSOA_API}/api/v1/pessoa`, pessoaRequestDTO);
  }

}
