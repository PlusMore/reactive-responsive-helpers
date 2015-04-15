// package metadata file for Meteor.js
'use strict';

var packageName = 'plusmore:reactive-responsive-helpers';  // https://atmospherejs.com/patrickleet/enquire

Package.describe({
  name: packageName,
  summary: "Reactive responsive helpers.",
  version: "1.1.0",
  git: 'https://github.com/PlusMore/reactive-responsive-helpers.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.use('patrickleet:enquire@2.2.0_1');
  api.use('templating');
  api.export('ResponsiveHelpers')
  api.addFiles([
    'src/deviceSize.js',
    'src/enquire.js',
    'src/responsiveHelpers.html',
    'src/responsiveHelpers.js'
  ], ['client']);
});
