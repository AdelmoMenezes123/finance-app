import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Auth } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://backend-finance.herokuapp.com/login';
  public token: string;

  constructor(private http: HttpClient, private router:Router) {
    const currentUser = localStorage.getItem('currentUser');
    
    this.token = currentUser && JSON.parse(currentUser).token;
  }


  create(userModel: Auth): Observable<Auth> {
    return this.http.post<any>(`${this.url}`, userModel)
      .pipe(
        map(user => {
          let teste = user.token || null
          if (user && teste) {
            // armazenar detalhes do usuário e token jwt no localStorage para manter o usuário logado entre as atualizações da página
            localStorage.setItem('currentUser', JSON.stringify(user.token));
          }
          return user
        })
      )
  }

  logout(): void {
    // Limpa o token removendo o usuário do local store para efetuar o logout
    this.token = "";
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login'])
  }
}
