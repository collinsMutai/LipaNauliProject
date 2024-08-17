(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ma/Documents/lipanauliProject/src/main.ts */"zUnb");


/***/ }),

/***/ "8bGV":
/*!*******************************************************************!*\
  !*** ./src/app/components/buslistmodal/buslistmodal.component.ts ***!
  \*******************************************************************/
/*! exports provided: BuslistmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuslistmodalComponent", function() { return BuslistmodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api.service */ "yTNM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function BuslistmodalComponent_h5_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Bus route: ", ctx_r0.bookingInfo.route_name, " ");
} }
function BuslistmodalComponent_div_8_p_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.bookingInfo.fares[0].seatType, ": ");
} }
function BuslistmodalComponent_div_8_p_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" KES: ", ctx_r3.bookingInfo.price, " ");
} }
function BuslistmodalComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "+2 Amenities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Departure Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Seat Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, BuslistmodalComponent_div_8_p_66_Template, 2, 1, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, BuslistmodalComponent_div_8_p_70_Template, 2, 1, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuslistmodalComponent_div_8_Template_button_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.bookNow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.bookingInfo.company_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.bookingInfo.route_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.bookingInfo.departure_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.bookingInfo.fares && ctx_r1.bookingInfo.fares.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.bookingInfo.fares && ctx_r1.bookingInfo.fares.length > 0);
} }
class BuslistmodalComponent {
    constructor(apiService) {
        this.apiService = apiService;
    }
    ngOnInit() {
        this.apiService.modalTrigger$.subscribe((modalId) => {
            $(modalId).modal('show');
        });
        // this.apiService.tripData$.subscribe((res) => {
        //   if (res) {
        //     console.log(res);
        //     if (Array.isArray(res.data)) {
        //       this.bookingInfo = res.data[0];
        //     } else if (typeof res.data === 'object' && res.data !== null) {
        //       this.bookingInfo = res.data;
        //     }
        //     console.log('Updated booking data:', this.bookingInfo);
        //   }
        // });
        this.bookingInfo = {
            route_name: 'nairobi - juja',
            company_name: 'buscar',
            departure_time: '6:00PM'
        };
    }
    closeBuslistModal() {
        $('#buslistModal').modal('hide');
    }
    bookNow() {
        $('#buslistModal').modal('hide');
        this.apiService.triggerModal('#customerDetailsModal');
    }
}
BuslistmodalComponent.ɵfac = function BuslistmodalComponent_Factory(t) { return new (t || BuslistmodalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
BuslistmodalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuslistmodalComponent, selectors: [["app-buslistmodal"]], decls: 9, vars: 2, consts: [[1, "col-12", 2, "padding", "0"], ["id", "buslistModal", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content", "custom-modal"], [1, "modal-header"], ["class", "modal-title", "id", "staticBackdropLabel5", 4, "ngIf"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["class", "card", 4, "ngIf"], ["id", "staticBackdropLabel5", 1, "modal-title"], [1, "card"], [1, "card-body", "card-body-container"], [1, "left", 2, "flex", "1"], [1, "bus-details"], [1, "image"], ["src", "https://sawaboss.com//uploads/logo/44/FB_IMG_1704468821284.jpg", "alt", ""], [1, "bus-content"], [1, "amenities"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "icon", "icon-tabler", "icons-tabler-outline", "icon-tabler-circle-dot"], ["stroke", "none", "d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"], ["d", "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "icon", "icon-tabler", "icons-tabler-outline", "icon-tabler-wifi"], ["d", "M12 18l.01 0"], ["d", "M9.172 15.172a4 4 0 0 1 5.656 0"], ["d", "M6.343 12.343a8 8 0 0 1 11.314 0"], ["d", "M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "icon", "icon-tabler", "icons-tabler-outline", "icon-tabler-plug"], ["d", "M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z"], ["d", "M4 20l3.5 -3.5"], ["d", "M15 4l-3.5 3.5"], ["d", "M20 9l-3.5 3.5"], [1, "right", 2, "flex", "2"], [1, "time"], [2, "transform", "rotate(-45deg)"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "icon", "icon-tabler", "icons-tabler-outline", "icon-tabler-line"], ["d", "M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"], ["d", "M18 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"], ["d", "M7.5 16.5l9 -9"], [1, "rating"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "icon", "icon-tabler", "icons-tabler-filled", "icon-tabler-star"], ["d", "M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"], [1, ""], ["style", "text-transform: capitalize", 4, "ngIf"], [4, "ngIf"], [1, "seats"], ["type", "button", 3, "click"], [2, "text-transform", "capitalize"]], template: function BuslistmodalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BuslistmodalComponent_h5_5_Template, 2, 1, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuslistmodalComponent_Template_button_click_6_listener() { return ctx.closeBuslistModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BuslistmodalComponent_div_8_Template, 74, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bookingInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bookingInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".card-body-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.card[_ngcontent-%COMP%] {\n  height: 150px;\n  margin: 10px;\n}\n.bus-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 40px;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 80px;\n}\n.bus-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.bus-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n}\n.bus-content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  text-transform: uppercase;\n  margin-top: -10px;\n}\n.amenities[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: -15px;\n}\n.amenities[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n.amenities[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: top;\n  gap: 45px;\n}\n.time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.time[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n  color: black;\n}\n.rating[_ngcontent-%COMP%] {\n  \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.rating[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n.rating[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #509141;\n  height: 15px;\n  width: 15px;\n  margin-top: -30px;\n}\n.price[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.seats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.seats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #509141;\n  text-transform: capitalize;\n}\n.seats[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  text-transform: uppercase;\n  background-color: #509141;\n  color: #fff;\n  width: 100px;\n  padding: 8px;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  cursor: pointer;\n}\n.seat-info-container[_ngcontent-%COMP%] {\n  padding-bottom: 40px;\n}\n.ng-content-container.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.seat-info-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n._right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 100px;\n}\n._left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], ._right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.input-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  justify-content: space-between;\n}\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 35px;\n  border-right: 4px solid #000;\n  border-top: 4px solid #000;\n  border-bottom: 4px solid #000;\n  text-align: center;\n}\n.input-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: 1px solid black;\n}\n.selected[_ngcontent-%COMP%] {\n  background-color: #509141;\n  color: #fff;\n}\n.bookRow[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n.bookBtn[_ngcontent-%COMP%] {\n  background-color: #509141;\n  color: #fff;\n  width: 100px;\n  padding: 8px 12px;\n  margin-bottom: 40px;\n  margin-top: 20px;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n}\n.reviewBtn[_ngcontent-%COMP%] {\n  background-color: #509141;\n  color: #fff;\n  width: 100px;\n  padding: 8px 12px;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n}\n@media (max-width: 768px) {\n  .card-body-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .card[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .right[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c2xpc3Rtb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCw4QkFBOEI7QUFDaEM7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsV0FBVztFQUNYLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoiYnVzbGlzdG1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib2R5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcmQge1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4uYnVzLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDQwcHg7XG59XG4uaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4uYnVzLWNvbnRlbnQgaDMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYnVzLWNvbnRlbnQgaDMgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5idXMtY29udGVudCA+IHAge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLmFtZW5pdGllcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG4uYW1lbml0aWVzIHN2ZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG4uYW1lbml0aWVzID4gcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogdG9wO1xuICBnYXA6IDQ1cHg7XG59XG4udGltZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGltZSBzdmcge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4ucmF0aW5nIHtcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJhdGluZyA+IHAge1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucmF0aW5nIHN2ZyB7XG4gIGNvbG9yOiAjNTA5MTQxO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cbi5wcmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTVweDtcbn1cbi5zZWF0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2VhdHMgcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM1MDkxNDE7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnNlYXRzIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwOTE0MTtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDBweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWF0LWluZm8tY29udGFpbmVyIHtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG4ubmctY29udGVudC1jb250YWluZXIuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNlYXQtaW5mby1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLl9yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTAwcHg7XG59XG4uX2xlZnQgcCxcbi5fcmlnaHQgcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmlucHV0LWNvbnRhaW5lciBpbnB1dCxcbi5pbnB1dC1jb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMDAwO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmlucHV0LWNvbnRhaW5lciBzcGFuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDkxNDE7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJvb2tSb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cbi5ib29rQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwOTE0MTtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDBweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnJldmlld0J0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDkxNDE7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkLWJvZHktY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jYXJkIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLnJpZ2h0IHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    AUTHORIZATION: '4F5D3QC5-C94A-CFD5-87C1-4E2903311DF0',
    apiURL: '/common/getCity',
    api: '/trips/getTrips',
    bookingURL: '/ticket/booking',
    stkPushURL: '/paymentGateway/init',
    forgotPasswordURL: '/appUser/forgotPassword',
    changeForgotPasswordURL: '/appUser/changeForgotPassword',
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "yTNM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _lipanaulislider_lipanaulislider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lipanaulislider/lipanaulislider.component */ "IZQF");
/* harmony import */ var _lipanauliapp_lipanauliapp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lipanauliapp/lipanauliapp.component */ "mJgd");
/* harmony import */ var _cta_cta_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cta/cta.component */ "Wdwg");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");
/* harmony import */ var _loginmodal_loginmodal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../loginmodal/loginmodal.component */ "fMSf");
/* harmony import */ var _paynowmodal_paynowmodal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../paynowmodal/paynowmodal.component */ "KO4p");
/* harmony import */ var _buslistmodal_buslistmodal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../buslistmodal/buslistmodal.component */ "8bGV");
/* harmony import */ var _customerdetailsmodal_customerdetailsmodal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../customerdetailsmodal/customerdetailsmodal.component */ "vwzU");
/* harmony import */ var _pay_for_ticketmodal_pay_for_ticketmodal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pay-for-ticketmodal/pay-for-ticketmodal.component */ "y18h");














function HomeComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_34_Template_li_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.loginUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign In / Sign Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "option", 60);
} if (rf & 2) {
    const suggestion_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", suggestion_r7.city_name);
} }
function HomeComponent_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "option", 60);
} if (rf & 2) {
    const suggestion_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", suggestion_r8.city_name);
} }
class HomeComponent {
    constructor(fb, apiService, router) {
        this.fb = fb;
        this.apiService = apiService;
        this.router = router;
        this.sourceCities = [];
        this.destinationCities = [];
        this.isSubmitDisabled = true;
        this.isMobileMenuOpen = false;
        this.tripForm = this.fb.group({
            from: [''],
            to: [''],
            departure: [''],
            passengers: [''],
        });
    }
    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
    ngOnInit() {
        this.apiService.modalTrigger$.subscribe((modalId) => {
            $(modalId).modal('show');
        });
        // this.apiService.triggerModal('#payForTicketModal');
        this.apiService.getSourceCity().subscribe((res) => {
            this.sourceCities = res.data;
        });
        const currentDate = new Date();
        this.tripForm.get('departure').setValue({
            year: currentDate.getFullYear(),
            month: currentDate.getMonth() + 1,
            day: currentDate.getDate(),
        });
    }
    selectedCity(selectedSourceCity) {
        this.selectedSourceCity = selectedSourceCity;
        const selectedCity = this.sourceCities.find((city) => city.city_name.toLowerCase() === this.selectedSourceCity.toLowerCase());
        if (selectedCity) {
            const sourceCityId = selectedCity.id;
            this.apiService.getDestinationCity(sourceCityId).subscribe((res) => {
                this.destinationCities = res.data;
            });
        }
    }
    bookTrip() {
        this.apiService.triggerModal('#buslistModal');
        if (this.tripForm.valid) {
            const formData = this.tripForm.value;
            const departure = formData.departure;
            this.sourceCity = this.sourceCities.find((city) => city.city_name.toLowerCase() === formData.from.toLowerCase());
            if (this.sourceCity) {
                this.sourceCityId = this.sourceCity.id;
            }
            // else {
            //   console.error('Source city not found.');
            // }
            this.destinationCity = this.destinationCities.find((city) => city.city_name.toLowerCase() === formData.to.toLowerCase());
            if (this.destinationCity) {
                this.destinationCityId = this.destinationCity.id;
            }
            // else {
            //   console.error('Destination city not found.');
            // }
            if (this.sourceCity && this.destinationCity) {
                const tripData = {
                    source_id: this.sourceCityId,
                    destination_id: this.destinationCityId,
                    booking_date: '2024-05-29',
                };
                this.apiService.getAllTrip(tripData).subscribe((res) => {
                    console.log(res);
                    this.apiService.triggerModal('#buslistModal');
                    this.apiService.setDisplayState(true);
                });
                //  this.tripForm.reset();
                //  this.destinationCities = [];
                //  this.selectedSourceCity = '';
            }
        }
    }
    closePayNowModal() {
        $('#payNowModal').modal('hide');
    }
    payNowTrip() {
        this.apiService.triggerModal('#payNowModal');
    }
    registrationHandler() {
        const tripInfo = {
            booking_date: '2024-05-04',
            vehicle_reg: 'kdf 002z',
        };
        this.apiService.getAllTrip(tripInfo).subscribe((res) => {
            console.log(res);
            $('#payNowModal').modal('hide');
            this.apiService.setDisplayState(true);
        });
    }
    loginUser() {
        this.apiService.triggerModal('#loginModal');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 90, vars: 6, consts: [[1, "container-fluid", "hero-section", 2, "padding", "0"], [1, "row", "hero"], [1, "nav-section"], [1, "login", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "icon", "icon-tabler", "icons-tabler-outline", "icon-tabler-user-circle"], ["stroke", "none", "d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"], ["d", "M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"], ["d", "M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"], [1, "social-icons", 2, "display", "flex", "flex-direction", "column"], [1, "img"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "icon", "icon-tabler", "icons-tabler-filled", "icon-tabler-brand-facebook"], ["d", "M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "icon", "icon-tabler", "icons-tabler-filled", "icon-tabler-brand-twitter"], ["d", "M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "icon", "icon-tabler", "icons-tabler-outline", "icon-tabler-brand-instagram"], ["d", "M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"], ["d", "M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"], ["d", "M16.5 7.5l0 .01"], [1, "mobile-menu-button", "pt-2", "pb-2", 3, "click"], [4, "ngIf"], ["src", "../../../assets/Lipanauli/Lipanauli fare prices.png", "alt", "", 2, "height", "40px", "width", "150px"], ["class", "mobile-menu", 4, "ngIf"], [1, "col-12", "col-md-6", "form-card"], ["src", "../../../assets/Lipanauli/Lipanauli fare prices.png", "alt", "", 2, "height", "50px", "width", "150px", "margin-top", "80px"], [1, "phone-cta", 2, "height", "40px", "width", "250px", "margin-top", "40px"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "icon", "icon-tabler", "icons-tabler-filled", "icon-tabler-phone"], ["d", "M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"], [1, "header", 2, "letter-spacing", "1px"], [1, "card"], [1, "card-body"], [3, "formGroup"], [1, "input-item"], [1, "me-2", "item"], ["for", "from", 1, "form-label"], ["type", "text", "placeholder", "From", "formControlName", "from", "list", "datalistOptions", 1, "form-control", 3, "change"], ["id", "datalistOptions"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "to", 1, "form-label"], ["type", "text", "placeholder", "To", "formControlName", "to", "list", "destinationCities", 1, "form-control"], ["id", "destinationCities"], [1, "me-2"], ["for", "departure", 1, "form-label"], ["type", "date", "formControlName", "departure", 1, "form-control"], ["for", "passengers", 1, "form-label"], ["type", "text", "formControlName", "passengers", "placeholder", "1 Adult, 0 Baggage", 1, "form-control"], [1, "bookBtns"], ["type", "button", 1, "search", 3, "click"], ["type", "button", 1, "paynow", 3, "click"], [1, "col-12", "col-md-6", "right", 2, "padding", "0"], [1, "row"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "icon", "icon-tabler", "icons-tabler-outline", "icon-tabler-menu-2", 2, "height", "40px", "width", "40px", "color", "#739b5b"], ["d", "M4 6l16 0"], ["d", "M4 12l16 0"], ["d", "M4 18l16 0"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "icon", "icon-tabler", "icons-tabler-outline", "icon-tabler-x", 2, "height", "40px", "width", "40px", "color", "#739b5b"], ["d", "M18 6l-12 12"], ["d", "M6 6l12 12"], [1, "mobile-menu"], [3, "click"], [3, "value"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_6_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign In / Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Lipanauli");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_30_listener() { return ctx.toggleMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HomeComponent_span_31_Template, 6, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HomeComponent_span_32_Template, 5, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomeComponent_div_34_Template, 4, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 0790 215 215 | 0737 740 740 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Fare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " ya kisure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "form", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeComponent_Template_input_change_53_listener($event) { return ctx.selectedCity($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "datalist", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, HomeComponent_option_55_Template, 1, 1, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "datalist", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, HomeComponent_option_61_Template, 1, 1, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Departure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Passengers/ luggage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_72_listener() { return ctx.bookTrip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_74_listener() { return ctx.payNowTrip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Pay Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "app-lipanaulislider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "app-lipanauliapp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "app-loginmodal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "app-paynowmodal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "app-buslistmodal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "app-customerdetailsmodal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "app-pay-for-ticketmodal");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.tripForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sourceCities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.destinationCities);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _lipanaulislider_lipanaulislider_component__WEBPACK_IMPORTED_MODULE_5__["LipanaulisliderComponent"], _lipanauliapp_lipanauliapp_component__WEBPACK_IMPORTED_MODULE_6__["LipanauliappComponent"], _cta_cta_component__WEBPACK_IMPORTED_MODULE_7__["CtaComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _loginmodal_loginmodal_component__WEBPACK_IMPORTED_MODULE_9__["LoginmodalComponent"], _paynowmodal_paynowmodal_component__WEBPACK_IMPORTED_MODULE_10__["PaynowmodalComponent"], _buslistmodal_buslistmodal_component__WEBPACK_IMPORTED_MODULE_11__["BuslistmodalComponent"], _customerdetailsmodal_customerdetailsmodal_component__WEBPACK_IMPORTED_MODULE_12__["CustomerdetailsmodalComponent"], _pay_for_ticketmodal_pay_for_ticketmodal_component__WEBPACK_IMPORTED_MODULE_13__["PayForTicketmodalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap\");\n.hero[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 24%;\n  top: 24px;\n  z-index: 1;\n}\n.hero[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 30%;\n  top: -10px;\n  z-index: 1;\n}\n.hero[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #739b5b;\n  color: #fff;\n  padding: 8px 15px;\n  cursor: pointer;\n}\n.hero[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 60%;\n  top: -10px;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\n.hero[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.hero[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.hero[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  color: #ccc;\n}\n.hero[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 40px;\n}\n.hero[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: -10px;\n  z-index: 1;\n}\n.hero[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n}\n.hero[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.hero[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #739b5b;\n}\n.hero[_ngcontent-%COMP%] {\n  \n  background: url('Bus routes Nairobi.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: top;\n  justify-content: space-between;\n  padding: 0px;\n  margin: 0px;\n}\n.hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40vh;\n  width: 100%;\n}\n.header[_ngcontent-%COMP%] {\n  color: #293a43;\n  font-size: 48px;\n  text-transform: uppercase;\n  padding: 10px 0px;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 900;\n  font-style: normal;\n}\n.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f6b228;\n}\n.form-card[_ngcontent-%COMP%] {\n  padding-left: 100px;\n  display: flex;\n  flex-direction: column;\n}\n.form-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);\n}\n.hero[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .phone-cta[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background-color: #293a43;\n  border-radius: 25px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  cursor: pointer;\n}\n.hero[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .phone-cta[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  background-color: #739b5b;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  padding: 5px;\n}\n.input-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 25px;\n  padding-bottom: 20px;\n}\ninput[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.bookBtns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n}\n.search[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background-color: #f6b228;\n  color: #fff;\n  width: 100px;\n  padding: 7px;\n}\n.paynow[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background-color: #739b5b;\n  color: #fff;\n  width: 100px;\n  padding: 7px;\n}\n.right[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n}\n.right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n}\n.suggestions-list[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background: #fff;\n  position: absolute;\n  max-height: 150px;\n  overflow-y: auto;\n  display: block;\n  z-index: 1000;\n}\n.suggestion-item[_ngcontent-%COMP%] {\n  padding: 8px;\n  cursor: pointer;\n}\n.suggestion-item[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  right: 0;\n  background: white;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1;\n}\n.mobile-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.mobile-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  cursor: pointer;\n  border-bottom: 1px solid #ccc;\n}\n.mobile-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n.mobile-menu-button[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .rowContainer[_ngcontent-%COMP%] {\n    margin-top: 80px;\n  }\n  .hero[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  input[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n  .card[_ngcontent-%COMP%] {\n    margin-bottom: 60px;\n  }\n}\n@media (max-width: 768px) {\n  .rowContainer[_ngcontent-%COMP%] {\n    margin-top: 80px;\n  }\n  .hero[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .input-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  input[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n@media (max-width: 425px) {\n  .hero[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .form-card[_ngcontent-%COMP%] {\n    padding-left: 15px;\n  }\n  .form-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav-section[_ngcontent-%COMP%] {\n    display: none;\n  }\n  input[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n  .mobile-menu-button[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    background: #fff;\n    padding: 10px;\n  }\n  .mobile-menu-button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .rowContainer[_ngcontent-%COMP%] {\n    margin-top: 60px;\n  }\n}\n@media (max-width: 320px) {\n  .input-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  input[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n  .rowContainer[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2R0FBNkc7QUFDN0c7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHFGQUFxRjtFQUNyRix5Q0FBbUU7RUFDbkUsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixpQkFBaUI7RUFDakIseUNBQXlDO0VBQ3pDLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwLi4xMDAwOzEsMjAwLi4xMDAwJmRpc3BsYXk9c3dhcFwiKTtcbi5oZXJvIC5uYXYtc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI0JTtcbiAgdG9wOiAyNHB4O1xuICB6LWluZGV4OiAxO1xufVxuLmhlcm8gLm5hdi1zZWN0aW9uIHVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzMCU7XG4gIHRvcDogLTEwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4uaGVybyAubmF2LXNlY3Rpb24gdWwgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM5YjViO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZXJvIC5uYXYtc2VjdGlvbiAubG9naW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDYwJTtcbiAgdG9wOiAtMTBweDtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVybyAubmF2LXNlY3Rpb24gLmxvZ2luIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmhlcm8gLm5hdi1zZWN0aW9uIC5sb2dpbiBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmhlcm8gLm5hdi1zZWN0aW9uIC5sb2dpbiBwIHN2ZyB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGNvbG9yOiAjY2NjO1xufVxuLmhlcm8gLm5hdi1zZWN0aW9uIC5sb2dpbiBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5oZXJvIC5uYXYtc2VjdGlvbiAuc29jaWFsLWljb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAtMTBweDtcbiAgei1pbmRleDogMTtcbn1cbi5oZXJvIC5uYXYtc2VjdGlvbiAuc29jaWFsLWljb25zIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uaGVybyAubmF2LXNlY3Rpb24gLnNvY2lhbC1pY29ucyAuaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmhlcm8gLm5hdi1zZWN0aW9uIC5zb2NpYWwtaWNvbnMgLmltZyBzdmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzczOWI1Yjtcbn1cbi5oZXJvIHtcbiAgLyogYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL0xpcGFuYXVsaS9BZmZvcmRhYmxlIGJ1cyBzZXJ2aWNlIE5haXJvYmkucG5nXCIpOyAqL1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvTGlwYW5hdWxpL0J1cyByb3V0ZXMgTmFpcm9iaS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiB0b3A7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cbi5oZXJvIGltZyB7XG4gIGhlaWdodDogNDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGVhZGVyIHtcbiAgY29sb3I6ICMyOTNhNDM7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4uaGVhZGVyIHNwYW4ge1xuICBjb2xvcjogI2Y2YjIyODtcbn1cbi5mb3JtLWNhcmQge1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZvcm0tY2FyZCAuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLmhlcm8gLmZvcm0tY2FyZCAucGhvbmUtY3RhIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkzYTQzO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZXJvIC5mb3JtLWNhcmQgLnBob25lLWN0YSBzdmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM5YjViO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5pbnB1dC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5pbnB1dCB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5ib29rQnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDE1cHg7XG59XG4uc2VhcmNoIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZiMjI4O1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiA3cHg7XG59XG4ucGF5bm93IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM5YjViO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiA3cHg7XG59XG4ucmlnaHQge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJpZ2h0IGltZyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN1Z2dlc3Rpb25zLWxpc3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiAxMDAwO1xufVxuLnN1Z2dlc3Rpb24taXRlbSB7XG4gIHBhZGRpbmc6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN1Z2dlc3Rpb24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG4ubW9iaWxlLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjBweDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgei1pbmRleDogMTtcbn1cbi5tb2JpbGUtbWVudSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG4ubW9iaWxlLW1lbnUgdWwgbGkge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG4ubW9iaWxlLW1lbnUgdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuLm1vYmlsZS1tZW51LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnJvd0NvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgfVxuICAuaGVybyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbiAgLmNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucm93Q29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICB9XG4gIC5oZXJvIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmlucHV0LWl0ZW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgaW5wdXQge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmhlcm8ge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAuZm9ybS1jYXJkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIH1cbiAgLmZvcm0tY2FyZCBpbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm5hdi1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGlucHV0IHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbiAgLm1vYmlsZS1tZW51LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5tb2JpbGUtbWVudS1idXR0b24gPiBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnJvd0NvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmlucHV0LWl0ZW0gLml0ZW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgaW5wdXQge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxuICAucm93Q29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "IZQF":
/*!*************************************************************************!*\
  !*** ./src/app/components/lipanaulislider/lipanaulislider.component.ts ***!
  \*************************************************************************/
/*! exports provided: LipanaulisliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LipanaulisliderComponent", function() { return LipanaulisliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");


class LipanaulisliderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LipanaulisliderComponent.ɵfac = function LipanaulisliderComponent_Factory(t) { return new (t || LipanaulisliderComponent)(); };
LipanaulisliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LipanaulisliderComponent, selectors: [["app-lipanaulislider"]], decls: 8, vars: 1, consts: [[2, "padding", "0"], [2, "width", "100%", "height", "auto", 3, "showIndicators"], ["src", "../../../assets/Lipanauli/Nairobi Bus Booking.png", "alt", "first slide", 2, "display", "block", "width", "100%", "height", "auto"], ["src", "../../../assets/Lipanauli/Book bus seat Nairobi.png", "alt", "second slide", 2, "display", "block", "width", "100%", "height", "auto"], ["src", "../../../assets/Lipanauli/Nairobi bus schedules.png", "alt", "third slide", 2, "display", "block", "width", "100%", "height", "auto"]], template: function LipanaulisliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showIndicators", false);
    } }, directives: [ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["SlideComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXBhbmF1bGlzbGlkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "KO4p":
/*!*****************************************************************!*\
  !*** ./src/app/components/paynowmodal/paynowmodal.component.ts ***!
  \*****************************************************************/
/*! exports provided: PaynowmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaynowmodalComponent", function() { return PaynowmodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api.service */ "yTNM");


class PaynowmodalComponent {
    constructor(apiService) {
        this.apiService = apiService;
    }
    ngOnInit() { }
    registrationHandler() {
        const tripInfo = {
            booking_date: '2024-05-04',
            vehicle_reg: 'kdf 002z',
        };
        this.apiService.getAllTrip(tripInfo).subscribe((res) => {
            console.log(res);
            $('#payNowModal').modal('hide');
            this.apiService.triggerModal('#buslistModal');
            this.apiService.setDisplayState(true);
        });
    }
    closePayNowModal() {
        $('#payNowModal').modal('hide');
    }
}
PaynowmodalComponent.ɵfac = function PaynowmodalComponent_Factory(t) { return new (t || PaynowmodalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
PaynowmodalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaynowmodalComponent, selectors: [["app-paynowmodal"]], decls: 13, vars: 0, consts: [[1, "col-12", 2, "padding", "0"], ["id", "payNowModal", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content", "custom-modal"], [1, "modal-header"], ["id", "staticBackdropLabel5", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-3", "d-flex", "align-items-center"], ["type", "text", "id", "bus_registration", "placeholder", "Bus registration", 1, "form-control", "me-2"], ["type", "button", 1, "bookBtn", 3, "click"]], template: function PaynowmodalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Enter Bus registration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaynowmodalComponent_Template_button_click_7_listener() { return ctx.closePayNowModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaynowmodalComponent_Template_button_click_11_listener() { return ctx.registrationHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Enter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".custom-modal[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n}\n\n.bookBtn[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 40px;\n  padding: 5px;\n  background-color: #509141;\n  color: #fff;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW5vd21vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTs7QUFFVjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InBheW5vd21vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBtb2RhbCAqL1xuXG4uY3VzdG9tLW1vZGFsIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib29rQnRuIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwOTE0MTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 14, vars: 0, consts: [[1, "col-12", "footer"], [1, "left"], ["src", "../../../assets/Lipanauli/Convenient bus booking Nairobi.png", "alt", ""], [1, "right"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Passenger rights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legal notice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "change cookie settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A9 2024. Lipanauli");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #293a43;\n  height: 100px;\n  width: 100%;\n  padding: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.footer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.footer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 100px;\n}\n.footer[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  flex: 2;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  flex-wrap: wrap;\n}\n.footer[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n@media (max-width: 768px) {\n  .footer[_ngcontent-%COMP%] {\n    padding: 20px;\n    flex-direction: column;\n    height: auto;\n    align-items: flex-start;\n  }\n\n  .footer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n\n  .footer[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n\n  .footer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 30px;\n    width: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkzYTQzO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZvb3RlciAubGVmdCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9vdGVyIC5sZWZ0IGltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLmZvb3RlciAucmlnaHQge1xuICBmbGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mb290ZXIgLnJpZ2h0IHAge1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgLmZvb3RlciAubGVmdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gIC5mb290ZXIgLnJpZ2h0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4gIC5mb290ZXIgLmxlZnQgaW1nIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'lipanauliProject';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Wdwg":
/*!*************************************************!*\
  !*** ./src/app/components/cta/cta.component.ts ***!
  \*************************************************/
/*! exports provided: CtaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtaComponent", function() { return CtaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CtaComponent {
    constructor() { }
    ngOnInit() {
    }
}
CtaComponent.ɵfac = function CtaComponent_Factory(t) { return new (t || CtaComponent)(); };
CtaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtaComponent, selectors: [["app-cta"]], decls: 34, vars: 0, consts: [[1, "col-12", "cta", "d-flex", "align-items-center", 2, "padding", "0"], [1, "col-2", "right", 2, "flex", "1"], ["src", "../../../assets/Lipanauli/Asset 84-8.png", "alt", ""], [1, "col-8", "mid", "d-flex", "flex-wrap", 2, "flex", "2"], [1, "col-lg-3", "col-md-4", "item", "text-center"], ["href", "#"], ["src", "../../../assets/Lipanauli/Asset 93-8.png", "alt", ""]], template: function CtaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Traveling during COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Find all current information about our network.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Click here > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Comfort on board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Our buses are equipped with large and comfortable seats, Wi-Fi, and power outlets. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Our onboard service > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Largest bus network in Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Choose from over 2,500 travel destinations in 47 counties and discover Kenya with Lipanauli. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Our route network >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Travel environmentally friendly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Our efficient coaches are proven to have an excellent carbon footprint per driven passenger-kilometer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Bus travel and environment > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".cta[_ngcontent-%COMP%] {\n  padding: 40px 10px;\n  height: 60vh;\n  display: flex; \n}\n\n.cta[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 60vh;\n  width: 100%;\n}\n\n.mid[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start; \n  flex: 2;\n}\n\n.mid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #f6b228;\n}\n\n.cta[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center; \n  align-items: flex-end; \n  flex: 1;\n  position: relative; \n}\n\n.cta[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .cta[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center; \n  align-items: flex-end; \n  flex: 1;\n  position: relative; \n}\n\n.cta[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 80px;\n  margin-bottom: -120px; \n}\n\n.appBtn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center; \n  justify-content: center; \n  background-color: #000; \n  padding: 5px; \n  border-radius: 5px; \n  width: 100px; \n  \n  height: 60px; \n}\n\n.appBtnTxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #fff;\n  margin: 0; \n  text-align: center; \n}\n\n.appBtnTxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px; \n}\n\n.appBtn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30px; \n  width: 30px; \n  margin-right: 5px; \n}\n\n\n\n@media (max-width: 768px) {\n  .cta[_ngcontent-%COMP%] {\n    flex-direction: column; \n    height: auto; \n  }\n\n  .cta[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto; \n    width: 100%; \n  }\n\n  .mid[_ngcontent-%COMP%] {\n    flex-direction: column; \n    align-items: center; \n  }\n\n  .mid[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    width: 100%; \n    margin-bottom: 20px; \n  }\n\n  .mid[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mid[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 16px; \n  }\n\n  .mid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px; \n  }\n\n  .mid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 12px; \n  }\n\n  .cta[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .cta[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    flex: 1; \n    margin: 10px 0; \n    align-items: center; \n  }\n\n  .cta[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80px; \n    height: 60px; \n    margin-bottom: 0; \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhLEVBQUUsMkNBQTJDO0FBQzVEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCLEVBQUUsbURBQW1EO0VBQzVFLE9BQU87QUFDVDs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUIsRUFBRSxvQ0FBb0M7RUFDN0QscUJBQXFCLEVBQUUsOEJBQThCO0VBQ3JELE9BQU87RUFDUCxrQkFBa0IsRUFBRSxrQ0FBa0M7QUFDeEQ7O0FBQ0E7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QixFQUFFLG9DQUFvQztFQUM3RCxxQkFBcUIsRUFBRSw4QkFBOEI7RUFDckQsT0FBTztFQUNQLGtCQUFrQixFQUFFLGtDQUFrQztBQUN4RDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCLEVBQUUsZ0NBQWdDO0FBQ3pEOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFFLDZCQUE2QjtFQUNsRCx1QkFBdUIsRUFBRSwrQkFBK0I7RUFDeEQsc0JBQXNCLEVBQUUsb0NBQW9DO0VBQzVELFlBQVksRUFBRSx1Q0FBdUM7RUFDckQsa0JBQWtCLEVBQUUsb0JBQW9CO0VBQ3hDLFlBQVksRUFBRSxxQ0FBcUM7RUFDbkQsbUNBQW1DO0VBQ25DLFlBQVksRUFBRSx3Q0FBd0M7QUFDeEQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVMsRUFBRSwwQkFBMEI7RUFDckMsa0JBQWtCLEVBQUUsNkJBQTZCO0FBQ25EOztBQUVBO0VBQ0UsZUFBZSxFQUFFLDRDQUE0QztBQUMvRDs7QUFFQTtFQUNFLFlBQVksRUFBRSw2QkFBNkI7RUFDM0MsV0FBVyxFQUFFLDZCQUE2QjtFQUMxQyxpQkFBaUIsRUFBRSxpQ0FBaUM7QUFDdEQ7O0FBR0Esa0JBQWtCOztBQUNsQjtFQUNFO0lBQ0Usc0JBQXNCLEVBQUUsOEJBQThCO0lBQ3RELFlBQVksRUFBRSxzQ0FBc0M7RUFDdEQ7O0VBRUE7SUFDRSxZQUFZLEVBQUUsb0NBQW9DO0lBQ2xELFdBQVcsRUFBRSx3QkFBd0I7RUFDdkM7O0VBRUE7SUFDRSxzQkFBc0IsRUFBRSxxQ0FBcUM7SUFDN0QsbUJBQW1CLEVBQUUsaUJBQWlCO0VBQ3hDOztFQUVBO0lBQ0UsV0FBVyxFQUFFLHNDQUFzQztJQUNuRCxtQkFBbUIsRUFBRSw0QkFBNEI7RUFDbkQ7O0VBRUE7O0lBRUUsZUFBZSxFQUFFLGdEQUFnRDtFQUNuRTs7RUFFQTtJQUNFLGVBQWUsRUFBRSwrQkFBK0I7RUFDbEQ7O0VBRUE7SUFDRSxlQUFlLEVBQUUsMEJBQTBCO0VBQzdDOztFQUVBOztJQUVFLE9BQU8sRUFBRSxzQ0FBc0M7SUFDL0MsY0FBYyxFQUFFLDZDQUE2QztJQUM3RCxtQkFBbUIsRUFBRSxrQkFBa0I7RUFDekM7O0VBRUE7SUFDRSxXQUFXLEVBQUUscUNBQXFDO0lBQ2xELFlBQVksRUFBRSxzQ0FBc0M7SUFDcEQsZ0JBQWdCLEVBQUUsd0JBQXdCO0VBQzVDO0FBQ0YiLCJmaWxlIjoiY3RhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3RhIHtcbiAgcGFkZGluZzogNDBweCAxMHB4O1xuICBoZWlnaHQ6IDYwdmg7XG4gIGRpc3BsYXk6IGZsZXg7IC8qIEVuc3VyZSB0aGUgbWFpbiBjb250YWluZXIgaXMgYSBmbGV4Ym94ICovXG59XG5cbi5jdGEgaW1nIHtcbiAgaGVpZ2h0OiA2MHZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1pZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgLyogQ2hhbmdlZCBmcm9tICd0b3AnIHRvICdmbGV4LXN0YXJ0JyBmb3IgY2xhcml0eSAqL1xuICBmbGV4OiAyO1xufVxuXG4ubWlkIHAsXG4ubWlkIGEge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmEge1xuICBjb2xvcjogI2Y2YjIyODtcbn1cblxuLmN0YSAubGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGNvbnRlbnQgaG9yaXpvbnRhbGx5ICovXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgLyogQWxpZ24gaXRlbXMgdG8gdGhlIGJvdHRvbSAqL1xuICBmbGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEVzdGFibGlzaCBwb3NpdGlvbmluZyBjb250ZXh0ICovXG59XG4uY3RhIC5sZWZ0LFxuLmN0YSAucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBjb250ZW50IGhvcml6b250YWxseSAqL1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IC8qIEFsaWduIGl0ZW1zIHRvIHRoZSBib3R0b20gKi9cbiAgZmxleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBFc3RhYmxpc2ggcG9zaXRpb25pbmcgY29udGV4dCAqL1xufVxuXG4uY3RhIC5yaWdodCBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTEyMHB4OyAvKiBSZW1vdmUgYm90dG9tIG1hcmdpbiBpZiBhbnkgKi9cbn1cbi5hcHBCdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBWZXJ0aWNhbGx5IGNlbnRlcnMgaXRlbXMgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIEhvcml6b250YWxseSBjZW50ZXJzIGl0ZW1zICovXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IC8qIEJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBidXR0b24gKi9cbiAgcGFkZGluZzogNXB4OyAvKiBFdmVuIHBhZGRpbmcgYXJvdW5kIHRoZSBlbnRpcmUgZGl2ICovXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgLyogUm91bmRlZCBjb3JuZXJzICovXG4gIHdpZHRoOiAxMDBweDsgLyogU2V0IGEgZml4ZWQgd2lkdGggZm9yIHRoZSBidXR0b24gKi9cbiAgLyogWW91IGNhbiBhZGQgYSBoZWlnaHQgaWYgbmVlZGVkICovXG4gIGhlaWdodDogNjBweDsgLyogRXhhbXBsZSBoZWlnaHQsIGFkanVzdCBhcyBuZWNlc3NhcnkgKi9cbn1cblxuLmFwcEJ0blR4dCBwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwOyAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXIgdGV4dCBob3Jpem9udGFsbHkgKi9cbn1cblxuLmFwcEJ0blR4dCBwIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7IC8qIExhcmdlciBmb250IHNpemUgZm9yIFwiR29vZ2xlIFBsYXlcIiB0ZXh0ICovXG59XG5cbi5hcHBCdG4gaW1nIHtcbiAgaGVpZ2h0OiAzMHB4OyAvKiBBZGp1c3Qgc2l6ZSBvZiB0aGUgaW1hZ2UgKi9cbiAgd2lkdGg6IDMwcHg7IC8qIEFkanVzdCBzaXplIG9mIHRoZSBpbWFnZSAqL1xuICBtYXJnaW4tcmlnaHQ6IDVweDsgLyogU3BhY2UgYmV0d2VlbiBpbWFnZSBhbmQgdGV4dCAqL1xufVxuXG5cbi8qIE1vYmlsZSBzdHlsZXMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY3RhIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBlbGVtZW50cyB2ZXJ0aWNhbGx5ICovXG4gICAgaGVpZ2h0OiBhdXRvOyAvKiBBbGxvdyBoZWlnaHQgdG8gYWRqdXN0IHRvIGNvbnRlbnQgKi9cbiAgfVxuXG4gIC5jdGEgaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87IC8qIExldCBpbWFnZXMgc2NhbGUgZG93biBuYXR1cmFsbHkgKi9cbiAgICB3aWR0aDogMTAwJTsgLyogTWFpbnRhaW4gZnVsbCB3aWR0aCAqL1xuICB9XG5cbiAgLm1pZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU3RhY2sgaXRlbXMgdmVydGljYWxseSBvbiBtb2JpbGUgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgaXRlbXMgKi9cbiAgfVxuXG4gIC5taWQgLml0ZW0ge1xuICAgIHdpZHRoOiAxMDAlOyAvKiBFbnN1cmUgZWFjaCBpdGVtIHRha2VzIGZ1bGwgd2lkdGggKi9cbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvKiBBZGQgc3BhY2UgYmV0d2VlbiBpdGVtcyAqL1xuICB9XG5cbiAgLm1pZCBoNCxcbiAgLm1pZCBoNSB7XG4gICAgZm9udC1zaXplOiAxNnB4OyAvKiBBZGp1c3QgaGVhZGluZyBzaXplcyBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5ICovXG4gIH1cblxuICAubWlkIHAge1xuICAgIGZvbnQtc2l6ZTogMTJweDsgLyogUmVkdWNlIHBhcmFncmFwaCBmb250IHNpemUgKi9cbiAgfVxuXG4gIC5taWQgYSB7XG4gICAgZm9udC1zaXplOiAxMnB4OyAvKiBSZWR1Y2UgbGluayBmb250IHNpemUgKi9cbiAgfVxuXG4gIC5jdGEgLmxlZnQsXG4gIC5jdGEgLnJpZ2h0IHtcbiAgICBmbGV4OiAxOyAvKiBBbGxvdyBpbWFnZXMgdG8gb2NjdXB5IGZ1bGwgd2lkdGggKi9cbiAgICBtYXJnaW46IDEwcHggMDsgLyogQWRkIG1hcmdpbiBiZXR3ZWVuIGxlZnQgYW5kIHJpZ2h0IGltYWdlcyAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciBpbWFnZXMgKi9cbiAgfVxuXG4gIC5jdGEgLnJpZ2h0IGltZyB7XG4gICAgd2lkdGg6IDgwcHg7IC8qIEFkanVzdCB3aWR0aCBmb3Igc21hbGxlciBzY3JlZW5zICovXG4gICAgaGVpZ2h0OiA2MHB4OyAvKiBBZGp1c3QgaGVpZ2h0IGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAwOyAvKiBSZXNldCBib3R0b20gbWFyZ2luICovXG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_cta_cta_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cta/cta.component */ "Wdwg");
/* harmony import */ var _components_lipanauliapp_lipanauliapp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/lipanauliapp/lipanauliapp.component */ "mJgd");
/* harmony import */ var _components_lipanaulislider_lipanaulislider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/lipanaulislider/lipanaulislider.component */ "IZQF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_paynowmodal_paynowmodal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/paynowmodal/paynowmodal.component */ "KO4p");
/* harmony import */ var _components_buslistmodal_buslistmodal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/buslistmodal/buslistmodal.component */ "8bGV");
/* harmony import */ var _components_customerdetailsmodal_customerdetailsmodal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/customerdetailsmodal/customerdetailsmodal.component */ "vwzU");
/* harmony import */ var _components_pay_for_ticketmodal_pay_for_ticketmodal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pay-for-ticketmodal/pay-for-ticketmodal.component */ "y18h");
/* harmony import */ var _loginmodal_loginmodal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./loginmodal/loginmodal.component */ "fMSf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _components_cta_cta_component__WEBPACK_IMPORTED_MODULE_7__["CtaComponent"],
        _components_lipanauliapp_lipanauliapp_component__WEBPACK_IMPORTED_MODULE_8__["LipanauliappComponent"],
        _components_lipanaulislider_lipanaulislider_component__WEBPACK_IMPORTED_MODULE_9__["LipanaulisliderComponent"],
        _components_paynowmodal_paynowmodal_component__WEBPACK_IMPORTED_MODULE_13__["PaynowmodalComponent"],
        _components_buslistmodal_buslistmodal_component__WEBPACK_IMPORTED_MODULE_14__["BuslistmodalComponent"],
        _components_customerdetailsmodal_customerdetailsmodal_component__WEBPACK_IMPORTED_MODULE_15__["CustomerdetailsmodalComponent"],
        _components_pay_for_ticketmodal_pay_for_ticketmodal_component__WEBPACK_IMPORTED_MODULE_16__["PayForTicketmodalComponent"],
        _loginmodal_loginmodal_component__WEBPACK_IMPORTED_MODULE_17__["LoginmodalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "fMSf":
/*!****************************************************!*\
  !*** ./src/app/loginmodal/loginmodal.component.ts ***!
  \****************************************************/
/*! exports provided: LoginmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginmodalComponent", function() { return LoginmodalComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "yTNM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function LoginmodalComponent__svg_svg_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginmodalComponent__svg_svg_8_Template__svg_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.toggleInitial(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginmodalComponent_select_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "254");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginmodalComponent_input_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 35);
} }
function LoginmodalComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginmodalComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginmodalComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginmodalComponent_div_24_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.toggleSignin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Sign In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginmodalComponent_div_24_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.toggleSignup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Sign Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginmodalComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginmodalComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginmodalComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.passengerDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Continue as a Guest ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginmodalComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.signin ? "Sign In" : ctx_r8.signup ? "Send Verification" : ctx_r8.verifyOtp ? "Verify OTP" : "Request", " ");
} }
function LoginmodalComponent_p_30_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginmodalComponent_p_30_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.toggleForgotPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Forgot Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginmodalComponent_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginmodalComponent_p_32_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginmodalComponent_p_32_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.toggleSignin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Sign In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginmodalComponent_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Resend OTP? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginmodalComponent {
    constructor(apiService, fb) {
        this.apiService = apiService;
        this.fb = fb;
        this.login = false;
        this.initial = true;
        this.signin = false;
        this.signup = false;
        this.forgot = false;
        this.verifyOtp = false;
        this.hide = false;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            country_code: ['254'],
            device_number: '9g6mwyj43tsp095xu76bwc',
            sourcetype: 'web',
            password: [''],
            otp: [''],
        });
        this.apiService.display$.subscribe((state) => {
            this.displayState = state;
        });
    }
    toggleInitial() {
        this.initial = true;
        this.signin = false;
        this.signup = false;
        this.hide = false;
        this.forgot = false;
        this.verifyOtp = false;
    }
    toggleSignin() {
        this.signin = true;
        this.signup = false;
        this.hide = true;
        this.initial = false;
        this.forgot = false;
        this.verifyOtp = false;
    }
    toggleSignup() {
        this.signup = true;
        this.signin = false;
        this.hide = true;
        this.initial = false;
        this.forgot = false;
        this.verifyOtp = false;
    }
    toggleForgotPassword() {
        this.signup = false;
        this.signin = false;
        this.hide = true;
        this.initial = false;
        this.forgot = true;
        this.verifyOtp = false;
    }
    toggleVerifyOtp() {
        this.signup = false;
        this.signin = false;
        this.hide = true;
        this.initial = false;
        this.forgot = false;
        this.verifyOtp = true;
    }
    passengerDetails() {
        $('#staticBackdrop1').modal('hide');
        $('#staticBackdrop4').modal('show');
    }
    handleAction() {
        if (this.signin) {
            // Handle sign-in logic
            console.log('Sign In', this.loginForm.value);
            this.apiService.signup(this.loginForm.value);
        }
        if (this.signup) {
            // Handle sign-up logic
            console.log('Send Verification', this.loginForm.value);
            this.apiService.login(this.loginForm.value);
        }
        if (this.forgot &&
            this.loginForm.value.country_code &&
            this.loginForm.value.phone) {
            console.log('Forgot password', this.loginForm.value.country_code, this.loginForm.value.phone);
            const forgotPasswordData = {
                phone: this.loginForm.value.phone,
                country_code: this.loginForm.value.country_code,
                device_number: '9g6mwyj43tsp095xu76bwc',
                sourcetype: 'web',
            };
            this.apiService.forgotPassword(forgotPasswordData).subscribe((res) => {
                console.log(res);
            });
            this.toggleVerifyOtp();
        }
        if (this.verifyOtp && this.loginForm.value.otp) {
            console.log('Verify otp', this.loginForm.value.otp);
            this.toggleVerifyOtp();
            const verifyOtpData = {
                phone: '123456789',
                newPassword: 'xxxxxxx',
                confirmPassword: ' xxxxxxx',
                country_code: '254',
                sourcetype: 'web',
            };
            this.apiService.changeForgotPassword(verifyOtpData).subscribe((res) => {
                console.log(res);
            });
        }
    }
    closeLoginModal() {
        $('#loginModal').modal('hide');
    }
}
LoginmodalComponent.ɵfac = function LoginmodalComponent_Factory(t) { return new (t || LoginmodalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
LoginmodalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginmodalComponent, selectors: [["app-loginmodal"]], decls: 34, vars: 14, consts: [["id", "loginModal", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modalDialog"], [1, "modal-content"], [1, ""], ["src", "../../assets/Lipanauli/Nairobi bus reservations.jpeg", "alt", "", 2, "width", "200px", "height", "100%", "object-fit", "contain"], [1, "modal-header", 2, "display", "flex", "justify-content", "space-between"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "class", "icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left", 3, "click", 4, "ngIf"], ["id", "staticBackdropLabel", 1, "modal-title"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "data-bs-dismiss", "modal", 1, "icon", "icon-tabler", "icons-tabler-outline", "icon-tabler-x", 3, "click"], ["stroke", "none", "d", "M0 0h24v24H0z", "fill", "none"], ["d", "M18 6l-12 12"], ["d", "M6 6l12 12"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "mb-3", "row"], [1, "col-auto"], ["formControlName", "country_code", "class", "form-select", 4, "ngIf"], [1, "col"], ["formControlName", "phone", "type", "text", "class", "form-control", "id", "Phone", "placeholder", "Phone", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [4, "ngIf"], ["style", "text-align: center", 4, "ngIf"], ["type", "button", "class", "loginBtn", 3, "click", 4, "ngIf"], ["type", "submit", "class", "loginBtn", 4, "ngIf"], [1, "pt-4"], [1, "btns-actions", 2, "display", "flex", "justify-content", "space-between"], ["style", "font-size: 14px", 3, "click", 4, "ngIf"], ["style", "font-size: 14px", 4, "ngIf"], ["style", "font-size: 14px; text-align: center", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "icon", "icon-tabler", "icons-tabler-outline", "icon-tabler-arrow-narrow-left", 3, "click"], ["d", "M5 12l14 0"], ["d", "M5 12l4 4"], ["d", "M5 12l4 -4"], ["formControlName", "country_code", 1, "form-select"], ["value", "254", "selected", ""], ["formControlName", "phone", "type", "text", "id", "Phone", "placeholder", "Phone", 1, "form-control"], [1, "mb-3"], ["formControlName", "password", "type", "password", "id", "Password", "placeholder", "Password", 1, "form-control"], ["formControlName", "otp", "type", "text", "id", "Otp", "placeholder", "Otp", 1, "form-control"], ["type", "button", 1, "loginBtn", 3, "click"], [2, "text-align", "center"], ["type", "submit", 1, "loginBtn"], [2, "font-size", "14px", 3, "click"], [2, "font-size", "14px"], [2, "font-size", "14px", "text-align", "center"]], template: function LoginmodalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LoginmodalComponent__svg_svg_8_Template, 5, 0, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Join Lipa Nauli ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginmodalComponent_Template__svg_svg_click_11_listener() { return ctx.closeLoginModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginmodalComponent_Template_form_ngSubmit_16_listener() { return ctx.handleAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LoginmodalComponent_select_19_Template, 3, 0, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LoginmodalComponent_input_21_Template, 1, 0, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LoginmodalComponent_div_22_Template, 2, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LoginmodalComponent_div_23_Template, 2, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LoginmodalComponent_div_24_Template, 5, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, LoginmodalComponent_p_25_Template, 2, 0, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, LoginmodalComponent_button_26_Template, 2, 0, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, LoginmodalComponent_button_27_Template, 2, 1, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, LoginmodalComponent_p_30_Template, 2, 0, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, LoginmodalComponent_p_31_Template, 2, 0, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, LoginmodalComponent_p_32_Template, 2, 0, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, LoginmodalComponent_p_33_Template, 2, 0, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.initial);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signin || ctx.signup || ctx.forgot);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signin || ctx.signup || ctx.forgot);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.verifyOtp && !ctx.signin && !ctx.signup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.signin && !ctx.signup && !ctx.forgot && !ctx.verifyOtp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.signin && !ctx.signup && ctx.displayState);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.signin && !ctx.signup && ctx.displayState);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signin || ctx.signup || ctx.forgot || ctx.verifyOtp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.forgot);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.verifyOtp);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"]], styles: [".modal-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #000;\n  height: 30px;\n  width: 30px;\n}\n.modalDialog[_ngcontent-%COMP%]{\n  width: 550px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.loginBtn[_ngcontent-%COMP%] {\n  background-color: #509141;\n  color: #fff;\n  width: 260px;\n  padding: 8px 12px;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n.modal-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.mb3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding-bottom: 10px;\n}\n.form-select[_ngcontent-%COMP%] {\n  width: auto;\n}\n@media (max-width: 475px) {\n  .modal-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none;\n  }\n .modalDialog[_ngcontent-%COMP%]{\n  width: auto;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2lubW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtDQUNEO0VBQ0MsV0FBVztBQUNiO0FBQ0EiLCJmaWxlIjoibG9naW5tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWhlYWRlciBzdmcge1xuICBjb2xvcjogIzAwMDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cbi5tb2RhbERpYWxvZ3tcbiAgd2lkdGg6IDU1MHB4O1xufVxuLm1vZGFsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmxvZ2luQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwOTE0MTtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAyNjBweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1vZGFsLWNvbnRlbnQgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG4ubWIzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmZvcm0tc2VsZWN0IHtcbiAgd2lkdGg6IGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDc1cHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQgPiBkaXYgaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gLm1vZGFsRGlhbG9ne1xuICB3aWR0aDogYXV0bztcbn1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "mJgd":
/*!*******************************************************************!*\
  !*** ./src/app/components/lipanauliapp/lipanauliapp.component.ts ***!
  \*******************************************************************/
/*! exports provided: LipanauliappComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LipanauliappComponent", function() { return LipanauliappComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LipanauliappComponent {
    constructor() { }
    ngOnInit() {
    }
}
LipanauliappComponent.ɵfac = function LipanauliappComponent_Factory(t) { return new (t || LipanauliappComponent)(); };
LipanauliappComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LipanauliappComponent, selectors: [["app-lipanauliapp"]], decls: 2, vars: 0, consts: [[1, "lipanauliapp", 2, "padding", "0"], ["src", "../../../assets/Lipanauli/Nairobi fare prices.png", "alt", ""]], template: function LipanauliappComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".lipanauliapp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n}\n.lipanauliapp-btn[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpcGFuYXVsaWFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJsaXBhbmF1bGlhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXBhbmF1bGlhcHAgaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cbi5saXBhbmF1bGlhcHAtYnRuIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vwzU":
/*!***********************************************************************************!*\
  !*** ./src/app/components/customerdetailsmodal/customerdetailsmodal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CustomerdetailsmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdetailsmodalComponent", function() { return CustomerdetailsmodalComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api.service */ "yTNM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CustomerdetailsmodalComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Invalid email format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CustomerdetailsmodalComponent {
    constructor(router, apiService, fb) {
        this.router = router;
        this.apiService = apiService;
        this.fb = fb;
        this.tripInfo = {
            booking_date: '2024-08-05',
            route_id: '5',
            token: 'E8887142-7E2A-4327-B324-27B4402FAE2A',
            pickup_id: '4',
            return_id: '1',
            departure_time: '05:00 AM',
            paymentMethod: 'mpesa',
            bus_id: '69',
            currencyId: '1',
            ticket_cnt: '1',
            sub_total: '1.00',
            tax: '0',
            total: '1.00',
            is_luggage: false,
            c_address: '',
            c_city: '',
            c_state: '',
            c_zip: '',
            c_country: '',
            is_flat_offer: false,
            passenger: [
                {
                    seat_id: '1',
                    seat_name: '',
                    seat_type: 'normal',
                    ticketPrice: '1.00',
                    flatTicketPrice: '1.00',
                    currency: 'KES',
                    flat_sale: 0,
                    name: '',
                    last_name: '',
                    gender: '',
                    age: '',
                    mobileId: '254',
                    mobile: '726097666',
                    nationality: 'Kenyan',
                    id_no: '0000',
                },
            ],
            isPromotional: false,
            promotionalTripMsg: '',
            seatSelectionLimit: '0',
            c_email: '',
            delayedFlag: false,
            delayedDate: '',
            bookedThrough: 'web',
            sourcetype: 'web',
        };
    }
    ngOnInit() {
        this.apiService.modalTrigger$.subscribe((modalId) => {
            $(modalId).modal('show');
        });
        this.initForm();
        this.apiService.bookingData$.subscribe((res) => {
            if (res) {
                this.bookingInfo = res.data;
                console.log('Updated booking data:', this.bookingInfo);
            }
        });
    }
    initForm() {
        this.passengerForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            gender: ['Male'],
            mobileId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            nationality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            idNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    }
    tripReview() {
        var _a, _b, _c, _d, _e, _f;
        // if (this.passengerForm.valid) {
        $('#customerDetailsModal').modal('hide');
        this.apiService.triggerModal('#payForTicketModal');
        // Populate tripInfo with passenger form data
        this.tripInfo.c_email = (_a = this.passengerForm.get('email')) === null || _a === void 0 ? void 0 : _a.value;
        this.tripInfo.passenger[0].name = (_b = this.passengerForm.get('firstName')) === null || _b === void 0 ? void 0 : _b.value;
        this.tripInfo.passenger[0].last_name = (_c = this.passengerForm.get('lastName')) === null || _c === void 0 ? void 0 : _c.value;
        this.tripInfo.passenger[0].gender = (_d = this.passengerForm.get('gender')) === null || _d === void 0 ? void 0 : _d.value;
        // this.tripInfo.passenger[0].mobile = this.passengerForm.get('mobile')?.value;
        this.tripInfo.passenger[0].nationality = (_e = this.passengerForm.get('nationality')) === null || _e === void 0 ? void 0 : _e.value;
        this.tripInfo.passenger[0].id_no = (_f = this.passengerForm.get('idNo')) === null || _f === void 0 ? void 0 : _f.value;
        const tripInfoString = JSON.stringify(this.tripInfo);
        localStorage.setItem('user', tripInfoString);
        this.apiService.booking(this.tripInfo).subscribe((res) => {
            console.log(res);
            this.router.navigate(['booking']);
        });
        // }
    }
    closeCustomerdetailsModal() {
        $('#customerDetailsModal').modal('hide');
        // $('#payForTicketModal').modal('show');
        this.apiService.triggerModal('#payForTicketModal');
    }
}
CustomerdetailsmodalComponent.ɵfac = function CustomerdetailsmodalComponent_Factory(t) { return new (t || CustomerdetailsmodalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CustomerdetailsmodalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomerdetailsmodalComponent, selectors: [["app-customerdetailsmodal"]], decls: 50, vars: 2, consts: [["id", "customerDetailsModal", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel4", "aria-hidden", "true", 1, "modal", "modal-fullscreen"], [1, "modal-dialog"], [1, "modal-content", "slide-in-modal"], [1, "modal-header"], ["id", "staticBackdropLabel4", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [3, "formGroup"], [1, "modal-body", 2, "padding", "20px"], [1, "mb-3"], [1, "contact-detail", 2, "padding-bottom", "10px"], ["for", "email", 1, "form-label"], ["type", "text", "formControlName", "email", "placeholder", "Email", 1, "form-control", 2, "width", "100%"], ["class", "text-danger", 4, "ngIf"], [2, "display", "flex", "justify-content", "space-between"], ["for", ""], [1, "input-group", "inlineInput", "mb-3", 2, "padding-bottom", "10px", "display", "flex", "gap", "10px"], ["type", "text", "formControlName", "firstName", "placeholder", "First Name", 1, "form-control", 2, "width", "40%"], ["type", "text", "formControlName", "lastName", "placeholder", "Last Name", 1, "form-control", 2, "width", "40%"], [1, "form-check-inline", "mb-3"], ["type", "radio", "formControlName", "gender", "value", "Male", "id", "flexRadioDefault1", "checked", "", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], [1, "form-check-inline"], ["type", "radio", "formControlName", "gender", "value", "Female", "id", "flexRadioDefault2", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], [1, "input-group", "inlineInput", 2, "padding-bottom", "10px", "display", "flex", "gap", "10px"], ["aria-label", "Default select example", 1, "form-select"], ["selected", ""], ["value", "+254"], ["type", "text", "formControlName", "mobile", "placeholder", "Mobile Number", 1, "form-control", 2, "width", "33%"], ["value", "Kenyan"], ["value", "Tanzania"], ["type", "text", "formControlName", "idNo", "placeholder", "Identity Number", 1, "form-control", 2, "width", "33%"], [1, "modal-footer"], ["type", "button", 1, "payBtn", 3, "click"], [1, "text-danger"]], template: function CustomerdetailsmodalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Passenger Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerdetailsmodalComponent_Template_button_click_6_listener() { return ctx.closeCustomerdetailsModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Contact Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CustomerdetailsmodalComponent_div_14_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Primary Passenger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "+254");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Nationality");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Kenyan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Tanzania");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "KES 1,700");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerdetailsmodalComponent_Template_button_click_48_listener() { return ctx.tripReview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Proceed To Pay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.passengerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.passengerForm.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.passengerForm.get("email")) == null ? null : tmp_1_0.touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: [".custom-modal[_ngcontent-%COMP%] {\n  max-width: 800px;\n  height: 100vh;\n}\n\n.custom-modal[_ngcontent-%COMP%]   .bus-details[_ngcontent-%COMP%]   .bus-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.custom-modal[_ngcontent-%COMP%]   .bus-details[_ngcontent-%COMP%]   .bus-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.custom-modal[_ngcontent-%COMP%]   .bus-details[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 120px;\n}\n\n.grand-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #e8e8e8;\n  padding: 8px;\n}\n\n.grand-total[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #000;\n  padding: 0;\n  margin: 0;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nbody.modal-open[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin: 0;\n  height: 100vh;\n  width: 550px;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 10px;\n}\n\n.modal-header[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n}\n\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  flex-grow: 1;\n  text-align: left;\n}\n\n.modal-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n}\n\n.modal-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #509141;\n}\n\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n\n.form-check-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 10px;\n}\n\n.payBtn[_ngcontent-%COMP%] {\n  background-color: #509141;\n  color: #fff;\n  width: 150px;\n  padding: 8px 12px;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n\n@media (max-width: 480px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    width: 100%; \n    margin: 0;\n    height: 100vh; \n    padding: 0;\n  }\n  .input-group[_ngcontent-%COMP%] {\n    flex-direction: column; \n    gap: 0.5rem;\n  }\n  .inlineInput[_ngcontent-%COMP%]{\n    flex-direction: row;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyZGV0YWlsc21vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFNBQVM7SUFDVCxhQUFhO0lBQ2IsVUFBVTtFQUNaO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztFQUNiO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJjdXN0b21lcmRldGFpbHNtb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1tb2RhbCB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5jdXN0b20tbW9kYWwgLmJ1cy1kZXRhaWxzIC5idXMtY29udGVudCBoMyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmN1c3RvbS1tb2RhbCAuYnVzLWRldGFpbHMgLmJ1cy1jb250ZW50IHAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jdXN0b20tbW9kYWwgLmJ1cy1kZXRhaWxzIC5pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4uZ3JhbmQtdG90YWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmdyYW5kLXRvdGFsIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYm9keS5tb2RhbC1vcGVuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1vZGFsLWRpYWxvZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogNTUwcHg7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubW9kYWwtaGVhZGVyLFxuLm1vZGFsLWZvb3Rlcixcbi5tb2RhbC1ib2R5IHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4ubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZmxleC1ncm93OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubW9kYWwtaGVhZGVyIHN2ZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLm1vZGFsLWhlYWRlciBzdmcge1xuICBjb2xvcjogIzUwOTE0MTtcbn1cblxuLm1iLTMge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5mb3JtLWNoZWNrLWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucGF5QnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwOTE0MTtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxNTBweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5tb2RhbC1kaWFsb2cge1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDsgXG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAuaW5wdXQtZ3JvdXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIGdhcDogMC41cmVtO1xuICB9XG4gIC5pbmxpbmVJbnB1dHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "y18h":
/*!*********************************************************************************!*\
  !*** ./src/app/components/pay-for-ticketmodal/pay-for-ticketmodal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PayForTicketmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayForTicketmodalComponent", function() { return PayForTicketmodalComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "yTNM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PayForTicketmodalComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.bookingInfo.route_name);
} }
function PayForTicketmodalComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.bookingInfo.start_date);
} }
function PayForTicketmodalComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.bookingInfo.departure_time);
} }
function PayForTicketmodalComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.bookingInfo.route_cities[0].city_name);
} }
function PayForTicketmodalComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.bookingInfo.route_cities[1].city_name);
} }
class PayForTicketmodalComponent {
    constructor(apiService, fb) {
        this.apiService = apiService;
        this.fb = fb;
        this.stkpush = false;
        this.loading = false;
        this.error = null;
        this.bookingData = {
            booking_date: '2024-08-1',
            route_id: '5',
            token: 'E8887142-7E2A-4327-B324-27B4402FAE2A',
            pickup_id: '4',
            return_id: '1',
            departure_time: '05:00 AM',
            paymentMethod: 'mpesa',
            bus_id: '69',
            currencyId: '1',
            ticket_cnt: '1',
            sub_total: '1.00',
            tax: '0',
            total: '1.00',
            is_luggage: false,
            c_address: '',
            c_city: '',
            c_state: '',
            c_zip: '',
            c_country: '',
            is_flat_offer: false,
            passenger: [
                {
                    seat_id: '1',
                    seat_name: '',
                    seat_type: 'normal',
                    ticketPrice: '1.00',
                    flatTicketPrice: '1.00',
                    currency: 'KES',
                    flat_sale: 0,
                    name: '',
                    last_name: '',
                    gender: '',
                    age: '',
                    mobileId: '254',
                    mobile: '715176167',
                    nationality: 'Kenyan',
                    id_no: '0000',
                },
            ],
            isPromotional: false,
            promotionalTripMsg: '',
            seatSelectionLimit: '0',
            c_email: '',
            delayedFlag: false,
            delayedDate: '',
            bookedThrough: 'web',
            sourcetype: 'web',
        };
        this.ticketRefInfo = {
            bookingRef: 'SWNGW939T2',
            queryoption: '10',
            queryvalue: '254726097666',
            requestType: 'ticket',
            paymentType: 'mpesa',
        };
        this.countdown$ = null;
        this.minutes = 10;
        this.seconds = 0;
        this.paymentForm = this.fb.group({
            code: ['254', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^\d{10}$/)]],
        });
    }
    ngOnInit() {
        this.apiService.modalTrigger$.subscribe((modalId) => {
            $(modalId).modal('show');
        });
        this.apiService.tripData$.subscribe((res) => {
            this.bookingInfo = res.data;
            console.log(this.bookingInfo);
        });
    }
    stkBtn() {
        this.loading = true;
        this.error = null;
        this.apiService.stkPushPay(this.ticketRefInfo).subscribe((response) => {
            this.paymentStatus = response;
            console.log(this.paymentStatus);
            this.loading = false;
        }, (error) => {
            this.error = error.message;
            this.loading = false;
        });
    }
    onSubmit() {
        if (this.paymentForm.invalid) {
            // Handle form validation errors
            return;
        }
        this.loading = true;
        this.error = null;
        const formValues = this.paymentForm.value;
        this.ticketRefInfo.queryvalue = formValues.phone;
        this.apiService.stkPushPay(this.ticketRefInfo).subscribe((response) => {
            this.paymentStatus = response;
            console.log(this.paymentStatus);
            this.loading = false;
        }, (error) => {
            this.error = error.message;
            this.loading = false;
        });
    }
    closePayNowModal() {
        $('#payForTicketModal').modal('hide');
    }
    ngOnDestroy() {
        if (this.countdown$) {
            this.countdown$.unsubscribe();
        }
    }
}
PayForTicketmodalComponent.ɵfac = function PayForTicketmodalComponent_Factory(t) { return new (t || PayForTicketmodalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
PayForTicketmodalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PayForTicketmodalComponent, selectors: [["app-pay-for-ticketmodal"]], decls: 62, vars: 6, consts: [["id", "payForTicketModal", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel4", "aria-hidden", "true", 1, "modal"], [1, "modal-dialog", "modal-xl"], [1, "modal-content", "slide-in-modal"], [1, "modal-header"], ["id", "staticBackdropLabel4", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "row", "mb-3"], [1, "col-12", "col-md-7"], [1, "card", "modalCard", 2, "padding-top", "20px"], [1, "card-body"], [1, "custom-container"], ["aria-label", "Default select example", 1, "form-select", "me-2", 2, "width", "90px"], ["selected", ""], ["value", "254"], ["type", "tel", "id", "exampleFormControlInput1", "placeholder", "Phone", 1, "form-control", "me-2", 2, "width", "200px"], ["type", "button", 1, "paymentBtn", "btn", "btn-primary", 3, "click"], [1, "tripDetails"], [1, "column"], [4, "ngIf"], [1, "col-12", "col-md-5"], [1, "card", "modalCard"], [1, "fare"], [2, "font-weight", "600"], [1, "card-footer"]], template: function PayForTicketmodalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Pay For Trip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PayForTicketmodalComponent_Template_button_click_6_listener() { return ctx.closePayNowModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "254");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PayForTicketmodalComponent_Template_button_click_18_listener() { return ctx.stkBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Make Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Route: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, PayForTicketmodalComponent_span_24_Template, 2, 1, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Booking Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, PayForTicketmodalComponent_span_27_Template, 2, 1, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Departure Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, PayForTicketmodalComponent_span_31_Template, 2, 1, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Boarding Point: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, PayForTicketmodalComponent_span_34_Template, 2, 1, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Dropping Point: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, PayForTicketmodalComponent_span_38_Template, 2, 1, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Fare Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Onward Fare");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "KES 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Total Payable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "KES 2,200");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bookingInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bookingInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bookingInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bookingInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bookingInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("KES ", ctx.bookingData.total, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["h2[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: 600;\n}\n.modalCard[_ngcontent-%COMP%] {\n  max-width: 90%;\n  margin: auto;\n  padding: 10px;\n  margin-top: 10px;\n}\n.card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.top-banner[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background-color: #89d079;\n  color: #000;\n  padding: 5px;\n  border-radius: 5px;\n}\n.fare[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n  font-weight: 500;\n}\n.paymentBtn[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 40px;\n  padding: 5px;\n  background-color: #509141;\n  color: #fff;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n}\n.bus-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 60px;\n}\n.busDetails[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 60px;\n  padding-bottom: 20px;\n}\n.tripDetails[_ngcontent-%COMP%] {\n  display: flex; \n  flex-direction: row; \n  justify-content: space-between; \n  flex-wrap: wrap; \n  gap: 20px; \n}\n.column[_ngcontent-%COMP%] {\n  flex: 1; \n  min-width: 150px; \n  padding: 10px; \n}\n.tripDetails[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  font-weight: 600;\n}\n.tripDetails[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.busDetails[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.custom-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 40px 0;\n}\n.custom-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .custom-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n@media (max-width: 480px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    height: 100vh;\n    padding: 0;\n  }\n  .form-control[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n  .custom-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .custom-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .custom-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n\n  .custom-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS1mb3ItdGlja2V0bW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxhQUFhLEVBQUUsMkJBQTJCO0VBQzFDLG1CQUFtQixFQUFFLDZCQUE2QjtFQUNsRCw4QkFBOEIsRUFBRSxzQkFBc0I7RUFDdEQsZUFBZSxFQUFFLHVDQUF1QztFQUN4RCxTQUFTLEVBQUUsOEJBQThCO0FBQzNDO0FBRUE7RUFDRSxPQUFPLEVBQUUsdUNBQXVDO0VBQ2hELGdCQUFnQixFQUFFLDBDQUEwQztFQUM1RCxhQUFhLEVBQUUsd0NBQXdDO0FBQ3pEO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFNBQVM7SUFDVCxhQUFhO0lBQ2IsVUFBVTtFQUNaO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7O0VBRUE7O0lBRUUsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InBheS1mb3ItdGlja2V0bW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1vZGFsQ2FyZCB7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY2FyZC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi50b3AtYmFubmVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODlkMDc5O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5mYXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnBheW1lbnRCdG4ge1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA5MTQxO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idXMtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG5cbi5idXNEZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnRyaXBEZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDsgLyogVXNlIGZsZXhib3ggZm9yIGxheW91dCAqL1xuICBmbGV4LWRpcmVjdGlvbjogcm93OyAvKiBEZWZhdWx0IHRvIHJvdyBkaXJlY3Rpb24gKi9cbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvKiBTcGFjZSBvdXQgY29sdW1ucyAqL1xuICBmbGV4LXdyYXA6IHdyYXA7IC8qIEFsbG93IHdyYXBwaW5nIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cbiAgZ2FwOiAyMHB4OyAvKiBBZGQgc3BhY2UgYmV0d2VlbiBjb2x1bW5zICovXG59XG5cbi5jb2x1bW4ge1xuICBmbGV4OiAxOyAvKiBBbGxvd3MgY29sdW1ucyB0byB0YWtlIGVxdWFsIHdpZHRoICovXG4gIG1pbi13aWR0aDogMTUwcHg7IC8qIE1pbmltdW0gd2lkdGggdG8gbWFpbnRhaW4gcmVhZGFiaWxpdHkgKi9cbiAgcGFkZGluZzogMTBweDsgLyogT3B0aW9uYWwgcGFkZGluZyBmb3IgYmV0dGVyIHNwYWNpbmcgKi9cbn1cblxuLnRyaXBEZXRhaWxzIHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50cmlwRGV0YWlscyBwIHNwYW4ge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYnVzRGV0YWlscyBpbWcge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5jdXN0b20tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweCAwO1xufVxuXG4uY3VzdG9tLWNvbnRhaW5lciBzZWxlY3QsXG4uY3VzdG9tLWNvbnRhaW5lciBpbnB1dCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubW9kYWwtZGlhbG9nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAuY3VzdG9tLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuXG4gIC5jdXN0b20tY29udGFpbmVyIHNlbGVjdCxcbiAgLmN1c3RvbS1jb250YWluZXIgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuY3VzdG9tLWNvbnRhaW5lciBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "yTNM":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ApiService {
    constructor(http) {
        this.http = http;
        this.sourceCities = {
            city_id: '',
            city_type: 'source',
            sourcetype: 'web',
        };
        this.destCities = {
            city_id: '1',
            city_type: 'destination',
            sourcetype: 'web',
        };
        this.sourceCitySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.destinationCitySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.tripDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.bookingDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.stkPushSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.forgotPasswordSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.changeForgotPasswordSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.sourceCity$ = this.sourceCitySubject.asObservable();
        this.destinationCity$ = this.destinationCitySubject.asObservable();
        this.tripData$ = this.tripDataSubject.asObservable();
        this.bookingData$ = this.bookingDataSubject.asObservable();
        this.stkPush$ = this.stkPushSubject.asObservable();
        this.forgotPasswordSubject$ = this.forgotPasswordSubject.asObservable();
        this.changeForgotPasswordSubject$ = this.changeForgotPasswordSubject.asObservable();
        this.modalTriggerSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.modalTrigger$ = this.modalTriggerSource.asObservable();
        this.displaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.display$ = this.displaySubject.asObservable();
        // Subject to trigger modal close
        this.modalCloseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.modalClose$ = this.modalCloseSubject.asObservable();
    }
    // Login method
    login(data) {
        return;
    }
    // Signup method
    signup(data) {
        return;
    }
    // Method to get the current state
    getDisplayState() {
        return this.displaySubject.getValue();
    }
    // Method to update the state
    setDisplayState(value) {
        this.displaySubject.next(value);
    }
    // Method to trigger modal open
    triggerModal(modalId) {
        this.modalTriggerSource.next(modalId);
    }
    // Method to trigger modal close
    closeModal() {
        this.modalCloseSubject.next();
    }
    getSourceCity() {
        return this.http
            .post('/globalApi/common' + '/getCity', this.sourceCities)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => this.sourceCitySubject.next(res)));
    }
    getDestinationCity(cityId) {
        this.destCities.city_id = cityId;
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL, this.destCities)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => this.destinationCitySubject.next(res)));
    }
    getAllTrip(tripData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].AUTHORIZATION,
        });
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api, tripData, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => this.tripDataSubject.next(res)));
    }
    payNow(bookingData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].AUTHORIZATION,
        });
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api, bookingData, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => this.bookingDataSubject.next(res)));
    }
    booking(bookingData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].AUTHORIZATION,
        });
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].bookingURL, bookingData, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => this.bookingDataSubject.next(res)));
    }
    stkPushPay(ticketRefInfo) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].AUTHORIZATION,
        });
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].stkPushURL, ticketRefInfo, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => this.stkPushSubject.next(res)));
    }
    forgotPassword(forgotPasswordData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].AUTHORIZATION,
        });
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].forgotPasswordURL, forgotPasswordData, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => this.forgotPasswordSubject.next(res)));
    }
    changeForgotPassword(changeForgotPasswordData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].AUTHORIZATION,
        });
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].changeForgotPasswordURL, changeForgotPasswordData, {
            headers,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => this.changeForgotPasswordSubject.next(res)));
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map