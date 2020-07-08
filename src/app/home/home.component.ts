import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public hideleftnav:any=false
  constructor() { }

  ngOnInit(): void {
  }
  liftnav(){
    
this.hideleftnav = !this.hideleftnav
  }

}
