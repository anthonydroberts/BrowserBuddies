(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-tab-button/add-tab-button.component.css":
/*!*************************************************************!*\
  !*** ./src/app/add-tab-button/add-tab-button.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  height: 40px;\n  width: 100%;\n  outline: none;\n  background-color: inherit;\n  float: left;\n  border: 2px solid #ccc;\n  border-bottom:none;\n  padding: 14px 16px;\n  font-size: 17px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvYWRkLXRhYi1idXR0b24vYWRkLXRhYi1idXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQiIsImZpbGUiOiIuLi9zcmMvYXBwL2FkZC10YWItYnV0dG9uL2FkZC10YWItYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgYm9yZGVyLWJvdHRvbTpub25lO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-tab-button/add-tab-button.component.html":
/*!**************************************************************!*\
  !*** ./src/app/add-tab-button/add-tab-button.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"onClickMe()\">\n  add-tab-button works!\n</button>\n"

/***/ }),

/***/ "./src/app/add-tab-button/add-tab-button.component.ts":
/*!************************************************************!*\
  !*** ./src/app/add-tab-button/add-tab-button.component.ts ***!
  \************************************************************/
/*! exports provided: AddTabButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTabButtonComponent", function() { return AddTabButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tabs.service */ "./src/app/tabs.service.ts");

///<reference path="../../../node_modules/@types/chrome/index.d.ts" />


//import {chrome} from '@types/chrome';
var AddTabButtonComponent = /** @class */ (function () {
    function AddTabButtonComponent(tabsService) {
        var _this = this;
        this.tabsService = tabsService;
        //public url:string;
        this.onTabAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClickMe = function () {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                //  alert(JSON.stringify(tabs[0]))
                _this.tabsService.test(); //tabsSerivce
                //  tabs[0];
                alert(JSON.stringify(tabs[0]));
                alert("title: " + tabs[0]["title"]);
                var t = {
                    "title": tabs[0]["title"],
                    "url": tabs[0]["url"]
                };
                alert(JSON.stringify(t));
                _this.tabsService.addTab(t).subscribe();
                _this.onTabAdded.emit(t);
                /*$.ajax({method:"POST",
                          url: SERVER_URL + SINGLE_TAB_ADD_PATH,
                          data:tabs[0],
                          success:function(response){
                              //alert("post worked");
                              //alert(JSON.stringify(tabs));//[obj obj]
                          }
                  });*/
            });
        };
    }
    AddTabButtonComponent.prototype.addTab = function () {
    };
    AddTabButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-tab-button',
            template: __webpack_require__(/*! ./add-tab-button.component.html */ "./src/app/add-tab-button/add-tab-button.component.html"),
            outputs: ['onTabAdded'],
            styles: [__webpack_require__(/*! ./add-tab-button.component.css */ "./src/app/add-tab-button/add-tab-button.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_service__WEBPACK_IMPORTED_MODULE_2__["TabsService"]])
    ], AddTabButtonComponent);
    return AddTabButtonComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  height: 30px;\n  width: 30px;\n  outline: none;\n}\n.delTabButton{\n  background-color: inherit;\n  float: left;\n  border-radius:50px;\n  margin-right:10px;\n}\n#addTabOpt {\n  height: 40px;\n  width: 100%;\n  outline: none;\n  background-color: inherit;\n  float: left;\n  border: 2px solid #ccc;\n  border-bottom:none;\n  padding: 14px 16px;\n  font-size: 17px;\n}\n#addBmarkOpt {\n  height: 40px;\n  width: 100%;\n  outline: none;\n  background-color: inherit;\n  float: left;\n  border: 2px solid #ccc;\n\n  padding: 14px 16px;\n  font-size: 17px;\n  margin-bottom:4px;\n}\n#addBmarkOpt:hover {\n  background-color: #ddd;\n}\n#addTabOpt:hover {\n  background-color: #ddd;\n}\n#addTabOptDiv{\n  width:300px;\n}\n#addBmarkOptDiv{\n  width:300px;\n}\n#tab-list{\n  list-style-type:none;\n  margin-right:6%;\n  padding-left:0;\n}\n#tab-list a {\n  text-decoration: none;\n  display: inline-block;\n  padding-bottom:10px;\n  text-decoration:none;\n}\n#bmarklist{\n  list-style-type:none;\n  margin-right:6%;\n  padding-left:0;\n}\n#bmarklist a {\n  text-decoration: none;\n  display: inline-block;\n  padding-bottom:10px;\n  text-decoration:none;\n}\n.tab {\n  overflow: hidden;\n  border: 1px solid #ccc;\n  background-color: #f1f1f1;\n}\n.tab button {\n  background-color: inherit;\n  float: left;\n  border: 1px solid #ccc;\n  padding: 14px 16px;\n  font-size: 17px;\n}\n.tab button:hover {\n  background-color: #ddd;\n}\n.tab button.active {\n  background-color: white;\n}\n.tablinks{\n  width:50%;\n  height:40px;\n}\n.tabcontent {\n  display: none;\n  padding: 6px 6px;\n  border: 2px solid #ccc;\n  border-top: none;\n  border-bottom:none\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsc0JBQXNCOztFQUV0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0FBQ2I7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQjtBQUNGIiwiZmlsZSI6Ii4uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmRlbFRhYkJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6NTBweDtcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XG59XG4jYWRkVGFiT3B0IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1ib3R0b206bm9uZTtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbiNhZGRCbWFya09wdCB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tYm90dG9tOjRweDtcbn1cbiNhZGRCbWFya09wdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG4jYWRkVGFiT3B0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cbiNhZGRUYWJPcHREaXZ7XG4gIHdpZHRoOjMwMHB4O1xufVxuI2FkZEJtYXJrT3B0RGl2e1xuICB3aWR0aDozMDBweDtcbn1cbiN0YWItbGlzdHtcbiAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG4gIG1hcmdpbi1yaWdodDo2JTtcbiAgcGFkZGluZy1sZWZ0OjA7XG59XG4jdGFiLWxpc3QgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbToxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cblxuI2JtYXJrbGlzdHtcbiAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG4gIG1hcmdpbi1yaWdodDo2JTtcbiAgcGFkZGluZy1sZWZ0OjA7XG59XG4jYm1hcmtsaXN0IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1ib3R0b206MTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG59XG5cbi50YWIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuLnRhYiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG4udGFiIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi50YWIgYnV0dG9uLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnRhYmxpbmtze1xuICB3aWR0aDo1MCU7XG4gIGhlaWdodDo0MHB4O1xufVxuXG4udGFiY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDZweCA2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206bm9uZVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div align=\"center\" style = \"width:100%\"> <h1 >Browser Buddies</h1></div>\n\n<div align=\"center\" style = \"width:100%\">\n\n<div class=\"tab\">\n  <button class=\"tablinks active\" id=\"tab1\" (click)=\"getTabs()\">Tab</button>\n  <button class=\"tablinks\" id=\"tab2\">Bookmarks</button>\n</div>\n<p>{{tabs[0].title}}</p>\n<div id=\"tabTab\" class=\"tabcontent\" style=\"display:block\" >\n  <div id=\"tabList\" style =\"max-height:200px;overflow-y:scroll\">\n    <ul id=\"tab-list\" style=\"list-style-type:none;\">\n      <li *ngFor=\"let t of tabs\">\n          <a href='{{t.url}}' target='_blank'>{{t.title}}</a>\n        </li>\n    </ul>\n  </div>\n</div>\n\n<div id=\"bmarkTab\" class=\"tabcontent\"  >\n  <div id=\"bmarkList\" style =\"max-height:200px;overflow-y:scroll\">\n    <ul id=\"bmarklist\" style=\"list-style-type:none;\">\n\n    </ul>\n  </div>\n</div>\n\n\n<div id=\"addTabOptDiv\" >\n  <add-tab-button (onTabAdded)=\"addTab($event)\">+ Remember Tab</add-tab-button>\n</div>\n<div id=\"addBmarkOptDiv\" >\n  <button id=\"addBmarkOpt\">+ Share Bookmarks</button>\n</div>\n\n</div>\n<p>cuHacking 2019</p>\n\n\n\n\n<script src=\"jquery-3.3.1.min.js\"></script>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.service */ "./src/app/tabs.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(tabsService) {
        this.tabsService = tabsService;
        this.title = 'BrowserBuddies';
        this.tabsRaw = [];
        this.tabs = [];
        this.getTabs();
        alert("hionce");
    }
    AppComponent.prototype.ngOnInit = function () {
        //
    };
    AppComponent.prototype.getTabs = function () {
        var _this = this;
        this.tabsService.getTabs().subscribe(function (res) {
            //  this.tabs=[];
            //  alert(res)
            _this.tabs = [];
            _this.tabsRaw = res;
            //  alert(this.tabs);
            for (var i = 0; i < _this.tabsRaw.length; i++) {
                _this.tabs.push({ "title": JSON.parse(_this.tabsRaw[i]).title,
                    "url": JSON.parse(_this.tabsRaw[i]).url });
            }
            //alert((this.tabs[1])["url"]);
        });
    };
    AppComponent.prototype.addTab = function (event) {
        alert(JSON.stringify(event));
        alert(event.title);
        this.tabs.push({ "title": "a", "url": "c" });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
        /*
        var SERVER_URL = "http://cuhacking-2019-browserbuddies.appspot.com";
        var SINGLE_TAB_ADD_PATH = "/addtabs";
        var TAB_LIST_PATH = "/tablist";
        
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_service__WEBPACK_IMPORTED_MODULE_2__["TabsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _tabs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.service */ "./src/app/tabs.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_tab_button_add_tab_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-tab-button/add-tab-button.component */ "./src/app/add-tab-button/add-tab-button.component.ts");
/* harmony import */ var _tab_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab.directive */ "./src/app/tab.directive.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _add_tab_button_add_tab_button_component__WEBPACK_IMPORTED_MODULE_7__["AddTabButtonComponent"],
                _tab_directive__WEBPACK_IMPORTED_MODULE_8__["TabDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_tabs_service__WEBPACK_IMPORTED_MODULE_5__["TabsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/tab.directive.ts":
/*!**********************************!*\
  !*** ./src/app/tab.directive.ts ***!
  \**********************************/
/*! exports provided: TabDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDirective", function() { return TabDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabDirective = /** @class */ (function () {
    function TabDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    TabDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[tab-host]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], TabDirective);
    return TabDirective;
}());



/***/ }),

/***/ "./src/app/tabs.service.ts":
/*!*********************************!*\
  !*** ./src/app/tabs.service.ts ***!
  \*********************************/
/*! exports provided: TabsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsService", function() { return TabsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var TabsService = /** @class */ (function () {
    function TabsService(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = 'https://cors-anywhere.herokuapp.com/http://cuhacking-2019-browserbuddies.appspot.com/';
    }
    TabsService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            alert(JSON.stringify(error)); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    TabsService.prototype.test = function () {
        alert("test");
    };
    TabsService.prototype.getTabs = function () {
        //  return
        //alert("getTabs clicked: "+JSON.stringify(this.httpClient.get<Tab[]>('${this.apiURL}/tablist')))
        //return this.httpClient.get
        return this.httpClient.get(this.apiURL + "/tablist")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTabs', [])));
    };
    TabsService.prototype.addTab = function (t) {
        alert("addTab");
        return this.httpClient.post("http://cuhacking-2019-browserbuddies.appspot.com" + "/addtabs", t);
    };
    TabsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TabsService);
    return TabsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mayasaringan/Documents/BrowserBuddies/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map