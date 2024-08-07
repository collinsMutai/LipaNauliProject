// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AUTHORIZATION: '4F5D3QC5-C94A-CFD5-87C1-4E2903311DF0',
  apiURL: '/api/globalApi/common/getCity',
  api: '/api/globalApi/trips/getTrips',
  bookingURL: '/api/globalApi/ticket/booking',
  stkPushURL: '/api/globalApi/paymentGateway/init',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
