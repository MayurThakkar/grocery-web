(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  [0],
  {
    /***/ "./app/meter/feature/meter-list/meterlist.component.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "MeterlistComponent",
        function () {
          return MeterlistComponent;
        }
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js"
      );
      /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js"
      );
      /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js"
      );
      /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        "../node_modules/lodash/lodash.js"
      );
      /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        lodash__WEBPACK_IMPORTED_MODULE_4__
      );
      /* harmony import */ var _state_meter_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        "./app/meter/state/meter.reducer.ts"
      );
      /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        "../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js"
      );
      /* harmony import */ var _meter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        "./app/meter/meter.service.ts"
      );
      /* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        "../node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js"
      );
      /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
      );
      /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"
      );
      /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js"
      );
      /* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js"
      );

      function MeterlistComponent_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "th",
            18
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }
      function MeterlistComponent_td_12_Template(rf, ctx) {
        if (rf & 1) {
          const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵgetCurrentView"
          ]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "td",
            19
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            1,
            "mat-slide-toggle",
            20
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
            "change",
            function MeterlistComponent_td_12_Template_mat_slide_toggle_change_1_listener(
              $event
            ) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
              const element_r12 = ctx.$implicit;
              const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵnextContext"
              ]();
              return ctx_r13.updateActive(element_r12, $event.checked);
            }
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const element_r12 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
            "checked",
            element_r12.active
          );
        }
      }
      function MeterlistComponent_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "th",
            21
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Location");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }
      function MeterlistComponent_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "td",
            19
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const element_r15 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
            element_r15.location
          );
        }
      }
      function MeterlistComponent_th_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "th",
            21
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }
      function MeterlistComponent_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "td",
            19
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const element_r16 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
            element_r16.name
          );
        }
      }
      function MeterlistComponent_th_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "th",
            18
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Active1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }
      function MeterlistComponent_td_21_Template(rf, ctx) {
        if (rf & 1) {
          const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵgetCurrentView"
          ]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "td",
            19
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            1,
            "mat-slide-toggle",
            20
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
            "change",
            function MeterlistComponent_td_21_Template_mat_slide_toggle_change_1_listener(
              $event
            ) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
              const element_r17 = ctx.$implicit;
              const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵnextContext"
              ]();
              return ctx_r18.updateActive1(element_r17, $event.checked);
            }
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const element_r17 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
            "checked",
            element_r17.active1
          );
        }
      }
      function MeterlistComponent_th_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "th",
            18
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }
      function MeterlistComponent_td_24_Template(rf, ctx) {
        if (rf & 1) {
          const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵgetCurrentView"
          ]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "td",
            19
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            1,
            "button",
            22
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
            "click",
            function MeterlistComponent_td_24_Template_button_click_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
              const element_r20 = ctx.$implicit;
              const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵnextContext"
              ]();
              return ctx_r21.delete(element_r20);
            }
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            2,
            "mat-icon"
          );
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }
      function MeterlistComponent_tr_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
        }
      }
      function MeterlistComponent_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
        }
      }
      const _c0 = function () {
        return [5, 10, 20];
      };
      class MeterlistComponent {
        constructor(store, meterService) {
          this.store = store;
          this.meterService = meterService;
          this.displayedColumns = [
            "active",
            "location",
            "name",
            "active1",
            "delete",
          ];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__[
            "MatTableDataSource"
          ]();
        }
        ngOnInit() {
          this.meterService.getMeterList();
          this.store
            .select(
              _state_meter_reducer__WEBPACK_IMPORTED_MODULE_5__["getMeterData"]
            )
            .subscribe((meterData) => {
              this.dataSource.data = meterData;
            });
        }
        ngAfterViewInit() {
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }
        doFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
        updateActive(element, enable) {
          if (lodash__WEBPACK_IMPORTED_MODULE_4__["isNil"](element)) {
            element = {};
          }
          element.active = enable;
          this.meterService.updateData({
            id: element.id,
            active: enable,
          });
        }
        updateActive1(element, enable) {
          console.error("element", element);
          this.meterService.updateData({
            id: element.id,
            active: enable,
          });
        }
        addElement() {
          let newData = {
            name: "stuttgart",
            location: "baden-wurtternberg",
            active: true,
            active1: true,
          };
          this.meterService.addNewMeterData(newData);
        }
        delete(data) {
          console.error("delete", data);
          this.meterService.deleteMeterData(data);
        }
      }
      MeterlistComponent.ɵfac = function MeterlistComponent_Factory(t) {
        return new (t || MeterlistComponent)(
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
            _meter_service__WEBPACK_IMPORTED_MODULE_7__["MeterService"]
          )
        );
      };
      MeterlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineComponent"
      ]({
        type: MeterlistComponent,
        selectors: [["meterlist"]],
        viewQuery: function MeterlistComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](
              _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"],
              true
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](
              _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__[
                "MatPaginator"
              ],
              true
            );
          }
          if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](
              (_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]())
            ) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](
              (_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]())
            ) && (ctx.paginator = _t.first);
          }
        },
        decls: 28,
        vars: 7,
        consts: [
          [
            "fxflex",
            "",
            "fxLayout",
            "column",
            "fxLayoutAlign",
            "space-between center",
            1,
            "table",
          ],
          [1, "center-wrapper"],
          ["fxLayout", "row", "fxLayoutAlign", "space-between center"],
          ["mat-raised-button", "", "color", "primary", 3, "click"],
          ["fxLayout", "row"],
          [
            "matInput",
            "",
            "type",
            "text",
            "placeholder",
            "filter",
            1,
            "input-search",
            3,
            "keyup",
          ],
          [
            "mat-table",
            "",
            "multiTemplateDataRows",
            "",
            "matSort",
            "",
            3,
            "dataSource",
          ],
          ["matColumnDef", "active"],
          ["mat-header-cell", "", 4, "matHeaderCellDef"],
          ["mat-cell", "", 4, "matCellDef"],
          ["matColumnDef", "location"],
          ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"],
          ["matColumnDef", "name"],
          ["matColumnDef", "active1"],
          ["matColumnDef", "delete"],
          ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"],
          ["mat-row", "", 4, "matRowDef", "matRowDefColumns"],
          [3, "pageSize", "pageSizeOptions"],
          ["mat-header-cell", ""],
          ["mat-cell", ""],
          [3, "checked", "change"],
          ["mat-header-cell", "", "mat-sort-header", ""],
          ["mat-button", "", 3, "click"],
          ["mat-header-row", ""],
          ["mat-row", ""],
        ],
        template: function MeterlistComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div",
              0
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "div",
              1
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "div",
              2
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "button",
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function MeterlistComponent_Template_button_click_3_listener() {
                return ctx.addElement();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              5,
              "div",
              4
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              6,
              "mat-icon"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              8,
              "input",
              5
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "keyup",
              function MeterlistComponent_Template_input_keyup_8_listener(
                $event
              ) {
                return ctx.doFilter($event.target.value);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              9,
              "table",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerStart"
            ](10, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              11,
              MeterlistComponent_th_11_Template,
              2,
              0,
              "th",
              8
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              12,
              MeterlistComponent_td_12_Template,
              2,
              1,
              "td",
              9
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerEnd"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerStart"
            ](13, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              14,
              MeterlistComponent_th_14_Template,
              2,
              0,
              "th",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              15,
              MeterlistComponent_td_15_Template,
              2,
              1,
              "td",
              9
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerEnd"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerStart"
            ](16, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              17,
              MeterlistComponent_th_17_Template,
              2,
              0,
              "th",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              18,
              MeterlistComponent_td_18_Template,
              2,
              1,
              "td",
              9
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerEnd"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerStart"
            ](19, 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              20,
              MeterlistComponent_th_20_Template,
              2,
              0,
              "th",
              8
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              21,
              MeterlistComponent_td_21_Template,
              2,
              1,
              "td",
              9
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerEnd"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerStart"
            ](22, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              23,
              MeterlistComponent_th_23_Template,
              2,
              0,
              "th",
              8
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              24,
              MeterlistComponent_td_24_Template,
              4,
              0,
              "td",
              9
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerEnd"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              25,
              MeterlistComponent_tr_25_Template,
              1,
              0,
              "tr",
              15
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              26,
              MeterlistComponent_tr_26_Template,
              1,
              0,
              "tr",
              16
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              27,
              "mat-paginator",
              17
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "dataSource",
              ctx.dataSource
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "matHeaderRowDef",
              ctx.displayedColumns
            )("matHeaderRowDefSticky", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "matRowDefColumns",
              ctx.displayedColumns
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "pageSize",
              5
            )(
              "pageSizeOptions",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](
                6,
                _c0
              )
            );
          }
        },
        directives: [
          _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__[
            "DefaultLayoutDirective"
          ],
          _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__[
            "DefaultLayoutAlignDirective"
          ],
          _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"],
          _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"],
          _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"],
          _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"],
          _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"],
          _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"],
          _angular_material_table__WEBPACK_IMPORTED_MODULE_2__[
            "MatHeaderCellDef"
          ],
          _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"],
          _angular_material_table__WEBPACK_IMPORTED_MODULE_2__[
            "MatHeaderRowDef"
          ],
          _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"],
          _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__[
            "MatPaginator"
          ],
          _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"],
          _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"],
          _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__[
            "MatSlideToggle"
          ],
          _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"],
          _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"],
          _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"],
        ],
        styles: [
          ".table[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.center-wrapper[_ngcontent-%COMP%] {\n  max-width: 800px;\n  width: 800px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.input-search[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n  border-radius: 25px;\n  border: none;\n  padding: 0 10px 0 10px;\n}",
        ],
      });
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          MeterlistComponent,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
              args: [
                {
                  selector: "meterlist",
                  templateUrl: "./meterlist.component.html",
                  styleUrls: ["./meterlist.component.scss"],
                },
              ],
            },
          ],
          function () {
            return [
              { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
              {
                type:
                  _meter_service__WEBPACK_IMPORTED_MODULE_7__["MeterService"],
              },
            ];
          },
          {
            sort: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
                args: [
                  _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__[
                    "MatSort"
                  ],
                ],
              },
            ],
            paginator: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
                args: [
                  _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__[
                    "MatPaginator"
                  ],
                ],
              },
            ],
          }
        );
      })();

      /***/
    },

    /***/ "./app/meter/feature/meter/meter.component.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "MeterComponent",
        function () {
          return MeterComponent;
        }
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js"
      );
      /* harmony import */ var _meter_list_meterlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "./app/meter/feature/meter-list/meterlist.component.ts"
      );

      class MeterComponent {
        constructor() {}
        ngOnInit() {}
      }
      MeterComponent.ɵfac = function MeterComponent_Factory(t) {
        return new (t || MeterComponent)();
      };
      MeterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineComponent"
      ]({
        type: MeterComponent,
        selectors: [["app-meter"]],
        decls: 7,
        vars: 1,
        consts: [
          ["label", "List"],
          ["label", "Graph"],
          ["label", "Location", 3, "disabled"],
        ],
        template: function MeterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-tab-group"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-tab",
              0
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              2,
              "meterlist"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "mat-tab",
              1
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              4,
              " graph of the usages "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              5,
              "mat-tab",
              2
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              6,
              " Content 3 "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "disabled",
              true
            );
          }
        },
        directives: [
          _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"],
          _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"],
          _meter_list_meterlist_component__WEBPACK_IMPORTED_MODULE_2__[
            "MeterlistComponent"
          ],
        ],
        styles: [""],
      });
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          MeterComponent,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
              args: [
                {
                  selector: "app-meter",
                  templateUrl: "./meter.component.html",
                  styleUrls: ["./meter.component.scss"],
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

    /***/ "./app/meter/meter-routing.module.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "MeterRoutingModule",
        function () {
          return MeterRoutingModule;
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
      /* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "./app/auth/auth.guard.ts"
      );
      /* harmony import */ var _feature_meter_meter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "./app/meter/feature/meter/meter.component.ts"
      );

      const routes = [
        {
          path: "",
          component:
            _feature_meter_meter_component__WEBPACK_IMPORTED_MODULE_3__[
              "MeterComponent"
            ],
          canActivate: [
            _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"],
          ],
        },
      ];
      class MeterRoutingModule {}
      MeterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineNgModule"
      ]({ type: MeterRoutingModule });
      MeterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineInjector"
      ]({
        factory: function MeterRoutingModule_Factory(t) {
          return new (t || MeterRoutingModule)();
        },
        providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
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
          ](MeterRoutingModule, {
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
          MeterRoutingModule,
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
                  providers: [
                    _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"],
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

    /***/ "./app/meter/meter.module.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "MeterModule",
        function () {
          return MeterModule;
        }
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "@angular/core"
      );
      /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _angular_core__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js"
      );
      /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "./app/shared/shared.module.ts"
      );
      /* harmony import */ var _feature_meter_list_meterlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "./app/meter/feature/meter-list/meterlist.component.ts"
      );
      /* harmony import */ var _feature_meter_meter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        "./app/meter/feature/meter/meter.component.ts"
      );
      /* harmony import */ var _meter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        "./app/meter/meter-routing.module.ts"
      );
      /* harmony import */ var _state_meter_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        "./app/meter/state/meter.reducer.ts"
      );

      class MeterModule {}
      MeterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineNgModule"
      ]({ type: MeterModule });
      MeterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
        "ɵɵdefineInjector"
      ]({
        factory: function MeterModule_Factory(t) {
          return new (t || MeterModule)();
        },
        imports: [
          [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature(
              "meterdata",
              _state_meter_reducer__WEBPACK_IMPORTED_MODULE_6__["meterReducer"]
            ),
            _meter_routing_module__WEBPACK_IMPORTED_MODULE_5__[
              "MeterRoutingModule"
            ],
          ],
        ],
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) &&
          _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵsetNgModuleScope"
          ](MeterModule, {
            declarations: [
              _feature_meter_list_meterlist_component__WEBPACK_IMPORTED_MODULE_3__[
                "MeterlistComponent"
              ],
              _feature_meter_meter_component__WEBPACK_IMPORTED_MODULE_4__[
                "MeterComponent"
              ],
            ],
            imports: [
              _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[
                "SharedModule"
              ],
              _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreFeatureModule"],
              _meter_routing_module__WEBPACK_IMPORTED_MODULE_5__[
                "MeterRoutingModule"
              ],
            ],
          });
      })();
      /*@__PURE__*/ (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          MeterModule,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
              args: [
                {
                  declarations: [
                    _feature_meter_list_meterlist_component__WEBPACK_IMPORTED_MODULE_3__[
                      "MeterlistComponent"
                    ],
                    _feature_meter_meter_component__WEBPACK_IMPORTED_MODULE_4__[
                      "MeterComponent"
                    ],
                  ],
                  imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[
                      "SharedModule"
                    ],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_1__[
                      "StoreModule"
                    ].forFeature(
                      "meterdata",
                      _state_meter_reducer__WEBPACK_IMPORTED_MODULE_6__[
                        "meterReducer"
                      ]
                    ),
                    _meter_routing_module__WEBPACK_IMPORTED_MODULE_5__[
                      "MeterRoutingModule"
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

    /***/ "./app/meter/state/meter.reducer.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "meterReducer",
        function () {
          return meterReducer;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "getMeterState",
        function () {
          return getMeterState;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "getMeterData",
        function () {
          return getMeterData;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "addMeterData",
        function () {
          return addMeterData;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "deleteMeterData",
        function () {
          return deleteMeterData;
        }
      );
      /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js"
      );
      /* harmony import */ var _state_meter_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "./app/meter/state/meter.actions.ts"
      );

      const initialState = {
        meterData: [],
        addMeterData: null,
        deleteMeterData: null,
      };
      /**
       *
       * @param state old state as a input
       * @param action incoming action to store
       */
      function meterReducer(state = initialState, action) {
        switch (action.type) {
          case _state_meter_actions__WEBPACK_IMPORTED_MODULE_1__[
            "SET_AVAILABLE_METER_DATA"
          ]:
            return Object.assign(Object.assign({}, state), {
              meterData: action.payload,
            });
          case _state_meter_actions__WEBPACK_IMPORTED_MODULE_1__[
            "ADD_AVAILABLE_METER_DATA"
          ]:
            return Object.assign(Object.assign({}, state), {
              addMeterData: action.payload,
            });
          case _state_meter_actions__WEBPACK_IMPORTED_MODULE_1__[
            "DELETE_AVAILABLE_METER_DATA"
          ]:
            return Object.assign(Object.assign({}, state), {
              deleteMeterData: action.payload,
            });
          default:
            return state;
        }
      }
      const getMeterState = Object(
        _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"]
      )("meterdata");
      const getMeterData = Object(
        _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
      )(getMeterState, (state) => state.meterData);
      const addMeterData = Object(
        _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
      )(getMeterState, (state) => state.addMeterData);
      const deleteMeterData = Object(
        _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
      )(getMeterState, (state) => state.deleteMeterData);
      0;

      /***/
    },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWV0ZXIvZmVhdHVyZS9tZXRlci1saXN0L21ldGVybGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21ldGVyL2ZlYXR1cmUvbWV0ZXItbGlzdC9tZXRlcmxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL21ldGVyL2ZlYXR1cmUvbWV0ZXIvbWV0ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9tZXRlci9mZWF0dXJlL21ldGVyL21ldGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9tZXRlci9tZXRlci1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbWV0ZXIvbWV0ZXIubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9tZXRlci9zdGF0ZS9tZXRlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEU7QUFDM0I7QUFDWTtBQUNGO0FBSS9CO0FBRzBCOzs7Ozs7Ozs7Ozs7O0lDWTFDLHlFQUFzQztJQUFBLGlFQUFNO0lBQUEsNERBQUs7Ozs7SUFDakQseUVBQ0U7SUFBQSx1RkFHbUI7SUFGakIsNFlBQWdEO0lBRWxELDREQUFtQjtJQUNyQiw0REFBSzs7O0lBRkQsMERBQTBCO0lBQTFCLHVGQUEwQjs7O0lBTTlCLHlFQUFzRDtJQUFBLG1FQUFRO0lBQUEsNERBQUs7OztJQUNuRSx5RUFBdUM7SUFBQSx1REFBb0I7SUFBQSw0REFBSzs7O0lBQXpCLDBEQUFvQjtJQUFwQixxRkFBb0I7OztJQUkzRCx5RUFBc0Q7SUFBQSwrREFBSTtJQUFBLDREQUFLOzs7SUFDL0QseUVBQXVDO0lBQUEsdURBQWdCO0lBQUEsNERBQUs7OztJQUFyQiwwREFBZ0I7SUFB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QUFHLGtFQUFjLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9GLE1BQU0sWUFBWSxHQUFHLGtFQUFjLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xHLE1BQU0sZUFBZSxHQUFHLGtFQUFjLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQUEsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U29ydCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cblxuaW1wb3J0ICogYXMgZnJvbU1ldGVyIGZyb20gJy4uLy4uL3N0YXRlL21ldGVyLnJlZHVjZXInXG5cbmltcG9ydCB7IE1ldGVyTGlzdCB9IGZyb20gJy4uLy4uL21ldGVyLWxpc3QubW9kZWwnO1xuaW1wb3J0IHsgTWV0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbWV0ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21ldGVybGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXRlcmxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZXRlcmxpc3QuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTWV0ZXJsaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBkaXNwbGF5ZWRDb2x1bW5zID0gWydhY3RpdmUnLCAnbG9jYXRpb24nLCAnbmFtZScsICdhY3RpdmUxJywgJ2RlbGV0ZSddO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxNZXRlckxpc3Q+KCk7XG5cbiAgaXRlbSQ6IE9ic2VydmFibGU8TWV0ZXJMaXN0W10+O1xuXG4gIGV4cGFuZGVkRWxlbWVudDogTWV0ZXJMaXN0O1xuICBcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8ZnJvbU1ldGVyLk1ldGVyRGF0YVN0YXRlPixcbiAgICBwcml2YXRlIG1ldGVyU2VydmljZTogTWV0ZXJTZXJ2aWNlLFxuICAgICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1ldGVyU2VydmljZS5nZXRNZXRlckxpc3QoKTtcblxuICAgIHRoaXMuc3RvcmUuc2VsZWN0KGZyb21NZXRlci5nZXRNZXRlckRhdGEpLnN1YnNjcmliZSgobWV0ZXJEYXRhOiBNZXRlckxpc3RbXSkgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBtZXRlckRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICB9XG5cbiAgZG9GaWx0ZXIoZmlsdGVyVmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIgPSBmaWx0ZXJWYWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2ZShlbGVtZW50LCBlbmFibGU6IGJvb2xlYW4pIHtcbiAgICBpZiAoXy5pc05pbChlbGVtZW50KSkge1xuICAgICAgZWxlbWVudCA9IHt9XG4gICAgfVxuICAgIGVsZW1lbnQuYWN0aXZlID0gZW5hYmxlO1xuICAgIHRoaXMubWV0ZXJTZXJ2aWNlLnVwZGF0ZURhdGEoe1xuICAgICAgaWQ6IGVsZW1lbnQuaWQsXG4gICAgICBhY3RpdmU6IGVuYWJsZVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQWN0aXZlMShlbGVtZW50LCBlbmFibGU6IGJvb2xlYW4pIHtcblxuICAgIGNvbnNvbGUuZXJyb3IoXCJlbGVtZW50XCIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5tZXRlclNlcnZpY2UudXBkYXRlRGF0YSh7XG4gICAgICBpZDogZWxlbWVudC5pZCxcbiAgICAgIGFjdGl2ZTogZW5hYmxlXG4gICAgfSk7XG4gIH1cblxuICBhZGRFbGVtZW50KCkge1xuICAgIGxldCBuZXdEYXRhOiBNZXRlckxpc3QgPSB7XG4gICAgICBuYW1lOiAnc3R1dHRnYXJ0JyxcbiAgICAgIGxvY2F0aW9uOiAnYmFkZW4td3VydHRlcm5iZXJnJyxcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIGFjdGl2ZTE6IHRydWUsXG4gICAgfVxuICAgIHRoaXMubWV0ZXJTZXJ2aWNlLmFkZE5ld01ldGVyRGF0YShuZXdEYXRhKTtcbiAgfVxuXG4gIGRlbGV0ZShkYXRhOiBNZXRlckxpc3QpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiZGVsZXRlXCIsIGRhdGEpO1xuICAgIHRoaXMubWV0ZXJTZXJ2aWNlLmRlbGV0ZU1ldGVyRGF0YShkYXRhKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInRhYmxlXCIgZnhmbGV4IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJjZW50ZXItd3JhcHBlclwiPlxuICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cbiAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImFkZEVsZW1lbnQoKVwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICBBZGRcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBmeExheW91dD1cInJvd1wiPlxuICAgICAgICA8bWF0LWljb24+c2VhcmNoPC9tYXQtaWNvbj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0XG4gICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc2VhcmNoXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAoa2V5dXApPVwiZG9GaWx0ZXIoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImZpbHRlclwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHRhYmxlXG4gICAgICAgICAgbWF0LXRhYmxlXG4gICAgICAgICAgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiXG4gICAgICAgICAgbXVsdGlUZW1wbGF0ZURhdGFSb3dzXG4gICAgICAgICAgbWF0U29ydD5cblxuICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiYWN0aXZlXCIgPlxuICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5BY3RpdmU8L3RoPlxuICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGVcbiAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInVwZGF0ZUFjdGl2ZShlbGVtZW50LCAkZXZlbnQuY2hlY2tlZClcIlxuICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cImVsZW1lbnQuYWN0aXZlXCI+XG4gICAgICAgICAgICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImxvY2F0aW9uXCIgPlxuICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+TG9jYXRpb248L3RoPlxuICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj57e2VsZW1lbnQubG9jYXRpb259fTwvdGQ+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIiA+XG4gICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj5OYW1lPC90aD5cbiAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+e3tlbGVtZW50Lm5hbWV9fTwvdGQ+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImFjdGl2ZTFcIiA+XG4gICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPkFjdGl2ZTE8L3RoPlxuICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGVcbiAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInVwZGF0ZUFjdGl2ZTEoZWxlbWVudCwgJGV2ZW50LmNoZWNrZWQpXCJcbiAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJlbGVtZW50LmFjdGl2ZTFcIj5cbiAgICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiZGVsZXRlXCIgPlxuICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5SZW1vdmU8L3RoPlxuICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJkZWxldGUoZWxlbWVudClcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnM7IHN0aWNreTogdHJ1ZVwiPjwvdHI+XG4gICAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IGVsZW1lbnQ7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbiAgICA8L3RhYmxlPlxuICAgIDxtYXQtcGFnaW5hdG9yIFtwYWdlU2l6ZV09XCI1XCIgW3BhZ2VTaXplT3B0aW9uc109XCJbNSwgMTAsIDIwXVwiPjwvbWF0LXBhZ2luYXRvcj5cbiAgPC9kaXY+XG48L2Rpdj5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tZXRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21ldGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWV0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPG1hdC10YWItZ3JvdXA+XG4gICAgPG1hdC10YWIgbGFiZWw9XCJMaXN0XCI+XG4gICAgICAgIDxtZXRlcmxpc3Q+PC9tZXRlcmxpc3Q+XG4gICAgPC9tYXQtdGFiPlxuICAgIDxtYXQtdGFiIGxhYmVsPVwiR3JhcGhcIj4gZ3JhcGggb2YgdGhlIHVzYWdlcyA8L21hdC10YWI+XG4gICAgPG1hdC10YWIgbGFiZWw9XCJMb2NhdGlvblwiIFtkaXNhYmxlZF09XCJ0cnVlXCI+IENvbnRlbnQgMyA8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi4vYXV0aC9hdXRoLmd1YXJkJztcbmltcG9ydCB7IE1ldGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlL21ldGVyL21ldGVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IE1ldGVyQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0gfSxcbl1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFJvdXRlck1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbQXV0aEd1YXJkXVxufSlcbmV4cG9ydCBjbGFzcyBNZXRlclJvdXRpbmdNb2R1bGUge30iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IE1ldGVybGlzdENvbXBvbmVudCB9IGZyb20gJy4vZmVhdHVyZS9tZXRlci1saXN0L21ldGVybGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWV0ZXJDb21wb25lbnQgfSBmcm9tICcuL2ZlYXR1cmUvbWV0ZXIvbWV0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1ldGVyUm91dGluZ01vZHVsZSB9IGZyb20gJy4vbWV0ZXItcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgbWV0ZXJSZWR1Y2VyIH0gZnJvbSAnLi9zdGF0ZS9tZXRlci5yZWR1Y2VyJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTWV0ZXJsaXN0Q29tcG9uZW50LFxuICAgICAgICBNZXRlckNvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKCdtZXRlcmRhdGEnLCBtZXRlclJlZHVjZXIpLFxuICAgICAgICBNZXRlclJvdXRpbmdNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE1ldGVyTW9kdWxlIHt9IiwiaW1wb3J0IHsgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3RvciwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCAqIGFzIGZyb21BcHAgZnJvbSAnLi4vLi4vYXBwLnJlZHVjZXInXG5pbXBvcnQgeyBNZXRlckFjdGlvbnMsXG4gICAgICAgICBTRVRfQVZBSUxBQkxFX01FVEVSX0RBVEEsXG4gICAgICAgICBERUxFVEVfQVZBSUxBQkxFX01FVEVSX0RBVEEsXG4gICAgICAgICBBRERfQVZBSUxBQkxFX01FVEVSX0RBVEEgfSBmcm9tICcuLi9zdGF0ZS9tZXRlci5hY3Rpb25zJ1xuaW1wb3J0IHsgTWV0ZXJMaXN0IH0gZnJvbSAnLi4vbWV0ZXItbGlzdC5tb2RlbCdcblxuZXhwb3J0IGludGVyZmFjZSBNZXRlckRhdGFTdGF0ZSB7XG4gICAgbWV0ZXJEYXRhOiBNZXRlckxpc3RbXTtcbiAgICBhZGRNZXRlckRhdGE6IE1ldGVyTGlzdDtcbiAgICBkZWxldGVNZXRlckRhdGE6IE1ldGVyTGlzdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSBleHRlbmRzIGZyb21BcHAuU3RhdGUge1xuICAgIG1ldGVyOiBNZXRlckRhdGFTdGF0ZTtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBNZXRlckRhdGFTdGF0ZSA9IHtcbiAgICBtZXRlckRhdGE6IFtdLFxuICAgIGFkZE1ldGVyRGF0YTogbnVsbCxcbiAgICBkZWxldGVNZXRlckRhdGE6IG51bGwsXG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0gc3RhdGUgb2xkIHN0YXRlIGFzIGEgaW5wdXQgXG4gKiBAcGFyYW0gYWN0aW9uIGluY29taW5nIGFjdGlvbiB0byBzdG9yZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWV0ZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IE1ldGVyQWN0aW9ucykge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBTRVRfQVZBSUxBQkxFX01FVEVSX0RBVEE6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1ldGVyRGF0YTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUREX0FWQUlMQUJMRV9NRVRFUl9EQVRBOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRNZXRlckRhdGE6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIERFTEVURV9BVkFJTEFCTEVfTUVURVJfREFUQTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZGVsZXRlTWV0ZXJEYXRhOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSAgICAgICAgIFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldE1ldGVyU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8TWV0ZXJEYXRhU3RhdGU+KCdtZXRlcmRhdGEnKTtcblxuXG5leHBvcnQgY29uc3QgZ2V0TWV0ZXJEYXRhID0gY3JlYXRlU2VsZWN0b3IoZ2V0TWV0ZXJTdGF0ZSwgKHN0YXRlOiBNZXRlckRhdGFTdGF0ZSkgPT4gc3RhdGUubWV0ZXJEYXRhKTtcbmV4cG9ydCBjb25zdCBhZGRNZXRlckRhdGEgPSBjcmVhdGVTZWxlY3RvcihnZXRNZXRlclN0YXRlLCAoc3RhdGU6IE1ldGVyRGF0YVN0YXRlKSA9PiBzdGF0ZS5hZGRNZXRlckRhdGEpO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZU1ldGVyRGF0YSA9IGNyZWF0ZVNlbGVjdG9yKGdldE1ldGVyU3RhdGUsIChzdGF0ZTogTWV0ZXJEYXRhU3RhdGUpID0+IHN0YXRlLmRlbGV0ZU1ldGVyRGF0YSk7MFxuIl0sInNvdXJjZVJvb3QiOiIifQ==
