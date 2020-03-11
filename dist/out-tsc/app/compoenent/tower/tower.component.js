import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
let TowerComponent = class TowerComponent {
    constructor() {
        this.towerManualChange = new EventEmitter();
    }
    ngOnInit() {
    }
    radioChange(event) {
        console.log(event.value);
        this.towerManualChange.emit();
    }
};
__decorate([
    Output()
], TowerComponent.prototype, "towerManualChange", void 0);
TowerComponent = __decorate([
    Component({
        selector: 'app-tower',
        templateUrl: './tower.component.html',
        styleUrls: ['./tower.component.css']
    })
], TowerComponent);
export { TowerComponent };
//# sourceMappingURL=tower.component.js.map