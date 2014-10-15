import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import { setCsrfUrl } from 'rails-csrf';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
  ready: function() { // for devTools
    this.devTools.globalize();
  }
});

// debugger;

loadInitializers(App, config.modulePrefix);
loadInitializers(App, 'rails-csrf');

setCsrfUrl(config.APP.CSRF_URL);

// Add App to Global scope so we can access it from the browser console
// UPDATE: This might be handled differently now...

if (config.environment === "development") {
	window.App = App;
}

export default App;
