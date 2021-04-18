require("./runtime.js");
require("./vendor.js");
module.exports = (global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["bundle"],
  {
    /***/ "./app.css": /***/ function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */ (function (global) {
        global.registerModule("~@nativescript/theme/css/core.css", () =>
          __webpack_require__(
            "../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"
          )
        );
        global.registerModule("@nativescript/theme/css/core.css", () =>
          __webpack_require__(
            "../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"
          )
        );
        global.registerModule("~@nativescript/theme/css/blue.css", () =>
          __webpack_require__(
            "../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/blue.css"
          )
        );
        global.registerModule("@nativescript/theme/css/blue.css", () =>
          __webpack_require__(
            "../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/blue.css"
          )
        );
        module.exports = {
          type: "stylesheet",
          stylesheet: {
            rules: [
              { type: "import", import: '"~@nativescript/theme/css/core.css"' },
              { type: "import", import: '"~@nativescript/theme/css/blue.css"' },
              {
                type: "comment",
                comment:
                  " Place any CSS rules you want to apply on both iOS and Android here.\nThis is where the vast majority of your CSS code goes. ",
              },
            ],
            parsingErrors: [],
          },
        };
        if (true) {
          module.hot.accept();
          module.hot.dispose(() => {
            global.hmrRefresh({ type: "style", path: "./app.css" });
          });
        }

        /* WEBPACK VAR INJECTION */
      }.call(
        this,
        __webpack_require__(
          "../node_modules/@nativescript/webpack/node_modules/webpack/buildin/global.js"
        )
      ));

      /***/
    },

    /***/ "./app/app-routing.module.tns.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "routes",
        function () {
          return routes;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "AppRoutingModule",
        function () {
          return AppRoutingModule;
        }
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "@nativescript/angular"
      );
      /* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var _main_feature_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "./app/main/feature/main.component.ts"
      );
      /* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "./app/auth/auth.guard.ts"
      );

      const routes = [
        {
          path: "",
          component:
            _main_feature_main_component__WEBPACK_IMPORTED_MODULE_2__[
              "MainComponent"
            ],
          canActivate: [
            _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
          ],
        },
        {
          path: "meter",
          loadChildren: () =>
            Promise.all(
              /* import() */ [
                __webpack_require__.e("vendor"),
                __webpack_require__.e(0),
              ]
            )
              .then(
                __webpack_require__.bind(null, "./app/meter/meter.module.ts")
              )
              .then((m) => m.MeterModule),
          canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        },
      ];
      class AppRoutingModule {}
      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineNgModule"
      ]({ type: AppRoutingModule });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineInjector"
      ]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [
          [
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__[
              "NativeScriptRouterModule"
            ].forRoot(routes),
          ],
          _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__[
            "NativeScriptRouterModule"
          ],
        ],
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) &&
          _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵsetNgModuleScope"
          ](AppRoutingModule, {
            imports: [
              _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__[
                "NativeScriptRouterModule"
              ],
            ],
            exports: [
              _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__[
                "NativeScriptRouterModule"
              ],
            ],
          });
      })();
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          AppRoutingModule,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
              args: [
                {
                  imports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__[
                      "NativeScriptRouterModule"
                    ].forRoot(routes),
                  ],
                  exports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__[
                      "NativeScriptRouterModule"
                    ],
                  ],
                },
              ],
            },
          ],
          null,
          null
        );
      })();

      /***/
    },

    /***/ "./app/app.component.tns.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "AppComponent",
        function () {
          return AppComponent;
        }
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "./app/auth/auth.service.ts"
      );
      /* harmony import */ var _src_app_header_feature_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "./app/header/feature/header/header.component.ts"
      );

      class AppComponent {
        constructor(_authService) {
          this._authService = _authService;
        }
        ngOnInit() {
          this._authService.initAuthListener();
        }
      }
      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          )
        );
      };
      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineComponent"
      ]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "GridLayout"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              1,
              "app-header"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [
          _src_app_header_feature_header_header_component__WEBPACK_IMPORTED_MODULE_2__[
            "HeaderComponent"
          ],
        ],
        styles: [""],
      });
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          AppComponent,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
              args: [
                {
                  selector: "app-root",
                  templateUrl: "./app.component.html",
                  styleUrls: ["./app.component.scss"],
                },
              ],
            },
          ],
          function () {
            return [
              {
                type:
                  _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__[
                    "AuthService"
                  ],
              },
            ];
          },
          null
        );
      })();

      /***/
    },

    /***/ "./app/app.module.tns.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "HttpLoaderFactory",
        function () {
          return HttpLoaderFactory;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "MyMissingTranslationHandler",
        function () {
          return MyMissingTranslationHandler;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "AppModule",
        function () {
          return AppModule;
        }
      );
      /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/common/http"
      );
      /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "../node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js"
      );
      /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "../node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js"
      );
      /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        "../node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js"
      );
      /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        "../node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js"
      );
      /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        "@angular/platform-browser"
      );
      /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__
      );
      /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        "@angular/platform-browser/animations"
      );
      /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__
      );
      /* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        "@nativescript/angular"
      );
      /* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
        _nativescript_angular__WEBPACK_IMPORTED_MODULE_8__
      );
      /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        "../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js"
      );
      /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        "../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js"
      );
      /* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        "../node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm5/ngx-translate-http-loader.js"
      );
      /* harmony import */ var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        "./app/app-routing.module.tns.ts"
      );
      /* harmony import */ var _src_app_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
        "./app/material.module.ts"
      );
      /* harmony import */ var _src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
        "./app/auth/auth.module.ts"
      );
      /* harmony import */ var _src_app_app_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
        "./app/app.reducer.ts"
      );
      /* harmony import */ var _src_app_app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
        "./app/app.component.tns.ts"
      );
      /* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
        "./environments/environment.ts"
      );
      /* harmony import */ var _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
        "./app/auth/auth.service.ts"
      );
      /* harmony import */ var _src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
        "./app/shared/ui.service.ts"
      );
      /* harmony import */ var _src_app_meter_meter_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
        "./app/meter/meter.service.ts"
      );
      /* harmony import */ var _src_app_dialog_feature_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
        "./app/dialog/feature/dialog.component.ts"
      );
      /* harmony import */ var _src_app_main_feature_main_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
        "./app/main/feature/main.component.ts"
      );
      /* harmony import */ var _src_app_header_feature_header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
        "./app/header/feature/header/header.component.ts"
      );

      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__[
          "TranslateHttpLoader"
        ](http);
      }
      class MyMissingTranslationHandler {
        handle(params) {
          return "some value";
        }
      }
      // Uncomment and add to NgModule imports if you need to use two-way binding and/or HTTP wrapper
      // import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';
      /*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
      class AppModule {}
      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
        "ɵɵdefineNgModule"
      ]({
        type: AppModule,
        bootstrap: [
          _src_app_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
        ],
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
        "ɵɵdefineInjector"
      ]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [
          _src_app_meter_meter_service__WEBPACK_IMPORTED_MODULE_20__[
            "MeterService"
          ],
          _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_18__[
            "AuthService"
          ],
          _src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_19__["UIService"],
        ],
        imports: [
          [
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_8__[
              "NativeScriptModule"
            ],
            _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_12__[
              "AppRoutingModule"
            ],
            _angular_fire__WEBPACK_IMPORTED_MODULE_2__[
              "AngularFireModule"
            ].initializeApp(
              _src_environments_environment__WEBPACK_IMPORTED_MODULE_17__[
                "environment"
              ].firebaseConfig
            ),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__[
              "AngularFirestoreModule"
            ],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__[
              "AngularFireDatabaseModule"
            ],
            _src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_14__[
              "AuthModule"
            ],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__[
              "BrowserModule"
            ],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__[
              "BrowserAnimationsModule"
            ],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__[
              "FlexLayoutModule"
            ],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__[
              "HttpClientModule"
            ],
            _src_app_material_module__WEBPACK_IMPORTED_MODULE_13__[
              "MaterialModule"
            ],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot(
              _src_app_app_reducer__WEBPACK_IMPORTED_MODULE_15__["reducers"]
            ),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__[
              "TranslateModule"
            ].forRoot({
              loader: {
                provide:
                  _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__[
                    "TranslateModule"
                  ],
                useFactory: HttpLoaderFactory,
                deps: [
                  _angular_common_http__WEBPACK_IMPORTED_MODULE_0__[
                    "HttpClient"
                  ],
                ],
              },
              defaultLanguage: "en",
              missingTranslationHandler: {
                provide:
                  _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__[
                    "MissingTranslationHandler"
                  ],
                useClass: MyMissingTranslationHandler,
              },
              useDefaultLang: true,
            }),
          ],
        ],
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) &&
          _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵsetNgModuleScope"
          ](AppModule, {
            declarations: [
              _src_app_app_component__WEBPACK_IMPORTED_MODULE_16__[
                "AppComponent"
              ],
              _src_app_dialog_feature_dialog_component__WEBPACK_IMPORTED_MODULE_21__[
                "DialogComponent"
              ],
              _src_app_header_feature_header_header_component__WEBPACK_IMPORTED_MODULE_23__[
                "HeaderComponent"
              ],
              _src_app_main_feature_main_component__WEBPACK_IMPORTED_MODULE_22__[
                "MainComponent"
              ],
            ],
            imports: [
              _nativescript_angular__WEBPACK_IMPORTED_MODULE_8__[
                "NativeScriptModule"
              ],
              _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_12__[
                "AppRoutingModule"
              ],
              _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"],
              _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__[
                "AngularFirestoreModule"
              ],
              _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__[
                "AngularFireDatabaseModule"
              ],
              _src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_14__[
                "AuthModule"
              ],
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__[
                "BrowserModule"
              ],
              _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__[
                "BrowserAnimationsModule"
              ],
              _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__[
                "FlexLayoutModule"
              ],
              _angular_common_http__WEBPACK_IMPORTED_MODULE_0__[
                "HttpClientModule"
              ],
              _src_app_material_module__WEBPACK_IMPORTED_MODULE_13__[
                "MaterialModule"
              ],
              _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreRootModule"],
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__[
                "TranslateModule"
              ],
            ],
          });
      })();
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
          AppModule,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
              args: [
                {
                  declarations: [
                    _src_app_app_component__WEBPACK_IMPORTED_MODULE_16__[
                      "AppComponent"
                    ],
                    _src_app_dialog_feature_dialog_component__WEBPACK_IMPORTED_MODULE_21__[
                      "DialogComponent"
                    ],
                    _src_app_header_feature_header_header_component__WEBPACK_IMPORTED_MODULE_23__[
                      "HeaderComponent"
                    ],
                    _src_app_main_feature_main_component__WEBPACK_IMPORTED_MODULE_22__[
                      "MainComponent"
                    ],
                  ],
                  imports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_8__[
                      "NativeScriptModule"
                    ],
                    _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_12__[
                      "AppRoutingModule"
                    ],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_2__[
                      "AngularFireModule"
                    ].initializeApp(
                      _src_environments_environment__WEBPACK_IMPORTED_MODULE_17__[
                        "environment"
                      ].firebaseConfig
                    ),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__[
                      "AngularFirestoreModule"
                    ],
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__[
                      "AngularFireDatabaseModule"
                    ],
                    _src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_14__[
                      "AuthModule"
                    ],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__[
                      "BrowserModule"
                    ],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__[
                      "BrowserAnimationsModule"
                    ],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__[
                      "FlexLayoutModule"
                    ],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__[
                      "HttpClientModule"
                    ],
                    _src_app_material_module__WEBPACK_IMPORTED_MODULE_13__[
                      "MaterialModule"
                    ],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_9__[
                      "StoreModule"
                    ].forRoot(
                      _src_app_app_reducer__WEBPACK_IMPORTED_MODULE_15__[
                        "reducers"
                      ]
                    ),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__[
                      "TranslateModule"
                    ].forRoot({
                      loader: {
                        provide:
                          _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__[
                            "TranslateModule"
                          ],
                        useFactory: HttpLoaderFactory,
                        deps: [
                          _angular_common_http__WEBPACK_IMPORTED_MODULE_0__[
                            "HttpClient"
                          ],
                        ],
                      },
                      defaultLanguage: "en",
                      missingTranslationHandler: {
                        provide:
                          _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__[
                            "MissingTranslationHandler"
                          ],
                        useClass: MyMissingTranslationHandler,
                      },
                      useDefaultLang: true,
                    }),
                  ],
                  providers: [
                    _src_app_meter_meter_service__WEBPACK_IMPORTED_MODULE_20__[
                      "MeterService"
                    ],
                    _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_18__[
                      "AuthService"
                    ],
                    _src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_19__[
                      "UIService"
                    ],
                  ],
                  bootstrap: [
                    _src_app_app_component__WEBPACK_IMPORTED_MODULE_16__[
                      "AppComponent"
                    ],
                  ],
                  schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                      "NO_ERRORS_SCHEMA"
                    ],
                  ],
                },
              ],
            },
          ],
          null,
          null
        );
      })();

      /***/
    },

    /***/ "./app/app.reducer.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "reducers",
        function () {
          return reducers;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "getAuthState",
        function () {
          return getAuthState;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "getIsAuth",
        function () {
          return getIsAuth;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "getUser",
        function () {
          return getUser;
        }
      );
      /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js"
      );
      /* harmony import */ var _app_auth_auth_state_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "./app/auth/auth-state/auth.reducer.ts"
      );

      const reducers = {
        ui: null,
        auth:
          _app_auth_auth_state_auth_reducer__WEBPACK_IMPORTED_MODULE_1__[
            "authReducer"
          ],
      };
      const getAuthState = Object(
        _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"]
      )("auth");
      const getIsAuth = Object(
        _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
      )(
        getAuthState,
        _app_auth_auth_state_auth_reducer__WEBPACK_IMPORTED_MODULE_1__[
          "getIsAuth"
        ]
      );
      const getUser = Object(
        _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
      )(
        getAuthState,
        _app_auth_auth_state_auth_reducer__WEBPACK_IMPORTED_MODULE_1__[
          "getUser"
        ]
      );

      /***/
    },

    /***/ "./app/auth/auth-routing.module.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "AuthRoutingModule",
        function () {
          return AuthRoutingModule;
        }
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "@angular/router"
      );
      /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_router__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var _feature_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "./app/auth/feature/login/login.component.ts"
      );
      /* harmony import */ var _feature_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "./app/auth/feature/signup/signup.component.ts"
      );

      const routes = [
        {
          path: "login",
          component:
            _feature_login_login_component__WEBPACK_IMPORTED_MODULE_2__[
              "LoginComponent"
            ],
        },
        {
          path: "signup",
          component:
            _feature_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__[
              "SignupComponent"
            ],
        },
      ];
      class AuthRoutingModule {}
      AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineNgModule"
      ]({ type: AuthRoutingModule });
      AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineInjector"
      ]({
        factory: function AuthRoutingModule_Factory(t) {
          return new (t || AuthRoutingModule)();
        },
        imports: [
          [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__[
              "RouterModule"
            ].forChild(routes),
          ],
          _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        ],
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) &&
          _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵsetNgModuleScope"
          ](AuthRoutingModule, {
            imports: [
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            ],
            exports: [
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            ],
          });
      })();
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          AuthRoutingModule,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
              args: [
                {
                  imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                      "RouterModule"
                    ].forChild(routes),
                  ],
                  exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                      "RouterModule"
                    ],
                  ],
                },
              ],
            },
          ],
          null,
          null
        );
      })();

      /***/
    },

    /***/ "./app/auth/auth-state/auth.actions.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "SET_AUTHENTICATED",
        function () {
          return SET_AUTHENTICATED;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "SET_UNAUTHENTICATED",
        function () {
          return SET_UNAUTHENTICATED;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "SetAuthenticated",
        function () {
          return SetAuthenticated;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "SetUnAuthenticated",
        function () {
          return SetUnAuthenticated;
        }
      );
      const SET_AUTHENTICATED = "[Auth] Set Authenticated";
      const SET_UNAUTHENTICATED = "[Auth] Set UnAuthenticated";
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

      /***/
    },

    /***/ "./app/auth/auth-state/auth.reducer.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "authReducer",
        function () {
          return authReducer;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "getIsAuth",
        function () {
          return getIsAuth;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "getUser",
        function () {
          return getUser;
        }
      );
      /* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./app/auth/auth-state/auth.actions.ts"
      );

      const DEFAULT_USER = "";
      const initialState = {
        isAuthenticated: false,
        userName: DEFAULT_USER,
      };
      function authReducer(state = initialState, action) {
        switch (action.type) {
          case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["SET_AUTHENTICATED"]:
            return {
              isAuthenticated: true,
              userName: action.payload,
            };
          case _auth_actions__WEBPACK_IMPORTED_MODULE_0__[
            "SET_UNAUTHENTICATED"
          ]:
            return {
              isAuthenticated: false,
              userName: DEFAULT_USER,
            };
          default:
            return state;
        }
      }
      const getIsAuth = (state) => state.isAuthenticated;
      const getUser = (state) => state.userName;

      /***/
    },

    /***/ "./app/auth/auth.guard.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "AuthGuard",
        function () {
          return AuthGuard;
        }
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "rxjs/operators"
      );
      /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        rxjs_operators__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "./app/app.reducer.ts"
      );
      /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "./app/auth/auth.service.ts"
      );
      /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        "@angular/router"
      );
      /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_router__WEBPACK_IMPORTED_MODULE_4__
      );
      /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        "../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js"
      );

      class AuthGuard {
        constructor(_authService, _router, _store) {
          this._authService = _authService;
          this._router = _router;
          this._store = _store;
        }
        canActivate(route, state) {
          return this._store
            .select(_app_reducer__WEBPACK_IMPORTED_MODULE_2__["getIsAuth"])
            .pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)
            );
        }
        canLoad(route) {
          return this._store
            .select(_app_reducer__WEBPACK_IMPORTED_MODULE_2__["getIsAuth"])
            .pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)
            );
        }
      }
      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
          )
        );
      };
      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineInjectable"
      ]({ token: AuthGuard, factory: AuthGuard.ɵfac });
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          AuthGuard,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
            },
          ],
          function () {
            return [
              {
                type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
              },
              { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
              { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
            ];
          },
          null
        );
      })();

      /***/
    },

    /***/ "./app/auth/auth.module.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "AuthModule",
        function () {
          return AuthModule;
        }
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "@angular/forms"
      );
      /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "../node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js"
      );
      /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "./app/shared/shared.module.ts"
      );
      /* harmony import */ var _feature_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        "./app/auth/feature/signup/signup.component.ts"
      );
      /* harmony import */ var _feature_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        "./app/auth/feature/login/login.component.ts"
      );
      /* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        "./app/auth/auth-routing.module.ts"
      );

      class AuthModule {}
      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineNgModule"
      ]({ type: AuthModule });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineInjector"
      ]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        imports: [
          [
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__[
              "AngularFireAuthModule"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__[
              "AuthRoutingModule"
            ],
          ],
        ],
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) &&
          _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵsetNgModuleScope"
          ](AuthModule, {
            declarations: [
              _feature_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__[
                "SignupComponent"
              ],
              _feature_login_login_component__WEBPACK_IMPORTED_MODULE_5__[
                "LoginComponent"
              ],
            ],
            imports: [
              _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__[
                "AngularFireAuthModule"
              ],
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                "ReactiveFormsModule"
              ],
              _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__[
                "SharedModule"
              ],
              _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__[
                "AuthRoutingModule"
              ],
            ],
          });
      })();
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          AuthModule,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
              args: [
                {
                  declarations: [
                    _feature_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__[
                      "SignupComponent"
                    ],
                    _feature_login_login_component__WEBPACK_IMPORTED_MODULE_5__[
                      "LoginComponent"
                    ],
                  ],
                  imports: [
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__[
                      "AngularFireAuthModule"
                    ],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                      "ReactiveFormsModule"
                    ],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__[
                      "SharedModule"
                    ],
                    _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__[
                      "AuthRoutingModule"
                    ],
                  ],
                },
              ],
            },
          ],
          null,
          null
        );
      })();

      /***/
    },

    /***/ "./app/auth/auth.service.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "AuthService",
        function () {
          return AuthService;
        }
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "./app/auth/auth-state/auth.actions.ts"
      );
      /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "@angular/router"
      );
      /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_router__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "../node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js"
      );
      /* harmony import */ var _meter_meter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        "./app/meter/meter.service.ts"
      );
      /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        "../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js"
      );
      /* harmony import */ var _shared_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        "./app/shared/ui.service.ts"
      );

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
              this._store.dispatch(
                new _auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__[
                  "SetAuthenticated"
                ](user.email)
              );
              this._router.navigate(["/"]);
            } else {
              // TODO: deal with unsubscription undefined
              // this._meterService.cancelSubscription();
              this._store.dispatch(
                new _auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__[
                  "SetUnAuthenticated"
                ]()
              );
              this._router.navigate(["/login"]);
            }
          });
        }
        resgisterUser(auth) {
          this._uiService.loadingStateChanged.next(true);
          this._ngAuth
            .createUserWithEmailAndPassword(auth.email, auth.password)
            .then(() => this._uiService.loadingStateChanged.next(false))
            .catch((error) => {
              this._uiService.loadingStateChanged.next(false);
              this._uiService.showSnackBar(error.message, null, {
                duration: 3000,
              });
            });
        }
        login(auth) {
          this._uiService.loadingStateChanged.next(true);
          this._ngAuth
            .signInWithEmailAndPassword(auth.email, auth.password)
            .then(() => this._uiService.loadingStateChanged.next(false))
            .catch((error) => {
              this._uiService.loadingStateChanged.next(false);
              this._uiService.showSnackBar(error.message, null, {
                duration: 3000,
              });
            });
        }
        logOut() {
          this._ngAuth.signOut();
        }
      }
      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
            _meter_meter_service__WEBPACK_IMPORTED_MODULE_4__["MeterService"]
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
            _shared_ui_service__WEBPACK_IMPORTED_MODULE_6__["UIService"]
          )
        );
      };
      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineInjectable"
      ]({ token: AuthService, factory: AuthService.ɵfac });
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          AuthService,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
            },
          ],
          function () {
            return [
              { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
              {
                type:
                  _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__[
                    "AngularFireAuth"
                  ],
              },
              {
                type:
                  _meter_meter_service__WEBPACK_IMPORTED_MODULE_4__[
                    "MeterService"
                  ],
              },
              { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
              {
                type:
                  _shared_ui_service__WEBPACK_IMPORTED_MODULE_6__["UIService"],
              },
            ];
          },
          null
        );
      })();

      /***/
    },

    /***/ "./app/auth/feature/login/login.component.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "LoginComponent",
        function () {
          return LoginComponent;
        }
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "./app/auth/auth.service.ts"
      );
      /* harmony import */ var _src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "./app/shared/ui.service.ts"
      );
      /* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "../node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js"
      );
      /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        "@angular/forms"
      );
      /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__
      );
      /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js"
      );
      /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js"
      );
      /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        "@angular/common"
      );
      /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_common__WEBPACK_IMPORTED_MODULE_7__
      );
      /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
      );
      /* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js"
      );
      /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        "../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js"
      );

      function LoginComponent_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "mat-error"
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
            " ",
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
              2,
              1,
              "login.emailInvalid"
            ),
            " "
          );
        }
      }
      function LoginComponent_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "mat-error"
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
            " ",
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
              2,
              1,
              "login.passwordlength"
            ),
            " "
          );
        }
      }
      function LoginComponent_button_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "button",
            9
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](
            2
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
            "disabled",
            _r0.invalid
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
            " ",
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
              2,
              2,
              "app.login"
            ),
            " "
          );
        }
      }
      function LoginComponent_mat_spinner_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
            0,
            "mat-spinner"
          );
        }
      }
      class LoginComponent {
        constructor(_authService, _uiService) {
          this._authService = _authService;
          this._uiService = _uiService;
          this.isLoading = false;
        }
        ngOnInit() {
          this._loading = this._uiService.loadingStateChanged.subscribe(
            (isLoading) => {
              this.isLoading = isLoading;
            }
          );
        }
        ngOnDestroy() {
          if (this._loading) {
            this._loading.unsubscribe();
          }
        }
        onSubmit(forms) {
          this._authService.login({
            email: forms.value.email,
            password: forms.value.password,
          });
        }
      }
      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
            _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__[
              "AuthService"
            ]
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
            _src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_2__["UIService"]
          )
        );
      };
      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineComponent"
      ]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 13,
        vars: 4,
        consts: [
          ["fxLayout", "row", 1, "login-container"],
          [
            "fxLayout",
            "column",
            "fxlayouAlign",
            "center center",
            1,
            "login-form",
            3,
            "ngSubmit",
          ],
          ["formRef", "ngForm"],
          [
            "type",
            "email",
            "matInput",
            "",
            "placeholder",
            "Your Email",
            "ngModel",
            "",
            "name",
            "email",
            "email",
            "",
            "required",
            "",
          ],
          ["emailInput", "ngModel"],
          [4, "ngIf"],
          [
            "type",
            "password",
            "matInput",
            "",
            "placeholder",
            "Your Password",
            "ngModel",
            "",
            "name",
            "password",
            "required",
            "",
            "minlength",
            "8",
          ],
          ["pwInput", "ngModel"],
          [
            "mat-raised-button",
            "",
            "type",
            "Submit",
            "color",
            "primary",
            3,
            "disabled",
            4,
            "ngIf",
          ],
          [
            "mat-raised-button",
            "",
            "type",
            "Submit",
            "color",
            "primary",
            3,
            "disabled",
          ],
        ],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "section",
              0
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "form",
              1,
              2
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "ngSubmit",
              function LoginComponent_Template_form_ngSubmit_1_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r7
                );
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵreference"
                ](2);
                return ctx.onSubmit(_r0);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "mat-form-field"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              4,
              "input",
              3,
              4
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              6,
              LoginComponent_mat_error_6_Template,
              3,
              3,
              "mat-error",
              5
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              7,
              "mat-form-field"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              8,
              "input",
              6,
              7
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              10,
              LoginComponent_mat_error_10_Template,
              3,
              3,
              "mat-error",
              5
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              11,
              LoginComponent_button_11_Template,
              3,
              4,
              "button",
              8
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              12,
              LoginComponent_mat_spinner_12_Template,
              1,
              0,
              "mat-spinner",
              5
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵreference"
            ](5);
            const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵreference"
            ](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              !_r1.hasError("required")
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              (_r3.value == null ? null : _r3.value.length) != 8
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              !ctx.isLoading
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx.isLoading
            );
          }
        },
        directives: [
          _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__[
            "DefaultLayoutDirective"
          ],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__[
            "ɵangular_packages_forms_forms_y"
          ],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
          _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__[
            "MatFormField"
          ],
          _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"],
          _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"],
          _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"],
          _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"],
          _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__[
            "MatSpinner"
          ],
        ],
        pipes: [
          _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"],
        ],
        styles: [
          ".login-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 30px;\n  justify-content: center;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 300px;\n}",
        ],
      });
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          LoginComponent,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
              args: [
                {
                  selector: "app-login",
                  templateUrl: "./login.component.html",
                  styleUrls: ["./login.component.scss"],
                },
              ],
            },
          ],
          function () {
            return [
              {
                type:
                  _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__[
                    "AuthService"
                  ],
              },
              {
                type:
                  _src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_2__[
                    "UIService"
                  ],
              },
            ];
          },
          null
        );
      })();

      /***/
    },

    /***/ "./app/auth/feature/signup/signup.component.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "SignupComponent",
        function () {
          return SignupComponent;
        }
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "./app/auth/auth.service.ts"
      );
      /* harmony import */ var _src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "./app/shared/ui.service.ts"
      );
      /* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "../node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js"
      );
      /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        "@angular/forms"
      );
      /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__
      );
      /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js"
      );
      /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js"
      );
      /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        "@angular/common"
      );
      /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_common__WEBPACK_IMPORTED_MODULE_7__
      );
      /* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js"
      );
      /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js"
      );
      /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
      );
      /* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js"
      );

      function SignupComponent_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "mat-error"
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
            1,
            "Email is invalid."
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }
      function SignupComponent_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "mat-error"
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
            1,
            "Has to be atleast 8 characters long."
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }
      function SignupComponent_button_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "button",
            14
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](
            2
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
            "disabled",
            _r0.invalid
          );
        }
      }
      function SignupComponent_mat_spinner_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
            0,
            "mat-spinner"
          );
        }
      }
      class SignupComponent {
        constructor(_authService, _uiService) {
          this._authService = _authService;
          this._uiService = _uiService;
          this.isLoading = false;
        }
        ngOnInit() {
          this.maxDate = new Date();
          this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
          this._loading = this._uiService.loadingStateChanged.subscribe(
            (isLoading) => {
              this.isLoading = isLoading;
            }
          );
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
            password: forms.value.password,
          });
        }
      }
      SignupComponent.ɵfac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)(
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
            _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__[
              "AuthService"
            ]
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
            _src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_2__["UIService"]
          )
        );
      };
      SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineComponent"
      ]({
        type: SignupComponent,
        selectors: [["app-signup"]],
        decls: 20,
        vars: 7,
        consts: [
          ["fxLayout", "row", 1, "container"],
          [
            "fxLayout",
            "column",
            "fxLayoutAlign",
            "center center",
            "fxLayoutGap",
            "5px",
            3,
            "ngSubmit",
          ],
          ["formRef", "ngForm"],
          [
            "type",
            "email",
            "matInput",
            "",
            "placeholder",
            "Your email",
            "ngModel",
            "",
            "name",
            "email",
            "email",
            "",
            "required",
            "",
          ],
          ["emailInput", "ngModel"],
          [4, "ngIf"],
          ["hintLabel", "Should be atleast 8 characters long"],
          [
            "type",
            "password",
            "matInput",
            "",
            "placeholder",
            "Your password",
            "ngModel",
            "",
            "name",
            "password",
            "required",
            "",
            "minlength",
            "8",
          ],
          ["pwInput", "ngModel"],
          [
            "matInput",
            "",
            "placeholder",
            "Your Birthday",
            "ngModel",
            "",
            "name",
            "birthdate",
            "required",
            "",
            3,
            "matDatepicker",
            "max",
          ],
          [3, "for"],
          ["picker", ""],
          ["ngModel", "", "name", "agree", "required", "", "color", "primary"],
          [
            "mat-raised-button",
            "",
            "type",
            "submit",
            "color",
            "primary",
            3,
            "disabled",
            4,
            "ngIf",
          ],
          [
            "mat-raised-button",
            "",
            "type",
            "submit",
            "color",
            "primary",
            3,
            "disabled",
          ],
        ],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "section",
              0
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "form",
              1,
              2
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "ngSubmit",
              function SignupComponent_Template_form_ngSubmit_1_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r8
                );
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵreference"
                ](2);
                return ctx.onSubmit(_r0);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "mat-form-field"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              4,
              "input",
              3,
              4
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              6,
              SignupComponent_mat_error_6_Template,
              2,
              0,
              "mat-error",
              5
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              7,
              "mat-form-field",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              8,
              "input",
              7,
              8
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              10,
              SignupComponent_mat_error_10_Template,
              2,
              0,
              "mat-error",
              5
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              11,
              "mat-form-field"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              12,
              "input",
              9
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              13,
              "mat-datepicker-toggle",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              14,
              "mat-datepicker",
              null,
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              16,
              "mat-checkbox",
              12
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              17,
              "Agree to terms and condition"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              18,
              SignupComponent_button_18_Template,
              2,
              1,
              "button",
              13
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              19,
              SignupComponent_mat_spinner_19_Template,
              1,
              0,
              "mat-spinner",
              5
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵreference"
            ](5);
            const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵreference"
            ](9);
            const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵreference"
            ](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              !_r1.hasError("required")
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              (_r3.value == null ? null : _r3.value.length) != 8
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "matDatepicker",
              _r5
            )("max", ctx.maxDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "for",
              _r5
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              !ctx.isLoading
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx.isLoading
            );
          }
        },
        directives: [
          _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__[
            "DefaultLayoutDirective"
          ],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__[
            "ɵangular_packages_forms_forms_y"
          ],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
          _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__[
            "DefaultLayoutAlignDirective"
          ],
          _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__[
            "DefaultLayoutGapDirective"
          ],
          _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__[
            "MatFormField"
          ],
          _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"],
          _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"],
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"],
          _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__[
            "MatDatepickerInput"
          ],
          _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__[
            "MatDatepickerToggle"
          ],
          _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__[
            "MatDatepicker"
          ],
          _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__[
            "MatCheckbox"
          ],
          _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__[
            "MatCheckboxRequiredValidator"
          ],
          _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"],
          _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"],
          _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__[
            "MatSpinner"
          ],
        ],
        styles: [
          ".container[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 30px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 300px;\n}",
        ],
      });
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          SignupComponent,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
              args: [
                {
                  selector: "app-signup",
                  templateUrl: "./signup.component.html",
                  styleUrls: ["./signup.component.scss"],
                },
              ],
            },
          ],
          function () {
            return [
              {
                type:
                  _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__[
                    "AuthService"
                  ],
              },
              {
                type:
                  _src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_2__[
                    "UIService"
                  ],
              },
            ];
          },
          null
        );
      })();

      /***/
    },

    /***/ "./app/dialog/feature/dialog.component.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "DialogComponent",
        function () {
          return DialogComponent;
        }
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_0__
      );

      class DialogComponent {
        constructor() {}
        ngOnInit() {}
      }
      DialogComponent.ɵfac = function DialogComponent_Factory(t) {
        return new (t || DialogComponent)();
      };
      DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineComponent"
      ]({
        type: DialogComponent,
        selectors: [["app-dialog"]],
        decls: 2,
        vars: 0,
        template: function DialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "p"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              "dialog works!"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [""],
      });
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          DialogComponent,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
              args: [
                {
                  selector: "app-dialog",
                  templateUrl: "./dialog.component.html",
                  styleUrls: ["./dialog.component.scss"],
                },
              ],
            },
          ],
          function () {
            return [];
          },
          null
        );
      })();

      /***/
    },

    /***/ "./app/header/feature/header/header.component.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "HeaderComponent",
        function () {
          return HeaderComponent;
        }
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "./app/app.reducer.ts"
      );
      /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js"
      );
      /* harmony import */ var _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "./app/auth/auth.service.ts"
      );
      /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        "../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js"
      );
      /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js"
      );
      /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js"
      );
      /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        "@angular/router"
      );
      /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_router__WEBPACK_IMPORTED_MODULE_7__
      );
      /* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        "../node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js"
      );
      /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
      );
      /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js"
      );
      /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"
      );
      /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        "@angular/common"
      );
      /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_common__WEBPACK_IMPORTED_MODULE_12__
      );
      /* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
        "../node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/extended.es5.js"
      );
      /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js"
      );

      function HeaderComponent_button_13_Template(rf, ctx) {
        if (rf & 1) {
          const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵgetCurrentView"
          ]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "button",
            19
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
            "click",
            function HeaderComponent_button_13_Template_button_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
              const language_r11 = ctx.$implicit;
              const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵnextContext"
              ]();
              return ctx_r12.selectLanguage(language_r11.value);
            }
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const language_r11 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
            " ",
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
              2,
              1,
              language_r11.label
            ),
            " "
          );
        }
      }
      function HeaderComponent_a_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "a",
            20
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
              2,
              1,
              "app.login"
            )
          );
        }
      }
      function HeaderComponent_a_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "a",
            21
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
              2,
              1,
              "app.signup"
            )
          );
        }
      }
      function HeaderComponent_a_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "a",
            22
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
              2,
              1,
              "app.meter"
            )
          );
        }
      }
      function HeaderComponent_a_21_Template(rf, ctx) {
        if (rf & 1) {
          const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵgetCurrentView"
          ]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "a",
            23
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
            "click",
            function HeaderComponent_a_21_Template_a_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
              const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵnextContext"
              ]();
              return ctx_r14.onLogout();
            }
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
              2,
              1,
              "app.logout"
            )
          );
        }
      }
      function HeaderComponent_a_31_Template(rf, ctx) {
        if (rf & 1) {
          const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵgetCurrentView"
          ]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "a",
            24
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
            "click",
            function HeaderComponent_a_31_Template_a_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
              const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵreference"
              ](29);
              return _r6.toggle();
            }
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
              2,
              1,
              "app.login"
            )
          );
        }
      }
      function HeaderComponent_a_33_Template(rf, ctx) {
        if (rf & 1) {
          const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵgetCurrentView"
          ]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "a",
            25
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
            "click",
            function HeaderComponent_a_33_Template_a_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
              const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵreference"
              ](29);
              return _r6.toggle();
            }
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
              2,
              1,
              "app.signup"
            )
          );
        }
      }
      function HeaderComponent_a_35_Template(rf, ctx) {
        if (rf & 1) {
          const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵgetCurrentView"
          ]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "a",
            26
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
            "click",
            function HeaderComponent_a_35_Template_a_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
              const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵreference"
              ](29);
              return _r6.toggle();
            }
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
              2,
              1,
              "app.meter"
            )
          );
        }
      }
      function HeaderComponent_a_37_Template(rf, ctx) {
        if (rf & 1) {
          const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵgetCurrentView"
          ]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "a",
            27
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
            "click",
            function HeaderComponent_a_37_Template_a_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
              const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵnextContext"
              ]();
              return ctx_r22.onLogout();
            }
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
              2,
              1,
              "app.logout"
            )
          );
        }
      }
      class HeaderComponent {
        constructor(_translate, _authService, _store) {
          this._translate = _translate;
          this._authService = _authService;
          this._store = _store;
          this.languages = [
            { value: "en", label: "app.language.en" },
            { value: "de", label: "app.language.de" },
          ];
          // this language will be used as a fallback when a translation isn't found in the current language
          _translate.setDefaultLang("en");
          // the lang to use, if the lang isn't available, it will use the current loader to get them
          _translate.use("en");
        }
        ngOnInit() {
          this.userName$ = this._store.select(
            _app_reducer__WEBPACK_IMPORTED_MODULE_1__["getUser"]
          );
          this.isAuth$ = this._store.select(
            _app_reducer__WEBPACK_IMPORTED_MODULE_1__["getIsAuth"]
          );
        }
        selectLanguage(lang) {
          this._translate.use(lang);
        }
        onLogout() {
          this._authService.logOut();
        }
      }
      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
            _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__[
              "AuthService"
            ]
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
          )
        );
      };
      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineComponent"
      ]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 39,
        vars: 29,
        consts: [
          ["color", "primary"],
          ["routerLink", "/"],
          ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "flex-end"],
          ["mat-button", "", 1, "drop-down-language", 3, "matMenuTriggerFor"],
          ["languageMenu", "matMenu"],
          ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"],
          ["fxLayoutGap", "10px", "fxHide.xs", ""],
          ["routerLink", "/login", 4, "ngIf"],
          ["routerLink", "/signup", 4, "ngIf"],
          ["routerLink", "/meter", 4, "ngIf"],
          [3, "click", 4, "ngIf"],
          ["mat-icon-button", "", "fxHide.gt-xs", "", 3, "click"],
          [1, "content"],
          ["position", "end", "role", "navigation"],
          ["sidenav", ""],
          ["mat-list-item", "", "routerLink", "/login", 3, "click", 4, "ngIf"],
          ["mat-list-item", "", "routerLink", "/signup", 3, "click", 4, "ngIf"],
          ["mat-list-item", "", "routerLink", "/meter", 3, "click", 4, "ngIf"],
          ["mat-list-item", "", 3, "click", 4, "ngIf"],
          ["mat-menu-item", "", 3, "click"],
          ["routerLink", "/login"],
          ["routerLink", "/signup"],
          ["routerLink", "/meter"],
          [3, "click"],
          ["mat-list-item", "", "routerLink", "/login", 3, "click"],
          ["mat-list-item", "", "routerLink", "/signup", 3, "click"],
          ["mat-list-item", "", "routerLink", "/meter", 3, "click"],
          ["mat-list-item", "", 3, "click"],
        ],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-sidenav-container"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-sidenav-content"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "mat-toolbar",
              0
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "div"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              4,
              "a",
              1
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              6,
              "translate"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              7,
              "div",
              2
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              8,
              "button",
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              9,
              "mat-icon"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              10,
              "translate"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              11,
              "mat-menu",
              null,
              4
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              13,
              HeaderComponent_button_13_Template,
              3,
              3,
              "button",
              5
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              14,
              "div",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              15,
              HeaderComponent_a_15_Template,
              3,
              3,
              "a",
              7
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              17,
              HeaderComponent_a_17_Template,
              3,
              3,
              "a",
              8
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              19,
              HeaderComponent_a_19_Template,
              3,
              3,
              "a",
              9
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              21,
              HeaderComponent_a_21_Template,
              3,
              3,
              "a",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              23,
              "button",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function HeaderComponent_Template_button_click_23_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r24
                );
                const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵreference"
                ](29);
                return _r6.toggle();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              24,
              "mat-icon"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              26,
              "main"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              27,
              "router-outlet",
              12
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              28,
              "mat-sidenav",
              13,
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              30,
              "mat-nav-list"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              31,
              HeaderComponent_a_31_Template,
              3,
              3,
              "a",
              15
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              33,
              HeaderComponent_a_33_Template,
              3,
              3,
              "a",
              16
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              35,
              HeaderComponent_a_35_Template,
              3,
              3,
              "a",
              17
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              37,
              HeaderComponent_a_37_Template,
              3,
              3,
              "a",
              18
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵreference"
            ](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                6,
                11,
                "app.meter-app"
              )
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "matMenuTriggerFor",
              _r0
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngForOf",
              ctx.languages
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                16,
                13,
                ctx.isAuth$
              )
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                18,
                15,
                ctx.isAuth$
              )
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                20,
                17,
                ctx.isAuth$
              )
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                22,
                19,
                ctx.isAuth$
              )
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                32,
                21,
                ctx.isAuth$
              )
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                34,
                23,
                ctx.isAuth$
              )
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                36,
                25,
                ctx.isAuth$
              )
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                38,
                27,
                ctx.isAuth$
              )
            );
          }
        },
        directives: [
          _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__[
            "MatSidenavContainer"
          ],
          _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__[
            "MatSidenavContent"
          ],
          _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"],
          _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"],
          _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__[
            "DefaultFlexDirective"
          ],
          _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__[
            "DefaultLayoutDirective"
          ],
          _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__[
            "DefaultLayoutAlignDirective"
          ],
          _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"],
          _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__[
            "MatMenuTrigger"
          ],
          _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"],
          _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenu"],
          _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"],
          _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__[
            "DefaultLayoutGapDirective"
          ],
          _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__[
            "DefaultShowHideDirective"
          ],
          _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"],
          _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"],
          _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"],
          _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatNavList"],
          _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"],
          _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListItem"],
        ],
        pipes: [
          _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"],
          _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"],
        ],
        styles: [
          "mat-sidenav-container[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-size: 14px;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: gray;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}",
        ],
      });
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          HeaderComponent,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
              args: [
                {
                  selector: "app-header",
                  templateUrl: "./header.component.html",
                  styleUrls: ["./header.component.scss"],
                },
              ],
            },
          ],
          function () {
            return [
              {
                type:
                  _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__[
                    "TranslateService"
                  ],
              },
              {
                type:
                  _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__[
                    "AuthService"
                  ],
              },
              { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
            ];
          },
          null
        );
      })();

      /***/
    },

    /***/ "./app/main/feature/main.component.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "MainComponent",
        function () {
          return MainComponent;
        }
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "../node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js"
      );
      /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
      );

      class MainComponent {
        constructor() {}
        ngOnInit() {}
      }
      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)();
      };
      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineComponent"
      ]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 7,
        vars: 0,
        consts: [
          [
            "fxFlex",
            "",
            "fxLayout",
            "row",
            "fxFlexFill",
            "",
            "fxLayoutGap",
            "100px",
            "fxLayoutAlign",
            "center center",
            1,
            "main-container",
          ],
          [1, "example-card"],
          ["mat-card-image", "", "src", "../../../assets/images/electric.jpg"],
        ],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "section",
              0
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-card",
              1
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "mat-card-content"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              3,
              "img",
              2
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              4,
              "mat-card",
              1
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              5,
              "mat-card-content"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              6,
              "img",
              2
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [
          _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__[
            "DefaultFlexDirective"
          ],
          _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__[
            "DefaultLayoutDirective"
          ],
          _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__[
            "FlexFillDirective"
          ],
          _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__[
            "DefaultLayoutGapDirective"
          ],
          _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__[
            "DefaultLayoutAlignDirective"
          ],
          _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"],
          _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"],
          _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"],
        ],
        styles: [
          ".main-container[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}",
        ],
      });
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          MainComponent,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
              args: [
                {
                  selector: "app-main",
                  templateUrl: "./main.component.html",
                  styleUrls: ["./main.component.scss"],
                },
              ],
            },
          ],
          function () {
            return [];
          },
          null
        );
      })();

      /***/
    },

    /***/ "./app/material.module.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "MaterialModule",
        function () {
          return MaterialModule;
        }
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js"
      );
      /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js"
      );
      /* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js"
      );
      /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
      );
      /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"
      );
      /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js"
      );
      /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js"
      );
      /* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js"
      );
      /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js"
      );
      /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js"
      );
      /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js"
      );
      /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js"
      );
      /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js"
      );
      /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js"
      );
      /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js"
      );
      /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js"
      );
      /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js"
      );
      /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js"
      );
      /* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js"
      );
      /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
      );

      class MaterialModule {}
      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineNgModule"
      ]({ type: MaterialModule });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineInjector"
      ]({
        factory: function MaterialModule_Factory(t) {
          return new (t || MaterialModule)();
        },
        imports: [
          [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__[
              "MatButtonModule"
            ],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_20__[
              "MatCardModule"
            ],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__[
              "MatCheckboxModule"
            ],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__[
              "MatDatepickerModule"
            ],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__[
              "MatFormFieldModule"
            ],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_13__[
              "MatListModule"
            ],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__[
              "MatMenuModule"
            ],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__[
              "MatNativeDateModule"
            ],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__[
              "MatIconModule"
            ],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__[
              "MatInputModule"
            ],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__[
              "MatPaginatorModule"
            ],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__[
              "MatSelectModule"
            ],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__[
              "MatSnackBarModule"
            ],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__[
              "MatSidenavModule"
            ],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__[
              "MatSlideToggleModule"
            ],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__[
              "MatSortModule"
            ],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__[
              "MatProgressSpinnerModule"
            ],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__[
              "MatTabsModule"
            ],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_1__[
              "MatTableModule"
            ],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__[
              "MatToolbarModule"
            ],
          ],
          _angular_material_button__WEBPACK_IMPORTED_MODULE_4__[
            "MatButtonModule"
          ],
          _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
          _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__[
            "MatCheckboxModule"
          ],
          _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__[
            "MatDatepickerModule"
          ],
          _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__[
            "MatFormFieldModule"
          ],
          _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
          _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
          _angular_material_core__WEBPACK_IMPORTED_MODULE_9__[
            "MatNativeDateModule"
          ],
          _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
          _angular_material_input__WEBPACK_IMPORTED_MODULE_7__[
            "MatInputModule"
          ],
          _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__[
            "MatPaginatorModule"
          ],
          _angular_material_select__WEBPACK_IMPORTED_MODULE_14__[
            "MatSelectModule"
          ],
          _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__[
            "MatSnackBarModule"
          ],
          _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__[
            "MatSidenavModule"
          ],
          _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__[
            "MatSlideToggleModule"
          ],
          _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
          _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__[
            "MatProgressSpinnerModule"
          ],
          _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
          _angular_material_table__WEBPACK_IMPORTED_MODULE_1__[
            "MatTableModule"
          ],
          _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__[
            "MatToolbarModule"
          ],
        ],
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) &&
          _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵsetNgModuleScope"
          ](MaterialModule, {
            imports: [
              _angular_material_button__WEBPACK_IMPORTED_MODULE_4__[
                "MatButtonModule"
              ],
              _angular_material_card__WEBPACK_IMPORTED_MODULE_20__[
                "MatCardModule"
              ],
              _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__[
                "MatCheckboxModule"
              ],
              _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__[
                "MatDatepickerModule"
              ],
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__[
                "MatFormFieldModule"
              ],
              _angular_material_list__WEBPACK_IMPORTED_MODULE_13__[
                "MatListModule"
              ],
              _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__[
                "MatMenuModule"
              ],
              _angular_material_core__WEBPACK_IMPORTED_MODULE_9__[
                "MatNativeDateModule"
              ],
              _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__[
                "MatIconModule"
              ],
              _angular_material_input__WEBPACK_IMPORTED_MODULE_7__[
                "MatInputModule"
              ],
              _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__[
                "MatPaginatorModule"
              ],
              _angular_material_select__WEBPACK_IMPORTED_MODULE_14__[
                "MatSelectModule"
              ],
              _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__[
                "MatSnackBarModule"
              ],
              _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__[
                "MatSidenavModule"
              ],
              _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__[
                "MatSlideToggleModule"
              ],
              _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__[
                "MatSortModule"
              ],
              _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__[
                "MatProgressSpinnerModule"
              ],
              _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__[
                "MatTabsModule"
              ],
              _angular_material_table__WEBPACK_IMPORTED_MODULE_1__[
                "MatTableModule"
              ],
              _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__[
                "MatToolbarModule"
              ],
            ],
            exports: [
              _angular_material_button__WEBPACK_IMPORTED_MODULE_4__[
                "MatButtonModule"
              ],
              _angular_material_card__WEBPACK_IMPORTED_MODULE_20__[
                "MatCardModule"
              ],
              _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__[
                "MatCheckboxModule"
              ],
              _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__[
                "MatDatepickerModule"
              ],
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__[
                "MatFormFieldModule"
              ],
              _angular_material_list__WEBPACK_IMPORTED_MODULE_13__[
                "MatListModule"
              ],
              _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__[
                "MatMenuModule"
              ],
              _angular_material_core__WEBPACK_IMPORTED_MODULE_9__[
                "MatNativeDateModule"
              ],
              _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__[
                "MatIconModule"
              ],
              _angular_material_input__WEBPACK_IMPORTED_MODULE_7__[
                "MatInputModule"
              ],
              _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__[
                "MatPaginatorModule"
              ],
              _angular_material_select__WEBPACK_IMPORTED_MODULE_14__[
                "MatSelectModule"
              ],
              _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__[
                "MatSnackBarModule"
              ],
              _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__[
                "MatSidenavModule"
              ],
              _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__[
                "MatSlideToggleModule"
              ],
              _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__[
                "MatSortModule"
              ],
              _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__[
                "MatProgressSpinnerModule"
              ],
              _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__[
                "MatTabsModule"
              ],
              _angular_material_table__WEBPACK_IMPORTED_MODULE_1__[
                "MatTableModule"
              ],
              _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__[
                "MatToolbarModule"
              ],
            ],
          });
      })();
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          MaterialModule,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
              args: [
                {
                  imports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__[
                      "MatButtonModule"
                    ],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_20__[
                      "MatCardModule"
                    ],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__[
                      "MatCheckboxModule"
                    ],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__[
                      "MatDatepickerModule"
                    ],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__[
                      "MatFormFieldModule"
                    ],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_13__[
                      "MatListModule"
                    ],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__[
                      "MatMenuModule"
                    ],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_9__[
                      "MatNativeDateModule"
                    ],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__[
                      "MatIconModule"
                    ],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__[
                      "MatInputModule"
                    ],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__[
                      "MatPaginatorModule"
                    ],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__[
                      "MatSelectModule"
                    ],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__[
                      "MatSnackBarModule"
                    ],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__[
                      "MatSidenavModule"
                    ],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__[
                      "MatSlideToggleModule"
                    ],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__[
                      "MatSortModule"
                    ],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__[
                      "MatProgressSpinnerModule"
                    ],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__[
                      "MatTabsModule"
                    ],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_1__[
                      "MatTableModule"
                    ],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__[
                      "MatToolbarModule"
                    ],
                  ],
                  exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__[
                      "MatButtonModule"
                    ],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_20__[
                      "MatCardModule"
                    ],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__[
                      "MatCheckboxModule"
                    ],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__[
                      "MatDatepickerModule"
                    ],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__[
                      "MatFormFieldModule"
                    ],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_13__[
                      "MatListModule"
                    ],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__[
                      "MatMenuModule"
                    ],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_9__[
                      "MatNativeDateModule"
                    ],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__[
                      "MatIconModule"
                    ],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__[
                      "MatInputModule"
                    ],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__[
                      "MatPaginatorModule"
                    ],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__[
                      "MatSelectModule"
                    ],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__[
                      "MatSnackBarModule"
                    ],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__[
                      "MatSidenavModule"
                    ],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__[
                      "MatSlideToggleModule"
                    ],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__[
                      "MatSortModule"
                    ],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__[
                      "MatProgressSpinnerModule"
                    ],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__[
                      "MatTabsModule"
                    ],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_1__[
                      "MatTableModule"
                    ],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__[
                      "MatToolbarModule"
                    ],
                  ],
                },
              ],
            },
          ],
          null,
          null
        );
      })();

      /***/
    },

    /***/ "./app/meter/meter.service.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "MeterService",
        function () {
          return MeterService;
        }
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _state_meter_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "./app/meter/state/meter.actions.ts"
      );
      /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "../node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js"
      );
      /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js"
      );

      class MeterService {
        constructor(db, store) {
          this.db = db;
          this.store = store;
        }
        getMeterList() {
          this.db
            .collection("meterData")
            .valueChanges()
            .subscribe((data) => {
              this.store.dispatch(
                new _state_meter_actions__WEBPACK_IMPORTED_MODULE_1__[
                  "SetMeterData"
                ](data)
              );
            });
        }
        addNewMeterData(newData) {
          const id = this.db.createId();
          const item = Object.assign({ id }, newData);
          this.db.collection("meterData").add(item);
        }
        updateData(data) {
          console.log("data db", this.db.collection("meterData").doc(data.id));
          this.db.collection("meterData").doc(data.id).update(data);
        }
        deleteMeterData(data) {
          console.error("delete", data);
          this.db.collection("meterData").doc(data.id).delete();
        }
        cancelSubscription() {
          this._fireSubscription.unsubscribe();
        }
      }
      MeterService.ɵfac = function MeterService_Factory(t) {
        return new (t || MeterService)(
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__[
              "AngularFirestore"
            ]
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
          )
        );
      };
      MeterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineInjectable"
      ]({ token: MeterService, factory: MeterService.ɵfac });
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          MeterService,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
            },
          ],
          function () {
            return [
              {
                type:
                  _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__[
                    "AngularFirestore"
                  ],
              },
              { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
            ];
          },
          null
        );
      })();

      /***/
    },

    /***/ "./app/meter/state/meter.actions.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "SET_AVAILABLE_METER_DATA",
        function () {
          return SET_AVAILABLE_METER_DATA;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "ADD_AVAILABLE_METER_DATA",
        function () {
          return ADD_AVAILABLE_METER_DATA;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "DELETE_AVAILABLE_METER_DATA",
        function () {
          return DELETE_AVAILABLE_METER_DATA;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "SetMeterData",
        function () {
          return SetMeterData;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "AddMeterData",
        function () {
          return AddMeterData;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "DeleteMeterData",
        function () {
          return DeleteMeterData;
        }
      );
      const SET_AVAILABLE_METER_DATA = "[Meter] Set Meter data";
      const ADD_AVAILABLE_METER_DATA = "[Meter] Add Meter data";
      const DELETE_AVAILABLE_METER_DATA = "[Meter] Delete Meter data";
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

      /***/
    },

    /***/ "./app/shared/shared.module.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "SharedModule",
        function () {
          return SharedModule;
        }
      );
      /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/common"
      );
      /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_common__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "../node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js"
      );
      /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "@angular/forms"
      );
      /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__
      );
      /* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        "./app/material.module.ts"
      );
      /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        "../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js"
      );

      class SharedModule {}
      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
        "ɵɵdefineNgModule"
      ]({ type: SharedModule });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
        "ɵɵdefineInjector"
      ]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [
          [
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__[
              "FlexLayoutModule"
            ],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
          ],
          _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
          _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
          _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
          _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
          _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        ],
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) &&
          _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵsetNgModuleScope"
          ](SharedModule, {
            imports: [
              _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
              _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
              _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
              _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__[
                "FlexLayoutModule"
              ],
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__[
                "TranslateModule"
              ],
            ],
            exports: [
              _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
              _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
              _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
              _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__[
                "FlexLayoutModule"
              ],
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__[
                "TranslateModule"
              ],
            ],
          });
      })();
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
          SharedModule,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
              args: [
                {
                  imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__[
                      "CommonModule"
                    ],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_4__[
                      "MaterialModule"
                    ],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__[
                      "FlexLayoutModule"
                    ],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__[
                      "TranslateModule"
                    ],
                  ],
                  exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__[
                      "CommonModule"
                    ],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_4__[
                      "MaterialModule"
                    ],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__[
                      "FlexLayoutModule"
                    ],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__[
                      "TranslateModule"
                    ],
                  ],
                },
              ],
            },
          ],
          null,
          null
        );
      })();

      /***/
    },

    /***/ "./app/shared/ui.service.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "UIService",
        function () {
          return UIService;
        }
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "rxjs"
      );
      /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        rxjs__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js"
      );

      class UIService {
        constructor(_snackBar) {
          this._snackBar = _snackBar;
          this.loadingStateChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__[
            "Subject"
          ]();
        }
        showSnackBar(message, action, duration) {
          this._snackBar.open(message, action, duration);
        }
      }
      UIService.ɵfac = function UIService_Factory(t) {
        return new (t || UIService)(
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__[
              "MatSnackBar"
            ]
          )
        );
      };
      UIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineInjectable"
      ]({ token: UIService, factory: UIService.ɵfac });
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          UIService,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
            },
          ],
          function () {
            return [
              {
                type:
                  _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__[
                    "MatSnackBar"
                  ],
              },
            ];
          },
          null
        );
      })();

      /***/
    },

    /***/ "./environments/environment.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "environment",
        function () {
          return environment;
        }
      );
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
          measurementId: "G-1QZ1VH8WYJ",
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

      /***/
    },

    /***/ "./main.tns.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (global) {
        /* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "@nativescript/core/bundle-entry-points"
        );
        /* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "@nativescript/angular"
        );
        /* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "@angular/core"
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _angular_core__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./app/app.module.tns.ts"
        );
        /* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./environments/environment.ts"
        );

        const isAndroid = __webpack_require__("@nativescript/core").isAndroid;
        if (isAndroid && !global["__snapshot"]) {
          __webpack_require__("@nativescript/core/ui/frame");
          __webpack_require__("@nativescript/core/ui/frame/activity");
        }

        __webpack_require__(
          "../node_modules/@nativescript/webpack/helpers/load-application-css-angular.js"
        )();

        if (true) {
          const hmrUpdate = __webpack_require__(
            "../node_modules/@nativescript/webpack/hmr/index.js"
          ).hmrUpdate;
          global.__coreModulesLiveSync = global.__onLiveSync;

          global.__onLiveSync = function () {
            // handle hot updated on LiveSync
            hmrUpdate();
          };

          global.hmrRefresh = function ({ type, path } = {}) {
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
              moduleTypeFactory: function () {
                return __webpack_require__("./app/app.module.tns.ts").AppModule;
              },
              livesyncCallback: function (platformReboot) {
                setTimeout(platformReboot, 0);
              },
            },
          };
        }

        if (true) {
          module["hot"].accept(
            ["./app/app.module.tns.ts"],
            function (__WEBPACK_OUTDATED_DEPENDENCIES__) {
              /* harmony import */ _src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                "./app/app.module.tns.ts"
              );
              (function () {
                global["hmrRefresh"]({});
              })(__WEBPACK_OUTDATED_DEPENDENCIES__);
            }.bind(this)
          );
        }
        if (
          _src_environments_environment__WEBPACK_IMPORTED_MODULE_4__[
            "environment"
          ].production
        ) {
          Object(
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"]
          )();
        }
        // A traditional NativeScript application starts by initializing global objects,
        // setting up global CSS rules, creating, and navigating to the main page.
        // Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
        // A NativeScript Angular app needs to make both paradigms work together,
        // so we provide a wrapper platform object, platformNativeScriptDynamic,
        // that sets up a NativeScript application and can bootstrap the Angular framework.
        _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__[
          "platformNativeScriptDynamic"
        ](Object.assign({}, options_Generated)).bootstrapModule(
          _src_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]
        );

        /* WEBPACK VAR INJECTION */
      }.call(
        this,
        __webpack_require__(
          "../node_modules/@nativescript/webpack/node_modules/webpack/buildin/global.js"
        )
      ));

      /***/
    },

    /***/ "@angular/animations": /***/ function (module, exports) {
      module.exports = require("@angular/animations");

      /***/
    },

    /***/ "@angular/common": /***/ function (module, exports) {
      module.exports = require("@angular/common");

      /***/
    },

    /***/ "@angular/common/http": /***/ function (module, exports) {
      module.exports = require("@angular/common/http");

      /***/
    },

    /***/ "@angular/core": /***/ function (module, exports) {
      module.exports = require("@angular/core");

      /***/
    },

    /***/ "@angular/forms": /***/ function (module, exports) {
      module.exports = require("@angular/forms");

      /***/
    },

    /***/ "@angular/platform-browser": /***/ function (module, exports) {
      module.exports = require("@angular/platform-browser");

      /***/
    },

    /***/ "@angular/platform-browser/animations": /***/ function (
      module,
      exports
    ) {
      module.exports = require("@angular/platform-browser/animations");

      /***/
    },

    /***/ "@angular/router": /***/ function (module, exports) {
      module.exports = require("@angular/router");

      /***/
    },

    /***/ "@nativescript/angular": /***/ function (module, exports) {
      module.exports = require("@nativescript/angular");

      /***/
    },

    /***/ "@nativescript/core": /***/ function (module, exports) {
      module.exports = require("@nativescript/core");

      /***/
    },

    /***/ "@nativescript/core/bundle-entry-points": /***/ function (
      module,
      exports
    ) {
      module.exports = require("@nativescript/core/bundle-entry-points");

      /***/
    },

    /***/ "@nativescript/core/ui/frame": /***/ function (module, exports) {
      module.exports = require("@nativescript/core/ui/frame");

      /***/
    },

    /***/ "@nativescript/core/ui/frame/activity": /***/ function (
      module,
      exports
    ) {
      module.exports = require("@nativescript/core/ui/frame/activity");

      /***/
    },

    /***/ "@nativescript/core/ui/styling/style-scope": /***/ function (
      module,
      exports
    ) {
      module.exports = require("@nativescript/core/ui/styling/style-scope");

      /***/
    },

    /***/ rxjs: /***/ function (module, exports) {
      module.exports = require("rxjs");

      /***/
    },

    /***/ "rxjs/operators": /***/ function (module, exports) {
      module.exports = require("rxjs/operators");

      /***/
    },
  },
  [["./main.tns.ts", "runtime", "vendor"]],
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50LnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hcHAubW9kdWxlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvYXV0aC1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLXN0YXRlL2F1dGguYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLXN0YXRlL2F1dGgucmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLmd1YXJkLnRzIiwid2VicGFjazovLy8uL2FwcC9hdXRoL2F1dGgubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9hdXRoL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9mZWF0dXJlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9mZWF0dXJlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hdXRoL2ZlYXR1cmUvc2lnbnVwL3NpZ251cC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvZmVhdHVyZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9kaWFsb2cvZmVhdHVyZS9kaWFsb2cuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9kaWFsb2cvZmVhdHVyZS9kaWFsb2cuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hlYWRlci9mZWF0dXJlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9oZWFkZXIvZmVhdHVyZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9tYWluL2ZlYXR1cmUvbWFpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21haW4vZmVhdHVyZS9tYWluLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9tYXRlcmlhbC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21ldGVyL21ldGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21ldGVyL3N0YXRlL21ldGVyLmFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvdWkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50bnMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lL2FjdGl2aXR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9vcGVyYXRvcnNcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwrR0FBaUUsbUJBQU8sQ0FBQyxpSUFBK0Y7QUFDeEssZ0VBQWdFLG1CQUFPLENBQUMsaUlBQStGO0FBQ3ZLLGlFQUFpRSxtQkFBTyxDQUFDLGlJQUErRjtBQUN4SyxnRUFBZ0UsbUJBQU8sQ0FBQyxpSUFBK0YsR0FBRyxrQkFBa0Isa0NBQWtDLFVBQVUsaUVBQWlFLEVBQUUsaUVBQWlFLEVBQUUsMkpBQTJKO0FBQ3pnQixRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQixtQ0FBbUM7QUFDbEUsU0FBUztBQUNUOzs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQ3dCO0FBR0g7QUFDaEI7OztBQUV2QyxNQUFNLE1BQU0sR0FBVztJQUM1QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDBFQUFhLEVBQUUsV0FBVyxFQUFFLENBQUMsMERBQVMsQ0FBQyxFQUFFO0lBQ2hFO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsMEpBQThCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMs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Ozs7Ozs7Ozs7O0FBRTVELElBQUksV0FBVyxDQUFDLFVBQVUsRUFBRTtJQUN4QixjQUFjLEVBQUUsQ0FBQztDQUNwQjtBQUVELG1CQUFnRjtBQUNoRixjQUEwRTtBQUNtRDtBQUM3SCxzREFBeUU7QUFDekUsd0JBQXdFO0FBQ3hFLFNBQW1GO0FBQ25GLFFBQXlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCekQsZ0Q7Ozs7Ozs7QUNBQSw0Qzs7Ozs7OztBQ0FBLGlEOzs7Ozs7O0FDQUEsMEM7Ozs7Ozs7QUNBQSwyQzs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSw0Qzs7Ozs7OztBQ0FBLGtEOzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7QUNBQSxtRTs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSxzRTs7Ozs7OztBQ0FBLGlDOzs7Ozs7O0FDQUEsMkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYmx1ZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1xcXCJcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYmx1ZS5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBQbGFjZSBhbnkgQ1NTIHJ1bGVzIHlvdSB3YW50IHRvIGFwcGx5IG9uIGJvdGggaU9TIGFuZCBBbmRyb2lkIGhlcmUuXFxuVGhpcyBpcyB3aGVyZSB0aGUgdmFzdCBtYWpvcml0eSBvZiB5b3VyIENTUyBjb2RlIGdvZXMuIFwifV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL2ZlYXR1cmUvbWFpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9hdXRoL2F1dGguZ3VhcmQnO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogJycsIGNvbXBvbmVudDogTWFpbkNvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdIH0sXG4gIHtcbiAgICBwYXRoOiAnbWV0ZXInLFxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL21ldGVyL21ldGVyLm1vZHVsZScpLnRoZW4obSA9PiBtLk1ldGVyTW9kdWxlKSxcbiAgICBjYW5Mb2FkOiBbQXV0aEd1YXJkXVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGgvYXV0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmluaXRBdXRoTGlzdGVuZXIoKTtcbiAgfVxufVxuIiwiPEdyaWRMYXlvdXQ+XG4gIDwhLS0gVGhpcyB3aWxsIGNvbnRhaW4gYW55IGFuZ3VsYXIgcm91dGVzIHlvdSBzZXR1cCAtLT5cbiAgPGFwcC1oZWFkZXI+PC9hcHAtaGVhZGVyPlxuXG4gIFxuICBcbjwvR3JpZExheW91dD4iLCJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZSc7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZURhdGFiYXNlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9kYXRhYmFzZSc7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsXG4gIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXJQYXJhbXMsXG4gIFRyYW5zbGF0ZU1vZHVsZVxufSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlSHR0cExvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyJztcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJ0BzcmMvYXBwL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0BzcmMvYXBwL21hdGVyaWFsLm1vZHVsZSdcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICdAc3JjL2FwcC9hdXRoL2F1dGgubW9kdWxlJztcblxuaW1wb3J0IHsgcmVkdWNlcnMgfSBmcm9tICdAc3JjL2FwcC9hcHAucmVkdWNlcic7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NoYXJlZC91aS5zZXJ2aWNlJztcbmltcG9ydCB7IE1ldGVyU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL21ldGVyL21ldGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnQHNyYy9hcHAvZGlhbG9nL2ZlYXR1cmUvZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gZnJvbSAnQHNyYy9hcHAvbWFpbi9mZWF0dXJlL21haW4uY29tcG9uZW50JztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL2hlYWRlci9mZWF0dXJlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIEh0dHBMb2FkZXJGYWN0b3J5KGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHApO1xufVxuXG5leHBvcnQgY2xhc3MgTXlNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIGltcGxlbWVudHMgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB7XG4gICAgaGFuZGxlKHBhcmFtczogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcykge1xuICAgICAgICByZXR1cm4gJ3NvbWUgdmFsdWUnO1xuICAgIH1cbn1cblxuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmcgYW5kL29yIEhUVFAgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgRGlhbG9nQ29tcG9uZW50LFxuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBNYWluQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgQW5ndWxhckZpcmVNb2R1bGUuaW5pdGlhbGl6ZUFwcChlbnZpcm9ubWVudC5maXJlYmFzZUNvbmZpZyksXG4gICAgQW5ndWxhckZpcmVzdG9yZU1vZHVsZSxcbiAgICBBbmd1bGFyRmlyZURhdGFiYXNlTW9kdWxlLFxuICAgIEF1dGhNb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBGbGV4TGF5b3V0TW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yUm9vdChyZWR1Y2VycyksXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgbG9hZGVyOiB7XG4gICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZU1vZHVsZSxcbiAgICAgICAgdXNlRmFjdG9yeTogSHR0cExvYWRlckZhY3RvcnksXG4gICAgICAgIGRlcHM6IFtIdHRwQ2xpZW50XVxuICAgICAgfSxcbiAgICAgIGRlZmF1bHRMYW5ndWFnZTogJ2VuJyxcbiAgICAgIG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXI6IHtwcm92aWRlOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLCB1c2VDbGFzczogTXlNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyfSxcbiAgICAgIHVzZURlZmF1bHRMYW5nOiB0cnVlXG4gICAgfSksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE1ldGVyU2VydmljZSxcbiAgICBBdXRoU2VydmljZSxcbiAgICBVSVNlcnZpY2UsXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEFjdGlvbiwgQWN0aW9uUmVkdWNlck1hcCwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0ICogYXMgZnJvbUF1dGggZnJvbSAnLi4vYXBwL2F1dGgvYXV0aC1zdGF0ZS9hdXRoLnJlZHVjZXInXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICAgIHVpOiBudWxsO1xuICAgIGF1dGg6IGZyb21BdXRoLkF1dGhTdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzOiBBY3Rpb25SZWR1Y2VyTWFwPFN0YXRlPiA9IHtcbiAgICB1aTogbnVsbCxcbiAgICBhdXRoOiBmcm9tQXV0aC5hdXRoUmVkdWNlcixcbn1cblxuZXhwb3J0IGNvbnN0IGdldEF1dGhTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3Rvcjxmcm9tQXV0aC5BdXRoU3RhdGU+KCdhdXRoJyk7XG5leHBvcnQgY29uc3QgZ2V0SXNBdXRoID0gY3JlYXRlU2VsZWN0b3IoZ2V0QXV0aFN0YXRlLCBmcm9tQXV0aC5nZXRJc0F1dGgpO1xuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSBjcmVhdGVTZWxlY3RvcihnZXRBdXRoU3RhdGUsIGZyb21BdXRoLmdldFVzZXIpO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlL2xvZ2luL2xvZ2luLmNvbXBvbmVudCdcbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gJy4vZmVhdHVyZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCdcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPVtcbiAgICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdzaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCB9LFxuXVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcylcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUm91dGVyTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoUm91dGluZ01vZHVsZSB7fSIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IFNFVF9BVVRIRU5USUNBVEVEID0gJ1tBdXRoXSBTZXQgQXV0aGVudGljYXRlZCc7XG5leHBvcnQgY29uc3QgU0VUX1VOQVVUSEVOVElDQVRFRCA9ICdbQXV0aF0gU2V0IFVuQXV0aGVudGljYXRlZCc7XG5cbmV4cG9ydCBjbGFzcyBTZXRBdXRoZW50aWNhdGVkIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgICByZWFkb25seSB0eXBlID0gU0VUX0FVVEhFTlRJQ0FURUQ7XG4gICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldFVuQXV0aGVudGljYXRlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gICAgcmVhZG9ubHkgdHlwZSA9IFNFVF9VTkFVVEhFTlRJQ0FURUQ7XG59XG5cbmV4cG9ydCB0eXBlIEF1dGhBY3Rpb25zID0gU2V0QXV0aGVudGljYXRlZCB8IFNldFVuQXV0aGVudGljYXRlZDsiLCJpbXBvcnQge1xuICAgIEF1dGhBY3Rpb25zLFxuICAgIFNFVF9BVVRIRU5USUNBVEVELFxuICAgIFNFVF9VTkFVVEhFTlRJQ0FURURcbn0gZnJvbSAnLi9hdXRoLmFjdGlvbnMnO1xuXG5jb25zdCBERUZBVUxUX1VTRVIgPSAnJztcblxuZXhwb3J0IGludGVyZmFjZSBBdXRoU3RhdGUge1xuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbixcbiAgICB1c2VyTmFtZTogc3RyaW5nXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogQXV0aFN0YXRlID0ge1xuICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICAgICB1c2VyTmFtZTogREVGQVVMVF9VU0VSXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBBdXRoQWN0aW9ucykge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBTRVRfQVVUSEVOVElDQVRFRDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBTRVRfVU5BVVRIRU5USUNBVEVEOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiBERUZBVUxUX1VTRVJcbiAgICAgICAgICAgIH07ICAgICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0SXNBdXRoID0gKHN0YXRlOiBBdXRoU3RhdGUpID0+IHN0YXRlLmlzQXV0aGVudGljYXRlZDtcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKHN0YXRlOiBBdXRoU3RhdGUpID0+IHN0YXRlLnVzZXJOYW1lOyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBDYW5Mb2FkLCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gJy4uL2FwcC5yZWR1Y2VyJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkxvYWQge1xuICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgX3N0b3JlOiBTdG9yZTxmcm9tUm9vdC5TdGF0ZT5cbiAgICApIHt9XG5cbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRJc0F1dGgpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgY2FuTG9hZChyb3V0ZTogUm91dGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRJc0F1dGgpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxufSIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gJy4vZmVhdHVyZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vZmVhdHVyZS9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2F1dGgtcm91dGluZy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTaWdudXBDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBBbmd1bGFyRmlyZUF1dGhNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgQXV0aFJvdXRpbmdNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge30iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVBdXRoIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcblxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IEF1dGhEYXRhIH0gZnJvbSAnLi9hdXRoLWRhdGEubW9kZWwnO1xuaW1wb3J0ICogYXMgQXV0aCBmcm9tICcuL2F1dGgtc3RhdGUvYXV0aC5hY3Rpb25zJztcbmltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gJy4uL2FwcC5yZWR1Y2VyJztcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC91aS5zZXJ2aWNlJztcbmltcG9ydCB7IE1ldGVyU2VydmljZSB9IGZyb20gJy4uL21ldGVyL21ldGVyLnNlcnZpY2UnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgX25nQXV0aDogQW5ndWxhckZpcmVBdXRoLFxuICAgICAgICBwcml2YXRlIF9tZXRlclNlcnZpY2U6IE1ldGVyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlPGZyb21Sb290LlN0YXRlPixcbiAgICAgICAgcHJpdmF0ZSBfdWlTZXJ2aWNlOiBVSVNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBpbml0QXV0aExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLl9uZ0F1dGguYXV0aFN0YXRlLnN1YnNjcmliZSgodXNlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChuZXcgQXV0aC5TZXRBdXRoZW50aWNhdGVkKHVzZXIuZW1haWwpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBkZWFsIHdpdGggdW5zdWJzY3JpcHRpb24gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fbWV0ZXJTZXJ2aWNlLmNhbmNlbFN1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKG5ldyBBdXRoLlNldFVuQXV0aGVudGljYXRlZCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc2dpc3RlclVzZXIoYXV0aDogQXV0aERhdGEpIHtcbiAgICAgICAgdGhpcy5fdWlTZXJ2aWNlLmxvYWRpbmdTdGF0ZUNoYW5nZWQubmV4dCh0cnVlKTtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLl9uZ0F1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKFxuICAgICAgICAgICAgYXV0aC5lbWFpbCxcbiAgICAgICAgICAgIGF1dGgucGFzc3dvcmRcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiBcbiAgICAgICAgICAgIHRoaXMuX3VpU2VydmljZS5sb2FkaW5nU3RhdGVDaGFuZ2VkLm5leHQoZmFsc2UpXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdWlTZXJ2aWNlLmxvYWRpbmdTdGF0ZUNoYW5nZWQubmV4dChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLl91aVNlcnZpY2Uuc2hvd1NuYWNrQmFyKGVycm9yLm1lc3NhZ2UsIG51bGwsIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvZ2luKGF1dGg6IEF1dGhEYXRhKSB7XG4gICAgICAgIHRoaXMuX3VpU2VydmljZS5sb2FkaW5nU3RhdGVDaGFuZ2VkLm5leHQodHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fbmdBdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKFxuICAgICAgICAgICAgYXV0aC5lbWFpbCxcbiAgICAgICAgICAgIGF1dGgucGFzc3dvcmRcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiBcbiAgICAgICAgICAgIHRoaXMuX3VpU2VydmljZS5sb2FkaW5nU3RhdGVDaGFuZ2VkLm5leHQoZmFsc2UpXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdWlTZXJ2aWNlLmxvYWRpbmdTdGF0ZUNoYW5nZWQubmV4dChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLl91aVNlcnZpY2Uuc2hvd1NuYWNrQmFyKGVycm9yLm1lc3NhZ2UsIG51bGwsIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvZ091dCgpIHtcbiAgICAgICAgdGhpcy5fbmdBdXRoLnNpZ25PdXQoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zaGFyZWQvdWkuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL2F1dGgvYXV0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfbG9hZGluZzogU3Vic2NyaXB0aW9uO1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfdWlTZXJ2aWNlOiBVSVNlcnZpY2UsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fbG9hZGluZyA9IHRoaXMuX3VpU2VydmljZS5sb2FkaW5nU3RhdGVDaGFuZ2VkLnN1YnNjcmliZSgoaXNMb2FkaW5nKSA9PiB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGlzTG9hZGluZztcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9sb2FkaW5nKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgb25TdWJtaXQoZm9ybXM6IE5nRm9ybSkge1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ2luKHtcbiAgICAgIGVtYWlsOiBmb3Jtcy52YWx1ZS5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiBmb3Jtcy52YWx1ZS5wYXNzd29yZFxuICAgIH0pXG4gIH1cbn1cbiIsIjxzZWN0aW9uIGNsYXNzPVwibG9naW4tY29udGFpbmVyXCIgZnhMYXlvdXQ9J3Jvdyc+XG4gICAgPGZvcm0gY2xhc3M9J2xvZ2luLWZvcm0nXG4gICAgICAgIGZ4TGF5b3V0PSdjb2x1bW4nXG4gICAgICAgIGZ4bGF5b3VBbGlnbj0nY2VudGVyIGNlbnRlcidcbiAgICAgICAgI2Zvcm1SZWY9J25nRm9ybSdcbiAgICAgICAgKG5nU3VibWl0KT0nb25TdWJtaXQoZm9ybVJlZiknPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbFwiXG4gICAgICAgICAgICAgICAgbmdNb2RlbFxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICNlbWFpbElucHV0PVwibmdNb2RlbFwiPlxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cIiFlbWFpbElucHV0Lmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gICAgICAgICAgICAgICAge3snbG9naW4uZW1haWxJbnZhbGlkJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIG5nTW9kZWxcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgbWlubGVuZ3RoPVwiOFwiXG4gICAgICAgICAgICAgICAgI3B3SW5wdXQ9XCJuZ01vZGVsXCI+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwicHdJbnB1dC52YWx1ZT8ubGVuZ3RoICE9IDhcIj5cbiAgICAgICAgICAgICAgICB7eyAnbG9naW4ucGFzc3dvcmRsZW5ndGgnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICAgICpuZ0lmPVwiIWlzTG9hZGluZ1wiXG4gICAgICAgICAgICB0eXBlPVwiU3VibWl0XCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmb3JtUmVmLmludmFsaWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAge3snYXBwLmxvZ2luJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8bWF0LXNwaW5uZXIgKm5nSWY9XCJpc0xvYWRpbmdcIj48L21hdC1zcGlubmVyPlxuICAgIDwvZm9ybT5cbjwvc2VjdGlvbj5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2hhcmVkL3VpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9hdXRoL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWdudXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbnVwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lnbnVwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9sb2FkaW5nOiBTdWJzY3JpcHRpb247XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuICBtYXhEYXRlOiBEYXRlO1xuICBcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfdWlTZXJ2aWNlOiBVSVNlcnZpY2UsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tYXhEYXRlID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLm1heERhdGUuc2V0RnVsbFllYXIodGhpcy5tYXhEYXRlLmdldEZ1bGxZZWFyKCkgLSAxOCk7XG4gICAgdGhpcy5fbG9hZGluZyA9IHRoaXMuX3VpU2VydmljZS5sb2FkaW5nU3RhdGVDaGFuZ2VkLnN1YnNjcmliZSgoaXNMb2FkaW5nKSA9PiB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGlzTG9hZGluZztcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9sb2FkaW5nKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgb25TdWJtaXQoZm9ybXM6IE5nRm9ybSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZm9ybXMpO1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnJlc2dpc3RlclVzZXIoe1xuICAgICAgZW1haWw6IGZvcm1zLnZhbHVlLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IGZvcm1zLnZhbHVlLnBhc3N3b3JkXG4gICAgfSlcbiAgfVxufVxuIiwiPHNlY3Rpb24gY2xhc3M9XCJjb250YWluZXJcIlxuICAgICAgICAgZnhMYXlvdXQ9J3Jvdyc+XG4gICAgPGZvcm0gZnhMYXlvdXQ9J2NvbHVtbidcbiAgICAgICAgICBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJ1xuICAgICAgICAgIGZ4TGF5b3V0R2FwPSc1cHgnXG4gICAgICAgICAgI2Zvcm1SZWY9J25nRm9ybSdcbiAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXQoZm9ybVJlZilcIj5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiIG5nTW9kZWwgbmFtZT1cImVtYWlsXCIgZW1haWwgcmVxdWlyZWQgI2VtYWlsSW5wdXQ9J25nTW9kZWwnPlxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cIiFlbWFpbElucHV0Lmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+RW1haWwgaXMgaW52YWxpZC48L21hdC1lcnJvcj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGhpbnRMYWJlbD1cIlNob3VsZCBiZSBhdGxlYXN0IDggY2hhcmFjdGVycyBsb25nXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCIgbmdNb2RlbCBuYW1lPVwicGFzc3dvcmRcIiByZXF1aXJlZCBtaW5sZW5ndGg9XCI4XCIgI3B3SW5wdXQ9XCJuZ01vZGVsXCI+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwicHdJbnB1dC52YWx1ZT8ubGVuZ3RoICE9IDhcIj5IYXMgdG8gYmUgYXRsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZy48L21hdC1lcnJvcj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgQmlydGhkYXlcIlxuICAgICAgICAgICAgICAgIFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiXG4gICAgICAgICAgICAgICAgW21heF09XCJtYXhEYXRlXCJcbiAgICAgICAgICAgICAgICBuZ01vZGVsXG4gICAgICAgICAgICAgICAgbmFtZT1cImJpcnRoZGF0ZVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWNoZWNrYm94IG5nTW9kZWwgbmFtZT1cImFncmVlXCIgcmVxdWlyZWQgY29sb3I9XCJwcmltYXJ5XCI+QWdyZWUgdG8gdGVybXMgYW5kIGNvbmRpdGlvbjwvbWF0LWNoZWNrYm94PlxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICAgICpuZ0lmPVwiIWlzTG9hZGluZ1wiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09J2Zvcm1SZWYuaW52YWxpZCdcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiPlN1Ym1pdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPG1hdC1zcGlubmVyICpuZ0lmPVwiaXNMb2FkaW5nXCI+PC9tYXQtc3Bpbm5lcj5cbiAgICA8L2Zvcm0+XG48L3NlY3Rpb24+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8cD5kaWFsb2cgd29ya3MhPC9wPlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gJy4uLy4uLy4uL2FwcC5yZWR1Y2VyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvYXV0aC9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaXNBdXRoJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgdXNlck5hbWUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIF9zdG9yZTogU3RvcmU8ZnJvbVJvb3QuU3RhdGU+XG4gICkge1xuICAgICAgLy8gdGhpcyBsYW5ndWFnZSB3aWxsIGJlIHVzZWQgYXMgYSBmYWxsYmFjayB3aGVuIGEgdHJhbnNsYXRpb24gaXNuJ3QgZm91bmQgaW4gdGhlIGN1cnJlbnQgbGFuZ3VhZ2VcbiAgICAgIF90cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoJ2VuJyk7XG5cbiAgICAgIC8vIHRoZSBsYW5nIHRvIHVzZSwgaWYgdGhlIGxhbmcgaXNuJ3QgYXZhaWxhYmxlLCBpdCB3aWxsIHVzZSB0aGUgY3VycmVudCBsb2FkZXIgdG8gZ2V0IHRoZW1cbiAgICAgIF90cmFuc2xhdGUudXNlKCdlbicpO1xuICAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXNlck5hbWUkID0gdGhpcy5fc3RvcmUuc2VsZWN0KGZyb21Sb290LmdldFVzZXIpO1xuICAgIHRoaXMuaXNBdXRoJCA9IHRoaXMuX3N0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRJc0F1dGgpO1xuICB9XG5cbiAgbGFuZ3VhZ2VzID0gW1xuICAgIHsgdmFsdWU6ICdlbicsIGxhYmVsOiAnYXBwLmxhbmd1YWdlLmVuJyB9LFxuICAgIHsgdmFsdWU6ICdkZScsIGxhYmVsOiAnYXBwLmxhbmd1YWdlLmRlJyB9LFxuICBdXG5cbiAgc2VsZWN0TGFuZ3VhZ2UobGFuZzogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJhbnNsYXRlLnVzZShsYW5nKTtcbiAgfVxuXG4gIG9uTG9nb3V0KCkge1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ091dCgpO1xuICB9XG59XG4iLCI8bWF0LXNpZGVuYXYtY29udGFpbmVyPlxuICAgIDxtYXQtc2lkZW5hdi1jb250ZW50PlxuICAgICAgICA8bWF0LXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICA8ZGl2PjxhIHJvdXRlckxpbms9XCIvXCI+e3snYXBwLm1ldGVyLWFwcCcgfCB0cmFuc2xhdGV9fTwvYT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZnhGbGV4IGZ4TGF5b3V0IGZ4TGF5b3V0QWxpZ249XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImRyb3AtZG93bi1sYW5ndWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIFttYXRNZW51VHJpZ2dlckZvcl09XCJsYW5ndWFnZU1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPnRyYW5zbGF0ZTwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPG1hdC1tZW51ICNsYW5ndWFnZU1lbnU9XCJtYXRNZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSAqbmdGb3I9XCJsZXQgbGFuZ3VhZ2Ugb2YgbGFuZ3VhZ2VzXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0TGFuZ3VhZ2UobGFuZ3VhZ2UudmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2xhbmd1YWdlLmxhYmVsIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9tYXQtbWVudT5cbiAgICAgICAgICAgICAgICA8ZGl2IGZ4TGF5b3V0R2FwPVwiMTBweFwiIGZ4SGlkZS54cz5cbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCIhKGlzQXV0aCQgfCBhc3luYylcIiByb3V0ZXJMaW5rPVwiL2xvZ2luXCI+e3snYXBwLmxvZ2luJyB8IHRyYW5zbGF0ZX19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cIiEoaXNBdXRoJCB8IGFzeW5jKVwiIHJvdXRlckxpbms9XCIvc2lnbnVwXCI+e3snYXBwLnNpZ251cCcgfCB0cmFuc2xhdGV9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJpc0F1dGgkIHwgYXN5bmNcIiByb3V0ZXJMaW5rPVwiL21ldGVyXCI+e3snYXBwLm1ldGVyJyB8IHRyYW5zbGF0ZX19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cImlzQXV0aCQgfCBhc3luY1wiIChjbGljayk9XCJvbkxvZ291dCgpXCI+e3snYXBwLmxvZ291dCcgfCB0cmFuc2xhdGV9fTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwic2lkZW5hdi50b2dnbGUoKVwiIGZ4SGlkZS5ndC14cz5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWF0LXRvb2xiYXI+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQgY2xhc3M9XCJjb250ZW50XCI+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L21haW4+XG4gICAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxuICAgIDxtYXQtc2lkZW5hdiBwb3NpdGlvbj1cImVuZFwiICNzaWRlbmF2IHJvbGU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxtYXQtbmF2LWxpc3Q+XG4gICAgICAgICAgICA8YSBtYXQtbGlzdC1pdGVtXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhKGlzQXV0aCQgfCBhc3luYylcIlxuICAgICAgICAgICAgICAgIHJvdXRlckxpbms9XCIvbG9naW5cIiAoY2xpY2spPVwic2lkZW5hdi50b2dnbGUoKVwiPnt7J2FwcC5sb2dpbicgfCB0cmFuc2xhdGV9fTwvYT5cbiAgICAgICAgICAgIDxhIG1hdC1saXN0LWl0ZW1cbiAgICAgICAgICAgICAgICAqbmdJZj1cIiEoaXNBdXRoJCB8IGFzeW5jKVwiXG4gICAgICAgICAgICAgICAgcm91dGVyTGluaz1cIi9zaWdudXBcIiAoY2xpY2spPVwic2lkZW5hdi50b2dnbGUoKVwiPnt7J2FwcC5zaWdudXAnIHwgdHJhbnNsYXRlfX08L2E+XG4gICAgICAgICAgICA8YSBtYXQtbGlzdC1pdGVtXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpc0F1dGgkIHwgYXN5bmNcIlxuICAgICAgICAgICAgICAgIHJvdXRlckxpbms9XCIvbWV0ZXJcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzaWRlbmF2LnRvZ2dsZSgpXCI+e3snYXBwLm1ldGVyJyB8IHRyYW5zbGF0ZX19PC9hPlxuICAgICAgICAgICAgPGEgbWF0LWxpc3QtaXRlbSAqbmdJZj1cImlzQXV0aCQgfCBhc3luY1wiIChjbGljayk9XCJvbkxvZ291dCgpXCI+e3snYXBwLmxvZ291dCcgfCB0cmFuc2xhdGV9fTwvYT5cbiAgICAgICAgPC9tYXQtbmF2LWxpc3Q+XG4gICAgPC9tYXQtc2lkZW5hdj5cbjwvbWF0LXNpZGVuYXYtY29udGFpbmVyPiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tYWluJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21haW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYWluLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8c2VjdGlvbiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCJcbiAgICAgICAgZnhGbGV4XG4gICAgICAgIGZ4TGF5b3V0PVwicm93XCJcbiAgICAgICAgZnhGbGV4RmlsbFxuICAgICAgICBmeExheW91dEdhcD1cIjEwMHB4XCJcbiAgICAgICAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLWNhcmRcIj5cbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2VsZWN0cmljLmpwZ1wiPlxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgIDwhLS08bWF0LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24+TElLRTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbj5TSEFSRTwvYnV0dG9uPlxuICAgICAgICA8L21hdC1jYXJkLWFjdGlvbnM+LS0+XG4gICAgPC9tYXQtY2FyZD5cbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLWNhcmRcIj5cbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxuICAgICAgICA8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZWxlY3RyaWMuanBnXCI+XG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICA8IS0tPG1hdC1jYXJkLWFjdGlvbnM+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbj5MSUtFPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbj5TSEFSRTwvYnV0dG9uPlxuICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPi0tPlxuICA8L21hdC1jYXJkPiAgXG48L3NlY3Rpb24+XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IE1hdFNvcnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7IE1hdFNsaWRlVG9nZ2xlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJzsgXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7IE1hdE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHsgTWF0U2lkZW5hdk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuaW1wb3J0IHsgTWF0VG9vbGJhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xuaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7IE1hdFRhYnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQgeyBNYXRTbmFja0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICAgICAgTWF0TGlzdE1vZHVsZSxcbiAgICAgICAgTWF0TWVudU1vZHVsZSxcbiAgICAgICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICAgICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgICAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICAgICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICAgICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICAgICAgTWF0VGFic01vZHVsZSxcbiAgICAgICAgTWF0VGFibGVNb2R1bGUsXG4gICAgICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICAgICAgTWF0TGlzdE1vZHVsZSxcbiAgICAgICAgTWF0TWVudU1vZHVsZSxcbiAgICAgICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICAgICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgICAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICAgICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICAgICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICAgICAgTWF0VGFic01vZHVsZSxcbiAgICAgICAgTWF0VGFibGVNb2R1bGUsXG4gICAgICAgIE1hdFRvb2xiYXJNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsTW9kdWxlIHt9IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgKiBhcyBmcm9tTWV0ZXIgZnJvbSAnLi9zdGF0ZS9tZXRlci5yZWR1Y2VyJ1xuaW1wb3J0ICogYXMgTWV0ZXIgZnJvbSAnLi9zdGF0ZS9tZXRlci5hY3Rpb25zJ1xuaW1wb3J0IHsgSURhdGFEVE8gfSBmcm9tICdzcmMvQmFja2VuZC9EYXRhRFRPJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXRlclNlcnZpY2Uge1xuICBwcml2YXRlIF9maXJlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGI6IEFuZ3VsYXJGaXJlc3RvcmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGZyb21NZXRlci5NZXRlckRhdGFTdGF0ZT4pIHt9XG5cbiAgZ2V0TWV0ZXJMaXN0KCkge1xuICAgIHRoaXMuZGIuY29sbGVjdGlvbignbWV0ZXJEYXRhJylcbiAgICAgICAgICAgIC52YWx1ZUNoYW5nZXMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogSURhdGFEVE9bXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IE1ldGVyLlNldE1ldGVyRGF0YShkYXRhKSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGROZXdNZXRlckRhdGEobmV3RGF0YTogSURhdGFEVE8pIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuZGIuY3JlYXRlSWQoKTtcbiAgICBjb25zdCBpdGVtOiBJRGF0YURUTyA9IHsgaWQsIC4uLm5ld0RhdGF9O1xuICAgIHRoaXMuZGIuY29sbGVjdGlvbignbWV0ZXJEYXRhJykuYWRkKGl0ZW0pO1xuICB9XG5cbiAgdXBkYXRlRGF0YShkYXRhOiBJRGF0YURUTykge1xuICAgIGNvbnNvbGUubG9nKFwiZGF0YSBkYlwiLCB0aGlzLmRiLmNvbGxlY3Rpb24oJ21ldGVyRGF0YScpLmRvYyhkYXRhLmlkKSk7XG4gICAgdGhpcy5kYi5jb2xsZWN0aW9uKCdtZXRlckRhdGEnKS5kb2MoZGF0YS5pZCkudXBkYXRlKGRhdGEpO1xuICB9XG5cbiAgZGVsZXRlTWV0ZXJEYXRhKGRhdGE6IElEYXRhRFRPKSB7XG4gICAgY29uc29sZS5lcnJvcihcImRlbGV0ZVwiLCBkYXRhKTtcbiAgICB0aGlzLmRiLmNvbGxlY3Rpb24oJ21ldGVyRGF0YScpLmRvYyhkYXRhLmlkKS5kZWxldGUoKTtcbiAgfVxuXG4gIGNhbmNlbFN1YnNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9maXJlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn0iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBJRGF0YURUTyB9IGZyb20gJ3NyYy9CYWNrZW5kL0RhdGFEVE8nO1xuXG5leHBvcnQgY29uc3QgU0VUX0FWQUlMQUJMRV9NRVRFUl9EQVRBID0gJ1tNZXRlcl0gU2V0IE1ldGVyIGRhdGEnO1xuZXhwb3J0IGNvbnN0IEFERF9BVkFJTEFCTEVfTUVURVJfREFUQSA9ICdbTWV0ZXJdIEFkZCBNZXRlciBkYXRhJztcbmV4cG9ydCBjb25zdCBERUxFVEVfQVZBSUxBQkxFX01FVEVSX0RBVEEgPSAnW01ldGVyXSBEZWxldGUgTWV0ZXIgZGF0YSc7XG4vLyBleHBvcnQgY29uc3QgU1RPUF9BQ1RJVkUgPSAnW1VJXSBTdG9wIGFjdGl2ZSc7IFxuXG5leHBvcnQgY2xhc3MgU2V0TWV0ZXJEYXRhIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgICByZWFkb25seSB0eXBlID0gU0VUX0FWQUlMQUJMRV9NRVRFUl9EQVRBO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBJRGF0YURUT1tdKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQWRkTWV0ZXJEYXRhIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgICByZWFkb25seSB0eXBlID0gQUREX0FWQUlMQUJMRV9NRVRFUl9EQVRBO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBJRGF0YURUTykge31cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZU1ldGVyRGF0YSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gICAgcmVhZG9ubHkgdHlwZSA9IERFTEVURV9BVkFJTEFCTEVfTUVURVJfREFUQTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogSURhdGFEVE8pIHt9XG59XG5cbmV4cG9ydCB0eXBlIE1ldGVyQWN0aW9ucyA9IFNldE1ldGVyRGF0YSB8IEFkZE1ldGVyRGF0YSB8IERlbGV0ZU1ldGVyRGF0YTsiLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuLi9tYXRlcmlhbC5tb2R1bGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBNYXRlcmlhbE1vZHVsZSxcbiAgICAgICAgRmxleExheW91dE1vZHVsZSxcbiAgICAgICAgVHJhbnNsYXRlTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIE1hdGVyaWFsTW9kdWxlLFxuICAgICAgICBGbGV4TGF5b3V0TW9kdWxlLFxuICAgICAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge30iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVSVNlcnZpY2Uge1xuICAgIGxvYWRpbmdTdGF0ZUNoYW5nZWQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyKXt9XG5cbiAgICBzaG93U25hY2tCYXIobWVzc2FnZTogc3RyaW5nLCBhY3Rpb24sIGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW4obWVzc2FnZSwgYWN0aW9uLCBkdXJhdGlvbik7XG4gICAgfVxufSIsIi8vIFRoaXMgZmlsZSBjYW4gYmUgcmVwbGFjZWQgZHVyaW5nIGJ1aWxkIGJ5IHVzaW5nIHRoZSBgZmlsZVJlcGxhY2VtZW50c2AgYXJyYXkuXG4vLyBgbmcgYnVpbGQgLS1wcm9kYCByZXBsYWNlcyBgZW52aXJvbm1lbnQudHNgIHdpdGggYGVudmlyb25tZW50LnByb2QudHNgLlxuLy8gVGhlIGxpc3Qgb2YgZmlsZSByZXBsYWNlbWVudHMgY2FuIGJlIGZvdW5kIGluIGBhbmd1bGFyLmpzb25gLlxuXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XG4gIHByb2R1Y3Rpb246IGZhbHNlLFxuICBmaXJlYmFzZUNvbmZpZzogIHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5Q1pDRWxFZVhNN2ZhN21GUE1HUnNRU3F2b28xZjdyNkhFXCIsXG4gICAgYXV0aERvbWFpbjogXCJtZXRlci1iYXNlLXByb2plY3QuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9tZXRlci1iYXNlLXByb2plY3QuZmlyZWJhc2Vpby5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwibWV0ZXItYmFzZS1wcm9qZWN0XCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJtZXRlci1iYXNlLXByb2plY3QuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMTgxNDMzMTE5MzZcIixcbiAgICBhcHBJZDogXCIxOjExODE0MzMxMTkzNjp3ZWI6ZmUxNGM1ZWVlNTI1YzI5Zjc1YmZhNVwiLFxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy0xUVoxVkg4V1lKXCJcbiAgfSxcbn07XG5cbi8qXG4gKiBGb3IgZWFzaWVyIGRlYnVnZ2luZyBpbiBkZXZlbG9wbWVudCBtb2RlLCB5b3UgY2FuIGltcG9ydCB0aGUgZm9sbG93aW5nIGZpbGVcbiAqIHRvIGlnbm9yZSB6b25lIHJlbGF0ZWQgZXJyb3Igc3RhY2sgZnJhbWVzIHN1Y2ggYXMgYHpvbmUucnVuYCwgYHpvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrYC5cbiAqXG4gKiBUaGlzIGltcG9ydCBzaG91bGQgYmUgY29tbWVudGVkIG91dCBpbiBwcm9kdWN0aW9uIG1vZGUgYmVjYXVzZSBpdCB3aWxsIGhhdmUgYSBuZWdhdGl2ZSBpbXBhY3RcbiAqIG9uIHBlcmZvcm1hbmNlIGlmIGFuIGVycm9yIGlzIHRocm93bi5cbiAqL1xuLy8gaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZS1lcnJvcic7ICAvLyBJbmNsdWRlZCB3aXRoIEFuZ3VsYXIgQ0xJLlxuIiwiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJ0BzcmMvYXBwL2FwcC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0BzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcblxuaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcbiAgICBlbmFibGVQcm9kTW9kZSgpO1xufVxuXG4vLyBBIHRyYWRpdGlvbmFsIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBzdGFydHMgYnkgaW5pdGlhbGl6aW5nIGdsb2JhbCBvYmplY3RzLFxuLy8gc2V0dGluZyB1cCBnbG9iYWwgQ1NTIHJ1bGVzLCBjcmVhdGluZywgYW5kIG5hdmlnYXRpbmcgdG8gdGhlIG1haW4gcGFnZS5cbi8vIEFuZ3VsYXIgYXBwbGljYXRpb25zIG5lZWQgdG8gdGFrZSBjYXJlIG9mIHRoZWlyIG93biBpbml0aWFsaXphdGlvbjogbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuXG4vLyBBIE5hdGl2ZVNjcmlwdCBBbmd1bGFyIGFwcCBuZWVkcyB0byBtYWtlIGJvdGggcGFyYWRpZ21zIHdvcmsgdG9nZXRoZXIsXG4vLyBzbyB3ZSBwcm92aWRlIGEgd3JhcHBlciBwbGF0Zm9ybSBvYmplY3QsIHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyxcbi8vIHRoYXQgc2V0cyB1cCBhIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBhbmQgY2FuIGJvb3RzdHJhcCB0aGUgQW5ndWxhciBmcmFtZXdvcmsuXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9mcmFtZS9hY3Rpdml0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvb3BlcmF0b3JzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
