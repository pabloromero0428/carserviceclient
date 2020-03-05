import { Component, OnInit } from '@angular/core';
import { OwnersService } from '../../shared/owners/owners.service';
import { NgForm, FormBuilder, FormsModule, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-owners-edit',
  templateUrl: './owners-edit.component.html',
  styleUrls: ['./owners-edit.component.css']
})


export class OwnersEditComponent implements OnInit {


  dni = "";
  OwnerForID: any = {};
  hrefOwner: any = {};
  subOwner: any = {};
  sub: Subscription;
  owner: any = {};

  constructor(private owners: OwnersService, private route: ActivatedRoute,
    private router: Router, ) {

     this.dni = this.owners.OwnerEdit;
     this.owners.getOWNERID(this.dni).subscribe((data: any) => {
       this.subOwner = data._embedded.owners[0];
       this.hrefOwner = this.subOwner._links.self.href

       console.log("este es el owner")
       console.log(this.hrefOwner);
     });



     this.sub = this.hrefOwner.params.subscribe(params => {
       const a= this.sub;
       
      //  const id = params['id'];
      const id = '24';
       if (id) {
         this.owners.getOWNERFORID(id).subscribe((data: any) => {
           if (data) {
             this.OwnerForID = data;
             console.log("//");
             console.log(this.OwnerForID);
           } else {
             console.log(`Car with id '${id}' not found, returning to list`);
           }
         });
       }
     });
  }

  editOwner(editOwner: NgForm) {
    //console.log(editOwner);
  }

  ngOnInit() {




  }



}
