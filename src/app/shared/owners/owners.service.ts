import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class OwnersService {
  public API = "//thawing-chamber-47973.herokuapp.com";
  public OWNERS_API = this.API + "/owners";
  public OWNERS_APIID = this.OWNERS_API + "/search/findByDni?dni";

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  dataOwners: any = [];
  OwnerEdit = "";

  getOWNERS(): Observable<any> {
    return this.http.get(this.OWNERS_API).pipe(
      map((data: any) => {
        console.log(data);
        return data._embedded.owners;
      })
    );
  }

  getOWNERID(id: string) {
    return this.http.get(this.OWNERS_APIID + "=" + id);
  }

  getOWNERFORID(id: string) {
    return this.http.get(this.OWNERS_API + "/" + id);
  }

  editarOwner(owner: any, href: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.put(href, owner);
    return result;
  }

  saveOwner(owner: any): Observable<any> {
    let result: Observable<Object>;
    if (owner["href"]) {
      result = this.http.put(owner.href, owner);
    } else {
      result = this.http.post(this.OWNERS_API, owner);
    }
    return result;
  }

  removeOwner(dni: string) {
    return this.http.delete(dni);

  }

  gotoListOwner() {
    this.router.navigate(["/propietarios"]);
  }

  gotoeditOwner() {
    this.router.navigate(["/Edit-Prop"]);
  }
}
