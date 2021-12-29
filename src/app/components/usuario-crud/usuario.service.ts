import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient,private snackBar: MatSnackBar,) { }
  url = 'http://localhost:3001';

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: "top",
    })
  }

  create(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}/cadastrar/user`, user)
  }
}