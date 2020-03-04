import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';
import { OwnersService } from '../../shared/owners/owners.service';


@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.css']
})
export class OwnersListComponent implements OnInit {


  OwnersUsers: any[] = [];
  OwnerForID: any;  
  UserEncontrado = false;
  idOwner = '';
  constructor(private owners: OwnersService) {


    this.owners.getOWNERS().subscribe((data: any) =>{
      this.OwnersUsers = data;
      console.log(this.OwnersUsers);
    });

    


  }

  ngOnInit() {}


  verForId(idOwner: NgForm){
    this.owners.getOWNERID(idOwner.value.idOwn).subscribe((data: any)=>{
      
      this.OwnerForID = data._embedded.owners;
      console.log(this.OwnerForID );
       });
       //console.log(idOwner.value.idOwn)
  }
}
