import { Component, OnInit } from '@angular/core';
import { CardTopColorChangeAnim } from './animation/appcardtopcolor';

import { BuildingService } from './service/building.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [CardTopColorChangeAnim()],
  providers: [BuildingService]
})


export class AppComponent  implements OnInit {

  private towerSelected: boolean;

  constructor(private buildingService: BuildingService) {
    this.towerSelected = false;
  }

  ngOnInit(): void {

  }

  towerUpdated(tower: string) {
    this.towerSelected = !this.towerSelected;
    this.buildingService.towerUpdated(tower);
  }

  getIsTowerSelected() {
    return this.towerSelected;
  }
}
