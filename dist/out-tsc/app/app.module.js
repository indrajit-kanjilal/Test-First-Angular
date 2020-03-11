import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { TowerComponent } from './compoenent/tower/tower.component';
import { FloorComponent } from './compoenent/floor/floor.component';
import { WingComponent } from './compoenent/wing/wing.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            TowerComponent,
            FloorComponent,
            WingComponent
        ],
        imports: [
            FlexLayoutModule,
            BrowserModule,
            BrowserAnimationsModule,
            MaterialModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map