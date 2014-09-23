import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import { setCsrfUrl } from 'rails-csrf';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'ember-wknd', // TODO: loaded via config
  Resolver: Resolver
});

setCsrfUrl('http://localhost:3000/api/csrf');

loadInitializers(App, 'rails-csrf');
loadInitializers(App, 'ember-wknd');

export default App;
