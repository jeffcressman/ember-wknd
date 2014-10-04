import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import { setCsrfUrl } from 'rails-csrf';
import ENV from 'ember-wknd/config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'ember-wknd', // TODO: loaded via config
  Resolver: Resolver,
 	ready: function() { // for devTools
    this.devTools.globalize();
  }
});

loadInitializers(App, 'rails-csrf');
loadInitializers(App, 'ember-wknd');

setCsrfUrl(ENV.APP.CSRF_URL);

// TODO: only expose this in the development environment
// Add App to Global scope so we can access it from the browser console
if (ENV.environment === "development") {
	window.App = App;
}

export default App;
