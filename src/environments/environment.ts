// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: '1.0.0',
  parents: 'http://localhost:8090/covman/parents',
  students: 'http://localhost:8090/covman/students',
  users: 'http://localhost:8090/covman/users',
  teachers: 'http://localhost:8090/covman/employees/teachers',
  questions: 'http://localhost:8090/covman/symptoms/questions',
  checkIn: 'http://localhost:8090/covman/symptoms/checkIn',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
