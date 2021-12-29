import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  public user: Usuario = {
    nome: '',
    sobrenome: '',
    login: '',
    senha: ''
  }
  
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  entrar():void{
    console.log(this.user)
  }

  irCadastro():void{
    this.router.navigate(['/cadastrar'])
  }

}
