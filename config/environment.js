/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
		railsCsrf: {
			csrfURL: 'http://localhost:3000/api/csrf'
		},
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      SERVER_URL: 'http://localhost:3000'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true; // this helps us see where hooks are being called
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV.baseURL = '/'; // Testem prefers this...
  }

  if (environment === 'production') {
		ENV.APP.SERVER_URL = 'http://ember-wknd-server.heroku.com';
		ENV.railsCsrf = {csrfURL: 'http://ember-wknd-server.heroku.com//api/csrf'};
  }

  return ENV;
};
