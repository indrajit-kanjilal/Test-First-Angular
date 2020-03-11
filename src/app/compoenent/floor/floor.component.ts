import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { MatRadioChange } from '@angular/material/radio';

import { getFloorPlanByTower } from '../../static/floorplan';

import { BuildingService } from '../../service/building.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit, OnDestroy {

  @Output() floorManualChange = new EventEmitter<string>();

  private floorListT1: Array<string>;
  private floorListT2: Array<string>;
  private floorListT3: Array<string>;

  private currentTower: number;
  private subscription: Subscription;

  constructor(private buildingService: BuildingService) {
    this.currentTower = 1;
    this.floorListT1 = getFloorPlanByTower(1);
    this.floorListT2 = getFloorPlanByTower(2);
    this.floorListT3 = getFloorPlanByTower(3);

    this.subscription = buildingService.towerUpdated$.subscribe(
      tower => {
        console.log(`inside floor component, changed ${tower}`);
        this.currentTower = Number(tower);
      });
  }

  getFloorList() {
    switch (this.currentTower) {
      case 1: return this.floorListT1;
      case 2: return this.floorListT2;
      case 3: return this.floorListT3;
    }
  }


    ngOnInit(): void {
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

    radioChange(event: MatRadioChange) {
      console.log(event.value);
      this.floorManualChange.emit(event.value);
    }

  }
