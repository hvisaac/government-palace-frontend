"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_galery_galery_module_ts"],{

/***/ 7385:
/*!*******************************************************!*\
  !*** ./src/app/pages/galery/galery-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryPageRoutingModule": () => (/* binding */ GaleryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _galery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galery.page */ 3008);




const routes = [
    {
        path: '',
        component: _galery_page__WEBPACK_IMPORTED_MODULE_0__.GaleryPage
    }
];
let GaleryPageRoutingModule = class GaleryPageRoutingModule {
};
GaleryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GaleryPageRoutingModule);



/***/ }),

/***/ 5281:
/*!***********************************************!*\
  !*** ./src/app/pages/galery/galery.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryPageModule": () => (/* binding */ GaleryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _galery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galery-routing.module */ 7385);
/* harmony import */ var _galery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./galery.page */ 3008);







let GaleryPageModule = class GaleryPageModule {
};
GaleryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _galery_routing_module__WEBPACK_IMPORTED_MODULE_0__.GaleryPageRoutingModule
        ],
        declarations: [_galery_page__WEBPACK_IMPORTED_MODULE_1__.GaleryPage]
    })
], GaleryPageModule);



/***/ }),

/***/ 3008:
/*!*********************************************!*\
  !*** ./src/app/pages/galery/galery.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryPage": () => (/* binding */ GaleryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _galery_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galery.page.html?ngResource */ 2268);
/* harmony import */ var _galery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./galery.page.scss?ngResource */ 1373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let GaleryPage = class GaleryPage {
    constructor(ModalController) {
        this.ModalController = ModalController;
    }
    ngOnInit() {
    }
    dismiss() {
        this.ModalController.dismiss();
    }
};
GaleryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
GaleryPage.propDecorators = {
    photo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
GaleryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-galery',
        template: _galery_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_galery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GaleryPage);



/***/ }),

/***/ 1373:
/*!**********************************************************!*\
  !*** ./src/app/pages/galery/galery.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-back-button {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoiZ2FsZXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuIH0iXX0= */";

/***/ }),

/***/ 2268:
/*!**********************************************************!*\
  !*** ./src/app/pages/galery/galery.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\" (click)=\"dismiss()\"></ion-back-button>\n    <ion-title>galery</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n        <ion-img [src]=\"this.photo.webviewPath\"></ion-img>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_galery_galery_module_ts.js.map