import { AuthService } from './../auth.service';
import { Auth } from './../auth.model';
import { Component, OnInit } from '@angular/core';
// import { Usuario } from '../usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  public user: Auth = {
    login: '',
    senha: ''
  }
  
  constructor(private router: Router,private authService:AuthService) {}

  ngOnInit(): void {
  }

  entrar():void{
    this.authService.create(this.user).subscribe(() => {
      this.router.navigate(['/'])
    })
  }

  irCadastro():void{
    this.router.navigate(['/cadastrar'])
  }

}
