import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})
export class FactService {

  constructor(private http: HttpClient) { }

  public getFacts(): Observable<any> {
    // Full updated data return this.http.get<any>('https://cat-fact.herokuapp.com/facts');
    return this.http.get<any>('http://vincentperrin.com/powercoders/cat-facts.json'); // static subset
  }
}
