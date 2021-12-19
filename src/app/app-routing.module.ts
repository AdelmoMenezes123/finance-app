import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { FinanceCrudComponent } from './view/finance-crud/finance-crud.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "cadastrar",
    component: CadastroComponent
  },
  {
    path: "finances",
    component: FinanceCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
