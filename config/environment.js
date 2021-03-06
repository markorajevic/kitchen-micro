/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'kitchens-international',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    contentful: {
        space: 'l64p7w0iddgu',
        accessToken: 'ec93061cf82da42b1289840455de750940622c67f2e15fb14a6b068bdc413611',
        previewAccessToken: 'bcc1c9b0c02cb80406b63f0e657c511562e833aa2669d774db0570ee56450beb',
        usePreviewApi: false
    },
    disqus: {
        shortname: 'kitchens-international'
    },
    showdown: {
        simplifiedAutoLink: true,
        tables: true,
        simpleLineBreaks: true
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
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentful.usePreviewApi = true;
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
      ENV.googleAnalytics = {
        webPropertyId: 'UA-8205907-1'
      };
  }

  return ENV;
};
