import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentacno: any
  currentuser:any //to store login  details of login user

  //______________________________________________________________________________________________________


  //redentent data

  userDetails: any = {
    1000: { acno: 1000, username: "amal", password: 123, balance: 0, transaction: [] },
    1001: { acno: 1001, username: "anu", password: 123, balance: 0, transaction: [] },
    1002: { acno: 1002, username: "arun", password: 123, balance: 0, transaction: [] },
    1003: { acno: 1003, username: "mega", password: 123, balance: 0, transaction: [] }
  }
  

  constructor() { 
    this.getData()
  }

  //______________________________________________________________________________________________________

  //  Data base

  saveData(){

   if (this.userDetails) {
    localStorage.setItem('database',JSON.stringify(this.userDetails))   
   }

   if(this.currentuser){
    localStorage.setItem('currentUser',JSON.stringify(this.currentuser))
   } 

   if (this.currentacno) {
    localStorage.setItem('currentAcno',JSON.stringify(this.currentacno))
    
   }

  }

  //______________________________________________________________________________________________________

  getData(){
    if (localStorage.getItem('database')) {
      this.userDetails=JSON.parse(localStorage.getItem('database')||'')//here empty string is used here sometime  we may not be able to
      // get data so we used an empty string  otherwise it will show an error so we use this format
      
    }
    
  }

  //______________________________________________________________________________________________________

  register(acno: any, username: any, password: any) { //register(passing datas ,key name){}

    var userDetails = this.userDetails

    if (acno in userDetails) {
      return false
    }

    else {
      userDetails[acno] = { acno, username, password, balance: 0, transaction: [] }
      this.saveData()//database stogae

      return true
    }

    

  }
  //______________________________________________________________________________________________________

  login(acno: any, psw: any) {  //argument upto our wish no previous relation considered , it is used to take the elemnts from the input/ngmodel


    
    var userDetails = this.userDetails

    this.currentuser=userDetails[acno]['username']  // display on dashboard welcome


    if (acno in userDetails) {  //acno same as login arguments

      if (psw == userDetails[acno]['password']) {  //confirm the name are same as in login aguments
        this.currentacno = acno //transaction
        this.saveData()   //data base
        return true
      }
      else {
        alert('Incorrect Password')
        return false
      }

    }
    else {
      alert('User not exist')
      return false
    }

  }

  //______________________________________________________________________________________________________

  deposit(acno: any, psw: any, amnt: any) {
    let userDetails = this.userDetails
    var amount = parseInt(amnt) //to convert amount in string to integer cuz amount is taken from the input so it must be an string

    if (acno in userDetails) {

      if (psw == userDetails[acno]['password']) {

        userDetails[acno]['balance'] += amount

        //add deposit details in transaction array
        userDetails[acno]['transaction'].push({type:'credit',amount})
        this.saveData()
        return userDetails[acno]['balance']
      }

      else {

        alert(' Incorrect password')
        return false
      }

    }

    else {

      alert('Incorrect username')
      return false
    }



  }

    //______________________________________________________________________________________________________

  withdraw(acno: any, psw: any, amnt: any) {
    let userDetails = this.userDetails
    var amount = parseInt(amnt) //to convert amount in string to integer cuz amount is taken from the input so it must be an string

    if (acno in userDetails) {

      if (psw == userDetails[acno]['password']) {

        if (amount <= userDetails[acno]['balance']) {
          userDetails[acno]['balance'] -= amount

          // add withdraw details in transaction array
          userDetails[acno]['transaction'].push({type:'Debit',amount})
          this.saveData()
          return userDetails[acno]['balance']
          
        }
        else{
          alert('Insufficient Balance')
          return false
        }

      }

      else {

        alert(' Incorrect password')
        return false
      }

    }

    else {

      alert('Incorrect username')
      return false
    }


  }

    //______________________________________________________________________________________________________

  getTransaction(acno:any){

    return this.userDetails[acno]['transaction']

  }









}
