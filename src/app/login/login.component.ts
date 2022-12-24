import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // acno:any
  // psw:any

  // we are removing the above data because we are converting this to an model form

  // aim="Your perfect banking partner" /* method 1 */
  // data="enter acnum" /* method 2 */



  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) {

  }

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  ngOnInit(): void {
  }

  login() {
    var acno = this.loginForm.value.acno
    var psw = this.loginForm.value.psw


    if (this.loginForm.valid) {
      const result = this.ds.login(acno, psw) //here we passing argument as same as above / input taking from the user (ng model)

      if (result) {
        alert('login successfull')
        this.router.navigateByUrl('dashboard')
      }

    }
    else {
      alert('Invalid form')
    }



    //else case is already defined in the dataservice


  }



  // Method 4 >>  $Event Binding() >>used for accessing element

  // acnoChange(event:any){  //any used here because we dont know which type of data  is input by user

  //   this.acno=event.target.value
  //   // console.log(this.acno);



  // }
  // pswChange(event:any){
  //   this.psw=event.target.value
  //   // console.log(this.psw);


  // }
}
