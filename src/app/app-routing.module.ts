import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaComponent } from './page/pessoa/pessoa.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "pessoa" },
  { path: "pessoa", component: PessoaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
