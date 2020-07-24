(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./src/app/common/services/toast.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/common/services/toast.service.ts ***!
      \**************************************************/

    /*! exports provided: ToastService */

    /***/
    function srcAppCommonServicesToastServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! primeng/api */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
      /**
       * Toast service class
       * This class provides methods to add single, multiple alerts as a toast
       */


      var ToastService = /*#__PURE__*/function () {
        function ToastService(messageService) {
          _classCallCheck(this, ToastService);

          this.messageService = messageService;
        }
        /**
         * add single toast message
         * @param severity Severity level of the message, valid values are "success", "info", "warn" and "error"
         * @param summary Summary text of the message.
         * @param detail Detail text of the message.
         */


        _createClass(ToastService, [{
          key: "addSingle",
          value: function addSingle(severity, summary, detail) {
            this.messageService.add({
              severity: severity,
              summary: summary,
              detail: detail
            });
          }
          /**
           * add multiple toast messages
           * @param messages
           * array of message type {severity:'success', summary:'Service Message', detail:'Via MessageService'}
           */

        }, {
          key: "addMultiple",
          value: function addMultiple(messages) {
            this.messageService.addAll(messages);
          }
          /**
           * clear all toast messages
           */

        }, {
          key: "clear",
          value: function clear() {
            this.messageService.clear();
          }
        }]);

        return ToastService;
      }();

      ToastService.ɵfac = function ToastService_Factory(t) {
        return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]));
      };

      ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ToastService,
        factory: ToastService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/common/services/user-data.service.ts":
    /*!******************************************************!*\
      !*** ./src/app/common/services/user-data.service.ts ***!
      \******************************************************/

    /*! exports provided: UserDataService */

    /***/
    function srcAppCommonServicesUserDataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDataService", function () {
        return UserDataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var UserDataService = /*#__PURE__*/function () {
        function UserDataService(httpClient) {
          _classCallCheck(this, UserDataService);

          this.httpClient = httpClient;
          this.corsHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
          });
        }
        /**
         * Add a new parent user from UI
         * @param parent
         */


        _createClass(UserDataService, [{
          key: "addParent",
          value: function addParent(parent) {
            return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].parents, parent, {
              headers: this.corsHeaders
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
          /**
           * Get user from the backend
           *
           * @param email
           * @param password
           */

        }, {
          key: "getUser",
          value: function getUser(email, password) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].users + "/" + email + "/" + password;
            return this.httpClient.get(url, {
              headers: this.corsHeaders
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
          /**
           *
           * @param error Handle error from backend
           */

        }, {
          key: "handleError",
          value: function handleError(error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }
        }]);

        return UserDataService;
      }();

      UserDataService.ɵfac = function UserDataService_Factory(t) {
        return new (t || UserDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      UserDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserDataService,
        factory: UserDataService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map