(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-features-employees-employees-module"], {
    /***/
    "./src/app/features/employees/employee-data.service.ts":
    /*!*************************************************************!*\
      !*** ./src/app/features/employees/employee-data.service.ts ***!
      \*************************************************************/

    /*! exports provided: EmployeeDataService */

    /***/
    function srcAppFeaturesEmployeesEmployeeDataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeDataService", function () {
        return EmployeeDataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /**
       * employee service
       */


      var EmployeeDataService = /*#__PURE__*/function () {
        function EmployeeDataService() {
          _classCallCheck(this, EmployeeDataService);
        }

        _createClass(EmployeeDataService, [{
          key: "getEmployeeList",
          value: function getEmployeeList() {
            return [{
              Id: 1,
              Name: 'User',
              Department: '.net',
              DepartmentId: 1,
              Address: 'Place1, State',
              Age: 26
            }, {
              Id: 2,
              Name: 'User1',
              Department: '.net',
              DepartmentId: 1,
              Address: 'Place2, State',
              Age: 25
            }, {
              Id: 3,
              Name: 'User2',
              Department: 'PHP',
              DepartmentId: 4,
              Address: 'Place1, State',
              Age: 25
            }, {
              Id: 4,
              Name: 'User3',
              Department: '.net',
              DepartmentId: 1,
              Address: 'Place1, State',
              Age: 30
            }, {
              Id: 5,
              Name: 'User4',
              Department: 'HR',
              DepartmentId: 2,
              Address: 'Place3, State',
              Age: 25
            }, {
              Id: 6,
              Name: 'User5',
              Department: 'HR',
              DepartmentId: 2,
              Address: 'Place1, State',
              Age: 28
            }, {
              Id: 7,
              Name: 'User6',
              Department: 'Admin',
              DepartmentId: 3,
              Address: 'Place1, State',
              Age: 26
            }, {
              Id: 8,
              Name: 'User7',
              Department: '.net',
              DepartmentId: 1,
              Address: 'Place2, State',
              Age: 25
            }, {
              Id: 9,
              Name: 'User8',
              Department: '.net',
              DepartmentId: 1,
              Address: 'Place1, State',
              Age: 27
            }, {
              Id: 10,
              Name: 'User9',
              Department: 'Admin',
              DepartmentId: 3,
              Address: 'Place3, State',
              Age: 25
            }, {
              Id: 11,
              Name: 'User10',
              Department: '.net',
              DepartmentId: 1,
              Address: 'Place1, State',
              Age: 35
            }, {
              Id: 12,
              Name: 'User',
              Department: '.net',
              DepartmentId: 1,
              Address: 'Place1, State',
              Age: 26
            }, {
              Id: 13,
              Name: 'User1',
              Department: '.net',
              DepartmentId: 1,
              Address: 'Place2, State',
              Age: 25
            }, {
              Id: 14,
              Name: 'User2',
              Department: 'PHP',
              DepartmentId: 4,
              Address: 'Place1, State',
              Age: 25
            }, {
              Id: 15,
              Name: 'User3',
              Department: '.net',
              DepartmentId: 1,
              Address: 'Place1, State',
              Age: 30
            }, {
              Id: 16,
              Name: 'User4',
              Department: 'HR',
              DepartmentId: 2,
              Address: 'Place3, State',
              Age: 25
            }, {
              Id: 17,
              Name: 'User5',
              Department: 'HR',
              DepartmentId: 2,
              Address: 'Place1, State',
              Age: 28
            }, {
              Id: 18,
              Name: 'User6',
              Department: 'Admin',
              DepartmentId: 3,
              Address: 'Place1, State',
              Age: 26
            }, {
              Id: 19,
              Name: 'User7',
              Department: '.net',
              DepartmentId: 1,
              Address: 'Place2, State',
              Age: 25
            }, {
              Id: 20,
              Name: 'User8',
              Department: '.net',
              DepartmentId: 1,
              Address: 'Place1, State',
              Age: 27
            }, {
              Id: 21,
              Name: 'User9',
              Department: 'Admin',
              DepartmentId: 3,
              Address: 'Place3, State',
              Age: 25
            }, {
              Id: 22,
              Name: 'User10',
              Department: '.net',
              DepartmentId: 1,
              Address: 'Place1, State',
              Age: 35
            }, {
              Id: 23,
              Name: 'User',
              Department: '.net',
              DepartmentId: 1,
              Address: 'Place1, State',
              Age: 26
            }, {
              Id: 24,
              Name: 'User1',
              Department: '.net',
              DepartmentId: 1,
              Address: 'Place2, State',
              Age: 25
            }, {
              Id: 25,
              Name: 'User2',
              Department: 'PHP',
              DepartmentId: 4,
              Address: 'Place1, State',
              Age: 25
            }, {
              Id: 26,
              Name: 'User3',
              Department: '.net',
              DepartmentId: 1,
              Address: 'Place1, State',
              Age: 30
            }, {
              Id: 27,
              Name: 'User4',
              Department: 'HR',
              DepartmentId: 2,
              Address: 'Place3, State',
              Age: 25
            }, {
              Id: 28,
              Name: 'User5',
              Department: 'HR',
              DepartmentId: 2,
              Address: 'Place1, State',
              Age: 28
            }, {
              Id: 29,
              Name: 'User6',
              Department: 'Admin',
              DepartmentId: 3,
              Address: 'Place1, State',
              Age: 26
            }, {
              Id: 30,
              Name: 'User7',
              Department: '.net',
              DepartmentId: 1,
              Address: 'Place2, State',
              Age: 25
            }];
          }
        }]);

        return EmployeeDataService;
      }();

      EmployeeDataService.ɵfac = function EmployeeDataService_Factory(t) {
        return new (t || EmployeeDataService)();
      };

      EmployeeDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EmployeeDataService,
        factory: EmployeeDataService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeDataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/employees/employees.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/features/employees/employees.component.ts ***!
      \***********************************************************/

    /*! exports provided: EmployeesComponent */

    /***/
    function srcAppFeaturesEmployeesEmployeesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function () {
        return EmployeesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_features_employees_employee_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/features/employees/employee-data.service */
      "./src/app/features/employees/employee-data.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var primeng_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/panel */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/inputtext */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/table */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/api */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function EmployeesComponent_ng_template_8_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r17.header, " ");
        }
      }

      function EmployeesComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeesComponent_ng_template_8_th_1_Template, 2, 1, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.columns);
        }
      }

      function EmployeesComponent_ng_template_9_td_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var employee_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r18[col_r20.field]);
        }
      }

      function EmployeesComponent_ng_template_9_td_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeesComponent_ng_template_9_td_1_div_2_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var employee_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.goToDepartmentDetails(employee_r18.DepartmentId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var employee_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r18[col_r20.field]);
        }
      }

      function EmployeesComponent_ng_template_9_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeesComponent_ng_template_9_td_1_div_1_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeesComponent_ng_template_9_td_1_div_2_Template, 3, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r20.field != "Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r20.field == "Department");
        }
      }

      function EmployeesComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeesComponent_ng_template_9_td_1_Template, 3, 2, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.columns);
        }
      }

      var EmployeesComponent = /*#__PURE__*/function () {
        function EmployeesComponent(router, employeeService) {
          _classCallCheck(this, EmployeesComponent);

          this.router = router;
          this.employeeService = employeeService;
        }

        _createClass(EmployeesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pageSize = 10;
            this.columns = [{
              field: 'Name',
              header: 'Name'
            }, {
              field: 'Department',
              header: 'Department'
            }, {
              field: 'Address',
              header: 'Address'
            }, {
              field: 'Age',
              header: 'Age'
            }];
            this.employees = this.employeeService.getEmployeeList();
          }
        }, {
          key: "goToDepartmentDetails",
          value: function goToDepartmentDetails(department) {
            this.router.navigate(["/main/departments/department-detail/" + department]);
          }
        }]);

        return EmployeesComponent;
      }();

      EmployeesComponent.ɵfac = function EmployeesComponent_Factory(t) {
        return new (t || EmployeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_features_employees_employee_data_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeDataService"]));
      };

      EmployeesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmployeesComponent,
        selectors: [["app-employees"]],
        decls: 10,
        vars: 4,
        consts: [["header", "Employees List"], [1, "ui-g"], [1, "ui-g-10", "ui-sm-8"], [2, "float", "right"], [1, "ui-g-2", "ui-sm-4"], ["type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], [3, "value", "paginator", "rows"], ["pTemplate", "header"], ["pTemplate", "body"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "click"]],
        template: function EmployeesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-panel", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page Size:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeesComponent_Template_input_ngModelChange_6_listener($event) {
              return ctx.pageSize = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmployeesComponent_ng_template_8_Template, 2, 1, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmployeesComponent_ng_template_9_Template, 2, 1, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pageSize);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.employees)("paginator", true)("rows", ctx.pageSize);
          }
        },
        directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_3__["Panel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-employees',
            templateUrl: 'employees.component.html',
            styleUrls: ['employees.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_features_employees_employee_data_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeDataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/employees/employees.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/features/employees/employees.module.ts ***!
      \********************************************************/

    /*! exports provided: EmployeesModule */

    /***/
    function srcAppFeaturesEmployeesEmployeesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeesModule", function () {
        return EmployeesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var src_app_app_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/app.common.module */
      "./src/app/app.common.module.ts");
      /* harmony import */


      var src_app_features_employees_employees_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/features/employees/employees.routing */
      "./src/app/features/employees/employees.routing.ts");
      /* harmony import */


      var src_app_features_employees_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/features/employees/employees.component */
      "./src/app/features/employees/employees.component.ts");

      var EmployeesModule = function EmployeesModule() {
        _classCallCheck(this, EmployeesModule);
      };

      EmployeesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EmployeesModule
      });
      EmployeesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EmployeesModule_Factory(t) {
          return new (t || EmployeesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_features_employees_employees_routing__WEBPACK_IMPORTED_MODULE_3__["EmployeesRoutingModule"], src_app_app_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeesModule, {
          declarations: [src_app_features_employees_employees_component__WEBPACK_IMPORTED_MODULE_4__["EmployeesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_features_employees_employees_routing__WEBPACK_IMPORTED_MODULE_3__["EmployeesRoutingModule"], src_app_app_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_features_employees_employees_routing__WEBPACK_IMPORTED_MODULE_3__["EmployeesRoutingModule"], src_app_app_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"]],
            declarations: [src_app_features_employees_employees_component__WEBPACK_IMPORTED_MODULE_4__["EmployeesComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/employees/employees.routing.ts":
    /*!*********************************************************!*\
      !*** ./src/app/features/employees/employees.routing.ts ***!
      \*********************************************************/

    /*! exports provided: EmployeesRoutingModule */

    /***/
    function srcAppFeaturesEmployeesEmployeesRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeesRoutingModule", function () {
        return EmployeesRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_features_employees_employees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/features/employees/employees.component */
      "./src/app/features/employees/employees.component.ts");

      var routes = [{
        path: '',
        component: src_app_features_employees_employees_component__WEBPACK_IMPORTED_MODULE_2__["EmployeesComponent"]
      }];

      var EmployeesRoutingModule = function EmployeesRoutingModule() {
        _classCallCheck(this, EmployeesRoutingModule);
      };

      EmployeesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EmployeesRoutingModule
      });
      EmployeesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EmployeesRoutingModule_Factory(t) {
          return new (t || EmployeesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeesRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src-app-features-employees-employees-module-es5.js.map