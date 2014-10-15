/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

// we need the importBootstarpJS to be able to use the javascript for modals
var app = new EmberApp({
  'ember-cli-bootstrap': {
    'importBootstrapJS': true
  },
	vendorFiles: {
		'handlebars.js': {
			production:  'bower_components/handlebars/handlebars.js'
		}
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

// Ok, so the vendorFiles fix works the same as the last fix
app.import('bower_components/rails-csrf/dist/named-amd/main.js', {
  exports: {
    'rails-csrf': [
      'setCsrfUrl'
    ]
  }
});

module.exports = app.toTree();
