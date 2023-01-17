(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/iem":
/*!**************************************************!*\
  !*** ./src/app/cart-item/cart-item.component.ts ***!
  \**************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "BkeJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function CartItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartItemComponent_div_0_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.quantityty = $event; })("change", function CartItemComponent_div_0_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changePrice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartItemComponent_div_0_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteItem(ctx_r4.currentItem.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.currentItem.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currentItem.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx_r0.currentItem.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.quantityty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.quantityty * ctx_r0.getPrice(), "\u20B8");
} }
class CartItemComponent {
    // price: number | undefined;
    constructor(cartService) {
        this.cartService = cartService;
        // @Output() cartValue: EventEmitter<number> = new EventEmitter<number>();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.price = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.quantityty = 1;
        if (this.currentItem) {
        }
    }
    ngOnInit() {
        this.changePrice();
    }
    deleteItem(itemId) {
        this.remove.emit(itemId);
    }
    changePrice() {
        if (this.currentItem) {
            const valuee = this.quantityty * this.getPrice();
            this.cartService.dict.set(this.currentItem.id, valuee);
            this.price.emit(this.cartService.dict);
        }
    }
    getPrice() {
        var z = 0;
        if (this.currentItem) {
            z = +((this.currentItem.price * 430).toFixed(1));
        }
        return z;
    }
}
CartItemComponent.ɵfac = function CartItemComponent_Factory(t) { return new (t || CartItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
CartItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartItemComponent, selectors: [["app-cart-item"]], inputs: { currentItem: "currentItem" }, outputs: { remove: "remove", price: "price" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "src"], ["type", "number", "min", "1", "value", "1", 3, "max", "ngModel", "ngModelChange", "change"], ["id", "delete", 3, "click"]], template: function CartItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CartItemComponent_div_0_Template, 10, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["img[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  height: 120px;\r\n  margin: 10px;\r\n  float: left;\r\n  margin-right: 30px;\r\n  \r\n}\r\n#delete[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  float:right;\r\n  margin-top: 45px;\r\n  margin-right: 10px;\r\n  \r\n}\r\n#delete[_ngcontent-%COMP%]{\r\n  background-color: darkseagreen;\r\n  height: 30px;\r\n  width: 120px;\r\n  position: relative;\r\n  display: inline-block;\r\n  padding: 0.25em 0.5em;\r\n  text-decoration: none;\r\n  color: #FFF;\r\n  background: #ff5757;\r\n  border-radius: 4px;\r\n  font-weight: bold;\r\n  border: solid 0px #d27d00;\r\n  transition: 150ms;\r\n  cursor: pointer;\r\n}\r\n#delete[_ngcontent-%COMP%]:hover{\r\n  background: #db4a4a;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgLyptYXJnaW4tYm90dG9tOiAxNXB4OyovXHJcbn1cclxuI2RlbGV0ZXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogNDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgLyptYXJnaW4tYm90dG9tOiAtNXB4OyovXHJcbn1cclxuI2RlbGV0ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgYmFja2dyb3VuZDogI2ZmNTc1NztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyOiBzb2xpZCAwcHggI2QyN2QwMDtcclxuICB0cmFuc2l0aW9uOiAxNTBtcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2RlbGV0ZTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjZGI0YTRhO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tairsairanbekov/Desktop/FEHighLoad/src/main.ts */"zUnb");


/***/ }),

/***/ "2G9v":
/*!***************************!*\
  !*** ./src/app/models.ts ***!
  \***************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
class Comment {
    constructor(userName, productId, comment) {
        this.id = Comment.num++;
        this.userName = userName;
        this.productId = productId;
        this.comment = comment;
        this.date = '2021-4-19 19:54:10';
    }
    setDate(date) {
        this.date = date;
    }
}
Comment.num = 0;


/***/ }),

/***/ "5kVK":
/*!****************************************************!*\
  !*** ./src/app/subcatalog/subcatalog.component.ts ***!
  \****************************************************/
/*! exports provided: SubcatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcatalogComponent", function() { return SubcatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _catalog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catalog.service */ "8ZFQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/product.component */ "LvIC");




function SubcatalogComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentProduct", product_r2);
} }
function SubcatalogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubcatalogComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.getProd());
} }
class SubcatalogComponent {
    constructor(catalogService) {
        this.catalogService = catalogService;
    }
    getProduct() {
        this.loaded = false;
        this.catalogService.getProducts().subscribe((data) => {
            this.loaded = true;
            this.products = data;
        });
    }
    getProd() {
        if (this.currentCategory === 5) {
            return this.products;
        }
        if (this.currentSubCat === 0 && this.products) {
            return this.products.filter((x) => x.cat === this.currentCategory);
        }
        if (this.products) {
            return this.products.filter((x) => x.cat === this.currentCategory && x.subcat === this.currentSubCat);
        }
        return [];
    }
    ngOnInit() {
        this.getProduct();
    }
}
SubcatalogComponent.ɵfac = function SubcatalogComponent_Factory(t) { return new (t || SubcatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_catalog_service__WEBPACK_IMPORTED_MODULE_1__["CatalogService"])); };
SubcatalogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubcatalogComponent, selectors: [["app-subcatalog"]], inputs: { currentCategory: "currentCategory", currentSubCat: "currentSubCat" }, decls: 1, vars: 1, consts: [["class", "subcats", 4, "ngIf"], [1, "subcats"], ["class", "asd", 4, "ngFor", "ngForOf"], [1, "asd"], [3, "currentProduct"]], template: function SubcatalogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SubcatalogComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]], styles: [".asd[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  margin-left: 20px;\r\n  height: 450px;\r\n  border: 1px #d0d0d0 solid;\r\n  width: 400px;\r\n  border-radius: 20px;\r\n  margin-top: 20px;\r\n  transition: 150ms;\r\n  cursor: pointer;\r\n}\r\n.asd[_ngcontent-%COMP%]:hover{\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n}\r\n.subcats[_ngcontent-%COMP%]{\r\n  margin-left: 100px;\r\n  margin-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YmNhdGFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsNENBQTRDO0FBQzlDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InN1YmNhdGFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hc2R7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgYm9yZGVyOiAxcHggI2QwZDBkMCBzb2xpZDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IDE1MG1zO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYXNkOmhvdmVye1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcbi5zdWJjYXRze1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "8ZFQ":
/*!************************************!*\
  !*** ./src/app/catalog.service.ts ***!
  \************************************/
/*! exports provided: CatalogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogService", function() { return CatalogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CatalogService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = 'http://127.0.0.1:8000';
    }
    getCategories() {
        return this.http.get(`${this.BASE_URL}/api/categories/`);
    }
    getSubCategories(catId) {
        return this.http.get(`${this.BASE_URL}/api/subcategories/${catId}`);
    }
    getProducts() {
        return this.http.get(`${this.BASE_URL}/api/products/`);
    }
    getProductDetail(id) {
        return this.http.get(`${this.BASE_URL}/api/products/${id}`);
    }
    getComments(id) {
        return this.http.get(`${this.BASE_URL}/api/products/${id}/comments/`);
    }
    login(username, password) {
        return this.http.post(`${this.BASE_URL}/api/login/`, {
            username,
            password
        });
    }
    createComment(id, comment) {
        return this.http.post(`${this.BASE_URL}/api/products/${id}/comments/`, comment);
    }
    updateComment(id, comment) {
        return this.http.put(`${this.BASE_URL}/api/products/${id}/comments/${comment.id}`, comment);
    }
    deleteComment(id, commentId) {
        return this.http.delete(`${this.BASE_URL}/api/products/${id}/comments/${commentId}`);
    }
}
CatalogService.ɵfac = function CatalogService_Factory(t) { return new (t || CatalogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CatalogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CatalogService, factory: CatalogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


class HomeComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 0, consts: [[1, "firstdiv"], ["src", "assets/img/main.jpg", 1, "main"], ["href", "", 1, "button"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The first 5 orders are free. Details in the app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DoctorTut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "is always with you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " No need to go anywhere - order medicines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "24/7 without leaving your home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".firstdiv[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n  margin-top: 5%;\r\n  margin:auto;\r\n  margin-left: 9%;\r\n  position: absolute;\r\n  z-index: 0;\r\n}\r\n.firstdiv[_ngcontent-%COMP%]{\r\n  width:85%;\r\n  height: 600px;\r\n  margin:auto;\r\n  margin-top: 1%;\r\n\r\n}\r\n.firstdiv[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left: 20%;\r\n  top:47.5%;\r\n  z-index: 2;\r\n}\r\n.firstdiv[_ngcontent-%COMP%] > .button[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left: 20%;\r\n  top:27.5%;\r\n  z-index: 2;\r\n  background-color: #b2e0a2;\r\n  color: white;\r\n  padding-top: 18px;\r\n  padding-bottom: 18px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 10px;\r\n  text-decoration: none;\r\n}\r\n.button[_ngcontent-%COMP%]::after{\r\n  content: '';\r\n  width: 0px;\r\n  height: 2px;\r\n  display: block;\r\n  background: white;\r\n  transition: 200ms;\r\n  margin: auto;\r\n}\r\n.button[_ngcontent-%COMP%]:hover{\r\n  background-color: #abd89c;\r\n}\r\n.button[_ngcontent-%COMP%]:hover::after{\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n.firstdiv[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left: 20%;\r\n  top:35.5%;\r\n  font-weight: 500;\r\n  font-size: 34px;\r\n  color: #313131;\r\n  z-index: 1;\r\n}\r\n.firstdiv[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left: 20.1%;\r\n  top:40.5%;\r\n  font-weight: 500;\r\n  color: #313131;\r\n  z-index: 1;\r\n}\r\n.app[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n\r\n  font-weight: 500;\r\n  color: #313131;\r\n  z-index: 1;\r\n}\r\n.andr[_ngcontent-%COMP%]{\r\n  left: 20%;\r\n  top:60.5%;\r\n\r\n}\r\n.apple[_ngcontent-%COMP%]{\r\n  left: 28.5%;\r\n  top:60.5%;\r\n}\r\n.andr[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n  width: 150px;\r\n  height: 45px;\r\n}\r\n.apple[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n  width: 150px;\r\n  height: 45px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLFdBQVc7RUFDWCxjQUFjOztBQUVoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjs7RUFFbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxVQUFVO0FBQ1o7QUFDQTtFQUNFLFNBQVM7RUFDVCxTQUFTOztBQUVYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsU0FBUztBQUNYO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZmlyc3RkaXY+aW1ne1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiA5JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG4uZmlyc3RkaXZ7XHJcbiAgd2lkdGg6ODUlO1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcblxyXG59XHJcbi5maXJzdGRpdj5we1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyMCU7XHJcbiAgdG9wOjQ3LjUlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmZpcnN0ZGl2Pi5idXR0b257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDIwJTtcclxuICB0b3A6MjcuNSU7XHJcbiAgei1pbmRleDogMjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJlMGEyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDogMThweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMThweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uYnV0dG9uOjphZnRlcntcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMHB4O1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uYnV0dG9uOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmQ4OWM7XHJcbn1cclxuLmJ1dHRvbjpob3Zlcjo6YWZ0ZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5maXJzdGRpdj5oMXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMjAlO1xyXG4gIHRvcDozNS41JTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMzRweDtcclxuICBjb2xvcjogIzMxMzEzMTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5maXJzdGRpdj5oM3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMjAuMSU7XHJcbiAgdG9wOjQwLjUlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMzMTMxMzE7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uYXBwe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzMxMzEzMTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5hbmRye1xyXG4gIGxlZnQ6IDIwJTtcclxuICB0b3A6NjAuNSU7XHJcblxyXG59XHJcbi5hcHBsZXtcclxuICBsZWZ0OiAyOC41JTtcclxuICB0b3A6NjAuNSU7XHJcbn1cclxuLmFuZHI+aW1ne1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuLmFwcGxlPmltZ3tcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG5cclxuIl19 */"] });


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
    production: false
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

/***/ "BkeJ":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CartService {
    constructor(http) {
        this.http = http;
        this.items = [];
        this.dict = new Map();
    }
    addToCart(product) {
        this.items.push(product);
    }
    getItems() {
        return this.items;
    }
    isIn(product) {
        if (this.items.filter((x) => x === product).length > 0) {
            return true;
        }
        return false;
    }
    clearCart() {
        this.dict.clear();
        this.items = [];
        return this.items;
    }
    deleteItem(itemId) {
        this.items = this.items.filter((x) => x.id !== itemId);
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "EcwE":
/*!**********************************************!*\
  !*** ./src/app/catalog/catalog.component.ts ***!
  \**********************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _catalog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catalog.service */ "8ZFQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _subcatalog_subcatalog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subcatalog/subcatalog.component */ "5kVK");




function CatalogComponent_div_1_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatalogComponent_div_1_div_3_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const subCat_r4 = ctx.$implicit; const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.setSubCatalog(subCat_r4.subId, category_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCat_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subCat_r4.name);
} }
function CatalogComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CatalogComponent_div_1_div_3_div_1_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.getSubCat(category_r1.id));
} }
function CatalogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatalogComponent_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const category_r1 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.setCategory(category_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CatalogComponent_div_1_div_3_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r1.id !== 5);
} }
class CatalogComponent {
    constructor(catalogService) {
        this.catalogService = catalogService;
        this.currentCategory = 0;
        this.currentSubCat = 0;
        // this.cats = Cats;
        this.cats = [];
        this.medicines = [];
        this.vitamins = [];
        this.skin = [];
        this.baby = [];
        this.all = [];
        this.catalogService.getCategories().subscribe((data) => {
            this.cats = data;
        });
        this.catalogService.getSubCategories(1).subscribe((data) => {
            this.medicines = data;
        });
        this.catalogService.getSubCategories(2).subscribe((data) => {
            this.vitamins = data;
        });
        this.catalogService.getSubCategories(3).subscribe((data) => {
            this.skin = data;
        });
        this.catalogService.getSubCategories(4).subscribe((data) => {
            this.baby = data;
        });
        // this.medicines = Subcats.filter((x) => x.cat === 1);
        // this.vitamins = Subcats.filter((x) => x.cat === 2);
        // this.skin = Subcats.filter((x) => x.cat === 3);
        // this.baby = Subcats.filter((x) => x.cat === 4);
    }
    ngOnInit() {
        this.currentCategory = 5;
    }
    setSubCatalog(num, cat) {
        this.currentCategory = cat;
        this.currentSubCat = num;
    }
    setCategory(num) {
        this.currentSubCat = 0;
        this.currentCategory = num;
    }
    getSubCat(id) {
        if (id === 5) {
            return this.all;
        }
        if (id === 1) {
            return this.medicines;
        }
        else if (id === 2) {
            return this.vitamins;
        }
        else if (id === 3) {
            return this.skin;
        }
        else if (id === 4) {
            return this.baby;
        }
        return this.medicines;
    }
}
CatalogComponent.ɵfac = function CatalogComponent_Factory(t) { return new (t || CatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_catalog_service__WEBPACK_IMPORTED_MODULE_1__["CatalogService"])); };
CatalogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatalogComponent, selectors: [["app-catalog"]], decls: 4, vars: 3, consts: [["id", "first"], ["class", "dropdown", 4, "ngFor", "ngForOf"], [3, "currentCategory", "currentSubCat"], [1, "dropdown"], [1, "regB", 3, "click"], ["class", "dropdown-content", 4, "ngIf"], [1, "dropdown-content"], [4, "ngFor", "ngForOf"], [1, "subCat", 3, "click"]], template: function CatalogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CatalogComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-subcatalog", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentCategory", ctx.currentCategory)("currentSubCat", ctx.currentSubCat);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _subcatalog_subcatalog_component__WEBPACK_IMPORTED_MODULE_3__["SubcatalogComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".regB[_ngcontent-%COMP%]{\r\n  background-color: #b2e0a2;\r\n  border: #262626 0px solid;\r\n  border-radius: 15px;\r\n  padding: 15px;\r\n  color: white;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  width: 200px;\r\n  transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n.regB[_ngcontent-%COMP%]:hover{\r\n  background-color: #809F73;\r\n}\r\n#first[_ngcontent-%COMP%]{\r\n  display: inline;\r\n  width: 80%;\r\n  margin-left: 18.5%;\r\n}\r\n.dropdown[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n  display: inline-block;\r\n  transition: all .25s ease;\r\n  cursor: pointer;\r\n}\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #b2e0a2;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n  border-radius: 10px;\r\n  color: white;\r\n  padding: 12px 16px;\r\n  width: 170px;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n\r\n}\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  display: block;\r\n}\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n.subCat[_ngcontent-%COMP%]{\r\n  background-color: #b2e0a2;\r\n  color: white;\r\n  border: 0px black solid;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  text-align: left;\r\n  margin-bottom: 7px;\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  width: 170px;\r\n\r\n}\r\n.subCat[_ngcontent-%COMP%]:hover{\r\n  color: #809F73;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsNENBQTRDO0VBQzVDLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7O0FBRVo7QUFDQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZOztBQUVkO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImNhdGFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdCe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMmUwYTI7XHJcbiAgYm9yZGVyOiAjMjYyNjI2IDBweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnJlZ0I6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwOUY3MztcclxufVxyXG4jZmlyc3R7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4LjUlO1xyXG59XHJcbi5kcm9wZG93biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMmUwYTI7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG5cclxufVxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uc3ViQ2F0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMmUwYTI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMHB4IGJsYWNrIHNvbGlkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDdweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTcwcHg7XHJcblxyXG59XHJcbi5zdWJDYXQ6aG92ZXJ7XHJcbiAgY29sb3I6ICM4MDlGNzM7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "LvIC":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "BkeJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function ProductComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductComponent_div_0_div_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r3.addToCart(ctx_r3.currentProduct); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductComponent_div_0_div_9_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.addToCart(ctx_r5.currentProduct); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProductComponent_div_0_div_8_Template, 5, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProductComponent_div_0_div_9_Template, 5, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/catalog/", ctx_r0.currentProduct.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.currentProduct.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currentProduct.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Price:", (ctx_r0.currentProduct.price * 430).toFixed(1), "\u20B8");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.currentProduct.quantity > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.currentProduct.quantity === 0);
} }
class ProductComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    ngOnInit() {
    }
    addToCart(product) {
        if (_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"].isLogged === true) {
            if (this.cartService.isIn(product)) {
                window.alert('Already in cart!');
            }
            else {
                this.cartService.addToCart(product);
            }
        }
        else {
            window.alert('please, login');
        }
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], inputs: { currentProduct: "currentProduct" }, decls: 1, vars: 1, consts: [["class", "prod", 4, "ngIf"], [1, "prod"], [1, "linki", 3, "routerLink"], [1, "imgs", 3, "src"], ["id", "name"], ["id", "price"], [4, "ngIf"], [1, "avail"], [1, "addCart", 3, "click"], [1, "avail", "notavail"], ["disabled", "", 1, "addCart", 3, "click"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductComponent_div_0_Template, 10, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentProduct);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".imgs[_ngcontent-%COMP%] {\r\n  height: 200px;\r\n  margin: auto;\r\n  display: block;\r\n  margin-top: 30px;\r\n}\r\n.prod[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n.checked[_ngcontent-%COMP%] {\r\n  color: orange;\r\n}\r\n.star[_ngcontent-%COMP%]:hover{\r\n  color: orange;\r\n}\r\n#rating[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-right: 15px;\r\n  color: orangered;\r\n  font-family: Bahnschrift;\r\n}\r\n.addCart[_ngcontent-%COMP%]{\r\n  background-color: darkseagreen;\r\n  height: 30px;\r\n  width: 120px;\r\n  margin: 10px;\r\n  margin-top: 2px;\r\n  position: relative;\r\n  display: inline-block;\r\n  padding: 0.25em 0.5em;\r\n  text-decoration: none;\r\n  color: #FFF;\r\n  background: #ffa457;\r\n  border-radius: 4px;\r\n  font-weight: bold;\r\n  border: solid 0px #d27d00;\r\n  transition: 150ms;\r\n  cursor: pointer;\r\n}\r\n.addCart[_ngcontent-%COMP%]:hover{\r\n  background: #ee9951;\r\n}\r\n.addCart[_ngcontent-%COMP%]:disabled, .addCart[disabled][_ngcontent-%COMP%]{\r\n  background: #d2d2d2;\r\n}\r\n#price[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n.linki[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  color: #262626;\r\n}\r\n.avail[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  \r\n  color: #7fcd51;\r\n}\r\n.notavail[_ngcontent-%COMP%] {\r\n  color: #fa7979;\r\n}\r\n.cont[_ngcontent-%COMP%]{\r\n  width: 93%;\r\n  max-width: 350px;\r\n  text-align: center;\r\n  margin: 10px;\r\n  color: #EEE;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n  margin-left: -35px;\r\n}\r\nhr[_ngcontent-%COMP%]{\r\n  margin: 20px;\r\n  border: none;\r\n  border-bottom: thin solid rgba(255,255,255,.1);\r\n}\r\ndiv.stars[_ngcontent-%COMP%]{\r\n  width: 270px;\r\n  display: inline-block;\r\n}\r\ninput.star[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\nlabel.star[_ngcontent-%COMP%] {\r\n  float: right;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  font-size: 20px;\r\n  color: #444;\r\n  transition: all .2s;\r\n}\r\ninput.star[_ngcontent-%COMP%]:checked    ~ label.star[_ngcontent-%COMP%]:before {\r\n  content:'\\f005';\r\n  color: #FD4;\r\n  transition: all .25s;\r\n}\r\ninput.star-5[_ngcontent-%COMP%]:checked    ~ label.star[_ngcontent-%COMP%]:before {\r\n  color:#FE7;\r\n  text-shadow: 0 0 20px #952;\r\n}\r\ninput.star-1[_ngcontent-%COMP%]:checked    ~ label.star[_ngcontent-%COMP%]:before {\r\n  color: #F62;\r\n}\r\nlabel.star[_ngcontent-%COMP%]:hover{\r\n  transform: rotate(-15deg) scale(1.3);\r\n}\r\nlabel.star[_ngcontent-%COMP%]:before{\r\n  content:'\\f006';\r\n  font-family: FontAwesome;\r\n}\r\n.rev-box[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n  height: 0;\r\n  width: 100%;\r\n  transition: all .25s;\r\n}\r\nlabel.review[_ngcontent-%COMP%]{\r\n  display: block;\r\n  transition:opacity .25s;\r\n}\r\ninput.star[_ngcontent-%COMP%]:checked    ~ .rev-box[_ngcontent-%COMP%]{\r\n  height: 125px;\r\n  overflow: visible;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsV0FBVztFQUNYLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1ncyB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4ucHJvZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNoZWNrZWQge1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuLnN0YXI6aG92ZXJ7XHJcbiAgY29sb3I6IG9yYW5nZTtcclxufVxyXG4jcmF0aW5nIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XHJcbiAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG59XHJcbi5hZGRDYXJ0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIGJhY2tncm91bmQ6ICNmZmE0NTc7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogc29saWQgMHB4ICNkMjdkMDA7XHJcbiAgdHJhbnNpdGlvbjogMTUwbXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hZGRDYXJ0OmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICNlZTk5NTE7XHJcbn1cclxuLmFkZENhcnQ6ZGlzYWJsZWQsXHJcbi5hZGRDYXJ0W2Rpc2FibGVkXXtcclxuICBiYWNrZ3JvdW5kOiAjZDJkMmQyO1xyXG59XHJcbiNwcmljZXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubGlua2l7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMjYyNjI2O1xyXG59XHJcbi5hdmFpbHtcclxuICAvKm1hcmdpbi10b3A6IDBweDsqL1xyXG4gIC8qZm9udC1zaXplOiAyMHB4OyovXHJcbiAgLyptYXJnaW4tYm90dG9tOiAwcHg7Ki9cclxuICBjb2xvcjogIzdmY2Q1MTtcclxufVxyXG4ubm90YXZhaWwge1xyXG4gIGNvbG9yOiAjZmE3OTc5O1xyXG59XHJcblxyXG4uY29udHtcclxuICB3aWR0aDogOTMlO1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjb2xvcjogI0VFRTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tbGVmdDogLTM1cHg7XHJcbn1cclxuXHJcbmhye1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcclxufVxyXG5kaXYuc3RhcnN7XHJcbiAgd2lkdGg6IDI3MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuaW5wdXQuc3RhcntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5sYWJlbC5zdGFyIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzQ0NDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG59XHJcblxyXG5pbnB1dC5zdGFyOmNoZWNrZWQgfiBsYWJlbC5zdGFyOmJlZm9yZSB7XHJcbiAgY29udGVudDonXFxmMDA1JztcclxuICBjb2xvcjogI0ZENDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjI1cztcclxufVxyXG5cclxuaW5wdXQuc3Rhci01OmNoZWNrZWQgfiBsYWJlbC5zdGFyOmJlZm9yZSB7XHJcbiAgY29sb3I6I0ZFNztcclxuICB0ZXh0LXNoYWRvdzogMCAwIDIwcHggIzk1MjtcclxufVxyXG5cclxuaW5wdXQuc3Rhci0xOmNoZWNrZWQgfiBsYWJlbC5zdGFyOmJlZm9yZSB7XHJcbiAgY29sb3I6ICNGNjI7XHJcbn1cclxuXHJcbmxhYmVsLnN0YXI6aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKSBzY2FsZSgxLjMpO1xyXG59XHJcblxyXG5sYWJlbC5zdGFyOmJlZm9yZXtcclxuICBjb250ZW50OidcXGYwMDYnO1xyXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxufVxyXG5cclxuLnJldi1ib3h7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4yNXM7XHJcbn1cclxubGFiZWwucmV2aWV3e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246b3BhY2l0eSAuMjVzO1xyXG59XHJcbmlucHV0LnN0YXI6Y2hlY2tlZCB+IC5yZXYtYm94e1xyXG4gIGhlaWdodDogMTI1cHg7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "PSRy":
/*!****************************!*\
  !*** ./src/app/fake-db.ts ***!
  \****************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
const Users = [
    { id: 0, name: 'ascii', password: 'Aminalove2', status: false },
    { id: 1, name: 'nino', password: '1231', status: false }
];


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




function AppComponent_div_0_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " My Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_0_span_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " My Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_span_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Catalog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_0_span_11_Template, 9, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_0_span_12_Template, 8, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isLogged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLogged);
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Vacancies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Help ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "API ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Confidentiality ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Terms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Popular accounts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Hashtags ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Places ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Afrikaans");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u010Ce\u0161tina");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Dansk");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Deutsch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0420\u0443\u0441\u0441\u043A\u0438\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "English (UK)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Espa\u00F1ol (Espa\u00F1a)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Espa\u00F1ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Suomi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Fran\u00E7ais");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Bahasa Indonesia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Italiano");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u65E5\u672C\u8A9E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\uD55C\uAD6D\uC5B4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Bahasa Melayu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Norsk");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Nederlands");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Polski");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Portugu\u00EAs (Brasil)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Portugu\u00EAs (Portugal)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Svenska");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Filipino");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "T\u00FCrk\u00E7e");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u4E2D\u6587(\u7B80\u4F53)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u4E2D\u6587(\u53F0\u7063)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\u09AC\u09BE\u0982\u09B2\u09BE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u0939\u093F\u0928\u094D\u0926\u0940");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Hrvatski");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Magyar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Fran\u00E7ais (Canada)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u0421\u0440\u043F\u0441\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u00A9 DoctorTut by Platina Inc, 2021");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'project';
        AppComponent.isLogged = false;
    }
    ngOnInit() {
        const token = localStorage.getItem('token');
        if (token) {
            AppComponent.isLogged = true;
        }
    }
    get isLogged() {
        return AppComponent.isLogged;
    }
    logout() {
        // for (const user of Users){
        //   if (user.status){
        //     user.status = false;
        //   }
        // }
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        AppComponent.isLogged = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [["class", "asd", 4, "ngIf"], ["class", "foot", 4, "ngIf"], [1, "asd"], [1, "logo"], ["routerLink", "/home"], ["src", "assets/img/logo2.jpg"], ["routerLink", "/catalog", 1, "link-hover-center"], ["routerLink", "/home", 1, "link-hover-center"], [4, "ngIf"], ["routerLink", "/login"], [1, "regB"], [1, "cart"], ["src", "assets/img/cart.png"], [1, "regB2"], ["routerLink", "/cart"], [1, "logout", 3, "click"], [1, "foot"], ["src", "assets/img/footer.jpg"], [1, "mainfooter"], [1, "footer"], [1, "ull", "ull2"], [1, "selector"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", "19"], ["value", "20"], ["value", "21"], ["value", "22"], ["value", "23"], ["value", "24"], ["value", "25"], ["value", "26"], ["value", "27"], ["value", "28"], ["value", "29"], ["value", "30"], ["value", "31"], ["value", "32"], ["value", "33"], ["value", "34"], ["value", "35"], ["value", "36"], [1, "copyright"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 13, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 103, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url !== "/login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url !== "/login");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"]], styles: [".logo[_ngcontent-%COMP%]{\r\n  display: inline;\r\n  margin-top: 5%;\r\n  margin-right: 0px;\r\n}\r\n.logo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n  margin-left: 16%;\r\n  padding: 16px 6px 16px 10px;\r\n  float: left;\r\n  margin-top: 1%;\r\n  position: relative;\r\n  display: inline-block;\r\n  margin-bottom: 2%;\r\n}\r\n.asd[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\nnav[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  margin-left: 0%;\r\n  margin-top: 2%;\r\n  margin-bottom: 55px;\r\n  color: #262626;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.link-hover-center[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  color: #262626;\r\n  font-size: 15px;\r\n  margin-left: 95px;\r\n  line-height: 1;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n.link-hover-center[_ngcontent-%COMP%]:after {\r\n  display: block;\r\n  content: \"\";\r\n  background-color: #262626;\r\n  height: 1px;\r\n  width: 0%;\r\n  margin-top: 1px;\r\n  left: 50%;\r\n  position: absolute;\r\n  transition: width 150ms ease-in-out;\r\n  transform: translateX(-50%);\r\n}\r\n.link-hover-center[_ngcontent-%COMP%]:hover:after, .link-hover-center[_ngcontent-%COMP%]:focus:after {\r\n  width: 100%;\r\n}\r\n.regB[_ngcontent-%COMP%]{\r\n  background-color: #b2e0a2;\r\n  border: #262626 0px solid;\r\n  border-radius: 15px;\r\n  padding: 15px;\r\n  color: white;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  margin-left: 60px;\r\n  transition: 0.3s;\r\n  width: 120px;\r\n  cursor: pointer;\r\n}\r\n.regB[_ngcontent-%COMP%]:hover{\r\n  background-color: #809F73;\r\n}\r\n.cart[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n  float: left;\r\n  display: inline;\r\n  margin-top: -5px;\r\n  margin-right: 10px;\r\n\r\n}\r\n.cart[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\n.selector[_ngcontent-%COMP%]{\r\n  display: inline;\r\n  border: 0px;\r\n  font-size: 12px;\r\n  background-color:#b2e0a2 ;\r\n  color:white;\r\n  margin-left:40%;\r\n}\r\nselect[_ngcontent-%COMP%]{\r\n  background-color:#b2e0a2 ;\r\n  border:0px;\r\n  color:white;\r\n  font-size: 11px;\r\n  font-weight: lighter;\r\n\r\n}\r\n.copyright[_ngcontent-%COMP%]{\r\n  font-size: 11px;\r\n  margin-top: 30px;\r\n  color:white;\r\n  text-align: center;\r\n  display: inline;\r\n\r\n}\r\n.footer[_ngcontent-%COMP%]{\r\n  background-color: #b2e0a2;\r\n  text-align: center;\r\n  display: inline;\r\n  height: 10px;\r\n}\r\n.ull[_ngcontent-%COMP%]{\r\n  margin-left: 400px;\r\n  width: 900px;\r\n  height: 10px;\r\n}\r\nli[_ngcontent-%COMP%]:hover{\r\n  text-decoration: underline;\r\n}\r\n#firstul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]{\r\n  list-style-type: none;\r\n  display: inline-block;\r\n  font-size: 12px;\r\n  margin-left: 4px;\r\n  color:#8a8d91;\r\n  margin-bottom: 10px;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n  list-style-type: none;\r\n  display: inline-block;\r\n  font-size: 12px;\r\n  margin-left: 4px;\r\n  color:white;\r\n}\r\n.ull2[_ngcontent-%COMP%]{\r\n  padding-top: 20px;\r\n}\r\n.ull2[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]{\r\n  margin-left: 5px;\r\n}\r\n.line2[_ngcontent-%COMP%]{\r\n  border-top: 1px solid #d0d0d2;\r\n}\r\n.mainfooter[_ngcontent-%COMP%]{\r\n  padding-bottom: 20px;\r\n  background-color: #b2e0a2;\r\n}\r\n.foot[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n  margin-bottom: -20px;\r\n  margin-top: 20px;\r\n}\r\n.logout[_ngcontent-%COMP%]{\r\n  background-color: #ef9393;\r\n  border: #262626 0px solid;\r\n  border-radius: 15px;\r\n  padding: 15px;\r\n  color: white;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  margin-left: 20px;\r\n  transition: 0.3s;\r\n  width: 120px;\r\n  cursor: pointer;\r\n}\r\n.logout[_ngcontent-%COMP%]:hover{\r\n  background-color: #ae6c6c;\r\n}\r\n.regB2[_ngcontent-%COMP%]{\r\n  background-color: #b2e0a2;\r\n  border: #262626 0px solid;\r\n  border-radius: 15px;\r\n  padding: 15px;\r\n  color: white;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  margin-left: 20px;\r\n  transition: 0.3s;\r\n  width: 120px;\r\n  cursor: pointer;\r\n}\r\n.regB2[_ngcontent-%COMP%]:hover{\r\n  background-color: #809F73;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQSxTQUFTO0FBQ1Qsb0JBQW9CO0FBQ3BCLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIsMEJBQTBCO0FBQzFCLElBQUk7QUFDSjtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLDJCQUEyQjtBQUM3QjtBQUNBOztFQUVFLFdBQVc7QUFDYjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCOztBQUVwQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0JBQW9COztBQUV0QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7O0FBRWpCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbi5sb2dvPmE+aW1ne1xyXG4gIG1hcmdpbi1sZWZ0OiAxNiU7XHJcbiAgcGFkZGluZzogMTZweCA2cHggMTZweCAxMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuLmFzZHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxubmF2e1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTVweDtcclxuICBjb2xvcjogIzI2MjYyNjtcclxufVxyXG4vKm5hdj5heyovXHJcbi8qICBjb2xvcjogIzI2MjYyNjsqL1xyXG4vKiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyovXHJcbi8qICBmb250LXNpemU6IDE1cHg7Ki9cclxuLyogIG1hcmdpbi1sZWZ0OiA3NXB4OyovXHJcbi8qICBwYWRkaW5nOiAxMHB4OyovXHJcbi8qICBwYWRkaW5nLXRvcDogMjBweDsqL1xyXG4vKiAgcGFkZGluZy1ib3R0b206IDE1cHg7Ki9cclxuLyp9Ki9cclxuLmxpbmstaG92ZXItY2VudGVye1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogIzI2MjYyNjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDk1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxpbmstaG92ZXItY2VudGVyOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDAlO1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDE1MG1zIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG4ubGluay1ob3Zlci1jZW50ZXI6aG92ZXI6YWZ0ZXIsXHJcbi5saW5rLWhvdmVyLWNlbnRlcjpmb2N1czphZnRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJlZ0J7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyZTBhMjtcclxuICBib3JkZXI6ICMyNjI2MjYgMHB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucmVnQjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA5RjczO1xyXG59XHJcbi5jYXJ0PmltZ3tcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG59XHJcbi5jYXJ0e1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4uc2VsZWN0b3J7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNiMmUwYTIgO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OjQwJTtcclxufVxyXG5zZWxlY3R7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojYjJlMGEyIDtcclxuICBib3JkZXI6MHB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuXHJcbn1cclxuLmNvcHlyaWdodHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG5cclxufVxyXG4uZm9vdGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMmUwYTI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuLnVsbHtcclxuICBtYXJnaW4tbGVmdDogNDAwcHg7XHJcbiAgd2lkdGg6IDkwMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxufVxyXG5saTpob3ZlcntcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4jZmlyc3R1bCA+IGxpe1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgY29sb3I6IzhhOGQ5MTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbmxpe1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuLnVsbDJ7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLnVsbDIgPiBsaXtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5saW5lMntcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2QwZDBkMjtcclxufVxyXG5cclxuLm1haW5mb290ZXJ7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyZTBhMjtcclxufVxyXG4uZm9vdD5pbWd7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubG9nb3V0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjkzOTM7XHJcbiAgYm9yZGVyOiAjMjYyNjI2IDBweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmxvZ291dDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWU2YzZjO1xyXG59XHJcbi5yZWdCMntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJlMGEyO1xyXG4gIGJvcmRlcjogIzI2MjYyNiAwcHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5yZWdCMjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA5RjczO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalog/catalog.component */ "EcwE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _subcatalog_subcatalog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subcatalog/subcatalog.component */ "5kVK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "vR3N");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cart-item/cart-item.component */ "/iem");
/* harmony import */ var _AuthInterceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AuthInterceptor */ "ZRbq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _AuthInterceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_5__["CatalogComponent"],
        _subcatalog_subcatalog_component__WEBPACK_IMPORTED_MODULE_7__["SubcatalogComponent"],
        _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
        _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"],
        _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_12__["CartItemComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetComponentScope"](_cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_12__["CartItemComponent"]], []);


/***/ }),

/***/ "ZRbq":
/*!************************************!*\
  !*** ./src/app/AuthInterceptor.ts ***!
  \************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthInterceptor {
    intercept(req, next) {
        const token = localStorage.getItem('token');
        if (token) {
            const newReq = req.clone({
                headers: req.headers.append('Authorization', `JWT ${token}`)
            });
            return next.handle(newReq);
        }
        return next.handle(req);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "BkeJ");


function CartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "OMG! Your cart is empty! Add something to the cart, please :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-cart-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("remove", function CartComponent_div_3_Template_app_cart_item_remove_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onRemoveItem($event); })("price", function CartComponent_div_3_Template_app_cart_item_price_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.total($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentItem", item_r2);
} }
class CartComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.items = this.cartService.getItems();
        this.totalSum = 0;
    }
    ngOnInit() {
    }
    update() {
        this.items = this.cartService.getItems();
    }
    onRemoveItem(itemId) {
        this.cartService.deleteItem(itemId);
        this.cartService.dict.delete(itemId);
        this.total(this.cartService.dict);
        this.update();
        // Products.filter(x => x.id === itemId);
    }
    getTotal() {
        return this.totalSum;
    }
    total(dict) {
        this.totalSum = 0;
        for (let value of dict.values()) {
            this.totalSum += value;
        }
    }
    clearCart() {
        this.cartService.clearCart();
        this.total(this.cartService.dict);
        this.update();
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 14, vars: 4, consts: [[4, "ngIf"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [1, "clear", 3, "click"], [1, "eipacan"], [1, "cart-item"], [3, "currentItem", "remove", "price"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_div_2_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_6_listener() { return ctx.clearCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cart: ", ctx.items.length, " item(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", ctx.getTotal(), "\u20B8");
    } }, styles: [".cart-item[_ngcontent-%COMP%]{\r\n  width: 800px;\r\n  border: 1px #d0d0d0 solid;\r\n  border-radius: 10px;\r\n  margin: 10px;\r\n  display: block;\r\n  height: 165px;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  color: red;\r\n  text-align: center;\r\n  margin: 20px;\r\n}\r\nh3[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n  margin: 10px;\r\n  display: inline;\r\n  margin-top: 15px;\r\n}\r\n.clear[_ngcontent-%COMP%]{\r\n  background-color: darkseagreen;\r\n  height: 30px;\r\n  width: 120px;\r\n  position: relative;\r\n  text-decoration: none;\r\n  color: #FFF;\r\n  background: #ff5757;\r\n  border-radius: 4px;\r\n  font-weight: bold;\r\n  border: solid 0px #d27d00;\r\n  transition: 150ms;\r\n  cursor: pointer;\r\n  margin-left: 10px;\r\n  padding: 10px;\r\n}\r\n.clear[_ngcontent-%COMP%]:hover{\r\n  background: #db4a4a;\r\n}\r\n.eipacan[_ngcontent-%COMP%]{\r\n  margin: 80px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LWl0ZW17XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIGJvcmRlcjogMXB4ICNkMGQwZDAgc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxNjVweDtcclxufVxyXG5wIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbmgzIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuaDJ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5jbGVhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIGJhY2tncm91bmQ6ICNmZjU3NTc7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogc29saWQgMHB4ICNkMjdkMDA7XHJcbiAgdHJhbnNpdGlvbjogMTUwbXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmNsZWFyOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICNkYjRhNGE7XHJcbn1cclxuLmVpcGFjYW57XHJcbiAgbWFyZ2luOiA4MHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vR3N":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ "2G9v");
/* harmony import */ var _fake_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fake-db */ "PSRy");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cart.service */ "BkeJ");
/* harmony import */ var _catalog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../catalog.service */ "8ZFQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









function ProductDetailComponent_input_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 28);
} }
function ProductDetailComponent_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 29);
} }
function ProductDetailComponent_input_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 30);
} }
function ProductDetailComponent_input_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 31);
} }
function ProductDetailComponent_input_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 32);
} }
function ProductDetailComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Availability: ", ctx_r5.product.quantity, " in stock");
} }
function ProductDetailComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailComponent_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.addToCart(ctx_r12.product); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.addToCart(ctx_r14.product); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailComponent_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.addB(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "textarea", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductDetailComponent_div_37_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.commentAdd = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailComponent_div_37_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.newComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r10.commentAdd);
} }
function ProductDetailComponent_div_38_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailComponent_div_38_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const comment_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r25.editB(comment_r21.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_38_div_16_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailComponent_div_38_div_16_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const comment_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r29.updateB(comment_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_38_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "textarea", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductDetailComponent_div_38_div_16_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r32.commentUpdate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ProductDetailComponent_div_38_div_16_button_2_Template, 2, 0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r23.commentUpdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", comment_r21.userName === ctx_r23.currentUserName && ctx_r23.updateBClick);
} }
function ProductDetailComponent_div_38_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailComponent_div_38_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37); const comment_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r35.deleteB(comment_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Comment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ProductDetailComponent_div_38_button_15_Template, 2, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ProductDetailComponent_div_38_div_16_Template, 3, 2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ProductDetailComponent_div_38_button_17_Template, 2, 0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r21 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](comment_r21.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00B7 ", comment_r21.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](comment_r21.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", comment_r21.userName === ctx_r11.currentUserName && !ctx_r11.updateBClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.updateBClick && comment_r21.id === ctx_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", comment_r21.userName === ctx_r11.currentUserName);
} }
class ProductDetailComponent {
    constructor(route, cartService, catalogService) {
        this.route = route;
        this.cartService = cartService;
        this.catalogService = catalogService;
        this.product = { id: 0, price: 2, cat: 1, rating: 0, quantity: 10, image: '', description: '', subcat: 1, name: '' };
        this.comments = [];
        this.addBClick = false;
        this.updateBClick = false;
        this.commentAdd = '';
        this.commentUpdate = '';
        this.id = 0;
        this.prodId = 0;
        this.currentUserName = localStorage.getItem('userName');
    }
    ngOnInit() {
        this.getUser();
        this.getProduct();
    }
    getProduct() {
        this.route.paramMap.subscribe((params) => {
            const id = params.get('id');
            if (id != null) {
                this.catalogService.getProductDetail(id).subscribe((data) => {
                    this.product = data;
                });
                this.catalogService.getComments(id).subscribe((data) => {
                    this.comments = data;
                });
            }
        });
    }
    getDate() {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const dateTime = date + ' ' + time;
        return dateTime;
    }
    addToCart(product) {
        if (_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].isLogged === true) {
            if (this.cartService.isIn(product)) {
                window.alert('Already in cart!');
            }
            else {
                this.cartService.addToCart(product);
            }
        }
        else {
            window.alert('please, login');
        }
    }
    addB() {
        if (localStorage.getItem('token')) {
            this.addBClick = true;
        }
    }
    editB(id) {
        this.id = id;
        this.updateBClick = true;
    }
    getUser() {
        for (const user of _fake_db__WEBPACK_IMPORTED_MODULE_1__["Users"]) {
            if (user.status) {
                this.currentUserName = user.name;
                break;
            }
        }
    }
    newComment() {
        if (this.commentAdd !== '') {
            this.route.paramMap.subscribe((params) => {
                const id = params.get('id');
                if (id != null) {
                    const comment = new _models__WEBPACK_IMPORTED_MODULE_0__["Comment"](this.currentUserName, id, this.commentAdd);
                    comment.date = this.getDate();
                    this.catalogService.createComment(id, comment).subscribe((comment) => {
                        this.getProduct();
                        this.getDate();
                        this.addBClick = false;
                        this.commentAdd = '';
                    });
                }
            });
            // const comment = new Comment(this.currentUserName, this.prodId, this.commentAdd);
            // comment.date = this.getDate();
            // Comments.push(comment);
        }
        else {
            this.addBClick = false;
        }
    }
    deleteB(comment) {
        // const ind = Comments.indexOf(id);
        // Comments.splice(ind, 1);
        this.route.paramMap.subscribe((params) => {
            const id = params.get('id');
            if (id != null) {
                this.catalogService.deleteComment(id, comment.id).subscribe((comment) => {
                    this.getProduct();
                });
            }
        });
        this.getProduct();
    }
    updateB(comment) {
        if (this.commentUpdate !== '') {
            comment.comment = this.commentUpdate;
            comment.date = this.getDate();
            this.route.paramMap.subscribe((params) => {
                const id = params.get('id');
                if (id != null) {
                    this.catalogService.updateComment(id, comment).subscribe((comment) => {
                        this.updateBClick = false;
                        this.commentUpdate = '';
                        this.getProduct();
                    });
                }
            });
        }
        else {
            this.updateBClick = false;
        }
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_catalog_service__WEBPACK_IMPORTED_MODULE_6__["CatalogService"])); };
ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], decls: 39, vars: 16, consts: [[3, "src"], [1, "formoch"], ["id", "name"], [1, "cont"], [1, "stars"], ["class", "star star-5", "id", "star-5-2", "type", "radio", "name", "star", "checked", "", 4, "ngIf"], ["for", "star-5-2", 1, "star", "star-5"], ["class", "star star-4", "id", "star-4-2", "type", "radio", "name", "star", "checked", "", 4, "ngIf"], ["for", "star-4-2", 1, "star", "star-4"], ["class", "star star-3", "id", "star-3-2", "type", "radio", "name", "star", "checked", "", 4, "ngIf"], ["for", "star-3-2", 1, "star", "star-3"], ["class", "star star-2", "id", "star-2-2", "type", "radio", "name", "star", "checked", "", 4, "ngIf"], ["for", "star-2-2", 1, "star", "star-2"], ["class", "star star-1", "id", "star-1-2", "type", "radio", "name", "star", "checked", "", 4, "ngIf"], ["for", "star-1-2", 1, "star", "star-1"], ["id", "price"], ["id", "number"], ["class", "avail", 4, "ngIf"], ["class", "avail notavail", 4, "ngIf"], [1, "line"], ["class", "addCart", 3, "click", 4, "ngIf"], ["disabled", "", "class", "addCart", 3, "click", 4, "ngIf"], ["id", "desc"], [1, "line", "line2"], ["id", "mh"], ["class", "dlt add", 3, "click", 4, "ngIf"], ["class", "input", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["id", "star-5-2", "type", "radio", "name", "star", "checked", "", 1, "star", "star-5"], ["id", "star-4-2", "type", "radio", "name", "star", "checked", "", 1, "star", "star-4"], ["id", "star-3-2", "type", "radio", "name", "star", "checked", "", 1, "star", "star-3"], ["id", "star-2-2", "type", "radio", "name", "star", "checked", "", 1, "star", "star-2"], ["id", "star-1-2", "type", "radio", "name", "star", "checked", "", 1, "star", "star-1"], [1, "avail"], [1, "avail", "notavail"], [1, "addCart", 3, "click"], ["disabled", "", 1, "addCart", 3, "click"], [1, "dlt", "add", 3, "click"], [1, "input"], ["placeholder", "Write your comment", 3, "ngModel", "ngModelChange"], [1, "dlt", "add", "lul", 3, "click"], [1, "comms"], [1, "left"], [1, "lol"], ["id", "lel"], ["id", "right"], ["class", "dlt", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "dlt edit", 3, "click", 4, "ngIf"], [1, "dlt", 3, "click"], ["placeholder", "Edit your comment", 1, "lil", 3, "ngModel", "ngModelChange"], ["class", "dlt dlt2", 3, "click", 4, "ngIf"], [1, "dlt", "dlt2", 3, "click"], [1, "dlt", "edit", 3, "click"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ProductDetailComponent_input_6_Template, 1, 0, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ProductDetailComponent_input_8_Template, 1, 0, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ProductDetailComponent_input_10_Template, 1, 0, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ProductDetailComponent_input_12_Template, 1, 0, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ProductDetailComponent_input_14_Template, 1, 0, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ProductDetailComponent_p_22_Template, 2, 1, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ProductDetailComponent_p_23_Template, 2, 0, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ProductDetailComponent_button_25_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ProductDetailComponent_button_26_Template, 2, 0, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Description & features");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ProductDetailComponent_button_36_Template, 2, 0, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, ProductDetailComponent_div_37_Template, 4, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, ProductDetailComponent_div_38_Template, 19, 6, "div", 27);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product.rating >= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product.rating >= 4 && ctx.product.rating < 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product.rating >= 3 && ctx.product.rating < 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product.rating >= 2 && ctx.product.rating < 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product.rating >= 1 && ctx.product.rating < 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", (ctx.product.price * 430).toFixed(1), "\u20B8");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product.quantity > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product.quantity === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product.quantity > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product.quantity === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.addBClick);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addBClick);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: ["div[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  width: 400px;\r\n  margin-top: 5%;\r\n  margin-left: 17%;\r\n  float: left;\r\n  display: inline-block;\r\n  margin-right: 15%;\r\n\r\n}\r\n\r\n#name[_ngcontent-%COMP%]{\r\n\r\n  font-size: 40px;\r\n  font-weight: 400;\r\n  font-family: \"Calibri\";\r\n\r\n}\r\n\r\n.checked[_ngcontent-%COMP%]{\r\n  color: #ff9800;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.addCart[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  width: 400px;\r\n  position: relative;\r\n  display: inline-block;\r\n  padding: 0.25em 0.5em;\r\n  text-decoration: none;\r\n  color: #FFF;\r\n  background: #ffa457;\r\n  border-radius: 4px;\r\n  font-weight: bold;\r\n  border: solid 0px #d27d00;\r\n  transition: 150ms;\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n  font-family: \"Calibri\";\r\n}\r\n\r\n.addCart[_ngcontent-%COMP%]:hover{\r\n  background: #ee9951;\r\n}\r\n\r\n#price[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n  font-family: \"Calibri\";\r\n}\r\n\r\n#number[_ngcontent-%COMP%]{\r\n  font-size: 60px;\r\n  font-family: \"Calibri\";\r\n\r\n}\r\n\r\n.formoch[_ngcontent-%COMP%]{\r\n  background-color: #fff;\r\n  margin-top: 4%;\r\n  height: 336px;\r\n  width: 500px;\r\n  display: inline;\r\n  padding: 15px;\r\n  padding-bottom: 25px;\r\n  border: #dbdbdb solid 1px;\r\n  margin-bottom: 10px;\r\n  float: right;\r\n  margin-right: 19%;\r\n  height: 500px;\r\n  text-align: center;\r\n  border-radius: 20px;\r\n}\r\n\r\n.line[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  display: block;\r\n  width: 500px;\r\n  border-top: 1px solid #d0d0d2;\r\n  margin-bottom: 30px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  \r\n  \r\n\r\n}\r\n\r\n#desc[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 10px;\r\n  margin-top: 42%;\r\n  margin-left: 20px;\r\n}\r\n\r\n#desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-size: 25px;\r\n  font-family: Calibri;\r\n}\r\n\r\n.line2[_ngcontent-%COMP%]{\r\n  margin-top: 40px;\r\n  width: 100%;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.addCart[_ngcontent-%COMP%]:disabled, .addCart[disabled][_ngcontent-%COMP%]{\r\n  background: #d2d2d2;\r\n}\r\n\r\n.avail[_ngcontent-%COMP%] {\r\n  margin: 30px;\r\n  color: #7fcd51;\r\n  font-family: Calibri;\r\n  font-size: 23px;\r\n}\r\n\r\n.notavail[_ngcontent-%COMP%]{\r\n  color: #fa7979;\r\n}\r\n\r\n#mh[_ngcontent-%COMP%]{\r\n  margin: 10px;\r\n  margin-left: 20px;\r\n  display: inline;\r\n}\r\n\r\n.comms[_ngcontent-%COMP%]{\r\n  margin: 10px;\r\n  margin-left: 20px;\r\n  padding: 10px;\r\n  display: block;\r\n  border-bottom: #cdcdcd 1px solid;\r\n}\r\n\r\n.comms[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{\r\n  font-size: 25px;\r\n  font-family: Calibri;\r\n\r\n}\r\n\r\n.comms[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\r\n  font-size: 25px;\r\n  font-family: \"Calibri Light\";\r\n}\r\n\r\n.comms[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\r\n\r\n}\r\n\r\n.lol[_ngcontent-%COMP%]{\r\n  color: #7fcd51;\r\n}\r\n\r\n#lel[_ngcontent-%COMP%]{\r\n  font-family: Calibri;\r\n  font-size: 18px;\r\n\r\n  color: #646464;\r\n}\r\n\r\n.dlt[_ngcontent-%COMP%]{\r\n  background-color: darkseagreen;\r\n  height: 30px;\r\n  width: 120px;\r\n  display: inline-block;\r\n  padding: 0.25em 0.5em;\r\n  text-decoration: none;\r\n  color: #FFF;\r\n  background-color: #7791dd;\r\n  border-radius: 4px;\r\n  font-weight: bold;\r\n  border: solid 0px #d27d00;\r\n  transition: 150ms;\r\n  cursor: pointer;\r\n  \r\n}\r\n\r\n.dlt[_ngcontent-%COMP%]:hover{\r\n  background: #4d5998;\r\n}\r\n\r\n.add[_ngcontent-%COMP%]{\r\n  margin-left: 81.5%;\r\n  background-color: #92dd77;\r\n}\r\n\r\n.add[_ngcontent-%COMP%]:hover{\r\n  background: #5e984d;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%]{\r\n  background: #ff5757;\r\n  margin-top: 10px;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%]:hover{\r\n  background: #db4a4a;\r\n}\r\n\r\n.input[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin: 10px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.left[_ngcontent-%COMP%]{\r\n  width: 70%;\r\n}\r\n\r\n.lul[_ngcontent-%COMP%]{\r\n  margin-left: 92.7%;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n  height: 150px;\r\n  font-size: 20px;\r\n  font-family: \"Calibri Light\";\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%]:focus{\r\n  outline: #b2e0a2;\r\n  border: 1px solid #b2e0a2;\r\n  box-shadow: 0 0 3px #b2e0a2;\r\n}\r\n\r\n.lil[_ngcontent-%COMP%]{\r\n  display: block;\r\n  width: 40%;\r\n}\r\n\r\ndlt2[_ngcontent-%COMP%]{\r\n  margin-left: 0%;\r\n}\r\n\r\n*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n}\r\n\r\n.cont[_ngcontent-%COMP%]{\r\n  width: 93%;\r\n  max-width: 350px;\r\n  text-align: center;\r\n  margin: 4% auto;\r\n  padding: 30px 0;\r\n  color: #EEE;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n}\r\n\r\nhr[_ngcontent-%COMP%]{\r\n  margin: 20px;\r\n  border: none;\r\n  border-bottom: thin solid rgba(255,255,255,.1);\r\n}\r\n\r\ndiv.stars[_ngcontent-%COMP%]{\r\n  width: 270px;\r\n  display: inline-block;\r\n}\r\n\r\ninput.star[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\nlabel.star[_ngcontent-%COMP%] {\r\n  float: right;\r\n  padding: 10px;\r\n  font-size: 36px;\r\n  color: #444;\r\n  transition: all .2s;\r\n}\r\n\r\ninput.star[_ngcontent-%COMP%]:checked    ~ label.star[_ngcontent-%COMP%]:before {\r\n  content:'\\f005';\r\n  color: #FD4;\r\n  transition: all .25s;\r\n}\r\n\r\ninput.star-5[_ngcontent-%COMP%]:checked    ~ label.star[_ngcontent-%COMP%]:before {\r\n  color:#FE7;\r\n  text-shadow: 0 0 20px #952;\r\n}\r\n\r\ninput.star-1[_ngcontent-%COMP%]:checked    ~ label.star[_ngcontent-%COMP%]:before {\r\n  color: #F62;\r\n}\r\n\r\nlabel.star[_ngcontent-%COMP%]:hover{\r\n  transform: rotate(-15deg) scale(1.3);\r\n}\r\n\r\nlabel.star[_ngcontent-%COMP%]:before{\r\n  content:'\\f006';\r\n  font-family: FontAwesome;\r\n}\r\n\r\n.rev-box[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n  height: 0;\r\n  width: 100%;\r\n  transition: all .25s;\r\n}\r\n\r\nlabel.review[_ngcontent-%COMP%]{\r\n  display: block;\r\n  transition:opacity .25s;\r\n}\r\n\r\ninput.star[_ngcontent-%COMP%]:checked    ~ .rev-box[_ngcontent-%COMP%]{\r\n  height: 125px;\r\n  overflow: visible;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixpQkFBaUI7O0FBRW5COztBQUNBOztFQUVFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCOztBQUV4Qjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0EsVUFBVTs7QUFDVixxQkFBcUI7O0FBQ3JCLHVCQUF1Qjs7QUFDdkIsSUFBSTs7QUFDSjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7O0FBRXhCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCOztBQUVwQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFDQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9COztBQUV0Qjs7QUFDQTtFQUNFLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUI7O0FBQ0E7O0FBRUE7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7O0VBRWYsY0FBYztBQUNoQjs7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUdBO0VBQ0UsU0FBUztFQUNULFVBQVU7O0FBRVo7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiw4Q0FBOEM7QUFDaEQ7O0FBQ0E7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuaW1ne1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tbGVmdDogMTclO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuXHJcbn1cclxuI25hbWV7XHJcblxyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhbGlicmlcIjtcclxuXHJcbn1cclxuLmNoZWNrZWR7XHJcbiAgY29sb3I6ICNmZjk4MDA7XHJcbn1cclxuLyoucmlnaHR7Ki9cclxuLyogIG1hcmdpbi10b3A6IDEwJTsqL1xyXG4vKiAgbWFyZ2luLWxlZnQ6IC05MCU7Ki9cclxuLyp9Ki9cclxuLmFkZENhcnR7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgYmFja2dyb3VuZDogI2ZmYTQ1NztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyOiBzb2xpZCAwcHggI2QyN2QwMDtcclxuICB0cmFuc2l0aW9uOiAxNTBtcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhbGlicmlcIjtcclxufVxyXG4uYWRkQ2FydDpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjZWU5OTUxO1xyXG59XHJcbiNwcmljZXtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2FsaWJyaVwiO1xyXG59XHJcbiNudW1iZXJ7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhbGlicmlcIjtcclxuXHJcbn1cclxuLmZvcm1vY2h7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tdG9wOiA0JTtcclxuICBoZWlnaHQ6IDMzNnB4O1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICBib3JkZXI6ICNkYmRiZGIgc29saWQgMXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMTklO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLmxpbmV7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkMGQwZDI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5oMSB7XHJcbiAgLyptYXJnaW4tdG9wOiAyMCU7Ki9cclxuICAvKmRpc3BsYXk6IGJsb2NrOyovXHJcblxyXG59XHJcbiNkZXNjIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDIlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbiNkZXNjIHB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG59XHJcbi5saW5lMntcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuLmFkZENhcnQ6ZGlzYWJsZWQsXHJcbi5hZGRDYXJ0W2Rpc2FibGVkXXtcclxuICBiYWNrZ3JvdW5kOiAjZDJkMmQyO1xyXG59XHJcbi5hdmFpbCB7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG4gIGNvbG9yOiAjN2ZjZDUxO1xyXG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG4ubm90YXZhaWx7XHJcbiAgY29sb3I6ICNmYTc5Nzk7XHJcbn1cclxuI21oe1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLmNvbW1ze1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1ib3R0b206ICNjZGNkY2QgMXB4IHNvbGlkO1xyXG59XHJcbi5jb21tcz5kaXY+c3BhbntcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC1mYW1pbHk6IENhbGlicmk7XHJcblxyXG59XHJcbi5jb21tcz5kaXY+c3Bhbj5we1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LWZhbWlseTogXCJDYWxpYnJpIExpZ2h0XCI7XHJcbn1cclxuLmNvbW1zPmRpdntcclxuXHJcbn1cclxuLmxvbHtcclxuICBjb2xvcjogIzdmY2Q1MTtcclxufVxyXG4jbGVse1xyXG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgY29sb3I6ICM2NDY0NjQ7XHJcbn1cclxuLmRsdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI0ZGRjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc5MWRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXI6IHNvbGlkIDBweCAjZDI3ZDAwO1xyXG4gIHRyYW5zaXRpb246IDE1MG1zO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvKm1hcmdpbi1ib3R0b206IDEwcHg7Ki9cclxufVxyXG4uZGx0OmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICM0ZDU5OTg7XHJcbn1cclxuLmFkZHtcclxuICBtYXJnaW4tbGVmdDogODEuNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyZGQ3NztcclxufVxyXG4uYWRkOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICM1ZTk4NGQ7XHJcbn1cclxuLmVkaXR7XHJcbiAgYmFja2dyb3VuZDogI2ZmNTc1NztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5lZGl0OmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICNkYjRhNGE7XHJcbn1cclxuLmlucHV0e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4ubGVmdHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcbi5sdWx7XHJcbiAgbWFyZ2luLWxlZnQ6IDkyLjclO1xyXG59XHJcbnRleHRhcmVhe1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2FsaWJyaSBMaWdodFwiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG50ZXh0YXJlYTpmb2N1c3tcclxuICBvdXRsaW5lOiAjYjJlMGEyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiMmUwYTI7XHJcbiAgYm94LXNoYWRvdzogMCAwIDNweCAjYjJlMGEyO1xyXG59XHJcbi5saWx7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5kbHQye1xyXG4gIG1hcmdpbi1sZWZ0OiAwJTtcclxufVxyXG5cclxuXHJcbip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG59XHJcbi5jb250e1xyXG4gIHdpZHRoOiA5MyU7XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA0JSBhdXRvO1xyXG4gIHBhZGRpbmc6IDMwcHggMDtcclxuICBjb2xvcjogI0VFRTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuaHJ7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjEpO1xyXG59XHJcbmRpdi5zdGFyc3tcclxuICB3aWR0aDogMjcwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5pbnB1dC5zdGFye1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmxhYmVsLnN0YXIge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBjb2xvcjogIzQ0NDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG59XHJcblxyXG5pbnB1dC5zdGFyOmNoZWNrZWQgfiBsYWJlbC5zdGFyOmJlZm9yZSB7XHJcbiAgY29udGVudDonXFxmMDA1JztcclxuICBjb2xvcjogI0ZENDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjI1cztcclxufVxyXG5cclxuaW5wdXQuc3Rhci01OmNoZWNrZWQgfiBsYWJlbC5zdGFyOmJlZm9yZSB7XHJcbiAgY29sb3I6I0ZFNztcclxuICB0ZXh0LXNoYWRvdzogMCAwIDIwcHggIzk1MjtcclxufVxyXG5cclxuaW5wdXQuc3Rhci0xOmNoZWNrZWQgfiBsYWJlbC5zdGFyOmJlZm9yZSB7XHJcbiAgY29sb3I6ICNGNjI7XHJcbn1cclxuXHJcbmxhYmVsLnN0YXI6aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKSBzY2FsZSgxLjMpO1xyXG59XHJcblxyXG5sYWJlbC5zdGFyOmJlZm9yZXtcclxuICBjb250ZW50OidcXGYwMDYnO1xyXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxufVxyXG5cclxuLnJldi1ib3h7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4yNXM7XHJcbn1cclxubGFiZWwucmV2aWV3e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246b3BhY2l0eSAuMjVzO1xyXG59XHJcbmlucHV0LnN0YXI6Y2hlY2tlZCB+IC5yZXYtYm94e1xyXG4gIGhlaWdodDogMTI1cHg7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbiJdfQ== */"] });


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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog/catalog.component */ "EcwE");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "vR3N");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'catalog', component: _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_3__["CatalogComponent"] },
    { path: 'catalog/:id', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _fake_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fake-db */ "PSRy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _catalog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../catalog.service */ "8ZFQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function LoginComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_0_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.loginn = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_form_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_form_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.register(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_form_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.loginn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.password);
} }
function LoginComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.loginn = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_1_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_form_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.register(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_form_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.registerClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.loginn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.password);
} }
class LoginComponent {
    constructor(location, catalogService) {
        this.location = location;
        this.catalogService = catalogService;
        this.loginn = '';
        this.password = '';
        this.isRegistering = false;
        this.isTaken = false;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    login() {
        this.catalogService.login(this.loginn, this.password).subscribe((data) => {
            _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"].isLogged = true;
            this.location.back();
            localStorage.setItem('token', data.token);
            localStorage.setItem('userName', this.loginn);
            this.loginn = '';
            this.password = '';
        });
        // for (const user of Users){
        //   if (user.name === this.loginn && this.password === user.password){
        //     this.location.back();
        //     AppComponent.isLogged = true;
        //     user.status = true;
        //   }
        // }
    }
    register() {
        this.isRegistering = !this.isRegistering;
    }
    registerClicked() {
        for (const user of _fake_db__WEBPACK_IMPORTED_MODULE_1__["Users"]) {
            if (user.name === this.loginn) {
                window.alert('User name already taken');
                this.isTaken = true;
                this.loginn = '';
                this.password = '';
            }
        }
        if (!this.isTaken) {
            _fake_db__WEBPACK_IMPORTED_MODULE_1__["Users"].push({ id: _fake_db__WEBPACK_IMPORTED_MODULE_1__["Users"].length, name: this.loginn, password: this.password, status: false });
            this.isRegistering = false;
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_catalog_service__WEBPACK_IMPORTED_MODULE_4__["CatalogService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 2, consts: [["class", "formoch", 4, "ngIf"], [1, "formoch"], ["src", "assets/img/login.jpg"], ["type", "text", "name", "login", "placeholder", "User name", "autofocus", "1", 1, "input", "email", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "pass", "placeholder", "Password", 1, "input", "pass", 3, "ngModel", "ngModelChange"], [1, "back", "back3", 3, "click"], [1, "live"], [1, "login", "login2", 3, "click"], [1, "login", 3, "click"], ["src", "assets/img/register.jpg"], ["type", "text", "name", "login", "placeholder", "Enter your user name", "autofocus", "1", 1, "input", "email", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "pass", "placeholder", "Enter your password", 1, "input", "pass", 3, "ngModel", "ngModelChange"], [1, "back", "back3", "back4", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, LoginComponent_form_0_Template, 14, 2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_form_1_Template, 11, 2, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isRegistering);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isRegistering);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".input[_ngcontent-%COMP%]{\r\n  padding: 14px 16px;\r\n  width: 330px;\r\n  font-size: 17px;\r\n  border-radius: 7px;\r\n  margin-bottom: 10px;\r\n  border: 1px solid #eaeaeb;\r\n  font-weight:100;\r\n\r\n}\r\n.input[_ngcontent-%COMP%]::-moz-placeholder{\r\n  color: #90949c;\r\n}\r\n.input[_ngcontent-%COMP%]::placeholder{\r\n  color: #90949c;\r\n}\r\n.input[_ngcontent-%COMP%]:focus {\r\n  outline: #b2e0a2;\r\n  border: 1px solid #b2e0a2;\r\n  box-shadow: 0 0 3px #b2e0a2;\r\n}\r\n.input[_ngcontent-%COMP%]:focus::-moz-placeholder {\r\n  color: #bec3c9;\r\n\r\n}\r\n.input[_ngcontent-%COMP%]:focus::placeholder {\r\n  color: #bec3c9;\r\n\r\n}\r\n.formoch[_ngcontent-%COMP%]{\r\n  background-color: #fff;\r\n  margin-left: 40%;\r\n  margin-top: 15%;\r\n  display: inline-block;\r\n  padding: 15px;\r\n  padding-bottom: 25px;\r\n  border-radius: 7px;\r\n  box-shadow: 0 0 10px #dddddd;\r\n}\r\n.formoch[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n  margin-bottom: 20px;\r\n}\r\n.back[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n  background-color: white;\r\n  border: #509fff 1px solid;\r\n  border-radius: 7px;\r\n  margin-left: 20%;\r\n  cursor: pointer;\r\n}\r\n.login[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n  background-color: white;\r\n  border: #83dc66 1px solid;\r\n  border-radius: 7px;\r\n  cursor: pointer;\r\n}\r\n.live[_ngcontent-%COMP%]{\r\n  display: inline;\r\n  border-left: #262626 1px solid;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n.back2[_ngcontent-%COMP%]{\r\n  margin-left: 30%;\r\n}\r\n.back3[_ngcontent-%COMP%]{\r\n\r\n  border: #ff5050 1px solid;\r\n}\r\n.login2[_ngcontent-%COMP%]{\r\n  border: #509fff 1px solid;\r\n}\r\n.back4[_ngcontent-%COMP%]{\r\n  margin-left: 30%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZUFBZTs7QUFFakI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFGQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxjQUFjOztBQUVoQjtBQUhBO0VBQ0UsY0FBYzs7QUFFaEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaW5wdXR7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHdpZHRoOiAzMzBweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYjtcclxuICBmb250LXdlaWdodDoxMDA7XHJcblxyXG59XHJcbi5pbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbiAgY29sb3I6ICM5MDk0OWM7XHJcbn1cclxuLmlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiAjYjJlMGEyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiMmUwYTI7XHJcbiAgYm94LXNoYWRvdzogMCAwIDNweCAjYjJlMGEyO1xyXG59XHJcbi5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYmVjM2M5O1xyXG5cclxufVxyXG4uZm9ybW9jaHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjZGRkZGRkO1xyXG59XHJcbi5mb3Jtb2NoPmltZ3tcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5iYWNre1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAjNTA5ZmZmIDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmxvZ2lue1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAjODNkYzY2IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5saXZle1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBib3JkZXItbGVmdDogIzI2MjYyNiAxcHggc29saWQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5iYWNrMntcclxuICBtYXJnaW4tbGVmdDogMzAlO1xyXG59XHJcbi5iYWNrM3tcclxuXHJcbiAgYm9yZGVyOiAjZmY1MDUwIDFweCBzb2xpZDtcclxufVxyXG4ubG9naW4ye1xyXG4gIGJvcmRlcjogIzUwOWZmZiAxcHggc29saWQ7XHJcbn1cclxuLmJhY2s0e1xyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbn1cclxuXHJcbiJdfQ== */"] });


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
//# sourceMappingURL=main-es2015.js.map