import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-reusecode',
  templateUrl: './homepage-reusecode.component.html',
  styleUrls: ['./homepage-reusecode.component.scss']
})
export class HomepageReusecodeComponent implements OnInit {

  public hideleftnav:any=false
  constructor() { }

  ngOnInit(): void {
  }
  liftnav(){
    
this.hideleftnav = !this.hideleftnav
  }

}
