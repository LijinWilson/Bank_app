import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname: any
  acno: any
  psw: any

  constructor(private ds: DataService, private router: Router, private formbuilder: FormBuilder) {
    //(access specifier variable name:class name) form builder for form validation


  }
  //  => validation
  //create register form model  =>it should contain an group ,array ,controller  
  registerForm = this.formbuilder.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })


  ngOnInit(): void {
  }

  register() {
    // var uname=this.uname
    // var acno=this.acno
    // var psw=this.psw
    
    //  form validation
    // we are removing while using form validation

    var uname = this.registerForm.value.uname   //now we are taking the values from the inside the registerForm so we modified the data taking method
    var acno = this.registerForm.value.acno
    var psw = this.registerForm.value.psw


    if (this.registerForm.valid) {
      const result = this.ds.register(acno, uname, psw)
      if (result) { //here it is similar to if(result==true)
        alert("successfully Registered")
        this.router.navigateByUrl('')

      }
      else {
        alert('User already excist')
        this.router.navigateByUrl('')

      }


    }

    else {
      alert('Inavlid Form')
    }






  }

}
