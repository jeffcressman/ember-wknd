/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

// we need the importBootstarpJS to be able to use the javascript for modals
var app = new EmberApp({
  'ember-cli-bootstrap': {
    'importBootstrapJS': true
  }
});

// Not working
// app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-core.min.js');
// app.import('vendor/bootstrap/dist/js/bootstrap.js');

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// FIX: temporary while there are issue with Ember CLI loading handlebars
// https://github.com/stefanpenner/ember-cli/pull/675#issuecomment-47431195
// http://stackoverflow.com/questions/25018160/ember-cli-fails-on-environment-production-uncaught-error-could-not-find-modu
function replaceHandlebarsRuntime(app) {
  var index = app.legacyFilesToAppend.indexOf('bower_components/handlebars/handlebars.runtime.js');
  if(index) {
    app.legacyFilesToAppend[index] = 'bower_components/handlebars/handlebars.js';
  }
}
replaceHandlebarsRuntime(app); 

app.import('bower_components/ember-forms/dist/globals/main.js');
app.import('bower_components/rails-csrf/dist/named-amd/main.js', {
  exports: {
    'rails-csrf': [
      'setCsrfUrl'
    ]
  }
});

module.exports = app.toTree();
