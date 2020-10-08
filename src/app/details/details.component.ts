import { Component, OnInit } from '@angular/core';
import { Data } from '../providers/data.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  name:any;newid;newEmail;newPhone;newName;
  email:any;
  phn:any;
  users$:any
  value:any='';
  uid:any;
  uname:any;
  uemail:any;
  uphne:any;

  constructor(public data:Data) { }

  ngOnInit(): void {

    this.data.getData().subscribe(
      data=>this.users$=data
    )

    this.name=this.data.name;
    this.email=this.data.email;
    this.phn=this.data.number;
    
  }

  editButton(val){

    this.value=val;
  }

  saveButton(id,name,email,phne){

    this.value='';
    this.uid=id;
    this.uname=name;
    this.uemail=email;
    this.uphne=phne;

    

  }
  public addRow(): void {
    this.users$.push({id:this.newid, name:this.newName, email:this.newEmail, phone:this.newPhone});
   }

}
