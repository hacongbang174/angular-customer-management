import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { Customer } from 'src/app/modals/Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customersUrl = 'https://dummyjson.com/users';
  constructor(private http: HttpClient) {}

  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl).pipe(
      tap((_) => console.log('fetched heroes')),
      catchError(this.handleError<Customer[]>('getCustomers', []))
    );
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get<Customer>(url).pipe(
      tap((_) => console.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Customer>(`getHero id=${id}`))
    );
  }
}
