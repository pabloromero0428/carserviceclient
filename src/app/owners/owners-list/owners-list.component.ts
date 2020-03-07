import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { from } from "rxjs";
import { OwnersService } from "../../shared/owners/owners.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CarService } from "../../shared/car/car.service";

@Component({
  selector: "app-owners-list",
  templateUrl: "./owners-list.component.html",
  styleUrls: ["./owners-list.component.css"]
})
export class OwnersListComponent implements OnInit {
  OwnersUsers: any[] = [];
  cars: any[] = [];
  OwnerForID: any;
  UserEncontrado = false;
  referencia = "";

  constructor(
    private owners: OwnersService,
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService
  ) {
    this.owners.getOWNERS().subscribe((data: any) => {
      this.OwnersUsers = data;
      console.log(this.OwnersUsers);
    });
  }

  idData = [];

  ngOnInit() {}

  miDataInterior = [];

  agregar1(data: string) {
    this.miDataInterior.push(data);
  }

  quitar1(data) {
    this.miDataInterior = this.miDataInterior.filter(s => s !== data);
  }

  Eliminar() {
    console.log("//");
    console.log(this.miDataInterior);


    for (let index = 0; index < this.miDataInterior.length; index++) {
      this.referencia = this.miDataInterior[index]._links.self.href;
      this.owners.removeOwner(this.referencia).subscribe(
        result => {},
        error => console.error(error)
      );
      this.quitarRelacion(this.miDataInterior[index].dni);
    }
    this.miDataInterior = [];
    location.reload();
  }

  quitarRelacion(dni: string){
    this.carService.getAll().subscribe(data => {
      let cars = data;
      cars.forEach(carAux => {
        if (carAux.ownerDni == dni) {
          carAux.ownerDni = null;
          this.carService.save(carAux).subscribe(result => { }, error => console.error(error));
        }
      });
    });
  }

  gotoCreate() {
    this.router.navigate(["/Create-propietario"]);
  }

  verForId(idOwner: NgForm) {
    this.owners.getOWNERID(idOwner.value.idOwn).subscribe((data: any) => {
      this.OwnerForID = data._embedded.owners;
      console.log(this.OwnerForID);
    });
    //console.log(idOwner.value.idOwn)
  }



  gotoedit(dni) {
    this.owners.OwnerEdit = dni;
    this.owners.gotoeditOwner();
  }
}
