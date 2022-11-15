import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname:any
  acno:any
  psw:any

  constructor(private ds:DataService , private router:Router) { } //(access specifier variable name:class name)
  

  ngOnInit(): void {
  }

  register(){
    var uname=this.uname
    var acno=this.acno
    var psw=this.psw

    const result=this.ds.register(acno,uname,psw)

    if(result){ //here it is similar to if(result==true)
      alert("successfully Registered")
      this.router.navigateByUrl('')
      
    }
    else{
      alert('User already excist')
      this.router.navigateByUrl('')
      
    }
    
    

    
  }

}
