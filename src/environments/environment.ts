// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDCjmzJqZf8AwBJC981iegs1x7HXFyEiN0",
    authDomain: "netshow-me-cms.firebaseapp.com",
    databaseURL: "https://netshow-me-cms.firebaseio.com",
    projectId: "netshow-me-cms",
    storageBucket: "netshow-me-cms.appspot.com",
    messagingSenderId: "229685072311"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
