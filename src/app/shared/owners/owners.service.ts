import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {
  public API = '//thawing-chamber-47973.herokuapp.com';
  public OWNERS_API = this.API + '/owners';

  constructor(private http: HttpClient) {}
  dataOwners: any = [];

  getOWNERS(): Observable<any> {
    return this.http.get(this.OWNERS_API).pipe(
      map((data: any) => {
        return data._embedded.owners;

      })
    );
  }
}
