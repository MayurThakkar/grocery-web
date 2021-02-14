require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/blue.css"));
global.registerModule("@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/blue.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/blue.css\""},{"type":"comment","comment":" Place any CSS rules you want to apply on both iOS and Android here.\nThis is where the vast majority of your CSS code goes. "}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/@nativescript/webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@nativescript/angular");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_feature_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/main/feature/main.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/auth/auth.guard.ts");






const routes = [
    { path: '', component: _main_feature_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    {
        path: 'meter',
        loadChildren: () => Promise.all(/* import() */[__webpack_require__.e("vendor"), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, "./app/meter/meter.module.ts")).then(m => m.MeterModule),
        canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]], exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
                exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.component.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/auth/auth.service.ts");
/* harmony import */ var _src_app_header_feature_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/header/feature/header/header.component.ts");





class AppComponent {
    constructor(_authService) {
        this._authService = _authService;
    }
    ngOnInit() {
        this._authService.initAuthListener();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_app_header_feature_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMissingTranslationHandler", function() { return MyMissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/fire/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/fire/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@angular/platform-browser/animations");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("@nativescript/angular");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/app-routing.module.tns.ts");
/* harmony import */ var _src_app_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./app/material.module.ts");
/* harmony import */ var _src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./app/auth/auth.module.ts");
/* harmony import */ var _src_app_app_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./app/app.reducer.ts");
/* harmony import */ var _src_app_app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./app/app.component.tns.ts");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./environments/environment.ts");
/* harmony import */ var _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./app/auth/auth.service.ts");
/* harmony import */ var _src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./app/shared/ui.service.ts");
/* harmony import */ var _src_app_meter_meter_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./app/meter/meter.service.ts");
/* harmony import */ var _src_app_dialog_feature_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./app/dialog/feature/dialog.component.ts");
/* harmony import */ var _src_app_main_feature_main_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./app/main/feature/main.component.ts");
/* harmony import */ var _src_app_header_feature_header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./app/header/feature/header/header.component.ts");



























function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http);
}
class MyMissingTranslationHandler {
    handle(params) {
        return 'some value';
    }
}
// Uncomment and add to NgModule imports if you need to use two-way binding and/or HTTP wrapper
// import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _src_app_meter_meter_service__WEBPACK_IMPORTED_MODULE_19__["MeterService"],
        _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
        _src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_18__["UIService"],
    ], imports: [[
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_7__["NativeScriptModule"],
            _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
            _src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_13__["AuthModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _src_app_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_src_app_app_reducer__WEBPACK_IMPORTED_MODULE_14__["reducers"]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
                },
                defaultLanguage: 'en',
                missingTranslationHandler: { provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["MissingTranslationHandler"], useClass: MyMissingTranslationHandler },
                useDefaultLang: true
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
        _src_app_dialog_feature_dialog_component__WEBPACK_IMPORTED_MODULE_20__["DialogComponent"],
        _src_app_header_feature_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
        _src_app_main_feature_main_component__WEBPACK_IMPORTED_MODULE_21__["MainComponent"]], imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_7__["NativeScriptModule"],
        _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
        _src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_13__["AuthModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _src_app_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreRootModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _src_app_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                    _src_app_dialog_feature_dialog_component__WEBPACK_IMPORTED_MODULE_20__["DialogComponent"],
                    _src_app_header_feature_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
                    _src_app_main_feature_main_component__WEBPACK_IMPORTED_MODULE_21__["MainComponent"],
                ],
                imports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_7__["NativeScriptModule"],
                    _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
                    _src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_13__["AuthModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _src_app_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_src_app_app_reducer__WEBPACK_IMPORTED_MODULE_14__["reducers"]),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
                        },
                        defaultLanguage: 'en',
                        missingTranslationHandler: { provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["MissingTranslationHandler"], useClass: MyMissingTranslationHandler },
                        useDefaultLang: true
                    }),
                ],
                providers: [
                    _src_app_meter_meter_service__WEBPACK_IMPORTED_MODULE_19__["MeterService"],
                    _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
                    _src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_18__["UIService"],
                ],
                bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthState", function() { return getAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAuth", function() { return getIsAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _app_auth_auth_state_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/auth/auth-state/auth.reducer.ts");


const reducers = {
    ui: null,
    auth: _app_auth_auth_state_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authReducer"],
};
const getAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('auth');
const getIsAuth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, _app_auth_auth_state_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getIsAuth"]);
const getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, _app_auth_auth_state_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getUser"]);


/***/ }),

/***/ "./app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _feature_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/auth/feature/login/login.component.ts");
/* harmony import */ var _feature_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/auth/feature/signup/signup.component.ts");






const routes = [
    { path: 'login', component: _feature_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'signup', component: _feature_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/auth/auth-state/auth.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTHENTICATED", function() { return SET_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_UNAUTHENTICATED", function() { return SET_UNAUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAuthenticated", function() { return SetAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUnAuthenticated", function() { return SetUnAuthenticated; });
const SET_AUTHENTICATED = '[Auth] Set Authenticated';
const SET_UNAUTHENTICATED = '[Auth] Set UnAuthenticated';
class SetAuthenticated {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_AUTHENTICATED;
    }
}
class SetUnAuthenticated {
    constructor() {
        this.type = SET_UNAUTHENTICATED;
    }
}


/***/ }),

/***/ "./app/auth/auth-state/auth.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAuth", function() { return getIsAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/auth/auth-state/auth.actions.ts");

const DEFAULT_USER = '';
const initialState = {
    isAuthenticated: false,
    userName: DEFAULT_USER
};
function authReducer(state = initialState, action) {
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["SET_AUTHENTICATED"]:
            return {
                isAuthenticated: true,
                userName: action.payload
            };
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["SET_UNAUTHENTICATED"]:
            return {
                isAuthenticated: false,
                userName: DEFAULT_USER
            };
        default:
            return state;
    }
}
const getIsAuth = (state) => state.isAuthenticated;
const getUser = (state) => state.userName;


/***/ }),

/***/ "./app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/auth/auth.service.ts");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/app.reducer.ts");










class AuthGuard {
    constructor(_authService, _router, _store) {
        this._authService = _authService;
        this._router = _router;
        this._store = _store;
    }
    canActivate(route, state) {
        return this._store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getIsAuth"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    canLoad(route) {
        return this._store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getIsAuth"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/shared/shared.module.ts");
/* harmony import */ var _feature_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/auth/feature/signup/signup.component.ts");
/* harmony import */ var _feature_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/auth/feature/login/login.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/auth/auth-routing.module.ts");








class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuthModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_feature_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
        _feature_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]], imports: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuthModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _feature_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
                    _feature_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                ],
                imports: [
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuthModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/auth/auth-state/auth.actions.ts");
/* harmony import */ var _shared_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/shared/ui.service.ts");
/* harmony import */ var _meter_meter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/meter/meter.service.ts");













class AuthService {
    constructor(_router, _ngAuth, _meterService, _store, _uiService) {
        this._router = _router;
        this._ngAuth = _ngAuth;
        this._meterService = _meterService;
        this._store = _store;
        this._uiService = _uiService;
    }
    initAuthListener() {
        this._ngAuth.authState.subscribe((user) => {
            if (user) {
                this._store.dispatch(new _auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["SetAuthenticated"](user.email));
                this._router.navigate(['/']);
            }
            else {
                // TODO: deal with unsubscription undefined
                // this._meterService.cancelSubscription();
                this._store.dispatch(new _auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["SetUnAuthenticated"]());
                this._router.navigate(['/login']);
            }
        });
    }
    resgisterUser(auth) {
        this._uiService.loadingStateChanged.next(true);
        this._ngAuth.createUserWithEmailAndPassword(auth.email, auth.password)
            .then(() => this._uiService.loadingStateChanged.next(false))
            .catch((error) => {
            this._uiService.loadingStateChanged.next(false);
            this._uiService.showSnackBar(error.message, null, {
                duration: 3000
            });
        });
    }
    login(auth) {
        this._uiService.loadingStateChanged.next(true);
        this._ngAuth.signInWithEmailAndPassword(auth.email, auth.password)
            .then(() => this._uiService.loadingStateChanged.next(false))
            .catch((error) => {
            this._uiService.loadingStateChanged.next(false);
            this._uiService.showSnackBar(error.message, null, {
                duration: 3000
            });
        });
    }
    logOut() {
        this._ngAuth.signOut();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_meter_meter_service__WEBPACK_IMPORTED_MODULE_6__["MeterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_ui_service__WEBPACK_IMPORTED_MODULE_5__["UIService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _meter_meter_service__WEBPACK_IMPORTED_MODULE_6__["MeterService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _shared_ui_service__WEBPACK_IMPORTED_MODULE_5__["UIService"] }]; }, null); })();


/***/ }),

/***/ "./app/auth/feature/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/shared/ui.service.ts");
/* harmony import */ var _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");













function LoginComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "login.emailInvalid"), " ");
} }
function LoginComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "login.passwordlength"), " ");
} }
function LoginComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "app.login"), " ");
} }
function LoginComponent_mat_spinner_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
class LoginComponent {
    constructor(_authService, _uiService) {
        this._authService = _authService;
        this._uiService = _uiService;
        this.isLoading = false;
    }
    ngOnInit() {
        this._loading = this._uiService.loadingStateChanged.subscribe((isLoading) => {
            this.isLoading = isLoading;
        });
    }
    ngOnDestroy() {
        if (this._loading) {
            this._loading.unsubscribe();
        }
    }
    onSubmit(forms) {
        this._authService.login({
            email: forms.value.email,
            password: forms.value.password
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_1__["UIService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 13, vars: 4, consts: [[1, "login-container", "row"], [1, "login-form", "col", 3, "ngSubmit"], ["formRef", "ngForm"], ["type", "email", "matInput", "", "placeholder", "Your Email", "ngModel", "", "name", "email", "email", "", "required", ""], ["emailInput", "ngModel"], [4, "ngIf"], ["type", "password", "matInput", "", "placeholder", "Your Password", "ngModel", "", "name", "password", "required", "", "minlength", "8"], ["pwInput", "ngModel"], ["mat-raised-button", "", "type", "Submit", "color", "primary", 3, "disabled", 4, "ngIf"], ["mat-raised-button", "", "type", "Submit", "color", "primary", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_mat_error_6_Template, 3, 3, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_mat_error_10_Template, 3, 3, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_button_11_Template, 3, 4, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_mat_spinner_12_Template, 1, 0, "mat-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r1.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3.value == null ? null : _r3.value.length) != 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: [".login-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 30px;\n  justify-content: center;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 300px;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_1__["UIService"] }]; }, null); })();


/***/ }),

/***/ "./app/auth/feature/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/shared/ui.service.ts");
/* harmony import */ var _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/@angular/material/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/@angular/material/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/@angular/material/fesm2015/progress-spinner.js");














function SignupComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Has to be atleast 8 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
} }
function SignupComponent_mat_spinner_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
class SignupComponent {
    constructor(_authService, _uiService) {
        this._authService = _authService;
        this._uiService = _uiService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.maxDate = new Date();
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
        this._loading = this._uiService.loadingStateChanged.subscribe((isLoading) => {
            this.isLoading = isLoading;
        });
    }
    ngOnDestroy() {
        if (this._loading) {
            this._loading.unsubscribe();
        }
    }
    onSubmit(forms) {
        console.error(forms);
        this._authService.resgisterUser({
            email: forms.value.email,
            password: forms.value.password
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_1__["UIService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 20, vars: 7, consts: [[1, "container", "row"], [1, "col", 3, "ngSubmit"], ["formRef", "ngForm"], ["type", "email", "matInput", "", "placeholder", "Your email", "ngModel", "", "name", "email", "email", "", "required", ""], ["emailInput", "ngModel"], [4, "ngIf"], ["hintLabel", "Should be atleast 8 characters long"], ["type", "password", "matInput", "", "placeholder", "Your password", "ngModel", "", "name", "password", "required", "", "minlength", "8"], ["pwInput", "ngModel"], ["matInput", "", "placeholder", "Your Birthday", "ngModel", "", "name", "birthdate", "required", "", 3, "matDatepicker", "max"], [3, "for"], ["picker", ""], ["ngModel", "", "name", "agree", "required", "", "color", "primary"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled", 4, "ngIf"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SignupComponent_mat_error_6_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SignupComponent_mat_error_10_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-checkbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Agree to terms and condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SignupComponent_button_18_Template, 2, 1, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignupComponent_mat_spinner_19_Template, 1, 0, "mat-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r1.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3.value == null ? null : _r3.value.length) != 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r5)("max", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxRequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 30px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 300px;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            }]
    }], function () { return [{ type: _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_1__["UIService"] }]; }, null); })();


/***/ }),

/***/ "./app/dialog/feature/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


class DialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(); };
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog"]], decls: 2, vars: 0, template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dialog works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog',
                templateUrl: './dialog.component.html',
                styleUrls: ['./dialog.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./app/header/feature/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.reducer.ts");
/* harmony import */ var _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/auth/auth.service.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@angular/material/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../node_modules/@angular/material/fesm2015/list.js");

















function HeaderComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const language_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.selectLanguage(language_r11.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, language_r11.label), " ");
} }
function HeaderComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "app.login"));
} }
function HeaderComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "app.signup"));
} }
function HeaderComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "app.meter"));
} }
function HeaderComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_21_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "app.logout"));
} }
function HeaderComponent_a_31_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_31_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return _r6.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "app.login"));
} }
function HeaderComponent_a_33_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_33_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return _r6.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "app.signup"));
} }
function HeaderComponent_a_35_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_35_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return _r6.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "app.meter"));
} }
function HeaderComponent_a_37_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_37_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "app.logout"));
} }
class HeaderComponent {
    constructor(_translate, _authService, _store) {
        this._translate = _translate;
        this._authService = _authService;
        this._store = _store;
        this.languages = [
            { value: 'en', label: 'app.language.en' },
            { value: 'de', label: 'app.language.de' },
        ];
        // this language will be used as a fallback when a translation isn't found in the current language
        _translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        _translate.use('en');
    }
    ngOnInit() {
        this.userName$ = this._store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_3__["getUser"]);
        this.isAuth$ = this._store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_3__["getIsAuth"]);
    }
    selectLanguage(lang) {
        this._translate.use(lang);
    }
    onLogout() {
        this._authService.logOut();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 39, vars: 29, consts: [["color", "primary"], ["routerLink", "/"], [1, "row"], ["mat-button", "", 1, "drop-down-language", 3, "matMenuTriggerFor"], ["languageMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["routerLink", "/login", 4, "ngIf"], ["routerLink", "/signup", 4, "ngIf"], ["routerLink", "/meter", 4, "ngIf"], [3, "click", 4, "ngIf"], ["mat-icon-button", "", "fxHide.gt-xs", "", 3, "click"], [1, "content"], ["position", "end", "role", "navigation"], ["sidenav", ""], ["mat-list-item", "", "routerLink", "/login", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/signup", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/meter", 3, "click", 4, "ngIf"], ["mat-list-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["routerLink", "/login"], ["routerLink", "/signup"], ["routerLink", "/meter"], [3, "click"], ["mat-list-item", "", "routerLink", "/login", 3, "click"], ["mat-list-item", "", "routerLink", "/signup", 3, "click"], ["mat-list-item", "", "routerLink", "/meter", 3, "click"], ["mat-list-item", "", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_button_13_Template, 3, 3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_a_15_Template, 3, 3, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_a_17_Template, 3, 3, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_a_19_Template, 3, 3, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HeaderComponent_a_21_Template, 3, 3, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return _r6.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "router-outlet", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-sidenav", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HeaderComponent_a_31_Template, 3, 3, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, HeaderComponent_a_33_Template, 3, 3, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HeaderComponent_a_35_Template, 3, 3, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HeaderComponent_a_37_Template, 3, 3, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, "app.meter-app"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, ctx.isAuth$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 15, ctx.isAuth$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 17, ctx.isAuth$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 19, ctx.isAuth$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 21, ctx.isAuth$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 23, ctx.isAuth$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 25, ctx.isAuth$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 27, ctx.isAuth$));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatNavList"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListItem"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: ["mat-sidenav-container[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-size: 14px;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: gray;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./app/main/feature/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/material/fesm2015/card.js");



class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 7, vars: 0, consts: [["fxFlex", "", "fxLayout", "row", "fxFlexFill", "", "fxLayoutGap", "100px", "fxLayoutAlign", "center center", 1, "main-container"], [1, "example-card"], ["mat-card-image", "", "src", "../../../assets/images/electric.jpg"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"]], styles: [".main-container[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/material/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/material/fesm2015/sort.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/material/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/@angular/material/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/@angular/material/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../node_modules/@angular/material/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../node_modules/@angular/material/fesm2015/list.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../node_modules/@angular/material/fesm2015/tabs.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../node_modules/@angular/material/fesm2015/paginator.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../node_modules/@angular/material/fesm2015/card.js");






















class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                ],
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/meter/meter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterService", function() { return MeterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _state_meter_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/meter/state/meter.actions.ts");







class MeterService {
    constructor(db, store) {
        this.db = db;
        this.store = store;
    }
    getMeterList() {
        this.db.collection('meterData')
            .valueChanges()
            .subscribe((data) => {
            this.store.dispatch(new _state_meter_actions__WEBPACK_IMPORTED_MODULE_3__["SetMeterData"](data));
        });
    }
    addNewMeterData(newData) {
        const id = this.db.createId();
        const item = Object.assign({ id }, newData);
        this.db.collection('meterData').add(item);
    }
    updateData(data) {
        console.log("data db", this.db.collection('meterData').doc(data.id));
        this.db.collection('meterData').doc(data.id).update(data);
    }
    deleteMeterData(data) {
        console.error("delete", data);
        this.db.collection('meterData').doc(data.id).delete();
    }
    cancelSubscription() {
        this._fireSubscription.unsubscribe();
    }
}
MeterService.ɵfac = function MeterService_Factory(t) { return new (t || MeterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
MeterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MeterService, factory: MeterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./app/meter/state/meter.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AVAILABLE_METER_DATA", function() { return SET_AVAILABLE_METER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_AVAILABLE_METER_DATA", function() { return ADD_AVAILABLE_METER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_AVAILABLE_METER_DATA", function() { return DELETE_AVAILABLE_METER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMeterData", function() { return SetMeterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMeterData", function() { return AddMeterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMeterData", function() { return DeleteMeterData; });
const SET_AVAILABLE_METER_DATA = '[Meter] Set Meter data';
const ADD_AVAILABLE_METER_DATA = '[Meter] Add Meter data';
const DELETE_AVAILABLE_METER_DATA = '[Meter] Delete Meter data';
// export const STOP_ACTIVE = '[UI] Stop active'; 
class SetMeterData {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_AVAILABLE_METER_DATA;
    }
}
class AddMeterData {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_AVAILABLE_METER_DATA;
    }
}
class DeleteMeterData {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_AVAILABLE_METER_DATA;
    }
}


/***/ }),

/***/ "./app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/material.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/shared/ui.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIService", function() { return UIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);





class UIService {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.loadingStateChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    showSnackBar(message, action, duration) {
        this._snackBar.open(message, action, duration);
    }
}
UIService.ɵfac = function UIService_Factory(t) { return new (t || UIService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
UIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UIService, factory: UIService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCZCElEeXM7fa7mFPMGRsQSqvoo1f7r6HE",
        authDomain: "meter-base-project.firebaseapp.com",
        databaseURL: "https://meter-base-project.firebaseio.com",
        projectId: "meter-base-project",
        storageBucket: "meter-base-project.appspot.com",
        messagingSenderId: "118143311936",
        appId: "1:118143311936:web:fe14c5eee525c29f75bfa5",
        measurementId: "G-1QZ1VH8WYJ"
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@nativescript/core/bundle-entry-points");
/* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@nativescript/angular");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./environments/environment.ts");

        const isAndroid = __webpack_require__("@nativescript/core").isAndroid;
        if (isAndroid && !global["__snapshot"]) {
            __webpack_require__("@nativescript/core/ui/frame");
__webpack_require__("@nativescript/core/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/@nativescript/webpack/helpers/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/@nativescript/webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        
        
// this import should be first in order to load some required settings (like globals and reflect-metadata)



var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/@nativescript/webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "@angular/animations":
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/platform-browser":
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/router":
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nativescript/angular":
/***/ (function(module, exports) {

module.exports = require("@nativescript/angular");

/***/ }),

/***/ "@nativescript/core":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core");

/***/ }),

/***/ "@nativescript/core/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/bundle-entry-points");

/***/ }),

/***/ "@nativescript/core/ui/frame":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/frame");

/***/ }),

/***/ "@nativescript/core/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/frame/activity");

/***/ }),

/***/ "@nativescript/core/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/styling/style-scope");

/***/ }),

/***/ "rxjs":
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ })

},[["./main.tns.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50LnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAucmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9hdXRoL2F1dGgtc3RhdGUvYXV0aC5hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL2FwcC9hdXRoL2F1dGgtc3RhdGUvYXV0aC5yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL2FwcC9hdXRoL2F1dGguZ3VhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvYXV0aC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9hdXRoL2ZlYXR1cmUvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hdXRoL2ZlYXR1cmUvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvZmVhdHVyZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9mZWF0dXJlL3NpZ251cC9zaWdudXAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RpYWxvZy9mZWF0dXJlL2RpYWxvZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2RpYWxvZy9mZWF0dXJlL2RpYWxvZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaGVhZGVyL2ZlYXR1cmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hlYWRlci9mZWF0dXJlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL21haW4vZmVhdHVyZS9tYWluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi9mZWF0dXJlL21haW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL21hdGVyaWFsLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbWV0ZXIvbWV0ZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbWV0ZXIvc3RhdGUvbWV0ZXIuYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC91aS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRucy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9hbmltYXRpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2J1bmRsZS1lbnRyeS1wb2ludHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZnJhbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZnJhbWUvYWN0aXZpdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL29wZXJhdG9yc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLCtHQUFpRSxtQkFBTyxDQUFDLGlJQUErRjtBQUN4SyxnRUFBZ0UsbUJBQU8sQ0FBQyxpSUFBK0Y7QUFDdkssaUVBQWlFLG1CQUFPLENBQUMsaUlBQStGO0FBQ3hLLGdFQUFnRSxtQkFBTyxDQUFDLGlJQUErRixHQUFHLGtCQUFrQixrQ0FBa0MsVUFBVSxpRUFBaUUsRUFBRSxpRUFBaUUsRUFBRSwySkFBMko7QUFDemdCLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLG1DQUFtQztBQUNsRSxTQUFTO0FBQ1Q7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDd0I7QUFHSDtBQUNoQjs7O0FBRXZDLE1BQU0sTUFBTSxHQUFXO0lBQzVCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsMEVBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQywwREFBUyxDQUFDLEVBQUU7SUFDaEU7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQywwSkFBOEIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFD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QUFnRjtBQUNoRixjQUEwRTtBQUNtRDtBQUM3SCxzREFBeUU7QUFDekUsd0JBQXdFO0FBQ3hFLFNBQW1GO0FBQ25GLFFBQXlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCekQsZ0Q7Ozs7Ozs7QUNBQSw0Qzs7Ozs7OztBQ0FBLGlEOzs7Ozs7O0FDQUEsMEM7Ozs7Ozs7QUNBQSwyQzs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSw0Qzs7Ozs7OztBQ0FBLGtEOzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7QUNBQSxtRTs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSxzRTs7Ozs7OztBQ0FBLGlDOzs7Ozs7O0FDQUEsMkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYmx1ZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1xcXCJcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYmx1ZS5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBQbGFjZSBhbnkgQ1NTIHJ1bGVzIHlvdSB3YW50IHRvIGFwcGx5IG9uIGJvdGggaU9TIGFuZCBBbmRyb2lkIGhlcmUuXFxuVGhpcyBpcyB3aGVyZSB0aGUgdmFzdCBtYWpvcml0eSBvZiB5b3VyIENTUyBjb2RlIGdvZXMuIFwifV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL2ZlYXR1cmUvbWFpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9hdXRoL2F1dGguZ3VhcmQnO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogJycsIGNvbXBvbmVudDogTWFpbkNvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdIH0sXG4gIHtcbiAgICBwYXRoOiAnbWV0ZXInLFxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL21ldGVyL21ldGVyLm1vZHVsZScpLnRoZW4obSA9PiBtLk1ldGVyTW9kdWxlKSxcbiAgICBjYW5Mb2FkOiBbQXV0aEd1YXJkXVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGgvYXV0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmluaXRBdXRoTGlzdGVuZXIoKTtcbiAgfVxufVxuIiwiPEdyaWRMYXlvdXQ+XG4gIDwhLS0gVGhpcyB3aWxsIGNvbnRhaW4gYW55IGFuZ3VsYXIgcm91dGVzIHlvdSBzZXR1cCAtLT5cbiAgPGFwcC1oZWFkZXI+PC9hcHAtaGVhZGVyPlxuXG4gIFxuICBcbjwvR3JpZExheW91dD4iLCJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZSc7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZURhdGFiYXNlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9kYXRhYmFzZSc7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtcbiAgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcixcbiAgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcyxcbiAgVHJhbnNsYXRlTW9kdWxlXG59IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvaHR0cC1sb2FkZXInO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnQHNyYy9hcHAvYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQHNyYy9hcHAvbWF0ZXJpYWwubW9kdWxlJ1xuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJ0BzcmMvYXBwL2F1dGgvYXV0aC5tb2R1bGUnO1xuXG5pbXBvcnQgeyByZWR1Y2VycyB9IGZyb20gJ0BzcmMvYXBwL2FwcC5yZWR1Y2VyJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnQHNyYy9hcHAvYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0BzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2hhcmVkL3VpLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWV0ZXJTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvbWV0ZXIvbWV0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9kaWFsb2cvZmVhdHVyZS9kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9tYWluL2ZlYXR1cmUvbWFpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnQHNyYy9hcHAvaGVhZGVyL2ZlYXR1cmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gSHR0cExvYWRlckZhY3RvcnkoaHR0cDogSHR0cENsaWVudCkge1xuICByZXR1cm4gbmV3IFRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cCk7XG59XG5cbmV4cG9ydCBjbGFzcyBNeU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIHtcbiAgICBoYW5kbGUocGFyYW1zOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyUGFyYW1zKSB7XG4gICAgICAgIHJldHVybiAnc29tZSB2YWx1ZSc7XG4gICAgfVxufVxuXG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZyBhbmQvb3IgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSwgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBEaWFsb2dDb21wb25lbnQsXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIE1haW5Db21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBBbmd1bGFyRmlyZU1vZHVsZS5pbml0aWFsaXplQXBwKGVudmlyb25tZW50LmZpcmViYXNlQ29uZmlnKSxcbiAgICBBbmd1bGFyRmlyZXN0b3JlTW9kdWxlLFxuICAgIEFuZ3VsYXJGaXJlRGF0YWJhc2VNb2R1bGUsXG4gICAgQXV0aE1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yUm9vdChyZWR1Y2VycyksXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgbG9hZGVyOiB7XG4gICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZU1vZHVsZSxcbiAgICAgICAgdXNlRmFjdG9yeTogSHR0cExvYWRlckZhY3RvcnksXG4gICAgICAgIGRlcHM6IFtIdHRwQ2xpZW50XVxuICAgICAgfSxcbiAgICAgIGRlZmF1bHRMYW5ndWFnZTogJ2VuJyxcbiAgICAgIG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXI6IHtwcm92aWRlOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLCB1c2VDbGFzczogTXlNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyfSxcbiAgICAgIHVzZURlZmF1bHRMYW5nOiB0cnVlXG4gICAgfSksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE1ldGVyU2VydmljZSxcbiAgICBBdXRoU2VydmljZSxcbiAgICBVSVNlcnZpY2UsXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEFjdGlvbiwgQWN0aW9uUmVkdWNlck1hcCwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0ICogYXMgZnJvbUF1dGggZnJvbSAnLi4vYXBwL2F1dGgvYXV0aC1zdGF0ZS9hdXRoLnJlZHVjZXInXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICAgIHVpOiBudWxsO1xuICAgIGF1dGg6IGZyb21BdXRoLkF1dGhTdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzOiBBY3Rpb25SZWR1Y2VyTWFwPFN0YXRlPiA9IHtcbiAgICB1aTogbnVsbCxcbiAgICBhdXRoOiBmcm9tQXV0aC5hdXRoUmVkdWNlcixcbn1cblxuZXhwb3J0IGNvbnN0IGdldEF1dGhTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3Rvcjxmcm9tQXV0aC5BdXRoU3RhdGU+KCdhdXRoJyk7XG5leHBvcnQgY29uc3QgZ2V0SXNBdXRoID0gY3JlYXRlU2VsZWN0b3IoZ2V0QXV0aFN0YXRlLCBmcm9tQXV0aC5nZXRJc0F1dGgpO1xuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSBjcmVhdGVTZWxlY3RvcihnZXRBdXRoU3RhdGUsIGZyb21BdXRoLmdldFVzZXIpO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlL2xvZ2luL2xvZ2luLmNvbXBvbmVudCdcbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gJy4vZmVhdHVyZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCdcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPVtcbiAgICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdzaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCB9LFxuXVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcylcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUm91dGVyTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoUm91dGluZ01vZHVsZSB7fSIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IFNFVF9BVVRIRU5USUNBVEVEID0gJ1tBdXRoXSBTZXQgQXV0aGVudGljYXRlZCc7XG5leHBvcnQgY29uc3QgU0VUX1VOQVVUSEVOVElDQVRFRCA9ICdbQXV0aF0gU2V0IFVuQXV0aGVudGljYXRlZCc7XG5cbmV4cG9ydCBjbGFzcyBTZXRBdXRoZW50aWNhdGVkIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgICByZWFkb25seSB0eXBlID0gU0VUX0FVVEhFTlRJQ0FURUQ7XG4gICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldFVuQXV0aGVudGljYXRlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gICAgcmVhZG9ubHkgdHlwZSA9IFNFVF9VTkFVVEhFTlRJQ0FURUQ7XG59XG5cbmV4cG9ydCB0eXBlIEF1dGhBY3Rpb25zID0gU2V0QXV0aGVudGljYXRlZCB8IFNldFVuQXV0aGVudGljYXRlZDsiLCJpbXBvcnQge1xuICAgIEF1dGhBY3Rpb25zLFxuICAgIFNFVF9BVVRIRU5USUNBVEVELFxuICAgIFNFVF9VTkFVVEhFTlRJQ0FURURcbn0gZnJvbSAnLi9hdXRoLmFjdGlvbnMnO1xuXG5jb25zdCBERUZBVUxUX1VTRVIgPSAnJztcblxuZXhwb3J0IGludGVyZmFjZSBBdXRoU3RhdGUge1xuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbixcbiAgICB1c2VyTmFtZTogc3RyaW5nXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogQXV0aFN0YXRlID0ge1xuICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICAgICB1c2VyTmFtZTogREVGQVVMVF9VU0VSXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBBdXRoQWN0aW9ucykge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBTRVRfQVVUSEVOVElDQVRFRDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBTRVRfVU5BVVRIRU5USUNBVEVEOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiBERUZBVUxUX1VTRVJcbiAgICAgICAgICAgIH07ICAgICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0SXNBdXRoID0gKHN0YXRlOiBBdXRoU3RhdGUpID0+IHN0YXRlLmlzQXV0aGVudGljYXRlZDtcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKHN0YXRlOiBBdXRoU3RhdGUpID0+IHN0YXRlLnVzZXJOYW1lOyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBDYW5Mb2FkLCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gJy4uL2FwcC5yZWR1Y2VyJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkxvYWQge1xuICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgX3N0b3JlOiBTdG9yZTxmcm9tUm9vdC5TdGF0ZT5cbiAgICApIHt9XG5cbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRJc0F1dGgpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgY2FuTG9hZChyb3V0ZTogUm91dGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRJc0F1dGgpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxufSIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVBdXRoTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlL3NpZ251cC9zaWdudXAuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXV0aC1yb3V0aW5nLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNpZ251cENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBBdXRoUm91dGluZ01vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXV0aE1vZHVsZSB7fSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZUF1dGggfSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xuXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgQXV0aERhdGEgfSBmcm9tICcuL2F1dGgtZGF0YS5tb2RlbCc7XG5pbXBvcnQgKiBhcyBBdXRoIGZyb20gJy4vYXV0aC1zdGF0ZS9hdXRoLmFjdGlvbnMnO1xuaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSAnLi4vYXBwLnJlZHVjZXInO1xuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3VpLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWV0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbWV0ZXIvbWV0ZXIuc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBfbmdBdXRoOiBBbmd1bGFyRmlyZUF1dGgsXG4gICAgICAgIHByaXZhdGUgX21ldGVyU2VydmljZTogTWV0ZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9zdG9yZTogU3RvcmU8ZnJvbVJvb3QuU3RhdGU+LFxuICAgICAgICBwcml2YXRlIF91aVNlcnZpY2U6IFVJU2VydmljZVxuICAgICkge31cblxuICAgIGluaXRBdXRoTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMuX25nQXV0aC5hdXRoU3RhdGUuc3Vic2NyaWJlKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKG5ldyBBdXRoLlNldEF1dGhlbnRpY2F0ZWQodXNlci5lbWFpbCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IGRlYWwgd2l0aCB1bnN1YnNjcmlwdGlvbiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl9tZXRlclNlcnZpY2UuY2FuY2VsU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGguU2V0VW5BdXRoZW50aWNhdGVkKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzZ2lzdGVyVXNlcihhdXRoOiBBdXRoRGF0YSkge1xuICAgICAgICB0aGlzLl91aVNlcnZpY2UubG9hZGluZ1N0YXRlQ2hhbmdlZC5uZXh0KHRydWUpO1xuICAgICAgICAgICAgXG4gICAgICAgIHRoaXMuX25nQXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoXG4gICAgICAgICAgICBhdXRoLmVtYWlsLFxuICAgICAgICAgICAgYXV0aC5wYXNzd29yZFxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IFxuICAgICAgICAgICAgdGhpcy5fdWlTZXJ2aWNlLmxvYWRpbmdTdGF0ZUNoYW5nZWQubmV4dChmYWxzZSlcbiAgICAgICAgKVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91aVNlcnZpY2UubG9hZGluZ1N0YXRlQ2hhbmdlZC5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuX3VpU2VydmljZS5zaG93U25hY2tCYXIoZXJyb3IubWVzc2FnZSwgbnVsbCwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9naW4oYXV0aDogQXV0aERhdGEpIHtcbiAgICAgICAgdGhpcy5fdWlTZXJ2aWNlLmxvYWRpbmdTdGF0ZUNoYW5nZWQubmV4dCh0cnVlKTtcblxuICAgICAgICB0aGlzLl9uZ0F1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoXG4gICAgICAgICAgICBhdXRoLmVtYWlsLFxuICAgICAgICAgICAgYXV0aC5wYXNzd29yZFxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IFxuICAgICAgICAgICAgdGhpcy5fdWlTZXJ2aWNlLmxvYWRpbmdTdGF0ZUNoYW5nZWQubmV4dChmYWxzZSlcbiAgICAgICAgKVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91aVNlcnZpY2UubG9hZGluZ1N0YXRlQ2hhbmdlZC5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuX3VpU2VydmljZS5zaG93U25hY2tCYXIoZXJyb3IubWVzc2FnZSwgbnVsbCwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9nT3V0KCkge1xuICAgICAgICB0aGlzLl9uZ0F1dGguc2lnbk91dCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NoYXJlZC91aS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvYXV0aC9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9sb2FkaW5nOiBTdWJzY3JpcHRpb247XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIF91aVNlcnZpY2U6IFVJU2VydmljZSxcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9sb2FkaW5nID0gdGhpcy5fdWlTZXJ2aWNlLmxvYWRpbmdTdGF0ZUNoYW5nZWQuc3Vic2NyaWJlKChpc0xvYWRpbmcpID0+IHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gaXNMb2FkaW5nO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2xvYWRpbmcpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmcudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdChmb3JtczogTmdGb3JtKSB7XG4gICAgdGhpcy5fYXV0aFNlcnZpY2UubG9naW4oe1xuICAgICAgZW1haWw6IGZvcm1zLnZhbHVlLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IGZvcm1zLnZhbHVlLnBhc3N3b3JkXG4gICAgfSlcbiAgfVxufVxuIiwiPHNlY3Rpb24gY2xhc3M9XCJsb2dpbi1jb250YWluZXIgcm93XCI+XG4gICAgPGZvcm0gY2xhc3M9J2xvZ2luLWZvcm0gY29sJ1xuICAgICAgICAjZm9ybVJlZj0nbmdGb3JtJ1xuICAgICAgICAobmdTdWJtaXQpPSdvblN1Ym1pdChmb3JtUmVmKSc+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsXCJcbiAgICAgICAgICAgICAgICBuZ01vZGVsXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBlbWFpbFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgI2VtYWlsSW5wdXQ9XCJuZ01vZGVsXCI+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiIWVtYWlsSW5wdXQuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cbiAgICAgICAgICAgICAgICB7eydsb2dpbi5lbWFpbEludmFsaWQnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgIDwvbWF0LWVycm9yPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgbmdNb2RlbFxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBtaW5sZW5ndGg9XCI4XCJcbiAgICAgICAgICAgICAgICAjcHdJbnB1dD1cIm5nTW9kZWxcIj5cbiAgICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJwd0lucHV0LnZhbHVlPy5sZW5ndGggIT0gOFwiPlxuICAgICAgICAgICAgICAgIHt7ICdsb2dpbi5wYXNzd29yZGxlbmd0aCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgIDwvbWF0LWVycm9yPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgICAgKm5nSWY9XCIhaXNMb2FkaW5nXCJcbiAgICAgICAgICAgIHR5cGU9XCJTdWJtaXRcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZvcm1SZWYuaW52YWxpZFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICB7eydhcHAubG9naW4nIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxtYXQtc3Bpbm5lciAqbmdJZj1cImlzTG9hZGluZ1wiPjwvbWF0LXNwaW5uZXI+XG4gICAgPC9mb3JtPlxuPC9zZWN0aW9uPlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zaGFyZWQvdWkuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL2F1dGgvYXV0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZ251cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWdudXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWdudXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2xvYWRpbmc6IFN1YnNjcmlwdGlvbjtcbiAgaXNMb2FkaW5nID0gZmFsc2U7XG4gIG1heERhdGU6IERhdGU7XG4gIFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIF91aVNlcnZpY2U6IFVJU2VydmljZSxcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1heERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMubWF4RGF0ZS5zZXRGdWxsWWVhcih0aGlzLm1heERhdGUuZ2V0RnVsbFllYXIoKSAtIDE4KTtcbiAgICB0aGlzLl9sb2FkaW5nID0gdGhpcy5fdWlTZXJ2aWNlLmxvYWRpbmdTdGF0ZUNoYW5nZWQuc3Vic2NyaWJlKChpc0xvYWRpbmcpID0+IHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gaXNMb2FkaW5nO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2xvYWRpbmcpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmcudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdChmb3JtczogTmdGb3JtKSB7XG4gICAgY29uc29sZS5lcnJvcihmb3Jtcyk7XG4gICAgdGhpcy5fYXV0aFNlcnZpY2UucmVzZ2lzdGVyVXNlcih7XG4gICAgICBlbWFpbDogZm9ybXMudmFsdWUuZW1haWwsXG4gICAgICBwYXNzd29yZDogZm9ybXMudmFsdWUucGFzc3dvcmRcbiAgICB9KVxuICB9XG59XG4iLCI8c2VjdGlvbiBjbGFzcz1cImNvbnRhaW5lciByb3dcIj5cbiAgICA8Zm9ybSBjbGFzcz1cImNvbFwiXG4gICAgICAgICAgI2Zvcm1SZWY9J25nRm9ybSdcbiAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXQoZm9ybVJlZilcIj5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiIG5nTW9kZWwgbmFtZT1cImVtYWlsXCIgZW1haWwgcmVxdWlyZWQgI2VtYWlsSW5wdXQ9J25nTW9kZWwnPlxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cIiFlbWFpbElucHV0Lmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+RW1haWwgaXMgaW52YWxpZC48L21hdC1lcnJvcj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGhpbnRMYWJlbD1cIlNob3VsZCBiZSBhdGxlYXN0IDggY2hhcmFjdGVycyBsb25nXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCIgbmdNb2RlbCBuYW1lPVwicGFzc3dvcmRcIiByZXF1aXJlZCBtaW5sZW5ndGg9XCI4XCIgI3B3SW5wdXQ9XCJuZ01vZGVsXCI+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwicHdJbnB1dC52YWx1ZT8ubGVuZ3RoICE9IDhcIj5IYXMgdG8gYmUgYXRsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZy48L21hdC1lcnJvcj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgQmlydGhkYXlcIlxuICAgICAgICAgICAgICAgIFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiXG4gICAgICAgICAgICAgICAgW21heF09XCJtYXhEYXRlXCJcbiAgICAgICAgICAgICAgICBuZ01vZGVsXG4gICAgICAgICAgICAgICAgbmFtZT1cImJpcnRoZGF0ZVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWNoZWNrYm94IG5nTW9kZWwgbmFtZT1cImFncmVlXCIgcmVxdWlyZWQgY29sb3I9XCJwcmltYXJ5XCI+QWdyZWUgdG8gdGVybXMgYW5kIGNvbmRpdGlvbjwvbWF0LWNoZWNrYm94PlxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICAgICpuZ0lmPVwiIWlzTG9hZGluZ1wiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09J2Zvcm1SZWYuaW52YWxpZCdcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiPlN1Ym1pdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPG1hdC1zcGlubmVyICpuZ0lmPVwiaXNMb2FkaW5nXCI+PC9tYXQtc3Bpbm5lcj5cbiAgICA8L2Zvcm0+XG48L3NlY3Rpb24+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8cD5kaWFsb2cgd29ya3MhPC9wPlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gJy4uLy4uLy4uL2FwcC5yZWR1Y2VyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvYXV0aC9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaXNBdXRoJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgdXNlck5hbWUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIF9zdG9yZTogU3RvcmU8ZnJvbVJvb3QuU3RhdGU+XG4gICkge1xuICAgICAgLy8gdGhpcyBsYW5ndWFnZSB3aWxsIGJlIHVzZWQgYXMgYSBmYWxsYmFjayB3aGVuIGEgdHJhbnNsYXRpb24gaXNuJ3QgZm91bmQgaW4gdGhlIGN1cnJlbnQgbGFuZ3VhZ2VcbiAgICAgIF90cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoJ2VuJyk7XG5cbiAgICAgIC8vIHRoZSBsYW5nIHRvIHVzZSwgaWYgdGhlIGxhbmcgaXNuJ3QgYXZhaWxhYmxlLCBpdCB3aWxsIHVzZSB0aGUgY3VycmVudCBsb2FkZXIgdG8gZ2V0IHRoZW1cbiAgICAgIF90cmFuc2xhdGUudXNlKCdlbicpO1xuICAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXNlck5hbWUkID0gdGhpcy5fc3RvcmUuc2VsZWN0KGZyb21Sb290LmdldFVzZXIpO1xuICAgIHRoaXMuaXNBdXRoJCA9IHRoaXMuX3N0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRJc0F1dGgpO1xuICB9XG5cbiAgbGFuZ3VhZ2VzID0gW1xuICAgIHsgdmFsdWU6ICdlbicsIGxhYmVsOiAnYXBwLmxhbmd1YWdlLmVuJyB9LFxuICAgIHsgdmFsdWU6ICdkZScsIGxhYmVsOiAnYXBwLmxhbmd1YWdlLmRlJyB9LFxuICBdXG5cbiAgc2VsZWN0TGFuZ3VhZ2UobGFuZzogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJhbnNsYXRlLnVzZShsYW5nKTtcbiAgfVxuXG4gIG9uTG9nb3V0KCkge1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ091dCgpO1xuICB9XG59XG4iLCI8bWF0LXNpZGVuYXYtY29udGFpbmVyPlxuICAgIDxtYXQtc2lkZW5hdi1jb250ZW50PlxuICAgICAgICA8bWF0LXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICA8ZGl2PjxhIHJvdXRlckxpbms9XCIvXCI+e3snYXBwLm1ldGVyLWFwcCcgfCB0cmFuc2xhdGV9fTwvYT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJkcm9wLWRvd24tbGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgICAgICBbbWF0TWVudVRyaWdnZXJGb3JdPVwibGFuZ3VhZ2VNZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj50cmFuc2xhdGU8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxtYXQtbWVudSAjbGFuZ3VhZ2VNZW51PVwibWF0TWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKm5nRm9yPVwibGV0IGxhbmd1YWdlIG9mIGxhbmd1YWdlc1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdExhbmd1YWdlKGxhbmd1YWdlLnZhbHVlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tsYW5ndWFnZS5sYWJlbCB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbWF0LW1lbnU+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCIhKGlzQXV0aCQgfCBhc3luYylcIiByb3V0ZXJMaW5rPVwiL2xvZ2luXCI+e3snYXBwLmxvZ2luJyB8IHRyYW5zbGF0ZX19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cIiEoaXNBdXRoJCB8IGFzeW5jKVwiIHJvdXRlckxpbms9XCIvc2lnbnVwXCI+e3snYXBwLnNpZ251cCcgfCB0cmFuc2xhdGV9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJpc0F1dGgkIHwgYXN5bmNcIiByb3V0ZXJMaW5rPVwiL21ldGVyXCI+e3snYXBwLm1ldGVyJyB8IHRyYW5zbGF0ZX19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cImlzQXV0aCQgfCBhc3luY1wiIChjbGljayk9XCJvbkxvZ291dCgpXCI+e3snYXBwLmxvZ291dCcgfCB0cmFuc2xhdGV9fTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwic2lkZW5hdi50b2dnbGUoKVwiIGZ4SGlkZS5ndC14cz5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWF0LXRvb2xiYXI+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQgY2xhc3M9XCJjb250ZW50XCI+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L21haW4+XG4gICAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxuICAgIDxtYXQtc2lkZW5hdiBwb3NpdGlvbj1cImVuZFwiICNzaWRlbmF2IHJvbGU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxtYXQtbmF2LWxpc3Q+XG4gICAgICAgICAgICA8YSBtYXQtbGlzdC1pdGVtXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhKGlzQXV0aCQgfCBhc3luYylcIlxuICAgICAgICAgICAgICAgIHJvdXRlckxpbms9XCIvbG9naW5cIiAoY2xpY2spPVwic2lkZW5hdi50b2dnbGUoKVwiPnt7J2FwcC5sb2dpbicgfCB0cmFuc2xhdGV9fTwvYT5cbiAgICAgICAgICAgIDxhIG1hdC1saXN0LWl0ZW1cbiAgICAgICAgICAgICAgICAqbmdJZj1cIiEoaXNBdXRoJCB8IGFzeW5jKVwiXG4gICAgICAgICAgICAgICAgcm91dGVyTGluaz1cIi9zaWdudXBcIiAoY2xpY2spPVwic2lkZW5hdi50b2dnbGUoKVwiPnt7J2FwcC5zaWdudXAnIHwgdHJhbnNsYXRlfX08L2E+XG4gICAgICAgICAgICA8YSBtYXQtbGlzdC1pdGVtXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpc0F1dGgkIHwgYXN5bmNcIlxuICAgICAgICAgICAgICAgIHJvdXRlckxpbms9XCIvbWV0ZXJcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzaWRlbmF2LnRvZ2dsZSgpXCI+e3snYXBwLm1ldGVyJyB8IHRyYW5zbGF0ZX19PC9hPlxuICAgICAgICAgICAgPGEgbWF0LWxpc3QtaXRlbSAqbmdJZj1cImlzQXV0aCQgfCBhc3luY1wiIChjbGljayk9XCJvbkxvZ291dCgpXCI+e3snYXBwLmxvZ291dCcgfCB0cmFuc2xhdGV9fTwvYT5cbiAgICAgICAgPC9tYXQtbmF2LWxpc3Q+XG4gICAgPC9tYXQtc2lkZW5hdj5cbjwvbWF0LXNpZGVuYXYtY29udGFpbmVyPiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tYWluJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21haW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYWluLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8c2VjdGlvbiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCJcbiAgICAgICAgZnhGbGV4XG4gICAgICAgIGZ4TGF5b3V0PVwicm93XCJcbiAgICAgICAgZnhGbGV4RmlsbFxuICAgICAgICBmeExheW91dEdhcD1cIjEwMHB4XCJcbiAgICAgICAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLWNhcmRcIj5cbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2VsZWN0cmljLmpwZ1wiPlxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgIDwhLS08bWF0LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24+TElLRTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbj5TSEFSRTwvYnV0dG9uPlxuICAgICAgICA8L21hdC1jYXJkLWFjdGlvbnM+LS0+XG4gICAgPC9tYXQtY2FyZD5cbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLWNhcmRcIj5cbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxuICAgICAgICA8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZWxlY3RyaWMuanBnXCI+XG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICA8IS0tPG1hdC1jYXJkLWFjdGlvbnM+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbj5MSUtFPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbj5TSEFSRTwvYnV0dG9uPlxuICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPi0tPlxuICA8L21hdC1jYXJkPiAgXG48L3NlY3Rpb24+XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IE1hdFNvcnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7IE1hdFNsaWRlVG9nZ2xlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJzsgXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7IE1hdE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHsgTWF0U2lkZW5hdk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuaW1wb3J0IHsgTWF0VG9vbGJhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xuaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7IE1hdFRhYnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQgeyBNYXRTbmFja0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICAgICAgTWF0TGlzdE1vZHVsZSxcbiAgICAgICAgTWF0TWVudU1vZHVsZSxcbiAgICAgICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICAgICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgICAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICAgICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICAgICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICAgICAgTWF0VGFic01vZHVsZSxcbiAgICAgICAgTWF0VGFibGVNb2R1bGUsXG4gICAgICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICAgICAgTWF0TGlzdE1vZHVsZSxcbiAgICAgICAgTWF0TWVudU1vZHVsZSxcbiAgICAgICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICAgICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgICAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICAgICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICAgICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICAgICAgTWF0VGFic01vZHVsZSxcbiAgICAgICAgTWF0VGFibGVNb2R1bGUsXG4gICAgICAgIE1hdFRvb2xiYXJNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsTW9kdWxlIHt9IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgKiBhcyBmcm9tTWV0ZXIgZnJvbSAnLi9zdGF0ZS9tZXRlci5yZWR1Y2VyJ1xuaW1wb3J0ICogYXMgTWV0ZXIgZnJvbSAnLi9zdGF0ZS9tZXRlci5hY3Rpb25zJ1xuaW1wb3J0IHsgSURhdGFEVE8gfSBmcm9tICdzcmMvQmFja2VuZC9EYXRhRFRPJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXRlclNlcnZpY2Uge1xuICBwcml2YXRlIF9maXJlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGI6IEFuZ3VsYXJGaXJlc3RvcmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGZyb21NZXRlci5NZXRlckRhdGFTdGF0ZT4pIHt9XG5cbiAgZ2V0TWV0ZXJMaXN0KCkge1xuICAgIHRoaXMuZGIuY29sbGVjdGlvbignbWV0ZXJEYXRhJylcbiAgICAgICAgICAgIC52YWx1ZUNoYW5nZXMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogSURhdGFEVE9bXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IE1ldGVyLlNldE1ldGVyRGF0YShkYXRhKSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGROZXdNZXRlckRhdGEobmV3RGF0YTogSURhdGFEVE8pIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuZGIuY3JlYXRlSWQoKTtcbiAgICBjb25zdCBpdGVtOiBJRGF0YURUTyA9IHsgaWQsIC4uLm5ld0RhdGF9O1xuICAgIHRoaXMuZGIuY29sbGVjdGlvbignbWV0ZXJEYXRhJykuYWRkKGl0ZW0pO1xuICB9XG5cbiAgdXBkYXRlRGF0YShkYXRhOiBJRGF0YURUTykge1xuICAgIGNvbnNvbGUubG9nKFwiZGF0YSBkYlwiLCB0aGlzLmRiLmNvbGxlY3Rpb24oJ21ldGVyRGF0YScpLmRvYyhkYXRhLmlkKSk7XG4gICAgdGhpcy5kYi5jb2xsZWN0aW9uKCdtZXRlckRhdGEnKS5kb2MoZGF0YS5pZCkudXBkYXRlKGRhdGEpO1xuICB9XG5cbiAgZGVsZXRlTWV0ZXJEYXRhKGRhdGE6IElEYXRhRFRPKSB7XG4gICAgY29uc29sZS5lcnJvcihcImRlbGV0ZVwiLCBkYXRhKTtcbiAgICB0aGlzLmRiLmNvbGxlY3Rpb24oJ21ldGVyRGF0YScpLmRvYyhkYXRhLmlkKS5kZWxldGUoKTtcbiAgfVxuXG4gIGNhbmNlbFN1YnNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9maXJlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn0iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBJRGF0YURUTyB9IGZyb20gJ3NyYy9CYWNrZW5kL0RhdGFEVE8nO1xuXG5leHBvcnQgY29uc3QgU0VUX0FWQUlMQUJMRV9NRVRFUl9EQVRBID0gJ1tNZXRlcl0gU2V0IE1ldGVyIGRhdGEnO1xuZXhwb3J0IGNvbnN0IEFERF9BVkFJTEFCTEVfTUVURVJfREFUQSA9ICdbTWV0ZXJdIEFkZCBNZXRlciBkYXRhJztcbmV4cG9ydCBjb25zdCBERUxFVEVfQVZBSUxBQkxFX01FVEVSX0RBVEEgPSAnW01ldGVyXSBEZWxldGUgTWV0ZXIgZGF0YSc7XG4vLyBleHBvcnQgY29uc3QgU1RPUF9BQ1RJVkUgPSAnW1VJXSBTdG9wIGFjdGl2ZSc7IFxuXG5leHBvcnQgY2xhc3MgU2V0TWV0ZXJEYXRhIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgICByZWFkb25seSB0eXBlID0gU0VUX0FWQUlMQUJMRV9NRVRFUl9EQVRBO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBJRGF0YURUT1tdKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQWRkTWV0ZXJEYXRhIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgICByZWFkb25seSB0eXBlID0gQUREX0FWQUlMQUJMRV9NRVRFUl9EQVRBO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBJRGF0YURUTykge31cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZU1ldGVyRGF0YSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gICAgcmVhZG9ubHkgdHlwZSA9IERFTEVURV9BVkFJTEFCTEVfTUVURVJfREFUQTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogSURhdGFEVE8pIHt9XG59XG5cbmV4cG9ydCB0eXBlIE1ldGVyQWN0aW9ucyA9IFNldE1ldGVyRGF0YSB8IEFkZE1ldGVyRGF0YSB8IERlbGV0ZU1ldGVyRGF0YTsiLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4uL21hdGVyaWFsLm1vZHVsZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIE1hdGVyaWFsTW9kdWxlLFxuICAgICAgICBUcmFuc2xhdGVNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVJU2VydmljZSB7XG4gICAgbG9hZGluZ1N0YXRlQ2hhbmdlZCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIpe31cblxuICAgIHNob3dTbmFja0JhcihtZXNzYWdlOiBzdHJpbmcsIGFjdGlvbiwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbihtZXNzYWdlLCBhY3Rpb24sIGR1cmF0aW9uKTtcbiAgICB9XG59IiwiLy8gVGhpcyBmaWxlIGNhbiBiZSByZXBsYWNlZCBkdXJpbmcgYnVpbGQgYnkgdXNpbmcgdGhlIGBmaWxlUmVwbGFjZW1lbnRzYCBhcnJheS5cbi8vIGBuZyBidWlsZCAtLXByb2RgIHJlcGxhY2VzIGBlbnZpcm9ubWVudC50c2Agd2l0aCBgZW52aXJvbm1lbnQucHJvZC50c2AuXG4vLyBUaGUgbGlzdCBvZiBmaWxlIHJlcGxhY2VtZW50cyBjYW4gYmUgZm91bmQgaW4gYGFuZ3VsYXIuanNvbmAuXG5cbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcbiAgcHJvZHVjdGlvbjogZmFsc2UsXG4gIGZpcmViYXNlQ29uZmlnOiAge1xuICAgIGFwaUtleTogXCJBSXphU3lDWkNFbEVlWE03ZmE3bUZQTUdSc1FTcXZvbzFmN3I2SEVcIixcbiAgICBhdXRoRG9tYWluOiBcIm1ldGVyLWJhc2UtcHJvamVjdC5maXJlYmFzZWFwcC5jb21cIixcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL21ldGVyLWJhc2UtcHJvamVjdC5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJtZXRlci1iYXNlLXByb2plY3RcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcIm1ldGVyLWJhc2UtcHJvamVjdC5hcHBzcG90LmNvbVwiLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjExODE0MzMxMTkzNlwiLFxuICAgIGFwcElkOiBcIjE6MTE4MTQzMzExOTM2OndlYjpmZTE0YzVlZWU1MjVjMjlmNzViZmE1XCIsXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLTFRWjFWSDhXWUpcIlxuICB9LFxufTtcblxuLypcbiAqIEZvciBlYXNpZXIgZGVidWdnaW5nIGluIGRldmVsb3BtZW50IG1vZGUsIHlvdSBjYW4gaW1wb3J0IHRoZSBmb2xsb3dpbmcgZmlsZVxuICogdG8gaWdub3JlIHpvbmUgcmVsYXRlZCBlcnJvciBzdGFjayBmcmFtZXMgc3VjaCBhcyBgem9uZS5ydW5gLCBgem9uZURlbGVnYXRlLmludm9rZVRhc2tgLlxuICpcbiAqIFRoaXMgaW1wb3J0IHNob3VsZCBiZSBjb21tZW50ZWQgb3V0IGluIHByb2R1Y3Rpb24gbW9kZSBiZWNhdXNlIGl0IHdpbGwgaGF2ZSBhIG5lZ2F0aXZlIGltcGFjdFxuICogb24gcGVyZm9ybWFuY2UgaWYgYW4gZXJyb3IgaXMgdGhyb3duLlxuICovXG4vLyBpbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lLWVycm9yJzsgIC8vIEluY2x1ZGVkIHdpdGggQW5ndWxhciBDTEkuXG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xuICAgIGVuYWJsZVByb2RNb2RlKCk7XG59XG5cbi8vIEEgdHJhZGl0aW9uYWwgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIHN0YXJ0cyBieSBpbml0aWFsaXppbmcgZ2xvYmFsIG9iamVjdHMsXG4vLyBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLlxuLy8gQW5ndWxhciBhcHBsaWNhdGlvbnMgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uOiBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy5cbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlcixcbi8vIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLFxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lL2FjdGl2aXR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9vcGVyYXRvcnNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==