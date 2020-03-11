import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor() { }

  private towerUpdatedSource = new Subject<string>();
  private floorUpdatedSource = new Subject<string>();
  private wingUpdatedSource = new Subject<string>();

  towerUpdated$ = this.towerUpdatedSource.asObservable();
  floorUpdated$ = this.floorUpdatedSource.asObservable();
  wingUpdated$ = this.wingUpdatedSource.asObservable();

  towerUpdated(tower: string) {
    this.towerUpdatedSource.next(tower);
  }

  floorUpdated(floor: string) {
    this.floorUpdatedSource.next(floor);
  }

  wingUpdated(wing: string) {
    this.wingUpdatedSource.next(wing);
  }
}
