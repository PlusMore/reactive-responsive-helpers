// package metadata file for Meteor.js
'use strict';

var packageName = 'plusmore:reactive-responsive-helpers';  // https://atmospherejs.com/patrickleet/enquire

Package.describe({
  name: packageName,
  summary: "Reactive responsive helpers.",
  version: "1.0.0",
  git: 'https://github.com/patrickleet/enquire.js.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.use('standard-app-packages');
  api.use('patrickleet:enquire@2.2.0_1');
  api.imply('templating');
  api.export('ResponsiveHelpers')
  api.addFiles([
    'src/deviceSize.js',
    'src/enquire.js',
    'src/responsiveHelpers.html',
    'src/responsiveHelpers.js'
  ], ['client']);
});

Package.onTest(function (api) {
  api.use(packageName);
  api.use('tinytest');

  api.addFiles('meteor/test.js');
});