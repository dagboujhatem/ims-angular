import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() categoriesList: any []  = [];
  @Output() deleteEvent = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(index: number){
    // console.log(index); 
    this.deleteEvent.emit(index);
  }

}
