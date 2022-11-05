"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_register-user_register-user_module_ts"],{

/***/ 9672:
/*!*********************************************************************!*\
  !*** ./src/app/pages/register-user/register-user-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterUserPageRoutingModule": () => (/* binding */ RegisterUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _register_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-user.page */ 4428);




const routes = [
    {
        path: '',
        component: _register_user_page__WEBPACK_IMPORTED_MODULE_0__.RegisterUserPage
    }
];
let RegisterUserPageRoutingModule = class RegisterUserPageRoutingModule {
};
RegisterUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterUserPageRoutingModule);



/***/ }),

/***/ 990:
/*!*************************************************************!*\
  !*** ./src/app/pages/register-user/register-user.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterUserPageModule": () => (/* binding */ RegisterUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-user-routing.module */ 9672);
/* harmony import */ var _register_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-user.page */ 4428);







let RegisterUserPageModule = class RegisterUserPageModule {
};
RegisterUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterUserPageRoutingModule
        ],
        declarations: [_register_user_page__WEBPACK_IMPORTED_MODULE_1__.RegisterUserPage],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA
        ]
    })
], RegisterUserPageModule);



/***/ }),

/***/ 4428:
/*!***********************************************************!*\
  !*** ./src/app/pages/register-user/register-user.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterUserPage": () => (/* binding */ RegisterUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-user.page.html?ngResource */ 1740);
/* harmony import */ var _register_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-user.page.scss?ngResource */ 6247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 7556);






let RegisterUserPage = class RegisterUserPage {
    constructor(AuthService, NavController, MenuController) {
        this.AuthService = AuthService;
        this.NavController = NavController;
        this.MenuController = MenuController;
    }
    ngOnInit() {
        this.MenuController.enable(false);
    }
    SignUp(phone, password, repassword, name, lastname) {
        this.AuthService.SignUp(phone, password, name, lastname)
            .subscribe((data) => {
            if (data.length > 0) {
                this.NavController.navigateRoot('/login');
            }
            else {
                console.log("user not found");
            }
        });
    }
};
RegisterUserPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
RegisterUserPage.propDecorators = {
    phone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    password: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    repassword: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    lastname: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
RegisterUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-register-user',
        template: _register_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterUserPage);



/***/ }),

/***/ 6247:
/*!************************************************************************!*\
  !*** ./src/app/pages/register-user/register-user.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: rgb(255, 255, 255);\n  border-left: 7px solid #B22241;\n}\nion-content .header {\n  padding: 0 12vw;\n  color: #B22241;\n}\nion-content .header h3 {\n  font-size: 1.1rem;\n  color: rgb(187, 187, 187);\n}\nion-content .header h3 span {\n  color: #fff;\n}\nion-content .header h1 {\n  font-size: 2.2rem;\n  font-weight: 400;\n}\nion-content .form {\n  padding: 0 12vw;\n  margin-top: 70px;\n}\nion-content .form ion-input {\n  --background: #bb9ea4;\n  --padding-start: 33px;\n  height: 55px;\n  border-radius: 15px;\n  margin-bottom: 22px;\n  --color: rgb(255, 255, 255);\n}\nion-content .button {\n  width: 50vw;\n  color: white;\n  --color: rgb(255, 255, 255);\n  background-color: #B22241;\n  margin-top: 100px;\n  padding: 20px;\n  border-top-right-radius: 30px;\n  border-bottom-right-radius: 30px;\n  display: flex;\n  align-items: center;\n  font-size: 1.2rem;\n  font-weight: 500;\n  justify-content: flex-end;\n}\nion-content .button ion-icon {\n  margin-left: 30px;\n}\nion-content .footer {\n  color: rgb(187, 187, 187);\n  padding: 0 12vw;\n  margin-top: 100px;\n  text-align: center;\n}\nion-content .footer h3 {\n  font-size: 1rem;\n  font-weight: 400;\n}\nion-content .footer h3 span {\n  font-size: 1.2rem;\n  color: #B22241;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSw4QkFBQTtBQUNKO0FBRUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUFSO0FBRVE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0FBQVo7QUFDWTtFQUNJLFdBQUE7QUFDaEI7QUFFUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBWjtBQUlJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBRlI7QUFHUTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBRFo7QUFLSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFIUjtBQUlRO0VBQ0ksaUJBQUE7QUFGWjtBQU1JO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUpSO0FBTVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFKWjtBQU1ZO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFKaEIiLCJmaWxlIjoicmVnaXN0ZXItdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjQjIyMjQxO1xyXG5cclxuXHJcbiAgICAuaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTJ2dztcclxuICAgICAgICBjb2xvcjogI0IyMjI0MTtcclxuXHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybXtcclxuICAgICAgICBwYWRkaW5nOiAwIDEydnc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2JiOWVhNDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAzM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIycHg7XHJcbiAgICAgICAgICAgIC0tY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbntcclxuICAgICAgICB3aWR0aDogNTB2dztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgLS1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCMjIyNDE7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3RlcntcclxuICAgICAgICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTJ2dztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGgze1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0IyMjI0MTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 1740:
/*!************************************************************************!*\
  !*** ./src/app/pages/register-user/register-user.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n\n  <div class=\"header\">\n    <h1>Crear una <br> nueva cuenta</h1>\n  </div>\n\n  <div class=\"form\">\n    <ion-input placeholder=\"Nombre(s)\" [(ngModel)]=\"name\" #ctrl=\"ngModel\"></ion-input>\n    <ion-input placeholder=\"Apellidos\" [(ngModel)]=\"lastname\" #ctrl=\"ngModel\"></ion-input>\n    <ion-input placeholder=\"Número de teléfono\" type=\"number\" [(ngModel)]=\"phone\" #ctrl=\"ngModel\"></ion-input>\n    <ion-input placeholder=\"Contraseña\" type=\"password\" [(ngModel)]=\"password\" #ctrl=\"ngModel\"></ion-input>\n    <ion-input placeholder=\"Repetir Contraseña\" type=\"password\" [(ngModel)]=\"repassword\" #ctrl=\"ngModel\"></ion-input>\n  </div>\n\n  <div class=\"button\" (click)=\"SignUp(phone, password, repassword, name, lastname)\">\n    Registrarse <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n  </div>\n  <div class=\"footer\">\n    <h3 routerLink=\"/login\">¿Ya tienes una cuenta? <span>Inicia Sesión</span></h3>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register-user_register-user_module_ts.js.map