import { Component, OnInit } from '@angular/core';
import { OwnersService } from '../../shared/owners/owners.service';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-owners-create',
  templateUrl: './owners-create.component.html',
  styleUrls: ['./owners-create.component.css']
})
export class OwnersCreateComponent implements OnInit {

  owner: any = {};
  id

  constructor( private ownerServices: OwnersService,private route: ActivatedRoute,
    private router: Router ) { 
    
  }

  ngOnInit() {
  }

  
  adicionarOwner(addOwner: NgForm){
    console.log(addOwner);
    this.ownerServices.saveOwner(addOwner).subscribe( (data :any)=>{
      this.gotoListOwner();
  }, error => console.error(error));
  }

  gotoListOwner() {
    this.router.navigate(['/propietarios']);
  }

 



}
