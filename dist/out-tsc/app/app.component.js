import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CardTopColorChangeAnim } from './animation/appcardtopcolor';
let AppComponent = class AppComponent {
    constructor() {
        this.isTowerSelected = false;
    }
    ngOnInit() {
        setTimeout(() => { this.isTowerSelected = true; }, 4000);
    }
    getIsTowerSelected() {
        return this.isTowerSelected;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        animations: [CardTopColorChangeAnim()]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map