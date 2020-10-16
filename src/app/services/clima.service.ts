import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ClimaDefault, ClimaSubmit } from '../models/clima';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  url = 'http://localhost:5000/'; 

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  saveClimaDefault(climaDefault: ClimaDefault): Observable<ClimaDefault> {
    return this.httpClient.post<ClimaDefault>(this.url, JSON.stringify(climaDefault), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  saveClima(climaSubmit: ClimaSubmit): Observable<ClimaSubmit> {
    return this.httpClient.post<ClimaSubmit>(this.url, JSON.stringify(climaSubmit), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
