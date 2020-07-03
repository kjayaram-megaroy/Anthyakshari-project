import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
public input1:any="";
public input2:any=""
public msg1:any=false
public msg2:any=false
  constructor() { }

  ngOnInit(): void {
   
  }
  valid(){
      if(this.input1==""){
        this.msg1=true
        alert("Please fill out ")
      }
      else{
        this.msg1=false
      }
      if(this.input2==""){
        this.msg2=true
        alert("Please fill out ")
      } else{
        this.msg2=false
      }
  }

}
