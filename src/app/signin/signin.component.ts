import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Data } from '../providers/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
userForm:FormGroup;

  constructor(public data: Data) { }

  ngOnInit(): void {

    this.userForm=new FormGroup({
      name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.maxLength(10)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      phn:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')])
    });
  }

   get name(){return this.userForm.get('name')}
   get email(){return this.userForm.get('email')}
   get phn(){return this.userForm.get('phn')}

  onSubmit(){
    this.data.name=this.name;
    this.data.email=this.email;
    this.data.number=this.phn;


    
  }
  
  
}
