import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-online',
  templateUrl: './complete-online.component.html',
  styleUrls: ['./complete-online.component.scss']
})
export class CompleteOnlineComponent implements OnInit {

  public hideleftnav:any=false
  constructor() { }

  ngOnInit(): void {
  }
  liftnav(){
    
this.hideleftnav = !this.hideleftnav
  }

}
