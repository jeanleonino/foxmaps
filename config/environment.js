/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'foxmaps',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    firebase: {
      apiKey: 'AIzaSyA19PIVEG8Y1NfC9ypZx67pL9QdDl2tNXE',
      authDomain: 'foxmaps-95391.firebaseapp.com',
      databaseURL: 'https://foxmaps-95391.firebaseio.com',
      storageBucket: 'foxmaps-95391.appspot.com',
    }, 

    googleLeaflet: {
      apiKey: 'AIzaSyA19PIVEG8Y1NfC9ypZx67pL9QdDl2tNXE' // TODO
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
