import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  login(){
    var acno=this.acno
    var psw=this.psw

    const result =this.ds.login(acno,psw) //here we passing argument as same as above / input taking from the user (ng model)

    if(result){
      alert('login successfull')
      this.router.navigateByUrl('dashboard')
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
