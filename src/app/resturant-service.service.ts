import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ResturantServiceService {

  constructor(private http: HttpClient) { 
   
  }
 
  private apiUrl = 'http://localhost:3000/save';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
   }
  addRestuaraant(data): Observable<any> {
    return this.http.post(this.apiUrl, data, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
   
       private handleError<T> (operation = 'operation', result?: T) {
         return (error: any): Observable<T> => {
       
           // TODO: send the error to remote logging infrastructure
           console.error(error); // log to console instead
       
           // TODO: better job of transforming error for user consumption
           console.log(`${operation} failed: ${error.message}`);
       
           // Let the app keep running by returning an empty result.
           return of(result as T);
         };
       }
 
}
