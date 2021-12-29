import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service'
import { Router } from '@angular/router';
import { Usuario, Data } from '../usuario.model'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public user: Usuario = {
    nome: '',
    sobrenome: '',
    login: '',
    senha: ''
  }

  constructor(private userService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.userService.create(this.user).subscribe((data) => {
      this.userService.showMessage("Cadastrado com sucesso!")
      this.router.navigate(['/login'])
    })
  }

  irLogin(): void {
    this.router.navigate(['/login'])
  }

}
