/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'open-ethereum-pool',
    environment: environment,
    rootURL: '/',
    poolTitle:'PIRL mining pool',
    coinTicker:'PIRL',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // API host and port
      ApiUrl: '//pirl.cryptopool.in/',

      // HTTP mining endpoint
      HttpHost: 'http://pirl.cryptopool.in',
      HttpPort2b: 3336,
      HttpPort4b: 3337,
      HttpPort8b: 3338,

      // Stratum mining endpoint
      StratumHost: 'pirl.cryptopool.in',
      StratumPort2b: 9005,      
      StratumPort4b: 9006,     
      StratumPort8b: 9007,

      // Fee and payout details
      PoolFee: '0%',
      PayoutThreshold: '2 PIRL',

      // For network hashrate (change for your favourite fork)
      BlockTime: 8
    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = 'http://localhost:8080/'
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
