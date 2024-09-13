Package.describe({
  summary: "Extended API for Session and Collection.",
  version: "3.0.0",
  name: "clinical:extended-api",
  git: "https://github.com/clinical-meteor/clinical-extended-api"
});

Package.onUse(function (api) {
  api.versionsFrom('3.0');

  // clinical:base
  api.use('meteor@2.0.1');
  api.use('webapp@2.0.1');
  api.use('ddp@1.4.2');
  api.use('ecmascript@0.16.9');

  api.use('random');
  api.use('mongo@2.0.1');
  api.use('session@1.2.2');
  api.use('underscore@1.6.4');
  api.use('reactive-dict@1.3.2');
  api.use('ejson@1.1.4');


  // Session can work with or without reload, but if reload is present
  // it should load first so we can detect it at startup and populate
  // the session.
  api.use('reload@1.3.2', 'client', {weak: true});



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
