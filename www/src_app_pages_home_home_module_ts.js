"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _street_lighting_report_street_lighting_report_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../street-lighting-report/street-lighting-report.module */ 157);
/* harmony import */ var _street_lighting_report_street_lighting_report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../street-lighting-report/street-lighting-report.page */ 3474);
/* harmony import */ var _water_water_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../water/water.module */ 5858);
/* harmony import */ var _water_water_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../water/water.page */ 7627);











let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        entryComponents: [
            _street_lighting_report_street_lighting_report_page__WEBPACK_IMPORTED_MODULE_3__.StreetLightingReportPage,
            _water_water_page__WEBPACK_IMPORTED_MODULE_5__.WaterPage
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _street_lighting_report_street_lighting_report_module__WEBPACK_IMPORTED_MODULE_2__.StreetLightingReportPageModule,
            _water_water_module__WEBPACK_IMPORTED_MODULE_4__.WaterPageModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/map.service */ 9947);
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/report.service */ 2820);
/* harmony import */ var _street_lighting_report_street_lighting_report_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../street-lighting-report/street-lighting-report.page */ 3474);
/* harmony import */ var _water_water_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../water/water.page */ 7627);









let HomePage = class HomePage {
    constructor(NavController, ReportService, MenuController, ModalController, MapService) {
        this.NavController = NavController;
        this.ReportService = ReportService;
        this.MenuController = MenuController;
        this.ModalController = ModalController;
        this.MapService = MapService;
        this.segment = 'all';
        this.Reports = [];
    }
    ngOnInit() {
        this.MenuController.enable(true);
        this.CurrentUser = JSON.parse(sessionStorage.getItem('user'));
        if (this.CurrentUser[0]._id == '' || this.CurrentUser[0]._id == null) {
            this.NavController.navigateRoot('/login');
        }
        this.ReportService.getMyReports(this.CurrentUser[0]._id).subscribe((Reports) => {
            console.log(Reports);
            for (let report of Reports) {
                report.department = JSON.parse(report.department);
                this.Reports.push(report);
            }
            console.log(this.Reports);
        });
    }
    openStreetLightingRerpot() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.ModalController.create({
                component: _street_lighting_report_street_lighting_report_page__WEBPACK_IMPORTED_MODULE_4__.StreetLightingReportPage,
                componentProps: {
                    CurrentUser: this.CurrentUser,
                }
            });
            modal.present();
        });
    }
    openWaterRerpot() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.ModalController.create({
                component: _water_water_page__WEBPACK_IMPORTED_MODULE_5__.WaterPage,
            });
            modal.present();
        });
    }
    segmentChange(event) {
        this.segment = event.detail.value;
    }
    ionViewDidEnter() {
        for (let i = 0; i < this.Reports.length; i++) {
            this.MapService.initOSMWithDescription(this.Reports[i].geolocation.latitude, this.Reports[i].geolocation.longitude, 'map' + i, this.Reports[i].photo);
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _services_report_service__WEBPACK_IMPORTED_MODULE_3__.ReportService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_services_map_service__WEBPACK_IMPORTED_MODULE_2__.MapService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: rgb(255, 255, 255);\n}\nion-content ion-list {\n  margin: 5px;\n  background: rgb(255, 255, 255);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0NBQUE7QUFERjtBQUdFO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0FBREoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcblxuICBpb24tbGlzdCB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB9XG59Il19 */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-menu-button color=\"primary\" menu=\"main-menu\" slot=\"start\"> </ion-menu-button>\n    <ion-chip slot=\"end\">\n      <ion-avatar>\n        <img src=\"https://ionicframework.com/docs/img/demos/avatar.svg\" />\n      </ion-avatar>\n      <ion-label>{{CurrentUser[0].name + \" \" + CurrentUser[0].lastname}}</ion-label>\n    </ion-chip>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-segment value=\"all\" color=\"primary\" (ionChange)=\"segmentChange($event)\">\n    <ion-segment-button value=\"all\">\n      <ion-label>Todos</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"0\">\n      <ion-icon color=\"danger\" name=\"close-circle-outline\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"1\">\n      <ion-icon color=\"warning\" name=\"alert-circle-outline\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"2\">\n      <ion-icon color=\"success\" name=\"checkmark-done-circle-outline\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n  \n  <ion-list *ngFor=\"let report of Reports; let i = index\">\n      <ion-card *ngIf=\"report.status == segment\">\n        <div class=\"map\" id=\"map\" style=\"height:200px; width: 100%;\"></div>\n        <ion-card-header>\n          <ion-card-title>{{report.name}}</ion-card-title>\n          <ion-card-subtitle>{{report.department}}</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content>\n          {{report.description}}\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"segment == 'all'\">\n        <div class=\"map\" id=\"map{{i}}\" style=\"height:200px; width: 100%;\"></div>\n        <ion-card-header>\n          <ion-card-title>{{report.name}}</ion-card-title>\n          <ion-card-subtitle>Tipo: <ion-icon style=\"color: {{report.department.color}};\" name=\"{{report.department.icon}}\"></ion-icon>\n          </ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content>\n          {{report.description}}\n        </ion-card-content>\n      </ion-card>\n  </ion-list>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"dark\">\n      <ion-icon md=\"add\" ios=\"add\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"light\">\n        <ion-icon name=\"car\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openWaterRerpot()\" color=\"light\">\n        <ion-icon style=\"color: #067ee0;\" name=\"water\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openStreetLightingRerpot()\" color=\"light\">\n        <ion-icon style=\"color: #e0d206;\" name=\"bulb\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map