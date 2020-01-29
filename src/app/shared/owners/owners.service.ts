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

  constructor(private http: HttpClient) { }


  getOWNERS(): Observable<any> {
    return this.http.get(this.API + this.OWNERS_API).pipe(map(data => {
      console.log(data);
    }));
  }

}
