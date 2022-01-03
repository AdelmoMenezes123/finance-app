import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/template/header/header.component';
import { FinanceReadComponent } from './components/finance/finance-read/finance-read.component';


import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { FinanceCrudComponent } from './view/finance-crud/finance-crud.component';
import { CreateComponent } from './components/usuario-crud/create/create.component';
import { LoginUserComponent } from './components/usuario-crud/login-user/login-user.component';
import {SampleGuardService} from './sample-guard.service';
import { FinanceCreateComponent } from './components/finance/finance-create/finance-create.component';
import { FinanceListagemComponent } from './components/finance/finance-listagem/finance-listagem.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FinanceReadComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    FinanceCrudComponent,
    CreateComponent,
    LoginUserComponent,
    FinanceCreateComponent,
    FinanceListagemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [SampleGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
