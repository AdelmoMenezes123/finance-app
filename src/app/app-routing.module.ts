import { FinanceCreateComponent } from './components/finance/finance-create/finance-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { FinanceCrudComponent } from './view/finance-crud/finance-crud.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { SampleGuardService } from './sample-guard.service'

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "cadastrar",
    component: CadastroComponent
  },
  {
    path: "",
    component: HomeComponent,
    canActivate: [SampleGuardService]
  },
  {
    path: "finances",
    component: FinanceCrudComponent,
    canActivate: [SampleGuardService]
  },
  {
	  path:"add-finance",
	  component:FinanceCreateComponent,
	  canActivate:[SampleGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
