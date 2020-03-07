import { Component, OnInit } from "@angular/core";
import { OwnersService } from "../../shared/owners/owners.service";
import { NgForm, FormBuilder, FormsModule, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-owners-edit",
  templateUrl: "./owners-edit.component.html",
  styleUrls: ["./owners-edit.component.css"]
})
export class OwnersEditComponent implements OnInit {
  dni = "";
  OwnerForID: any = {};
  hrefOwner = "";
  subOwner: any = {};
  sub: Subscription;
  owner: any = {};
  tamañohref: number;

  idOwner = "";

  constructor(
    private owners: OwnersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.dni = this.owners.OwnerEdit;
    this.owners.getOWNERID(this.dni).subscribe((data: any) => {
      this.subOwner = data._embedded.owners[0];
      this.hrefOwner = this.subOwner._links.self.href;

      this.tamañohref = this.hrefOwner.length;

      var i = this.tamañohref;
      var identificador: boolean = false;

      while (identificador == false || i == 0) {
        const letra = this.hrefOwner.charAt(i);
        if (letra == "/") {
          identificador = true;
          i = i + 1;
          this.idOwner = this.hrefOwner.substring(i, this.tamañohref);
          console.log("id = " + this.idOwner);
        } else {
          i = i - 1;
        }
      }

      console.log("owner id" + this.idOwner);
      if (this.idOwner) {
        this.owners.getOWNERFORID(this.idOwner).subscribe((data: any) => {
          if (data) {
            this.OwnerForID = data;
            console.log("//");
            console.log(this.OwnerForID);
          } else {
            console.log(
              `Car with id '${this.idOwner}' not found, returning to list`
            );
          }
        });
      }
    });
  }

  editOwner(editOwner: NgForm) {
    console.log(editOwner);
    this.owners.editarOwner(editOwner, this.hrefOwner ).subscribe(
      (data: any) => {
        this.owners.gotoListOwner();
      },
      error => console.error(error)
    );
  }

  ngOnInit() {}
}
