import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  acno:any
  psw:any

  // aim="Your perfect banking partner" /* method 1 */
  // data="enter acnum" /* method 2 */

  userDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:0},
    1001:{acno:1001,username:"anu",password:123,balance:0},
    1002:{acno:1002,username:"arun",password:123,balance:0},
    1003:{acno:1003,username:"mega",password:123,balance:0}
  }

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    // alert('login clicked')  /* method 3,event binding */
    var acno=this.acno
    var psw=this.psw
    var userDetails=this.userDetails

    if(acno in userDetails){

      if(psw==userDetails[acno]['password']){
        alert('Login successfully')
      }
      else{
        alert('incorrect Password')
      }
      
    }
    else{
      alert('User not excist')
    }
  
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
