import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matching-room',
  templateUrl: './matching-room.component.html',
  styleUrls: ['./matching-room.component.scss']
})
export class MatchingRoomComponent implements OnInit {

  public hideleftnav:any=false
  constructor() { }

  ngOnInit(): void {
  }
  liftnav(){
    
this.hideleftnav = !this.hideleftnav
  }

}
