import { Component, OnInit } from '@angular/core';
import { OwnersService } from '../../shared/owners/owners.service';

@Component({
  selector: 'app-owners-create',
  templateUrl: './owners-create.component.html',
  styleUrls: ['./owners-create.component.css']
})
export class OwnersCreateComponent implements OnInit {

  constructor( private ownerServices: OwnersService ) { 
    this.ownerServices.getOWNERS();
  }

  ngOnInit() {
  }

}
