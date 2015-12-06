Package.describe({
  summary: "Extended API for Session and Collection.",
  version: "2.1.2",
  name: "clinical:extended-api",
  git: "https://github.com/clinical-meteor/clinical-extended-api"
});

Package.on_use(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform@1.1.6');

  // Session can work with or without reload, but if reload is present
  // it should load first so we can detect it at startup and populate
  // the session.
  api.use('reload@1.1.3', 'client', {weak: true});

  api.use('session@1.1.0', 'client');
  api.use('underscore@1.0.3', 'client');
  api.use('reactive-dict@1.1.0', 'client');
  api.use('ejson@1.0.6', 'client');

  //client
  api.addFiles('client/session-extended-api.js', 'client');

  //both
  api.addFiles('lib/Style.js');

  //server
  api.addFiles('server/collection-extended-api.js', 'server');

  //exports
  api.export('Session', 'client');
  api.export('Collection');
  api.export('Style');

});



Package.on_test(function (api) {
  api.use('tinytest');
  //api.use(['session', 'underscore', 'reactive-dict', 'ejson'], 'client');

  api.use('meteor-platform');

  api.use('session', 'client');
  api.use('deps');
  api.use('mongo');
  api.use('mongo-livedata');
  api.use('clinical:extended-api');
  api.use('clinical:verification');

  api.addFiles('tests/session-extended-api-tests.js', 'client');
  api.addFiles('tests/collection-extended-api-tests.js');
});
