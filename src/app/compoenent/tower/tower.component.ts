import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.css']
})
export class TowerComponent implements OnInit {

  @Output() towerManualChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  radioChange(event: MatRadioChange) {
    // console.log(event.value);
    this.towerManualChange.emit(event.value);
  }

}
