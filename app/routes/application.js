import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('fields', {});
  }
});

import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin);