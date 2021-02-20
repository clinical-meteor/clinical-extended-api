Package.describe({
  summary: "Extended API for Session and Collection.",
  version: "2.5.1",
  name: "clinical:extended-api",
  git: "https://github.com/clinical-meteor/clinical-extended-api"
});

Package.on_use(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor@1.9.3');
  api.use('webapp@1.10.0');
  api.use('ddp@1.4.0');
  api.use('livedata@1.0.18');
  api.use('es5-shim@4.8.0');
  api.use('ecmascript@0.15.0');

  // Session can work with or without reload, but if reload is present
  // it should load first so we can detect it at startup and populate
  // the session.
  api.use('reload@1.1.3', 'client', {weak: true});

  api.use('random');
  api.use('mongo@1.6.2');
  api.use('session@1.1.7');
  api.use('underscore@1.0.10');
  api.use('reactive-dict@1.1.8');
  api.use('ejson@1.0.13');

  //client
  api.addFiles('client/meteor-extended-api.js', 'client');
  api.addFiles('client/session-extended-api.js', 'client');
  api.addFiles('client/random-extended-api.js', ['server', 'client']);

  //both
  api.addFiles('lib/Style.js');

  //server
  api.addFiles('server/collection-extended-api.js', 'server');

  //exports
  api.export('Random', ['client', 'server']);
  api.export('Session', 'client');
  api.export('Meteor', 'client');
  api.export('Collection');
  api.export('Style');

});
