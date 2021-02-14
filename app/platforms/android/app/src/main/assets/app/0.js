(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/meter/feature/meter-list/meterlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterlistComponent", function() { return MeterlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/material/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/material/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/material/fesm2015/paginator.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _state_meter_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/meter/state/meter.reducer.ts");
/* harmony import */ var _meter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/meter/meter.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../node_modules/@angular/material/fesm2015/slide-toggle.js");


















function MeterlistComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MeterlistComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MeterlistComponent_td_12_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const element_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.updateActive(element_r12, $event.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", element_r12.active);
} }
function MeterlistComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MeterlistComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r15.location);
} }
function MeterlistComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MeterlistComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r16.name);
} }
function MeterlistComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Active1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MeterlistComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MeterlistComponent_td_21_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const element_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.updateActive1(element_r17, $event.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", element_r17.active1);
} }
function MeterlistComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MeterlistComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeterlistComponent_td_24_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const element_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.delete(element_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MeterlistComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
function MeterlistComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
const _c0 = function () { return [5, 10, 20]; };
class MeterlistComponent {
    constructor(store, meterService) {
        this.store = store;
        this.meterService = meterService;
        this.displayedColumns = ['active', 'location', 'name', 'active1', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.meterService.getMeterList();
        this.store.select(_state_meter_reducer__WEBPACK_IMPORTED_MODULE_6__["getMeterData"]).subscribe((meterData) => {
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
        if (lodash__WEBPACK_IMPORTED_MODULE_5__["isNil"](element)) {
            element = {};
        }
        element.active = enable;
        this.meterService.updateData({
            id: element.id,
            active: enable
        });
    }
    updateActive1(element, enable) {
        console.error("element", element);
        this.meterService.updateData({
            id: element.id,
            active: enable
        });
    }
    addElement() {
        let newData = {
            name: 'stuttgart',
            location: 'baden-wurtternberg',
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
MeterlistComponent.ɵfac = function MeterlistComponent_Factory(t) { return new (t || MeterlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_meter_service__WEBPACK_IMPORTED_MODULE_7__["MeterService"])); };
MeterlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeterlistComponent, selectors: [["meterlist"]], viewQuery: function MeterlistComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 28, vars: 7, consts: [[1, "table"], [1, "center-wrapper"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["fxLayout", "row"], ["matInput", "", "type", "text", "placeholder", "filter", 1, "input-search", 3, "keyup"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "active"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "location"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "name"], ["matColumnDef", "active1"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "checked", "change"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function MeterlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeterlistComponent_Template_button_click_3_listener() { return ctx.addElement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function MeterlistComponent_Template_input_keyup_8_listener($event) { return ctx.doFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MeterlistComponent_th_11_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MeterlistComponent_td_12_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MeterlistComponent_th_14_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MeterlistComponent_td_15_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MeterlistComponent_th_17_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MeterlistComponent_td_18_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MeterlistComponent_th_20_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MeterlistComponent_td_21_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MeterlistComponent_th_23_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MeterlistComponent_td_24_Template, 4, 0, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MeterlistComponent_tr_25_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MeterlistComponent_tr_26_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-paginator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggle"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".table[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.center-wrapper[_ngcontent-%COMP%] {\n  max-width: 800px;\n  width: 800px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.input-search[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n  border-radius: 25px;\n  border: none;\n  padding: 0 10px 0 10px;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeterlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'meterlist',
                templateUrl: './meterlist.component.html',
                styleUrls: ['./meterlist.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _meter_service__WEBPACK_IMPORTED_MODULE_7__["MeterService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "./app/meter/feature/meter/meter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterComponent", function() { return MeterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/material/fesm2015/tabs.js");
/* harmony import */ var _meter_list_meterlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/meter/feature/meter-list/meterlist.component.ts");




class MeterComponent {
    constructor() { }
    ngOnInit() {
    }
}
MeterComponent.ɵfac = function MeterComponent_Factory(t) { return new (t || MeterComponent)(); };
MeterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeterComponent, selectors: [["app-meter"]], decls: 7, vars: 1, consts: [["label", "List"], ["label", "Graph"], ["label", "Location", 3, "disabled"]], template: function MeterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meterlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " graph of the usages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Content 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _meter_list_meterlist_component__WEBPACK_IMPORTED_MODULE_2__["MeterlistComponent"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meter',
                templateUrl: './meter.component.html',
                styleUrls: ['./meter.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./app/meter/meter-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterRoutingModule", function() { return MeterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/auth/auth.guard.ts");
/* harmony import */ var _feature_meter_meter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/meter/feature/meter/meter.component.ts");






const routes = [
    { path: '', component: _feature_meter_meter_component__WEBPACK_IMPORTED_MODULE_3__["MeterComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
];
class MeterRoutingModule {
}
MeterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MeterRoutingModule });
MeterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MeterRoutingModule_Factory(t) { return new (t || MeterRoutingModule)(); }, providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MeterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ],
                providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/meter/meter.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterModule", function() { return MeterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/shared/shared.module.ts");
/* harmony import */ var _feature_meter_list_meterlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/meter/feature/meter-list/meterlist.component.ts");
/* harmony import */ var _feature_meter_meter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/meter/feature/meter/meter.component.ts");
/* harmony import */ var _meter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/meter/meter-routing.module.ts");
/* harmony import */ var _state_meter_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/meter/state/meter.reducer.ts");









class MeterModule {
}
MeterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MeterModule });
MeterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MeterModule_Factory(t) { return new (t || MeterModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature('meterdata', _state_meter_reducer__WEBPACK_IMPORTED_MODULE_6__["meterReducer"]),
            _meter_routing_module__WEBPACK_IMPORTED_MODULE_5__["MeterRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MeterModule, { declarations: [_feature_meter_list_meterlist_component__WEBPACK_IMPORTED_MODULE_3__["MeterlistComponent"],
        _feature_meter_meter_component__WEBPACK_IMPORTED_MODULE_4__["MeterComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreFeatureModule"], _meter_routing_module__WEBPACK_IMPORTED_MODULE_5__["MeterRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _feature_meter_list_meterlist_component__WEBPACK_IMPORTED_MODULE_3__["MeterlistComponent"],
                    _feature_meter_meter_component__WEBPACK_IMPORTED_MODULE_4__["MeterComponent"],
                ],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature('meterdata', _state_meter_reducer__WEBPACK_IMPORTED_MODULE_6__["meterReducer"]),
                    _meter_routing_module__WEBPACK_IMPORTED_MODULE_5__["MeterRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/meter/state/meter.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meterReducer", function() { return meterReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeterState", function() { return getMeterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeterData", function() { return getMeterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMeterData", function() { return addMeterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMeterData", function() { return deleteMeterData; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _state_meter_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/meter/state/meter.actions.ts");


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
        case _state_meter_actions__WEBPACK_IMPORTED_MODULE_1__["SET_AVAILABLE_METER_DATA"]:
            return Object.assign(Object.assign({}, state), { meterData: action.payload });
        case _state_meter_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_AVAILABLE_METER_DATA"]:
            return Object.assign(Object.assign({}, state), { addMeterData: action.payload });
        case _state_meter_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_AVAILABLE_METER_DATA"]:
            return Object.assign(Object.assign({}, state), { deleteMeterData: action.payload });
        default:
            return state;
    }
}
const getMeterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('meterdata');
const getMeterData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMeterState, (state) => state.meterData);
const addMeterData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMeterState, (state) => state.addMeterData);
const deleteMeterData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMeterState, (state) => state.deleteMeterData);
0;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWV0ZXIvZmVhdHVyZS9tZXRlci1saXN0L21ldGVybGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21ldGVyL2ZlYXR1cmUvbWV0ZXItbGlzdC9tZXRlcmxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL21ldGVyL2ZlYXR1cmUvbWV0ZXIvbWV0ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9tZXRlci9mZWF0dXJlL21ldGVyL21ldGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9tZXRlci9tZXRlci1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbWV0ZXIvbWV0ZXIubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9tZXRlci9zdGF0ZS9tZXRlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRFO0FBQzNCO0FBQ1k7QUFDRjtBQUN2QjtBQUdSO0FBRzBCO0FBR0g7Ozs7Ozs7Ozs7OztJQ1N2Qyx5RUFBc0M7SUFBQSxpRUFBTTtJQUFBLDREQUFLOzs7O0lBQ2pELHlFQUNFO0lBQUEsdUZBR21CO0lBRmpCLDRZQUFnRDtJQUVsRCw0REFBbUI7SUFDckIsNERBQUs7OztJQUZELDBEQUEwQjtJQUExQix1RkFBMEI7OztJQU05Qix5RUFBc0Q7SUFBQSxtRUFBUTtJQUFBLDREQUFLOzs7SUFDbkUseUVBQXVDO0lBQUEsdURBQW9CO0lBQUEsNERBQUs7OztJQUF6QiwwREFBb0I7SUFBcEIscUZBQW9COzs7SUFJM0QseUVBQXNEO0lBQUEsK0RBQUk7SUFBQSw0REFBSzs7O0lBQy9ELHlFQUF1QztJQUFBLHVEQUFnQjtJQUFBLDREQUFLOzs7SUFBckIsMERBQWdC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QUMsQ0FBQztBQUd6RSxNQUFNLFlBQVksR0FBRyxrRUFBYyxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMvRixNQUFNLFlBQVksR0FBRyxrRUFBYyxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNsRyxNQUFNLGVBQWUsR0FBRyxrRUFBYyxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUFBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNvcnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5cbmltcG9ydCAqIGFzIGZyb21NZXRlciBmcm9tICcuLi8uLi9zdGF0ZS9tZXRlci5yZWR1Y2VyJ1xuXG5pbXBvcnQgeyBNZXRlckxpc3QgfSBmcm9tICcuLi8uLi9tZXRlci1saXN0Lm1vZGVsJztcbmltcG9ydCB7IE1ldGVyU2VydmljZSB9IGZyb20gJy4uLy4uL21ldGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZXRlcmxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWV0ZXJsaXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWV0ZXJsaXN0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE1ldGVybGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgZGlzcGxheWVkQ29sdW1ucyA9IFsnYWN0aXZlJywgJ2xvY2F0aW9uJywgJ25hbWUnLCAnYWN0aXZlMScsICdkZWxldGUnXTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8TWV0ZXJMaXN0PigpO1xuXG4gIGl0ZW0kOiBPYnNlcnZhYmxlPE1ldGVyTGlzdFtdPjtcblxuICBleHBhbmRlZEVsZW1lbnQ6IE1ldGVyTGlzdDtcbiAgXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGZyb21NZXRlci5NZXRlckRhdGFTdGF0ZT4sXG4gICAgcHJpdmF0ZSBtZXRlclNlcnZpY2U6IE1ldGVyU2VydmljZSxcbiAgICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tZXRlclNlcnZpY2UuZ2V0TWV0ZXJMaXN0KCk7XG5cbiAgICB0aGlzLnN0b3JlLnNlbGVjdChmcm9tTWV0ZXIuZ2V0TWV0ZXJEYXRhKS5zdWJzY3JpYmUoKG1ldGVyRGF0YTogTWV0ZXJMaXN0W10pID0+IHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gbWV0ZXJEYXRhO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgfVxuXG4gIGRvRmlsdGVyKGZpbHRlclZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gZmlsdGVyVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICB1cGRhdGVBY3RpdmUoZWxlbWVudCwgZW5hYmxlOiBib29sZWFuKSB7XG4gICAgaWYgKF8uaXNOaWwoZWxlbWVudCkpIHtcbiAgICAgIGVsZW1lbnQgPSB7fVxuICAgIH1cbiAgICBlbGVtZW50LmFjdGl2ZSA9IGVuYWJsZTtcbiAgICB0aGlzLm1ldGVyU2VydmljZS51cGRhdGVEYXRhKHtcbiAgICAgIGlkOiBlbGVtZW50LmlkLFxuICAgICAgYWN0aXZlOiBlbmFibGVcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2ZTEoZWxlbWVudCwgZW5hYmxlOiBib29sZWFuKSB7XG5cbiAgICBjb25zb2xlLmVycm9yKFwiZWxlbWVudFwiLCBlbGVtZW50KTtcblxuICAgIHRoaXMubWV0ZXJTZXJ2aWNlLnVwZGF0ZURhdGEoe1xuICAgICAgaWQ6IGVsZW1lbnQuaWQsXG4gICAgICBhY3RpdmU6IGVuYWJsZVxuICAgIH0pO1xuICB9XG5cbiAgYWRkRWxlbWVudCgpIHtcbiAgICBsZXQgbmV3RGF0YTogTWV0ZXJMaXN0ID0ge1xuICAgICAgbmFtZTogJ3N0dXR0Z2FydCcsXG4gICAgICBsb2NhdGlvbjogJ2JhZGVuLXd1cnR0ZXJuYmVyZycsXG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgICBhY3RpdmUxOiB0cnVlLFxuICAgIH1cbiAgICB0aGlzLm1ldGVyU2VydmljZS5hZGROZXdNZXRlckRhdGEobmV3RGF0YSk7XG4gIH1cblxuICBkZWxldGUoZGF0YTogTWV0ZXJMaXN0KSB7XG4gICAgY29uc29sZS5lcnJvcihcImRlbGV0ZVwiLCBkYXRhKTtcbiAgICB0aGlzLm1ldGVyU2VydmljZS5kZWxldGVNZXRlckRhdGEoZGF0YSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICA8ZGl2IGNsYXNzPVwiY2VudGVyLXdyYXBwZXJcIj5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiYWRkRWxlbWVudCgpXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgIEFkZFxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCI+XG4gICAgICAgIDxtYXQtaWNvbj5zZWFyY2g8L21hdC1pY29uPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXRcbiAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zZWFyY2hcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIChrZXl1cCk9XCJkb0ZpbHRlcigkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZmlsdGVyXCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8dGFibGVcbiAgICAgICAgICBtYXQtdGFibGVcbiAgICAgICAgICBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCJcbiAgICAgICAgICBtdWx0aVRlbXBsYXRlRGF0YVJvd3NcbiAgICAgICAgICBtYXRTb3J0PlxuXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJhY3RpdmVcIiA+XG4gICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPkFjdGl2ZTwvdGg+XG4gICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPlxuICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZVxuICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwidXBkYXRlQWN0aXZlKGVsZW1lbnQsICRldmVudC5jaGVja2VkKVwiXG4gICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiZWxlbWVudC5hY3RpdmVcIj5cbiAgICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibG9jYXRpb25cIiA+XG4gICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj5Mb2NhdGlvbjwvdGg+XG4gICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPnt7ZWxlbWVudC5sb2NhdGlvbn19PC90ZD5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiID5cbiAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPk5hbWU8L3RoPlxuICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj57e2VsZW1lbnQubmFtZX19PC90ZD5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiYWN0aXZlMVwiID5cbiAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+QWN0aXZlMTwvdGg+XG4gICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPlxuICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZVxuICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwidXBkYXRlQWN0aXZlMShlbGVtZW50LCAkZXZlbnQuY2hlY2tlZClcIlxuICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cImVsZW1lbnQuYWN0aXZlMVwiPlxuICAgICAgICAgICAgICA8L21hdC1zbGlkZS10b2dnbGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJkZWxldGVcIiA+XG4gICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlJlbW92ZTwvdGg+XG4gICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImRlbGV0ZShlbGVtZW50KVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uczsgc3RpY2t5OiB0cnVlXCI+PC90cj5cbiAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgZWxlbWVudDsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuICAgIDwvdGFibGU+XG4gICAgPG1hdC1wYWdpbmF0b3IgW3BhZ2VTaXplXT1cIjVcIiBbcGFnZVNpemVPcHRpb25zXT1cIls1LCAxMCwgMjBdXCI+PC9tYXQtcGFnaW5hdG9yPlxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1ldGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21ldGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWV0ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNZXRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8bWF0LXRhYi1ncm91cD5cbiAgICA8bWF0LXRhYiBsYWJlbD1cIkxpc3RcIj5cbiAgICAgICAgPG1ldGVybGlzdD48L21ldGVybGlzdD5cbiAgICA8L21hdC10YWI+XG4gICAgPG1hdC10YWIgbGFiZWw9XCJHcmFwaFwiPiBncmFwaCBvZiB0aGUgdXNhZ2VzIDwvbWF0LXRhYj5cbiAgICA8bWF0LXRhYiBsYWJlbD1cIkxvY2F0aW9uXCIgW2Rpc2FibGVkXT1cInRydWVcIj4gQ29udGVudCAzIDwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuLi9hdXRoL2F1dGguZ3VhcmQnO1xuaW1wb3J0IHsgTWV0ZXJDb21wb25lbnQgfSBmcm9tICcuL2ZlYXR1cmUvbWV0ZXIvbWV0ZXIuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogJycsIGNvbXBvbmVudDogTWV0ZXJDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSB9LFxuXVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcylcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUm91dGVyTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtBdXRoR3VhcmRdXG59KVxuZXhwb3J0IGNsYXNzIE1ldGVyUm91dGluZ01vZHVsZSB7fSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTWV0ZXJsaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlL21ldGVyLWxpc3QvbWV0ZXJsaXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXRlckNvbXBvbmVudCB9IGZyb20gJy4vZmVhdHVyZS9tZXRlci9tZXRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWV0ZXJSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9tZXRlci1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBtZXRlclJlZHVjZXIgfSBmcm9tICcuL3N0YXRlL21ldGVyLnJlZHVjZXInO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBNZXRlcmxpc3RDb21wb25lbnQsXG4gICAgICAgIE1ldGVyQ29tcG9uZW50LFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoJ21ldGVyZGF0YScsIG1ldGVyUmVkdWNlciksXG4gICAgICAgIE1ldGVyUm91dGluZ01vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTWV0ZXJNb2R1bGUge30iLCJpbXBvcnQgeyBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9yLCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGZyb20gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0ICogYXMgZnJvbUFwcCBmcm9tICcuLi8uLi9hcHAucmVkdWNlcidcbmltcG9ydCB7IE1ldGVyQWN0aW9ucyxcbiAgICAgICAgIFNFVF9BVkFJTEFCTEVfTUVURVJfREFUQSxcbiAgICAgICAgIERFTEVURV9BVkFJTEFCTEVfTUVURVJfREFUQSxcbiAgICAgICAgIEFERF9BVkFJTEFCTEVfTUVURVJfREFUQSB9IGZyb20gJy4uL3N0YXRlL21ldGVyLmFjdGlvbnMnXG5pbXBvcnQgeyBNZXRlckxpc3QgfSBmcm9tICcuLi9tZXRlci1saXN0Lm1vZGVsJ1xuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGVyRGF0YVN0YXRlIHtcbiAgICBtZXRlckRhdGE6IE1ldGVyTGlzdFtdO1xuICAgIGFkZE1ldGVyRGF0YTogTWV0ZXJMaXN0O1xuICAgIGRlbGV0ZU1ldGVyRGF0YTogTWV0ZXJMaXN0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIGV4dGVuZHMgZnJvbUFwcC5TdGF0ZSB7XG4gICAgbWV0ZXI6IE1ldGVyRGF0YVN0YXRlO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IE1ldGVyRGF0YVN0YXRlID0ge1xuICAgIG1ldGVyRGF0YTogW10sXG4gICAgYWRkTWV0ZXJEYXRhOiBudWxsLFxuICAgIGRlbGV0ZU1ldGVyRGF0YTogbnVsbCxcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSBzdGF0ZSBvbGQgc3RhdGUgYXMgYSBpbnB1dCBcbiAqIEBwYXJhbSBhY3Rpb24gaW5jb21pbmcgYWN0aW9uIHRvIHN0b3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXRlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogTWV0ZXJBY3Rpb25zKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFNFVF9BVkFJTEFCTEVfTUVURVJfREFUQTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWV0ZXJEYXRhOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBBRERfQVZBSUxBQkxFX01FVEVSX0RBVEE6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZE1ldGVyRGF0YTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgREVMRVRFX0FWQUlMQUJMRV9NRVRFUl9EQVRBOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBkZWxldGVNZXRlckRhdGE6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9ICAgICAgICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0TWV0ZXJTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxNZXRlckRhdGFTdGF0ZT4oJ21ldGVyZGF0YScpO1xuXG5cbmV4cG9ydCBjb25zdCBnZXRNZXRlckRhdGEgPSBjcmVhdGVTZWxlY3RvcihnZXRNZXRlclN0YXRlLCAoc3RhdGU6IE1ldGVyRGF0YVN0YXRlKSA9PiBzdGF0ZS5tZXRlckRhdGEpO1xuZXhwb3J0IGNvbnN0IGFkZE1ldGVyRGF0YSA9IGNyZWF0ZVNlbGVjdG9yKGdldE1ldGVyU3RhdGUsIChzdGF0ZTogTWV0ZXJEYXRhU3RhdGUpID0+IHN0YXRlLmFkZE1ldGVyRGF0YSk7XG5leHBvcnQgY29uc3QgZGVsZXRlTWV0ZXJEYXRhID0gY3JlYXRlU2VsZWN0b3IoZ2V0TWV0ZXJTdGF0ZSwgKHN0YXRlOiBNZXRlckRhdGFTdGF0ZSkgPT4gc3RhdGUuZGVsZXRlTWV0ZXJEYXRhKTswXG4iXSwic291cmNlUm9vdCI6IiJ9