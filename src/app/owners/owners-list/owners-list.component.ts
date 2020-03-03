import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { OwnersService } from '../../shared/owners/owners.service';


@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.css']
})
export class OwnersListComponent implements OnInit {


  OwnersUsers: any[] = [];
  OwnerForID: any[] = [];
  idOwner = '';
  constructor(private owners: OwnersService) {


    this.owners.getOWNERS().subscribe((data: any) =>{
      this.OwnersUsers = data;
      console.log(this.OwnersUsers);
    });

    


  }

  ngOnInit() {}


  verForId(){
    this.owners.getOWNERID(this.idOwner).subscribe((data: any)=>{
      this.OwnerForID = data;
      console.log(this.OwnersUsers);
       });
  }
}
