import { Company } from './../models/company';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  url = 'https://api.helena.app/test/api/Company';

  constructor(private httpClient: HttpClient) { }

  // Header Options
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // GET de todas as companhias
  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.url).pipe(
      retry(2),
      catchError(this.handleError
      ));
  }

  // GET de companhia isolada
  getCarById(id: number): Observable<Company> {
    return this.httpClient.get<Company>(this.url + '/' + id)
      .pipe(retry(2),
        catchError(this.handleError
        ));
  }

  // POST de uma nova comapnhia
  saveCar(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(this.url, JSON.stringify(company), this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  // UPDATE de uma companhia existente
  updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(this.url + '/' + company.id, JSON.stringify(company), this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // DELETE de uma companhia existente
  deleteCompany(company: Company){
    return this.httpClient.delete<Company>(this.url + '/' + company.id, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Método que trata os erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, mensagem ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
