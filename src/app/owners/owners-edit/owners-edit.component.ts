import { Component, OnInit } from '@angular/core';
import { OwnersService } from '../../shared/owners/owners.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-owners-edit',
  templateUrl: './owners-edit.component.html',
  styleUrls: ['./owners-edit.component.css']
})
export class OwnersEditComponent implements OnInit {


  dni = "";
  OwnerForID: any = [];
  owner: any = {};
  constructor(private owners: OwnersService) {

    this.dni = this.owners.OwnerEdit;
    this.owners.getOWNERID(this.dni).subscribe((data: any) => {
      this.OwnerForID = data._embedded.owners;
      console.log(this.OwnerForID);
    });
  }

editOwner(editOwner: NgForm){
console.log(editOwner);
}

  ngOnInit() {
  }



}
